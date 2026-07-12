import type { DialogueLesson } from "@/types/lesson";

export const dialogueTableFamille: DialogueLesson = {
  id: "dialogues.table-famille",
  moduleId: "academie",
  tabSlug: "dialogues",
  title: "À table",
  kind: "dialogue",
  cefrTags: [],
  order: 3,
  register: "tendre",
  scene: "À table",
  lines: [
    { speaker: "Yemma", ar: "أ ولدي، واش كليتي؟", translit: "a weldi, wach klliti ?", fr: "Mon fils, tu as mangé ?" },
    { speaker: "Le fils", ar: "إيه أ يما، شكرا.", translit: "iyeh a yemma, choukran.", fr: "Oui maman, merci." },
    { speaker: "Yemma", ar: "زيد شوية ديال الطاجين.", translit: "zid chwiya dyal t-tajin.", fr: "Reprends un peu de tajine." },
    { speaker: "Le fils", ar: "لا، شبعت. الله يخلف أ يما.", translit: "la, chb3t. llah ykhlef a yemma.", fr: "Non, je suis rassasié. Merci maman (litt. que Dieu te le rende)." },
  ],
};
