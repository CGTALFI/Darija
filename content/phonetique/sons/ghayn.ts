import type { PhoneticSheet } from "@/types/lesson";

export const sonGhayn: PhoneticSheet = {
  id: "phonetique.ghayn",
  moduleId: "academie",
  tabSlug: "phonetique",
  title: "ghayn (غ)",
  kind: "fiche-son",
  cefrTags: [],
  order: 6,
  glyph: "غ",
  arabizi: "gh · 8",
  name: "ghayn",
  ipa: "/ʁ/",
  place: "vélaire",
  manner: "fricative · voisée",
  placement:
    "Exactement le « r » français grasseyé (celui de Paris), en un peu plus appuyé. C'est le jumeau voisé du kh.",
  comparison: "Oui ! le r « de gorge » du français en est très proche.",
  example: { ar: "غالي", arabizi: "ghali", fr: "cher (coûteux)" },
};
