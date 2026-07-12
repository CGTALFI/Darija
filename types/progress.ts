import type { CefrLevel } from "@/types/cefr";
import type { ModuleId } from "@/types/module";

export type LessonStatus = "not-started" | "in-progress" | "completed";

export interface LessonProgress {
  lessonId: string;
  status: LessonStatus;
  /** Score 0-100, pertinent pour les exercices/séries. */
  score?: number;
  lastVisitedAt: string;
}

export interface ModuleProgress {
  moduleId: ModuleId;
  lessonProgress: Record<string, LessonProgress>;
  /** Cache dénormalisé — recalculé par lib/progression/computeProgress.ts, jamais la source de vérité. */
  percentComplete: number;
}

export interface HistoryEntry {
  id: string;
  type: "lesson-completed" | "exercise-submitted" | "badge-earned" | "level-up";
  label: string;
  at: string;
}

export interface UserProgress {
  userId: string;
  modules: Record<ModuleId, ModuleProgress>;
  badges: string[];
  cefrLevelReached: CefrLevel;
  /** Cache dénormalisé — voir computeGlobalPercent. */
  globalPercentComplete: number;
  secretUnlocked: boolean;
  history: HistoryEntry[];
  updatedAt: string;
}
