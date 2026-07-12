export interface TimelineRow {
  period: string;
  label: string;
}

export interface HistoireContent {
  /** Prose d'ouverture de la section Histoire. */
  intro: string;
  timeline: TimelineRow[];
  /** Dates clés, note régionale (séisme d'Agadir 1960), etc. */
  notes: string[];
}

export const histoire: HistoireContent = {
  intro:
    "Le Maroc — المغرب (l-Maghrib, « le couchant ») — est d'abord une terre amazighe (berbère), peuplée depuis des millénaires. Sur ce socle se sont posés, tour à tour, Phéniciens et Romains sur les côtes, puis l'islam et la langue arabe à partir du VIIe siècle, donnant naissance à une longue suite de dynasties.",
  timeline: [
    {
      period: "789–974",
      label: "Idrissides — premier État musulman ; fondation de Fès",
    },
    {
      period: "XIe–XIIe s.",
      label:
        "Almoravides المرابطون — venus du Sahara ; fondent Marrakech ; empire jusqu'en Espagne",
    },
    {
      period: "XIIe–XIIIe s.",
      label:
        "Almohades الموحدون — issus du Haut Atlas ; apogée ; Koutoubia, tour Hassan",
    },
    {
      period: "XIIIe–XVe s.",
      label: "Mérinides المرينيون — Fès capitale intellectuelle ; médersas",
    },
    {
      period: "XVIe–XVIIe s.",
      label:
        "Saadiens السعديون — chérifiens ; bataille des Trois Rois (1578) ; Ahmed al-Mansour",
    },
    {
      period: "depuis 1666",
      label:
        "Alaouites العلويون — dynastie actuelle (roi Mohammed VI depuis 1999)",
    },
  ],
  notes: [
    "Trois dates à retenir — ~680 : arrivée de l'islam et de l'arabe au Maghreb. 1912 : protectorats français et espagnol (traité de Fès). 1956 : indépendance du Maroc, retour du sultan Mohammed V.",
    "Note régionale — Agadir : Agadir porte une date dans sa mémoire : le séisme du 29 février 1960, qui détruisit la ville. Reconstruite entièrement, c'est aujourd'hui une cité moderne, balnéaire et tournée vers la pêche et le tourisme — d'où son visage si différent des vieilles médinas de Fès ou Marrakech.",
  ],
};
