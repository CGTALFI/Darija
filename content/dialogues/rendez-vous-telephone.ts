import type { DialogueLesson } from "@/types/lesson";

export const dialogueRendezVousTelephone: DialogueLesson = {
  id: "dialogues.rendez-vous-telephone",
  moduleId: "academie",
  tabSlug: "dialogues",
  title: "Se donner rendez-vous (au téléphone)",
  kind: "dialogue",
  cefrTags: [],
  order: 2,
  register: "detendu",
  scene: "Se donner rendez-vous (au téléphone)",
  lines: [
    { speaker: "Amine", ar: "واش غادي تجي للماتش الليلة؟", translit: "wach ghadi tji l-match l-lila ?", fr: "Tu viens au match ce soir ?" },
    { speaker: "Karim", ar: "إيه إن شاء الله. فأشمن ساعة؟", translit: "iyeh inchallah. f achmen sa3a ?", fr: "Oui si Dieu veut. À quelle heure ?" },
    { speaker: "Amine", ar: "على السبعة. تسناني قدام القهوة.", translit: "3la sb3a. tsenani qeddam l-qahwa.", fr: "À sept heures. Attends-moi devant le café." },
    { speaker: "Karim", ar: "واخا، بسلامة.", translit: "wakha, bslama.", fr: "D'accord, à plus." },
  ],
};
