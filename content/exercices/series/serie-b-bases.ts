import type { ExerciseSeries } from "@/types/exercise";

export const serieBBases: ExerciseSeries = {
  id: "exercices.serie-b-bases",
  moduleId: "academie",
  badgeLabel: "Série B · Les bases",
  cefrTags: [],
  exercises: [
    {
      id: "exercices.serie-b-bases.1",
      instruction: "Complète avec le bon pronom sujet.",
      items: [
        { prompt: "___ = je / moi", answer: "ana أنا" },
        { prompt: "___ = nous", answer: "7na حنا" },
        { prompt: "___ = toi (à une femme)", answer: "nti نتي" },
        { prompt: "___ = ils / elles", answer: "houma هوما" },
      ],
    },
    {
      id: "exercices.serie-b-bases.2",
      instruction:
        "Traduis en darija (avec le bon suffixe possessif), à partir de dar = maison.",
      items: [
        { prompt: "ma maison", answer: "dar-i داري" },
        { prompt: "ta maison", answer: "dar-ek دارك" },
        { prompt: "sa maison (à elle)", answer: "dar-ha دارها" },
        { prompt: "notre maison", answer: "dar-na دارنا" },
        { prompt: "leur maison", answer: "dar-hom دارهم" },
      ],
    },
    {
      id: "exercices.serie-b-bases.3",
      instruction: "Conjugue kteb (écrire) au présent.",
      items: [
        {
          prompt: "ana ___",
          answer: "kanekteb كنكتب (j'écris)",
        },
        {
          prompt: "nti ___",
          answer: "katketbi كتكتبي (tu écris, f.)",
        },
        {
          prompt: "howa ___",
          answer: "kaykteb كيكتب (il écrit)",
        },
        {
          prompt: "ntoma ___",
          answer:
            "katketbou كتكتبو (vous écrivez) — Rappel : ka- + préfixe (n / t / y) + radical, -ou au pluriel, -i au « tu » féminin.",
        },
      ],
    },
    {
      id: "exercices.serie-b-bases.4",
      instruction: "Mets ces phrases au futur (avec ghadi).",
      items: [
        {
          prompt: "kanemchi (je vais / je pars)",
          answer: "ghadi nemchi غادي نمشي (je vais partir)",
        },
        {
          prompt: "kayakol (il mange)",
          answer: "ghadi yakol غادي ياكل (il va manger)",
        },
        {
          prompt: "kanchrbou (nous buvons)",
          answer:
            "ghadi nchrbou غادي نشربو (nous allons boire) — On retire ka- et on place ghadi devant le verbe.",
        },
      ],
    },
    {
      id: "exercices.serie-b-bases.5",
      instruction:
        "Mets au négatif (ma…ch pour les verbes, machi pour le reste).",
      items: [
        {
          prompt: "kanekteb (j'écris)",
          answer: "ma kanktebch ما كنكتبش (je n'écris pas)",
        },
        {
          prompt: "3ndi (j'ai)",
          answer: "ma 3ndich ما عنديش (je n'ai pas)",
        },
        {
          prompt: "howa kbir (il est grand)",
          answer: "howa machi kbir هو ماشي كبير (il n'est pas grand)",
        },
        {
          prompt: "ghadi nemchi (je vais partir)",
          answer:
            "ma ghadich nemchi ما غاديش نمشي (je ne vais pas partir) — Note : verbe ⇒ étau ma…ch ; adjectif ⇒ machi devant.",
        },
      ],
    },
  ],
};
