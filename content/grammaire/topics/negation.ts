import type { GrammarTopic } from "@/types/lesson";

export const negation: GrammarTopic = {
  id: "grammaire.negation",
  moduleId: "academie",
  tabSlug: "grammaire",
  title: "La négation",
  kind: "grammaire",
  cefrTags: [],
  order: 6,
  intro: [
    {
      type: "paragraph",
      text: "La négation du darija encadre le verbe, un peu comme le « ne… pas » français, mais soudé au mot : ما (ma-) devant, ش (-ch) derrière.",
    },
    {
      type: "callout",
      variant: "retenir",
      title: "La formule",
      text: "ma + verbe + ch. La particule ka- ou ghadi reste à sa place, à l'intérieur de l'étau.",
    },
    {
      type: "heading",
      level: 3,
      text: "Exemples affirmatif / négatif",
    },
    {
      type: "paragraph",
      text: "كنكتب → ما كنكتبش : ma kanktebch — je n'écris pas. كلا → ما كلاش : ma klach — il n'a pas mangé. غادي نمشي → ما غاديش نمشي : ma ghadich nemchi — je ne vais pas aller. عندي → ما عنديش : ma 3ndich — je n'ai pas.",
    },
    {
      type: "heading",
      level: 3,
      text: "Nier un nom ou un adjectif : machi",
    },
    {
      type: "paragraph",
      text: "Devant un nom, un adjectif ou un pronom (pas un verbe), on utilise ماشي (machi), « ne… pas / pas » : ماشي كبير — machi kbir — pas grand. ماشي أنا — machi ana — ce n'est pas moi. ماشي بزاف — machi bezzaf — pas beaucoup.",
    },
    {
      type: "callout",
      variant: "piege",
      title: "Piège — ma…ch ou machi ?",
      text: "Verbe ⇒ on l'encadre par ma…ch (ma kanktebch). Nom / adjectif ⇒ un seul mot devant, machi (machi kbir). Ne mélange pas les deux !",
    },
    {
      type: "heading",
      level: 3,
      text: "Interdire : « ne fais pas… »",
    },
    {
      type: "paragraph",
      text: "Pour l'ordre négatif, même étau ma…ch autour du verbe au présent sans ka- : ما تكتبش — ma tektebch — n'écris pas. ما تمشيش — ma temchich — ne pars pas.",
    },
  ],
  patterns: ["ma + verbe + ch", "machi + nom/adjectif/pronom"],
};
