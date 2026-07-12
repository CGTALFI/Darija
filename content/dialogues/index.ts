import type { Lesson } from "@/types/lesson";
import { dialogueRueAmis } from "@/content/dialogues/rue-amis";
import { dialogueRendezVousTelephone } from "@/content/dialogues/rendez-vous-telephone";
import { dialogueTableFamille } from "@/content/dialogues/table-famille";
import { dialogueParentFille } from "@/content/dialogues/parent-fille";
import { dialogueBureauMatin } from "@/content/dialogues/bureau-matin";
import { dialogueDemanderService } from "@/content/dialogues/demander-service";
import { dialogueDemanderChemin } from "@/content/dialogues/demander-chemin";
import { dialogueSoukMarchander } from "@/content/dialogues/souk-marchander";

export const dialogueLessons: Lesson[] = [
  dialogueRueAmis,
  dialogueRendezVousTelephone,
  dialogueTableFamille,
  dialogueParentFille,
  dialogueBureauMatin,
  dialogueDemanderService,
  dialogueDemanderChemin,
  dialogueSoukMarchander,
];
