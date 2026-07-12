import type { ExerciseSeries } from "@/types/exercise";

export const serieCDialogues: ExerciseSeries = {
  id: "exercices.serie-c-dialogues",
  moduleId: "academie",
  badgeLabel: "Série C · Dialogues",
  cefrTags: [],
  exercises: [
    {
      id: "exercices.serie-c-dialogues.1",
      instruction: "Complète le dialogue du matin.",
      items: [
        {
          prompt: "— ___ (bonjour, le matin)",
          answer: "sba7 lkhir صباح الخير",
        },
        {
          prompt: "— sba7 nnour. ___ (comment vas-tu ?)",
          answer: "ki dayer ? (ou labas ?)",
        },
        {
          prompt: "— labas, ___ (Dieu merci). w nta ?",
          answer: "l7amdoullah الحمد لله",
        },
      ],
    },
    {
      id: "exercices.serie-c-dialogues.2",
      instruction:
        "Associe chaque formule à la bonne situation (amis · famille · collègues · inconnu).",
      items: [
        {
          prompt: "kif l-7al ?",
          answer: "→ collègues (semi-formel)",
        },
        {
          prompt: "ki dayer ?",
          answer: "→ amis (détendu)",
        },
        {
          prompt: "sme7 liya a si",
          answer: "→ inconnu (poli)",
        },
        {
          prompt: "a yemma",
          answer: "→ famille (tendre, « ô maman »)",
        },
      ],
    },
    {
      id: "exercices.serie-c-dialogues.3",
      instruction: "Traduis en darija.",
      items: [
        {
          prompt: "Je voudrais un café, s'il te plaît.",
          answer: "bghit qahwa 3afak بغيت قهوة عافاك",
        },
        {
          prompt: "Combien ça coûte ?",
          answer: "b ch7al ? بشحال؟",
        },
        {
          prompt: "Où est la gare ?",
          answer: "fin kayna l-ma7atta ? فين كاينة المحطة؟",
        },
        {
          prompt: "Merci beaucoup.",
          answer: "choukran bezzaf شكرا بزاف",
        },
      ],
    },
    {
      id: "exercices.serie-c-dialogues.4",
      instruction: "Écris ces nombres en arabizi.",
      items: [
        {
          prompt: "2 — 5 — 10 — 20 — 100",
          answer:
            "2 jouj · 5 khemsa · 10 3echra · 20 3echrin · 100 mya",
        },
      ],
    },
  ],
};
