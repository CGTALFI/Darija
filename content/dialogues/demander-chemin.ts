import type { DialogueLesson } from "@/types/lesson";

export const dialogueDemanderChemin: DialogueLesson = {
  id: "dialogues.demander-chemin",
  moduleId: "academie",
  tabSlug: "dialogues",
  title: "Demander son chemin",
  kind: "dialogue",
  cefrTags: [],
  order: 7,
  register: "poli",
  scene: "Demander son chemin",
  lines: [
    { speaker: "Vous", ar: "سمح ليا أسي، فين كاينة المحطة؟", translit: "sme7 liya a si, fin kayna l-ma7atta ?", fr: "Excusez-moi Monsieur, où est la gare ?" },
    { speaker: "Passant", ar: "سير نيشان، من بعد دور على اليسار.", translit: "sir nichan, men b3d dour 3la l-isar.", fr: "Va tout droit, puis tourne à gauche." },
    { speaker: "Vous", ar: "بعيدة؟", translit: "b3ida ?", fr: "C'est loin ?" },
    { speaker: "Passant", ar: "لا، قريبة. مشي ديال خمس دقايق.", translit: "la, qriba. mchi dyal khms dqayeq.", fr: "Non, c'est proche. Environ cinq minutes de marche." },
    { speaker: "Vous", ar: "الله يخليك، شكرا بزاف.", translit: "llah ykhllik, choukran bezzaf.", fr: "Merci beaucoup." },
    { speaker: "Passant", ar: "بلا جميل.", translit: "bla jmil.", fr: "De rien." },
  ],
};
