import type { DialogueLesson } from "@/types/lesson";

export const dialogueRueAmis: DialogueLesson = {
  id: "dialogues.rue-amis",
  moduleId: "academie",
  tabSlug: "dialogues",
  title: "Se croiser dans la rue",
  kind: "dialogue",
  cefrTags: [],
  order: 1,
  register: "detendu",
  scene: "On se croise dans la rue",
  lines: [
    { speaker: "Amine", ar: "أهلا صاحبي، كي داير؟", translit: "ahlan sa7bi, ki dayer ?", fr: "Salut mon pote, comment tu vas ?" },
    { speaker: "Karim", ar: "لاباس الحمد لله، ونتا؟", translit: "labas l7amdoullah, w nta ?", fr: "Ça va Dieu merci, et toi ?" },
    { speaker: "Amine", ar: "كلشي مزيان. شنو داير دابا؟", translit: "kolchi mzyan. chno dayer daba ?", fr: "Tout va bien. Qu'est-ce que tu fais là ?" },
    { speaker: "Karim", ar: "والو، غير كنتسارى.", translit: "wallou, ghir kantsara.", fr: "Rien, je me balade juste." },
    { speaker: "Amine", ar: "واخا نمشيو نشربو قهوة؟", translit: "wakha nemchiw nchrbou qahwa ?", fr: "On va boire un café ?" },
    { speaker: "Karim", ar: "مزيان! يالله.", translit: "mzyan ! yallah.", fr: "Super ! Allons-y." },
  ],
};
