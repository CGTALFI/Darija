import type { DialogueLesson } from "@/types/lesson";

export const dialogueSoukMarchander: DialogueLesson = {
  id: "dialogues.souk-marchander",
  moduleId: "academie",
  tabSlug: "dialogues",
  title: "Au souk, marchander",
  kind: "dialogue",
  cefrTags: [],
  order: 8,
  register: "poli",
  scene: "Au souk, marchander",
  lines: [
    { speaker: "Vous", ar: "أسي، بشحال هاد الشي؟", translit: "a si, b ch7al had chi ?", fr: "Monsieur, combien coûte ceci ?" },
    { speaker: "Marchand", ar: "عشرين درهم.", translit: "3echrin derhem.", fr: "Vingt dirhams." },
    { speaker: "Vous", ar: "بزاف! نقص شوية عافاك.", translit: "bezzaf ! neqqes chwiya 3afak.", fr: "C'est trop ! Baisse un peu s'il te plaît." },
    { speaker: "Marchand", ar: "يالله، خمستاش. آخر كلمة.", translit: "yallah, khemstach. akher kelma.", fr: "Allez, quinze. Dernier prix." },
    { speaker: "Vous", ar: "واخا، هاك.", translit: "wakha, hak.", fr: "D'accord, tenez." },
  ],
};
