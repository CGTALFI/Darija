import type { PhoneticSheet } from "@/types/lesson";

export const sonKha: PhoneticSheet = {
  id: "phonetique.kha",
  moduleId: "academie",
  tabSlug: "phonetique",
  title: "kha (خ)",
  kind: "fiche-son",
  cefrTags: [],
  order: 5,
  glyph: "خ",
  arabizi: "kh · 5",
  name: "kha",
  ipa: "/χ/",
  place: "vélaire",
  manner: "fricative · sourde",
  placement:
    "Arrière de la langue près du voile, on souffle en faisant « racler ». C'est la jota espagnole (Juan) ou le ch allemand de Bach.",
  comparison: "Proche du « r » parisien mais sans voix et plus raclé.",
  example: { ar: "خبز", arabizi: "khobz", fr: "pain" },
};
