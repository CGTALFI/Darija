import type { GrammarTopic } from "@/types/lesson";

export const futur: GrammarTopic = {
  id: "grammaire.futur",
  moduleId: "academie",
  tabSlug: "grammaire",
  title: "Le futur (ghadi)",
  kind: "grammaire",
  cefrTags: [],
  order: 5,
  intro: [
    {
      type: "paragraph",
      text: "Le futur est le plus facile : on remplace la particule ka- par le mot غادي (ghadi), « aller » au sens de « je vais… ». Le verbe reste au présent sans ka-.",
    },
    {
      type: "callout",
      variant: "retenir",
      title: "La formule",
      text: "ghadi + verbe (sans ka-). Ex. : nekteb (que j'écrive) → ghadi nekteb (je vais écrire).",
    },
    {
      type: "callout",
      variant: "astuce",
      title: "Astuce — la version courte « gha- »",
      text: "À l'oral, ghadi se raccourcit souvent en préfixe gha- collé au verbe : gha-nekteb (غنكتب) = « je vais écrire ». ghadi peut aussi s'accorder : ghadya (f.), ghadyin (pl.).",
    },
  ],
  conjugationTable: [
    { person: "ana", form: "ghadi nekteb (غادي نكتب)", meaning: "je vais écrire" },
    { person: "nta", form: "ghadi tekteb (غادي تكتب)", meaning: "tu vas écrire (m.)" },
    { person: "nti", form: "ghadi tketbi (غادي تكتبي)", meaning: "tu vas écrire (f.)" },
    { person: "howa", form: "ghadi yekteb (غادي يكتب)", meaning: "il va écrire" },
    { person: "hiya", form: "ghadi tekteb (غادي تكتب)", meaning: "elle va écrire" },
    { person: "7na", form: "ghadi nketbou (غادي نكتبو)", meaning: "nous allons écrire" },
    { person: "ntoma", form: "ghadi tketbou (غادي تكتبو)", meaning: "vous allez écrire" },
    { person: "houma", form: "ghadi yketbou (غادي يكتبو)", meaning: "ils vont écrire" },
  ],
  patterns: ["ghadi + verbe (sans ka-)", "gha- + verbe"],
};
