import type { UserProfile } from "@/types/user";
import type { UserRepository } from "@/lib/data-access/UserRepository";

const STORAGE_PREFIX = "darija-palace:user:";

export class LocalUserRepository implements UserRepository {
  get(userId: string): UserProfile | null {
    if (typeof window === "undefined") return null;
    const raw = window.localStorage.getItem(STORAGE_PREFIX + userId);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as UserProfile;
    } catch {
      return null;
    }
  }

  save(profile: UserProfile): void {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_PREFIX + profile.id, JSON.stringify(profile));
  }
}
