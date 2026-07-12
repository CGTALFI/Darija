import type { DialogueLesson } from "@/types/lesson";

export const dialogueBureauMatin: DialogueLesson = {
  id: "dialogues.bureau-matin",
  moduleId: "academie",
  tabSlug: "dialogues",
  title: "Au bureau, le matin",
  kind: "dialogue",
  cefrTags: [],
  order: 5,
  register: "semi-formel",
  scene: "Au bureau, le matin",
  lines: [
    { speaker: "Salma", ar: "صباح الخير أستاذ.", translit: "sba7 lkhir a ustad.", fr: "Bonjour Monsieur." },
    { speaker: "Rachid", ar: "صباح النور. كيف الحال؟", translit: "sba7 nnour. kif l-7al ?", fr: "Bonjour. Comment allez-vous ?" },
    { speaker: "Salma", ar: "بخير الحمد لله. واش وصلاتك الإيميل؟", translit: "bikhir l7amdoullah. wach weslatek l-email ?", fr: "Bien, Dieu merci. Tu as reçu l'e-mail ?" },
    { speaker: "Rachid", ar: "إيه، غادي نجاوبك من بعد.", translit: "iyeh, ghadi njawbek men b3d.", fr: "Oui, je te réponds plus tard." },
    { speaker: "Salma", ar: "بلا تكليف، شكرا.", translit: "bla taklif, choukran.", fr: "Je t'en prie, merci." },
  ],
};
