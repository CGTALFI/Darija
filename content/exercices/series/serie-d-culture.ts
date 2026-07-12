import type { ExerciseSeries } from "@/types/exercise";

export const serieDCulture: ExerciseSeries = {
  id: "exercices.serie-d-culture",
  moduleId: "academie",
  badgeLabel: "Série D · Culture",
  cefrTags: [],
  exercises: [
    {
      id: "exercices.serie-d-culture.1",
      instruction: "Vrai ou faux ?",
      items: [
        {
          prompt: "La capitale du Maroc est Casablanca.",
          answer: "Faux — la capitale est Rabat (Casa = capitale économique).",
        },
        {
          prompt: "Le couscous est traditionnellement le plat du vendredi.",
          answer: "Vrai — le seksou du vendredi.",
        },
        {
          prompt: "Le Toubkal est le plus haut sommet du pays.",
          answer: "Vrai — 4 167 m, dans le Haut Atlas.",
        },
        {
          prompt: "L'amazigh n'a aucun statut officiel.",
          answer: "Faux — l'amazigh est langue officielle depuis 2011.",
        },
        {
          prompt:
            "La vieille médina d'Agadir est restée intacte à travers les siècles.",
          answer:
            "Faux — Agadir fut détruite par le séisme de 1960 puis reconstruite en ville moderne.",
        },
      ],
    },
    {
      id: "exercices.serie-d-culture.2",
      instruction: "Choisis la bonne réponse.",
      items: [
        {
          prompt:
            "La dynastie qui règne aujourd'hui : (a) Almohades — (b) Alaouites — (c) Saadiens",
          answer: "(b) Alaouites (depuis 1666).",
        },
        {
          prompt:
            "L'amazigh parlé autour d'Agadir : (a) tarifit — (b) tachelhit — (c) tamazight",
          answer: "(b) tachelhit (chleuh).",
        },
        {
          prompt:
            "Le produit emblématique du Souss : (a) l'huile d'olive — (b) l'huile d'argan — (c) le safran",
          answer: "(b) l'huile d'argan (et l'amlou).",
        },
      ],
    },
    {
      id: "exercices.serie-d-culture.3",
      instruction: "Relie chaque élément à sa région.",
      items: [
        {
          prompt: "Danses ahwach / ahidous de l'Atlas → ?",
          answer: "→ Amizmiz (Haut Atlas, tamazight).",
        },
        {
          prompt: "Grande métropole économique, mosquée Hassan II → ?",
          answer: "→ Casablanca.",
        },
        {
          prompt: "Argan, plage, tachelhit → ?",
          answer: "→ Agadir (Souss).",
        },
      ],
    },
  ],
};
