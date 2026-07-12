import type { ExerciseSeries } from "@/types/exercise";

export const defiSynthese: ExerciseSeries = {
  id: "exercices.defi-synthese",
  moduleId: "academie",
  badgeLabel: "Défi de synthèse",
  cefrTags: [],
  exercises: [
    {
      id: "exercices.defi-synthese.1",
      instruction:
        "Traduis cette petite scène complète (elle mobilise les 4 chapitres).",
      items: [
        {
          prompt:
            "« Bonjour ! Comment vas-tu ? — Ça va, Dieu merci. Je n'ai pas le temps, je vais aller au souk. — D'accord, à plus ! »",
          answer:
            "السلام عليكم! كي داير؟ / salamou 3alaykom ! ki dayer ? — لاباس الحمد لله. ما عنديش الوقت، غادي نمشي للسوق. / labas l7amdoullah. ma 3ndich lweqt, ghadi nemchi l-souq. — واخا، بسلامة! / wakha, bslama ! Si tu as reconnu salutation + « avoir » nié + futur + formule d'adieu : bravo, tu tiens déjà une vraie conversation !",
        },
      ],
    },
  ],
};
