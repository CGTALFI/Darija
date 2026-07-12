import type { PhoneticSheet } from "@/types/lesson";

export const sonHamza: PhoneticSheet = {
  id: "phonetique.hamza",
  moduleId: "academie",
  tabSlug: "phonetique",
  title: "hamza (ء)",
  kind: "fiche-son",
  cefrTags: [],
  order: 2,
  glyph: "ء",
  arabizi: "2",
  name: "hamza",
  ipa: "/ʔ/",
  place: "glottal",
  manner: "occlusive",
  placement:
    "Ferme puis rouvre brusquement la glotte, comme le petit blocage entre les deux « a » de « a-a » (français « hein-hein » de refus).",
  comparison: "Le « coup » au début de « oh ! » prononcé sèchement.",
  example: { ar: "سأل", arabizi: "s2el", fr: "il a demandé" },
};
