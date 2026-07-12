import type { LessonProgress, ModuleProgress, UserProgress } from "@/types/progress";
import type { ModuleId } from "@/types/module";

/** Poids d'un statut de leçon dans le calcul du pourcentage — les exercices notés utilisent leur score directement. */
export function computeLessonPercent(progress: LessonProgress | undefined): number {
  if (!progress) return 0;
  if (typeof progress.score === "number") return progress.score;
  switch (progress.status) {
    case "completed":
      return 100;
    case "in-progress":
      return 50;
    default:
      return 0;
  }
}

/**
 * Le dénominateur (nombre de leçons du module) vient des métadonnées de
 * contenu, pas de la progression stockée — ajouter une leçon au contenu
 * fait donc automatiquement bouger le pourcentage, sans migration.
 */
export function computeModulePercent(moduleProgress: ModuleProgress | undefined, totalLessons: number): number {
  if (totalLessons === 0) return 0;
  if (!moduleProgress) return 0;
  const sum = Object.values(moduleProgress.lessonProgress).reduce(
    (acc, lp) => acc + computeLessonPercent(lp),
    0,
  );
  return Math.round(sum / totalLessons);
}

export function computeGlobalPercent(
  userProgress: UserProgress | undefined,
  moduleTotals: Record<ModuleId, number>,
): number {
  const moduleIds = Object.keys(moduleTotals) as ModuleId[];
  if (moduleIds.length === 0) return 0;
  const sum = moduleIds.reduce((acc, moduleId) => {
    const moduleProgress = userProgress?.modules[moduleId];
    return acc + computeModulePercent(moduleProgress, moduleTotals[moduleId]);
  }, 0);
  return Math.round(sum / moduleIds.length);
}
