import type { ExerciseSeries } from "@/types/exercise";
import { serieAPhonetique } from "@/content/exercices/series/serie-a-phonetique";
import { serieBBases } from "@/content/exercices/series/serie-b-bases";
import { serieCDialogues } from "@/content/exercices/series/serie-c-dialogues";
import { serieDCulture } from "@/content/exercices/series/serie-d-culture";
import { defiSynthese } from "@/content/exercices/series/defi-synthese";

export const exerciseSeries: ExerciseSeries[] = [
  serieAPhonetique,
  serieBBases,
  serieCDialogues,
  serieDCulture,
  defiSynthese,
];
