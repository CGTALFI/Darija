"use client";

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import { useRepositories } from "@/lib/data-access/RepositoryProvider";
import { useAuth } from "@/lib/auth/AuthContext";
import type { UserProgress, LessonProgress, HistoryEntry } from "@/types/progress";
import type { ModuleId } from "@/types/module";
import { MODULE_IDS } from "@/types/module";
import type { CefrLevel } from "@/types/cefr";
import { computeModulePercent, computeGlobalPercent } from "@/lib/progression/computeProgress";
import { deriveSecretUnlocked } from "@/lib/progression/secretUnlock";
import { getModuleLessonCounts } from "@/lib/progression/moduleLessonCounts";

function createEmptyProgress(userId: string): UserProgress {
  const modules = {} as UserProgress["modules"];
  for (const id of MODULE_IDS) {
    modules[id] = { moduleId: id, lessonProgress: {}, percentComplete: 0 };
  }
  return {
    userId,
    modules,
    badges: [],
    cefrLevelReached: "A1",
    globalPercentComplete: 0,
    secretUnlocked: false,
    history: [],
    updatedAt: new Date().toISOString(),
  };
}

function withHistory(progress: UserProgress, entry: Omit<HistoryEntry, "id" | "at">): UserProgress {
  const historyEntry: HistoryEntry = {
    id: `${entry.type}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    at: new Date().toISOString(),
    ...entry,
  };
  // journal borné : les 200 dernières entrées suffisent pour l'historique du profil
  const history = [historyEntry, ...progress.history].slice(0, 200);
  return { ...progress, history };
}

interface ProgressState {
  progress: UserProgress | null;
  isLoading: boolean;
  markLessonStatus: (
    moduleId: ModuleId,
    lessonId: string,
    status: LessonProgress["status"],
    score?: number,
  ) => void;
  addBadge: (badge: string) => void;
  setCefrLevelReached: (level: CefrLevel) => void;
}

const ProgressContext = createContext<ProgressState | null>(null);

export function useProgress(): ProgressState {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    throw new Error("useProgress doit être utilisé sous ProgressProvider");
  }
  return ctx;
}

/** Sélecteur dédié : point d'entrée unique pour savoir si le secret du palais est déverrouillé. */
export function useSecretUnlock(): boolean {
  const { progress } = useProgress();
  return deriveSecretUnlocked(progress ?? undefined);
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { progress: progressRepository } = useRepositories();
  const { profile } = useAuth();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!profile) return;
    const existing = progressRepository.get(profile.id);
    const resolved = existing ?? createEmptyProgress(profile.id);
    if (!existing) progressRepository.save(resolved);
    setProgress(resolved);
    setIsLoading(false);
  }, [profile, progressRepository]);

  /** Recalcule les pourcentages (module + global) et le déverrouillage du secret, puis persiste. */
  const persist = useCallback(
    (next: UserProgress) => {
      const moduleTotals = getModuleLessonCounts();
      const modules = { ...next.modules };
      for (const id of MODULE_IDS) {
        modules[id] = {
          ...modules[id],
          percentComplete: computeModulePercent(modules[id], moduleTotals[id]),
        };
      }
      const globalPercentComplete = computeGlobalPercent({ ...next, modules }, moduleTotals);
      const withPercents: UserProgress = {
        ...next,
        modules,
        globalPercentComplete,
        updatedAt: new Date().toISOString(),
      };
      withPercents.secretUnlocked = deriveSecretUnlocked(withPercents);
      progressRepository.save(withPercents);
      setProgress(withPercents);
    },
    [progressRepository],
  );

  const markLessonStatus = useCallback(
    (moduleId: ModuleId, lessonId: string, status: LessonProgress["status"], score?: number) => {
      const base = progress ?? createEmptyProgress(profile?.id ?? "guest");
      const moduleProgress = base.modules[moduleId] ?? {
        moduleId,
        lessonProgress: {},
        percentComplete: 0,
      };
      const nextLessonProgress: LessonProgress = {
        lessonId,
        status,
        score,
        lastVisitedAt: new Date().toISOString(),
      };
      let next: UserProgress = {
        ...base,
        modules: {
          ...base.modules,
          [moduleId]: {
            ...moduleProgress,
            lessonProgress: { ...moduleProgress.lessonProgress, [lessonId]: nextLessonProgress },
          },
        },
      };
      if (status === "completed") {
        next = withHistory(next, { type: "lesson-completed", label: lessonId });
      }
      persist(next);
    },
    [progress, persist, profile],
  );

  const addBadge = useCallback(
    (badge: string) => {
      if (!progress || progress.badges.includes(badge)) return;
      const next = withHistory({ ...progress, badges: [...progress.badges, badge] }, {
        type: "badge-earned",
        label: badge,
      });
      persist(next);
    },
    [progress, persist],
  );

  const setCefrLevelReached = useCallback(
    (level: CefrLevel) => {
      if (!progress) return;
      const next = withHistory({ ...progress, cefrLevelReached: level }, {
        type: "level-up",
        label: level,
      });
      persist(next);
    },
    [progress, persist],
  );

  const value: ProgressState = { progress, isLoading, markLessonStatus, addBadge, setCefrLevelReached };

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}
