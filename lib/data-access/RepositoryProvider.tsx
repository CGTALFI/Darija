"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { ProgressRepository } from "@/lib/data-access/ProgressRepository";
import type { UserRepository } from "@/lib/data-access/UserRepository";
import { LocalProgressRepository } from "@/lib/data-access/LocalProgressRepository";
import { LocalUserRepository } from "@/lib/data-access/LocalUserRepository";

interface Repositories {
  progress: ProgressRepository;
  user: UserRepository;
}

const RepositoryContext = createContext<Repositories | null>(null);

/**
 * Seul point de bascule vers Supabase plus tard : remplacer les deux
 * classes Local* ci-dessous par leurs équivalents Supabase, choisi par
 * exemple via NEXT_PUBLIC_DATA_BACKEND. Aucun composant appelant ne
 * change — ils passent tous par useRepositories().
 */
export function RepositoryProvider({ children }: { children: ReactNode }) {
  const repositories = useMemo<Repositories>(
    () => ({
      progress: new LocalProgressRepository(),
      user: new LocalUserRepository(),
    }),
    [],
  );

  return (
    <RepositoryContext.Provider value={repositories}>{children}</RepositoryContext.Provider>
  );
}

export function useRepositories(): Repositories {
  const ctx = useContext(RepositoryContext);
  if (!ctx) {
    throw new Error("useRepositories doit être utilisé sous RepositoryProvider");
  }
  return ctx;
}
