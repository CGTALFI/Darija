export interface LanguageRow {
  name: string;
  description: string;
}

export interface AmazigheVariete {
  region: string;
  variete: string;
}

export interface ExpressionReligieuse {
  ar: string;
  arabizi: string;
  meaning: string;
}

export interface SocieteContent {
  /** Paragraphes de géopolitique, verbatim — wording neutre préservé exactement (Sahara occidental inclus). */
  geopolitique: string[];
  langues: LanguageRow[];
  amazigheVarietes: AmazigheVariete[];
  /** Note sur le darija « langue-mosaïque » incluse en dernier élément. */
  linguistiqueNotes: string[];
  musique: string[];
  artisanat: string[];
  codesConduite: string[];
  /** « Dieu dans la langue » — expressions du quotidien. */
  expressions: ExpressionReligieuse[];
  /** Bilan du chapitre. */
  bilan: string;
}

export const societe: SocieteContent = {
  geopolitique: [
    "Le Maroc est une monarchie constitutionnelle : le roi est chef de l'État et « commandeur des croyants », aux côtés d'un parlement élu et d'un chef de gouvernement. Le pays joue un rôle de pont entre l'Afrique, le monde arabe et l'Europe.",
    "Membre de la Ligue arabe, de l'Union africaine (réintégrée en 2017) et de l'Union du Maghreb arabe.",
    "Liens étroits avec la France et l'Union européenne (commerce, migrations, diaspora), le Golfe et les États-Unis.",
    "Carrefour migratoire majeur entre l'Afrique subsaharienne et l'Europe.",
    "Le Sahara occidental — en bref et sans parti pris : C'est le principal dossier diplomatique de la région. Le Maroc administre la majeure partie du territoire et propose un plan d'autonomie ; le Front Polisario revendique l'indépendance ; l'ONU y maintient une mission. Un sujet sensible : mieux vaut l'écouter que le trancher dans une conversation.",
  ],
  langues: [
    {
      name: "Darija الدارجة",
      description:
        "arabe marocain, langue maternelle majoritaire, orale — tout le pays",
    },
    {
      name: "Amazigh ⵜⴰⵎⴰⵣⵉⵖⵜ",
      description:
        "langue officielle (depuis 2011), écrite en tifinagh — trois grandes variétés (ci-dessous)",
    },
    {
      name: "Arabe standard",
      description:
        "officiel ; écrit, médias, religion, école — national (non parlé au quotidien)",
    },
    {
      name: "Français",
      description:
        "administration, affaires, enseignement supérieur — villes, milieux éduqués",
    },
    {
      name: "Espagnol",
      description: "héritage du protectorat, commerce — Nord (Rif, Tanger)",
    },
  ],
  amazigheVarietes: [
    {
      region: "Agadir",
      variete:
        "Tachelhit (chleuh) — le Souss et le sud : c'est l'amazigh d'Agadir.",
    },
    {
      region: "Amizmiz",
      variete:
        "Tamazight (central) — le Moyen et le Haut Atlas : c'est l'amazigh d'Amizmiz.",
    },
    {
      region: "Rif",
      variete: "Tarifit — le Rif, au nord.",
    },
  ],
  linguistiqueNotes: [
    "À Casablanca, ville de brassage, c'est le darija qui domine — mais on y entend toutes les régions du pays.",
    "Le darija, langue-mosaïque : Écoute et tu reconnaîtras : tomobil (voiture, du fr. automobile), forcheta (fourchette), semana (semaine, de l'esp. semana), triko (tricot). Ta connaissance du français est déjà un atout !",
  ],
  musique: [
    "Gnawa — musique spirituelle afro-marocaine (festival d'Essaouira).",
    "Chaâbi — la musique populaire des fêtes.",
    "Aïta — chant rural des plaines atlantiques.",
    "Ahwach / Ahidous — danses collectives amazighes de l'Atlas (autour d'Amizmiz) et du Souss.",
    "Malhoun — poésie chantée citadine ; et toute la scène rap/pop actuelle.",
  ],
  artisanat: [
    "Zellige — mosaïque de faïence géométrique (l'inspiration du design de ce manuel !).",
    "Tapis amazighs — tissés dans l'Atlas, chaque motif raconte une histoire.",
    "Cuir de Fès, poterie de Safi, bois de thuya d'Essaouira, bijoux d'argent berbères.",
  ],
  codesConduite: [
    "On mange et on donne de la main droite.",
    "On dit bismillah avant de manger, l7amdoullah après.",
    "On se déchausse souvent en entrant chez quelqu'un.",
    "Le vendredi (couscous, prière) rythme la semaine ; le hammam et le souk sont des institutions sociales.",
    "L'hospitalité (d-diyafa) est sacrée : un invité est une bénédiction.",
  ],
  expressions: [
    {
      ar: "إن شاء الله",
      arabizi: "inchallah",
      meaning: "si Dieu veut = « on verra / j'espère »",
    },
    {
      ar: "الحمد لله",
      arabizi: "l7amdoullah",
      meaning: "Dieu merci = « ça va »",
    },
    {
      ar: "بسم الله",
      arabizi: "bismillah",
      meaning: "au nom de Dieu = « c'est parti / bon appétit »",
    },
    {
      ar: "الله يعاون",
      arabizi: "llah y3awn",
      meaning: "courage",
    },
  ],
  bilan:
    "Tu situes désormais le darija dans son pays : une histoire amazighe puis arabo-musulmane, une géographie de mer et de montagnes, un pays-pont plurilingue, une table généreuse et une culture de l'hospitalité. Et tu sais ce qui distingue tes trois attaches — la modernité balnéaire d'Agadir, la métropole de Casa, la montagne berbère d'Amizmiz.",
};
