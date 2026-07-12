export interface PlatContent {
  ar: string;
  arabizi: string;
  meaning: string;
  description?: string;
}

export interface GastronomieContent {
  intro: string;
  plats: PlatContent[];
  /** Note régionale sur l'argan/amlou du Souss, rituel du thé, etc. */
  notes: string[];
}

export const gastronomie: GastronomieContent = {
  intro:
    "La cuisine marocaine est l'une des plus réputées au monde : généreuse, épicée avec finesse, et surtout partagée — on mange souvent d'un même plat, à la main droite ou avec du pain.",
  plats: [
    {
      ar: "طاجين",
      arabizi: "tajin",
      meaning: "ragoût mijoté dans le plat conique du même nom",
    },
    {
      ar: "كسكس",
      arabizi: "seksou",
      meaning: "couscous — le plat du vendredi",
    },
    {
      ar: "حريرة",
      arabizi: "7rira",
      meaning: "soupe de tomate, pois chiches et lentilles (Ramadan)",
    },
    {
      ar: "بسطيلة",
      arabizi: "bastila",
      meaning: "tourte feuilletée sucrée-salée (volaille, amandes)",
    },
    {
      ar: "طنجية",
      arabizi: "tanjiya",
      meaning: "viande confite en jarre — spécialité de Marrakech",
    },
    {
      ar: "أتاي",
      arabizi: "atay",
      meaning: "thé vert à la menthe, servi de haut",
    },
  ],
  notes: [
    "Note régionale — le Souss dans l'assiette : La région d'Agadir est le pays de l'arganier : on en tire l'huile d'argan (zit argan) et l'amlou (amlou), une pâte à tartiner d'amandes, d'argan et de miel — un trésor local. Sur la côte, place aussi au poisson grillé tout frais.",
    "Le rituel du thé : L'atay se verse de haut pour le faire mousser, et se boit en trois verres — un proverbe dit : « le premier amer comme la vie, le deuxième fort comme l'amour, le troisième doux comme la mort ». Refuser un thé, c'est presque refuser l'hospitalité.",
  ],
};
