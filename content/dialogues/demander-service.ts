import type { DialogueLesson } from "@/types/lesson";

export const dialogueDemanderService: DialogueLesson = {
  id: "dialogues.demander-service",
  moduleId: "academie",
  tabSlug: "dialogues",
  title: "Demander un service",
  kind: "dialogue",
  cefrTags: [],
  order: 6,
  register: "semi-formel",
  scene: "Demander un service",
  lines: [
    { speaker: "Salma", ar: "عافاك، ممكن تعاوني؟", translit: "3afak, momkin t3awenni ?", fr: "S'il te plaît, tu peux m'aider ?" },
    { speaker: "Rachid", ar: "بكل سرور. أشنو بغيتي؟", translit: "b koll sourour. achnou bghiti ?", fr: "Avec plaisir. Qu'est-ce que tu veux ?" },
    { speaker: "Salma", ar: "بغيت نعرف فين كاين الملف.", translit: "bghit n3ref fin kayn l-malaf.", fr: "Je voudrais savoir où est le dossier." },
    { speaker: "Rachid", ar: "غادي نوريهولك دابا.", translit: "ghadi nwarrih-oulek daba.", fr: "Je vais te le montrer tout de suite." },
  ],
};
