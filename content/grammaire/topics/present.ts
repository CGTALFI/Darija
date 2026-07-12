import type { GrammarTopic } from "@/types/lesson";

export const present: GrammarTopic = {
  id: "grammaire.present",
  moduleId: "academie",
  tabSlug: "grammaire",
  title: "Le présent (ka-)",
  kind: "grammaire",
  cefrTags: [],
  order: 4,
  intro: [
    {
      type: "paragraph",
      text: "Le présent se forme en deux temps : on prend le radical du verbe, on lui ajoute le préfixe de personne, et on annonce le tout par la particule ka-, qui marque l'action en cours ou habituelle (comme le -ing anglais ou « je suis en train de »).",
    },
    {
      type: "callout",
      variant: "retenir",
      title: "La formule",
      text: "ka- + préfixe + radical. Les préfixes : n- (je), t- (tu/elle), y- (il), et l'on ajoute -ou au pluriel, -i au féminin « tu ».",
    },
    {
      type: "paragraph",
      text: "Exemple avec le verbe كتب (kteb, « écrire ») :",
    },
    {
      type: "callout",
      variant: "piege",
      title: "Piège — « il » et « elle » se ressemblent presque",
      text: "kaykteb (il) commence par ka-y, alors que katekteb (elle) commence par ka-t — exactement comme « tu (m.) ». Le contexte lève l'ambiguïté.",
    },
    {
      type: "callout",
      variant: "note-regionale",
      title: "Note régionale — ka- ou ta- ?",
      text: "À Casablanca et dans la majorité du pays, on dit ka- (kanakol, je mange). Dans certains parlers du Nord et de zones rurales, on entend ta- (tanakol). Les deux sont justes : cale-toi sur ton entourage d'Agadir/Amizmiz.",
    },
  ],
  conjugationTable: [
    { person: "ana", form: "kanekteb (كنكتب)", meaning: "j'écris" },
    { person: "nta", form: "katekteb (كتكتب)", meaning: "tu écris (m.)" },
    { person: "nti", form: "katketbi (كتكتبي)", meaning: "tu écris (f.)" },
    { person: "howa", form: "kaykteb (كيكتب)", meaning: "il écrit" },
    { person: "hiya", form: "katekteb (كتكتب)", meaning: "elle écrit" },
    { person: "7na", form: "kanketbou (كنكتبو)", meaning: "nous écrivons" },
    { person: "ntoma", form: "katketbou (كتكتبو)", meaning: "vous écrivez" },
    { person: "houma", form: "kayketbou (كيكتبو)", meaning: "ils écrivent" },
  ],
  patterns: ["ka- + préfixe + radical"],
};
