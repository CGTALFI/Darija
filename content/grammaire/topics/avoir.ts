import type { GrammarTopic } from "@/types/lesson";

export const avoir: GrammarTopic = {
  id: "grammaire.avoir",
  moduleId: "academie",
  tabSlug: "grammaire",
  title: "« Avoir » : 3nd + suffixe",
  kind: "grammaire",
  cefrTags: [],
  order: 3,
  intro: [
    {
      type: "paragraph",
      text: "Le darija n'a pas de verbe « avoir ». On utilise عند (3nd, « chez / auprès de ») + le suffixe de la personne :",
    },
  ],
  conjugationTable: [
    { person: "j'ai", form: "3ndi (عندي)", meaning: "j'ai — ex. 3ndi dar (عندي دار) : j'ai une maison" },
    { person: "tu as", form: "3ndek (عندك)", meaning: "tu as" },
    { person: "il a", form: "3ndo (عندو)", meaning: "il a" },
    { person: "elle a", form: "3ndha (عندها)", meaning: "elle a" },
    { person: "nous avons", form: "3ndna (عندنا)", meaning: "nous avons" },
    { person: "vous avez", form: "3ndkom (عندكم)", meaning: "vous avez" },
    { person: "ils ont", form: "3ndhom (عندهم)", meaning: "ils ont" },
  ],
  patterns: ["3nd + suffixe"],
};
