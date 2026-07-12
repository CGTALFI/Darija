import type { UserProfile } from "@/types/user";

export interface UserRepository {
  get(userId: string): UserProfile | null;
  save(profile: UserProfile): void;
}
