import type { DialogueLesson } from "@/types/lesson";

export const dialogueParentFille: DialogueLesson = {
  id: "dialogues.parent-fille",
  moduleId: "academie",
  tabSlug: "dialogues",
  title: "Un parent et sa fille",
  kind: "dialogue",
  cefrTags: [],
  order: 4,
  register: "tendre",
  scene: "Un parent et sa fille",
  lines: [
    { speaker: "Baba", ar: "فين غادية أ بنتي؟", translit: "fin ghadya a benti ?", fr: "Où vas-tu, ma fille ?" },
    { speaker: "La fille", ar: "غادية لعند صاحبتي.", translit: "ghadya l-3nd sa7bti.", fr: "Je vais chez mon amie." },
    { speaker: "Baba", ar: "بكري ترجعي.", translit: "bekri terj3i.", fr: "Rentre tôt." },
    { speaker: "La fille", ar: "واخا أ بابا.", translit: "wakha a baba.", fr: "D'accord papa." },
  ],
};
