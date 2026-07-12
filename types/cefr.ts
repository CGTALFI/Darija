export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export const CEFR_LEVELS: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

/** Descripteur brut issu de content/cefr/cecr_scales.json — référence, jamais affiché tel quel. */
export interface CefrDescriptor {
  scaleId: string;
  title: string;
  level: CefrLevel;
  text: string;
}

export type CefrSkill =
  | "oral"
  | "ecrit"
  | "interaction"
  | "comprehension-orale"
  | "comprehension-ecrite";

/** Tag curaté à la main sur une leçon/série d'exercices — traçable vers un CefrDescriptor. */
export interface DarijaCefrTag {
  level: CefrLevel;
  skill: CefrSkill;
  vulgarized: string;
  sourceDescriptorIds?: string[];
}
