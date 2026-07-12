import type { ModuleId } from "@/types/module";
import { phonetiqueLessons } from "@/content/phonetique";
import { grammaireLessons } from "@/content/grammaire";
import { dialogueLessons } from "@/content/dialogues";
import { exerciseSeries } from "@/content/exercices";

/**
 * Dénominateurs de progression par module — dérivés directement des index
 * de contenu, jamais codés en dur : ajouter une leçon au contenu fait
 * automatiquement bouger le pourcentage, sans toucher à ce fichier.
 *
 * chroniques/explorateurs/bibliotheque restent à 1 (repli anti-division-
 * par-zéro) tant que leur contenu n'est pas construit (étapes suivantes).
 */
export function getModuleLessonCounts(): Record<ModuleId, number> {
  const academieTotal =
    phonetiqueLessons.length + grammaireLessons.length + dialogueLessons.length + exerciseSeries.length;

  return {
    chroniques: 1,
    explorateurs: 1,
    academie: academieTotal || 1,
    bibliotheque: 1,
  };
}
