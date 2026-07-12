import type { UserProgress } from "@/types/progress";

/**
 * Contrat d'accès à la progression. Implémentation locale aujourd'hui
 * (LocalProgressRepository, localStorage), Supabase demain — aucun
 * composant appelant ne doit changer quand l'implémentation change.
 */
export interface ProgressRepository {
  get(userId: string): UserProgress | null;
  save(progress: UserProgress): void;
  clear(userId: string): void;
}
