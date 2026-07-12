"use client";

import { useEffect, useState, useCallback, type ReactNode } from "react";
import { AuthContext, type AuthState } from "@/lib/auth/AuthContext";
import { useRepositories } from "@/lib/data-access/RepositoryProvider";
import type { UserProfile } from "@/types/user";

const GUEST_ID_KEY = "darija-palace:guest-id";

function createGuestProfile(id: string): UserProfile {
  return {
    id,
    displayName: "Voyageur",
    avatarKey: "voyageur-1",
    createdAt: new Date().toISOString(),
    isGuest: true,
  };
}

/**
 * Implémentation « invité » de l'authentification : identifiant stable
 * généré côté client et stocké en localStorage, profil créé au premier
 * passage. Remplaçable plus tard par un provider Supabase Auth sans
 * changer la forme d'AuthState ni les appels à useAuth().
 */
export function GuestAuthProvider({ children }: { children: ReactNode }) {
  const { user: userRepository } = useRepositories();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let id = window.localStorage.getItem(GUEST_ID_KEY);
    if (!id) {
      id = `guest-${crypto.randomUUID()}`;
      window.localStorage.setItem(GUEST_ID_KEY, id);
    }
    const existing = userRepository.get(id);
    const resolved = existing ?? createGuestProfile(id);
    if (!existing) userRepository.save(resolved);
    setProfile(resolved);
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateDisplayName = useCallback(
    (name: string) => {
      setProfile((prev) => {
        if (!prev) return prev;
        const next = { ...prev, displayName: name };
        userRepository.save(next);
        return next;
      });
    },
    [userRepository],
  );

  const updateAvatar = useCallback(
    (avatarKey: string) => {
      setProfile((prev) => {
        if (!prev) return prev;
        const next = { ...prev, avatarKey };
        userRepository.save(next);
        return next;
      });
    },
    [userRepository],
  );

  const value: AuthState = { profile, isLoading, updateDisplayName, updateAvatar };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
