import type { PhoneticSheet } from "@/types/lesson";

export const sonRa: PhoneticSheet = {
  id: "phonetique.ra",
  moduleId: "academie",
  tabSlug: "phonetique",
  title: "ra (ر)",
  kind: "fiche-son",
  cefrTags: [],
  order: 8,
  glyph: "ر",
  arabizi: "r",
  name: "ra",
  ipa: "/r/",
  place: "alvéolaire",
  manner: "vibrante (roulée) · voisée",
  placement:
    "La pointe de la langue bat contre les alvéoles, comme le « r » roulé italien ou espagnol (perro). Surtout pas le « r » de gorge français !",
  comparison:
    "N'existe plus (le français standard a un r de gorge). Pense au « r » roulé du Sud ou de l'italien.",
  example: { ar: "راجل", arabizi: "rajel", fr: "homme" },
};
