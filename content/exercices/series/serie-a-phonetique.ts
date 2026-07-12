import type { ExerciseSeries } from "@/types/exercise";

export const serieAPhonetique: ExerciseSeries = {
  id: "exercices.serie-a-phonetique",
  moduleId: "academie",
  badgeLabel: "Série A · Phonétique",
  cefrTags: [],
  exercises: [
    {
      id: "exercices.serie-a-phonetique.1",
      instruction:
        "Dans chaque mot, repère le son « de gorge » et donne la lettre arabe correspondante.",
      items: [
        {
          prompt: "7out (poisson)",
          answer: "7 = ح — fricative pharyngale sourde",
        },
        {
          prompt: "3ayn (œil)",
          answer: "3 = ع — fricative pharyngale voisée",
        },
        {
          prompt: "khobz (pain)",
          answer: "kh = خ — fricative vélaire sourde",
        },
        {
          prompt: "ghali (cher)",
          answer: "gh = غ — fricative vélaire voisée (r grasseyé)",
        },
        {
          prompt: "9alb (cœur)",
          answer: "9 (q) = ق — occlusive uvulaire",
        },
      ],
    },
    {
      id: "exercices.serie-a-phonetique.2",
      instruction:
        "Emphatique ou clair ? Pour chaque paire, dis lequel est emphatique (le « a » sombre).",
      items: [
        {
          prompt: "ṣif / sif",
          answer: "ṣif (été) = emphatique ; sif (épée) = clair.",
        },
        {
          prompt: "ṭab / tab",
          answer: "ṭab (cuit) = emphatique ; tab = clair.",
        },
        {
          prompt: "ḍar / dar",
          answer: "ḍar (il a nui) = emphatique ; dar (maison) = clair.",
        },
      ],
    },
    {
      id: "exercices.serie-a-phonetique.3",
      instruction: "Donne le symbole API de chaque chiffre arabizi.",
      items: [
        {
          prompt: "2 — 3 — 5 — 7 — 9 — gh",
          answer:
            "2 = /ʔ/ · 3 = /ʕ/ · 5 (kh) = /χ/ · 7 = /ħ/ · 9 = /q/ · gh = /ʁ/",
        },
      ],
    },
    {
      id: "exercices.serie-a-phonetique.4",
      instruction:
        "Lis à voix haute (attention au schwa et aux grappes de consonnes) : كتبت لك — ktebt lek · mchit l-souq · chreb atay",
      items: [
        {
          prompt: "ktebt lek · mchit l-souq · chreb atay",
          answer:
            "Enchaîne les consonnes avec un « e » à peine audible : « k'tebt l'k », « m'chit », « ch'reb ». Ne mets jamais un « e » plein à la française. Enregistre-toi et compare avec un locuteur natif.",
        },
      ],
    },
  ],
};
