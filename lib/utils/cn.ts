import { clsx, type ClassValue } from "clsx";

/** Fusionne des classes conditionnelles — fine couche autour de clsx, point d'extension unique si un merge Tailwind plus intelligent devient nécessaire plus tard. */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
