import type { UserProgress } from "@/types/progress";

/**
 * Point d'entrée UNIQUE pour savoir si le secret du palais est déverrouillé.
 * Tout élément narratif qui doit réagir à la complétion à 100 % appelle
 * cette fonction (via useSecretUnlock()) — jamais de check dupliqué ailleurs.
 */
export function deriveSecretUnlocked(userProgress: UserProgress | undefined): boolean {
  if (!userProgress) return false;
  return userProgress.globalPercentComplete >= 100 && userProgress.cefrLevelReached === "C2";
}
