"use client";

import { createContext, useContext } from "react";
import type { UserProfile } from "@/types/user";

export interface AuthState {
  profile: UserProfile | null;
  isLoading: boolean;
  updateDisplayName: (name: string) => void;
  updateAvatar: (avatarKey: string) => void;
}

export const AuthContext = createContext<AuthState | null>(null);

export function useAuth(): AuthState {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth doit être utilisé sous GuestAuthProvider");
  }
  return ctx;
}
