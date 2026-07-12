import type { DarijaCefrTag } from "@/types/cefr";
import type { ModuleId } from "@/types/module";
import type { Register } from "@/types/register";

/** Bloc de prose générique — pour le texte qui ne rentre dans aucune interface dédiée. */
export type RichBlock =
  | { type: "heading"; level: 2 | 3 | 4; text: string }
  | { type: "paragraph"; text: string }
  | {
      type: "callout";
      variant: "retenir" | "astuce" | "piege" | "note-regionale";
      title?: string;
      text: string;
    };

interface LessonBase {
  id: string;
  moduleId: ModuleId;
  tabSlug?: string;
  title: string;
  cefrTags: DarijaCefrTag[];
  order: number;
}

export interface PhoneticSheet extends LessonBase {
  kind: "fiche-son";
  glyph: string;
  arabizi: string;
  name: string;
  ipa: string;
  place: string;
  manner: string;
  placement: string;
  comparison: string;
  example: { ar: string; arabizi: string; fr: string };
}

export interface DialogueLesson extends LessonBase {
  kind: "dialogue";
  register: Register;
  scene?: string;
  lines: { speaker: string; ar: string; translit: string; fr: string }[];
}

export interface GrammarTopic extends LessonBase {
  kind: "grammaire";
  intro?: RichBlock[];
  conjugationTable?: { person: string; form: string; meaning: string }[];
  patterns?: string[];
}

export interface VocabList extends LessonBase {
  kind: "vocabulaire";
  items: { ar: string; arabizi: string; pronFr?: string; ipa?: string; meaning: string }[];
}

export type Lesson = PhoneticSheet | DialogueLesson | GrammarTopic | VocabList;
