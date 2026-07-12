import type { GrammarTopic } from "@/types/lesson";

export const pronoms: GrammarTopic = {
  id: "grammaire.pronoms",
  moduleId: "academie",
  tabSlug: "grammaire",
  title: "Les pronoms sujets",
  kind: "grammaire",
  cefrTags: [],
  order: 1,
  intro: [
    {
      type: "paragraph",
      text: "Trois familles à connaître : les pronoms sujets (moi, toi…), les suffixes possessifs (ma, ton…), et le verbe « avoir » qui, en darija, n'est pas un vrai verbe mais un suffixe collé à 3nd.",
    },
    {
      type: "callout",
      variant: "piege",
      title: "Piège — le « tu » a un genre",
      text: "Contrairement au français, « tu » change selon le sexe : nta à un homme, nti à une femme. En revanche, il n'y a qu'un seul « vous » (ntoma), sans vouvoiement de politesse : on tutoie tout le monde.",
    },
  ],
  conjugationTable: [
    { person: "je / moi", form: "ana (أنا) — /ana/", meaning: "je / moi" },
    { person: "toi (masc.)", form: "nta (نتا) — /nta/", meaning: "toi (masculin)" },
    { person: "toi (fém.)", form: "nti (نتي) — /nti/", meaning: "toi (féminin)" },
    { person: "il / lui", form: "howa (هو) — /huwa/", meaning: "il / lui" },
    { person: "elle", form: "hiya (هي) — /hija/", meaning: "elle" },
    { person: "nous", form: "7na (حنا) — /ħna/", meaning: "nous" },
    { person: "vous", form: "ntoma (نتوما) — /ntuma/", meaning: "vous" },
    { person: "ils / elles", form: "houma (هوما) — /huma/", meaning: "ils / elles" },
  ],
};
