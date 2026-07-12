import type { GrammarTopic } from "@/types/lesson";

export const possessifs: GrammarTopic = {
  id: "grammaire.possessifs",
  moduleId: "academie",
  tabSlug: "grammaire",
  title: "Les suffixes possessifs",
  kind: "grammaire",
  cefrTags: [],
  order: 2,
  intro: [
    {
      type: "paragraph",
      text: "Pour dire « ma / ta / sa… », on colle un suffixe au nom. Exemple avec dar (maison) et smiya (prénom) :",
    },
    {
      type: "callout",
      variant: "astuce",
      title: "Astuce — un jeu de LEGO",
      text: "Ces mêmes suffixes servent aussi de compléments d'objet sur le verbe : chaf (il a vu) → chaf-ni (il m'a vu), chaf-ek (il t'a vu). Un suffixe appris = deux usages.",
    },
  ],
  conjugationTable: [
    { person: "ma / mon", form: "-i → dar-i (داري)", meaning: "ma / mon" },
    { person: "ta / ton", form: "-ek → dar-ek (دارك)", meaning: "ta / ton" },
    { person: "sa / son (à lui)", form: "-o / -ou → dar-o (دارو)", meaning: "sa / son (à lui)" },
    { person: "sa / son (à elle)", form: "-ha → dar-ha (دارها)", meaning: "sa / son (à elle)" },
    { person: "notre", form: "-na → dar-na (دارنا)", meaning: "notre" },
    { person: "votre", form: "-kom → dar-kom (داركم)", meaning: "votre" },
    { person: "leur", form: "-hom → dar-hom (دارهم)", meaning: "leur" },
  ],
  patterns: ["dar + suffixe possessif"],
};
