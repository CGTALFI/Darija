import type { DarijaCefrTag } from "@/types/cefr";

export interface Exercise {
  id: string;
  instruction: string;
  items: { prompt: string; answer: string }[];
}

export interface ExerciseSeries {
  id: string;
  moduleId: "academie";
  badgeLabel: string;
  cefrTags: DarijaCefrTag[];
  exercises: Exercise[];
}
