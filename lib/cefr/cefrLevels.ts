import type { CefrLevel } from "@/types/cefr";
import { CEFR_LEVELS } from "@/types/cefr";

export { CEFR_LEVELS };

/** Libellés vulgarisés pour l'UI — pas les descripteurs CECR bruts, qui parlent de langues en général. */
export const CEFR_LEVEL_LABELS: Record<CefrLevel, string> = {
  A1: "Découverte",
  A2: "Survie",
  B1: "Seuil",
  B2: "Avancé",
  C1: "Autonome",
  C2: "Maîtrise",
};

export function cefrLevelIndex(level: CefrLevel): number {
  return CEFR_LEVELS.indexOf(level);
}

export function isCefrLevelAtLeast(level: CefrLevel, threshold: CefrLevel): boolean {
  return cefrLevelIndex(level) >= cefrLevelIndex(threshold);
}
