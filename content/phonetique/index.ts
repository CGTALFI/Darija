import type { Lesson } from "@/types/lesson";
import { sonHamza } from "@/content/phonetique/sons/hamza";
import { sonHa } from "@/content/phonetique/sons/ha";
import { son3ayn } from "@/content/phonetique/sons/3ayn";
import { sonKha } from "@/content/phonetique/sons/kha";
import { sonGhayn } from "@/content/phonetique/sons/ghayn";
import { sonQaf } from "@/content/phonetique/sons/qaf";
import { sonRa } from "@/content/phonetique/sons/ra";
import { consonnesProchesFr } from "@/content/phonetique/consonnes-proches-fr";
import { arabiziReference } from "@/content/phonetique/arabizi-reference";
import { voyelles } from "@/content/phonetique/voyelles";

export const phonetiqueLessons: Lesson[] = [
  consonnesProchesFr,
  sonHamza,
  sonHa,
  son3ayn,
  sonKha,
  sonGhayn,
  sonQaf,
  sonRa,
  arabiziReference,
  voyelles,
];
