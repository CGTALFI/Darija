export interface VilleContent {
  name: string;
  arabicName: string;
  description: string;
}

export interface GeographieContent {
  /** Prose d'ouverture (relief, chaînes de montagnes, etc.). */
  intro: string;
  villes: VilleContent[];
  /** Astuce Rabat/Casa, note régionale Amizmiz (séisme d'Al Haouz 2023), etc. */
  notes: string[];
}

export const geographie: GeographieContent = {
  intro:
    "Le Maroc occupe l'angle nord-ouest de l'Afrique, seul pays baigné à la fois par l'Atlantique et la Méditerranée, face à l'Europe par le détroit de Gibraltar. Son relief s'organise autour de grandes chaînes : le Rif, au nord, au-dessus de la Méditerranée ; le Moyen Atlas, le Haut Atlas (point culminant : le Toubkal, 4 167 m) et l'Anti-Atlas, qui barrent le pays en diagonale ; les plaines atlantiques fertiles (dont la plaine du Souss, autour d'Agadir) ; le Sahara, au sud et au sud-est.",
  villes: [
    {
      name: "Agadir",
      arabicName: "أگادير",
      description:
        "Côte atlantique, pays du Souss. Pêche, tourisme, argan. Zone tachelhit (amazigh du Sud).",
    },
    {
      name: "Casablanca",
      arabicName: "الدار البيضاء",
      description:
        "Plus grande ville, capitale économique. Port, affaires, mosquée Hassan II. Darija urbain de référence.",
    },
    {
      name: "Amizmiz",
      arabicName: "أمزميز",
      description:
        "Contreforts du Haut Atlas, au sud-ouest de Marrakech. Bourg berbère, souk hebdomadaire, porte du Toubkal.",
    },
  ],
  notes: [
    "Bon à savoir — Rabat (الرباط) est la capitale politique ; Casablanca la capitale économique. Ne les confonds pas : beaucoup croient à tort que Casablanca est la capitale.",
    "Note régionale — Amizmiz : Petite ville de montagne, Amizmiz vit au rythme de son souk du mardi et de la culture amazighe de l'Atlas. La région fut durement touchée par le séisme d'Al Haouz du 8 septembre 2023 — un événement encore très présent dans les mémoires locales, à évoquer avec délicatesse.",
  ],
};
