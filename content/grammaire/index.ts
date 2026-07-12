import type { Lesson } from "@/types/lesson";
import { pronoms } from "./topics/pronoms";
import { possessifs } from "./topics/possessifs";
import { avoir } from "./topics/avoir";
import { present } from "./topics/present";
import { futur } from "./topics/futur";
import { negation } from "./topics/negation";

export const grammaireLessons: Lesson[] = [pronoms, possessifs, avoir, present, futur, negation];
