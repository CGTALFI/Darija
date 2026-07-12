import type { UserProgress } from "@/types/progress";
import type { ProgressRepository } from "@/lib/data-access/ProgressRepository";

const STORAGE_PREFIX = "darija-palace:progress:";

export class LocalProgressRepository implements ProgressRepository {
  get(userId: string): UserProgress | null {
    if (typeof window === "undefined") return null;
    const raw = window.localStorage.getItem(STORAGE_PREFIX + userId);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as UserProgress;
    } catch {
      return null;
    }
  }

  save(progress: UserProgress): void {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_PREFIX + progress.userId, JSON.stringify(progress));
  }

  clear(userId: string): void {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(STORAGE_PREFIX + userId);
  }
}
