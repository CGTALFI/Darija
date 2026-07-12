import type { VocabList } from "@/types/lesson";

export const vocabDialogueAmis: VocabList = {
  id: "dialogues.vocab.amis",
  moduleId: "academie",
  tabSlug: "dialogues",
  title: "Boîte à mots — entre amis",
  kind: "vocabulaire",
  cefrTags: [],
  order: 1,
  items: [
    { ar: "", arabizi: "sa7bi", meaning: "mon pote" },
    { ar: "", arabizi: "wallou", meaning: "rien" },
    { ar: "", arabizi: "ghir", meaning: "juste/seulement" },
    { ar: "", arabizi: "daba", meaning: "maintenant" },
    { ar: "", arabizi: "yallah", meaning: "allons-y" },
    { ar: "", arabizi: "wach", meaning: "(particule qui ouvre une question : « est-ce que ? »)" },
    { ar: "", arabizi: "inchallah", meaning: "si Dieu veut" },
    { ar: "", arabizi: "mzyan", meaning: "bien/super" },
  ],
};

export const vocabDialogueFamille: VocabList = {
  id: "dialogues.vocab.famille",
  moduleId: "academie",
  tabSlug: "dialogues",
  title: "Boîte à mots — la famille",
  kind: "vocabulaire",
  cefrTags: [],
  order: 2,
  items: [
    { ar: "", arabizi: "yemma / mama", meaning: "maman" },
    { ar: "", arabizi: "baba", meaning: "papa" },
    { ar: "", arabizi: "weld", meaning: "fils/garçon" },
    { ar: "", arabizi: "bent", meaning: "fille" },
    { ar: "", arabizi: "khouya", meaning: "mon frère" },
    { ar: "", arabizi: "khti", meaning: "ma sœur" },
    { ar: "", arabizi: "zid", meaning: "reprends/ajoute" },
    { ar: "", arabizi: "chwiya", meaning: "un peu" },
    { ar: "", arabizi: "dyal", meaning: "de (possession)" },
    { ar: "", arabizi: "bekri", meaning: "tôt" },
    { ar: "", arabizi: "chb3t", meaning: "je suis rassasié" },
  ],
};

export const vocabDialogueTravail: VocabList = {
  id: "dialogues.vocab.travail",
  moduleId: "academie",
  tabSlug: "dialogues",
  title: "Boîte à mots — le travail",
  kind: "vocabulaire",
  cefrTags: [],
  order: 3,
  items: [
    { ar: "", arabizi: "a ustad / a si", meaning: "Monsieur (respect)" },
    { ar: "", arabizi: "kif l-7al ?", meaning: "comment allez-vous (plus soutenu que ki dayer)" },
    { ar: "", arabizi: "momkin", meaning: "est-ce possible" },
    { ar: "", arabizi: "t3awenni", meaning: "m'aider" },
    { ar: "", arabizi: "bghit", meaning: "je veux" },
    { ar: "", arabizi: "kayn", meaning: "il y a" },
    { ar: "", arabizi: "bla taklif", meaning: "je t'en prie" },
    { ar: "", arabizi: "men b3d", meaning: "plus tard" },
    { ar: "", arabizi: "l-malaf", meaning: "le dossier" },
  ],
};

export const vocabDialogueRue: VocabList = {
  id: "dialogues.vocab.rue",
  moduleId: "academie",
  tabSlug: "dialogues",
  title: "Boîte à mots — dans la rue",
  kind: "vocabulaire",
  cefrTags: [],
  order: 4,
  items: [
    { ar: "", arabizi: "sme7 liya", meaning: "pardon" },
    { ar: "", arabizi: "a si / a lalla", meaning: "Monsieur / Madame" },
    { ar: "", arabizi: "fin", meaning: "où" },
    { ar: "", arabizi: "nichan", meaning: "tout droit" },
    { ar: "", arabizi: "dour", meaning: "tourne" },
    { ar: "", arabizi: "l-isar / l-imen", meaning: "gauche / droite" },
    { ar: "", arabizi: "qrib / b3id", meaning: "proche / loin" },
    { ar: "", arabizi: "b ch7al", meaning: "combien" },
    { ar: "", arabizi: "neqqes", meaning: "baisse (le prix)" },
    { ar: "", arabizi: "hak", meaning: "tiens" },
    { ar: "", arabizi: "bla jmil", meaning: "de rien" },
  ],
};

export const dialoguesBoitesAMots: VocabList[] = [
  vocabDialogueAmis,
  vocabDialogueFamille,
  vocabDialogueTravail,
  vocabDialogueRue,
];
