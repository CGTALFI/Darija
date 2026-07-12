import type { ModuleMeta, ModuleId } from "@/types/module";

/**
 * Source de vérité unique pour les modules et leurs onglets. Consommée
 * par ModuleTabBar (rendu des onglets), les layouts de module (bannière)
 * et le hall (portes). Le premier onglet de chaque module a slug: "" —
 * c'est la page d'index du module, sans sous-chemin dans l'URL.
 */
export const MODULES: ModuleMeta[] = [
  {
    id: "chroniques",
    title: "Les Chroniques du Royaume",
    legacyName: "Introduction",
    tabs: [
      { slug: "", label: "Présentation", order: 0 },
      { slug: "geographie", label: "Géographie", order: 1 },
      { slug: "histoire", label: "Histoire", order: 2 },
      { slug: "langue", label: "Langue", order: 3 },
      { slug: "gastronomie", label: "Gastronomie", order: 4 },
      { slug: "bons-plans", label: "Bons plans", order: 5 },
    ],
  },
  {
    id: "explorateurs",
    title: "Salle des Explorateurs",
    legacyName: "Progression",
    tabs: [
      { slug: "", label: "Vue d'ensemble", order: 0 },
      { slug: "badges", label: "Badges", order: 1 },
      { slug: "objectifs-cecr", label: "Objectifs CECRL", order: 2 },
      { slug: "historique", label: "Historique", order: 3 },
      { slug: "parametres", label: "Paramètres", order: 4 },
    ],
  },
  {
    id: "academie",
    title: "L'Académie de la Darija",
    legacyName: "Cours",
    tabs: [
      { slug: "", label: "Parcours", order: 0 },
      { slug: "phonetique", label: "Phonétique", order: 1 },
      { slug: "grammaire", label: "Grammaire", order: 2 },
      { slug: "dialogues", label: "Dialogues", order: 3 },
      { slug: "ecriture", label: "Écriture", order: 4 },
      { slug: "exercices", label: "Exercices", order: 5 },
    ],
  },
  {
    id: "bibliotheque",
    title: "La Bibliothèque des Trésors",
    legacyName: "Les +",
    tabs: [
      { slug: "", label: "Ressources", order: 0 },
      { slug: "videos", label: "Vidéos", order: 1 },
      { slug: "podcasts", label: "Podcasts", order: 2 },
      { slug: "lectures", label: "Livres & sites", order: 3 },
      { slug: "admin", label: "Admin", order: 4 },
    ],
  },
];

export function getModuleMeta(moduleId: ModuleId): ModuleMeta {
  const found = MODULES.find((m) => m.id === moduleId);
  if (!found) throw new Error(`Module inconnu : ${moduleId}`);
  return found;
}

export function moduleHref(moduleId: ModuleId, tabSlug: string = ""): string {
  return tabSlug ? `/${moduleId}/${tabSlug}` : `/${moduleId}`;
}
