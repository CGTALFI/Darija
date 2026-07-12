/**
 * Miroir TypeScript des tokens de couleur définis dans styles/theme.css.
 * Source de vérité pour tout code qui a besoin des valeurs de couleur en
 * dehors de Tailwind (Framer Motion variants, canvas des particules
 * ambiantes, SVG générés dynamiquement). Garder synchronisé avec
 * styles/theme.css à la main — peu de valeurs, dérive peu probable.
 */
export const palette = {
  ivoire: "#FBF6EC",
  ivoireVoile: "#F3EAD9",
  sable: "#EDE0C8",
  sableFonce: "#D9C6A0",
  pierre: "#B9AE9A",
  pierreFonce: "#6E6656",

  nuit: "#1E1912",
  nuitVoile: "#2A231A",
  nuitProfond: "#14100C",

  or: "#B8923E",
  orClair: "#E4C77E",
  orSombre: "#8C6D2F",

  rouge: "#9E2B25",
  rougeSombre: "#7A1F1B",

  emeraude: "#2F6B58",
  emeraudeVoile: "#E4EEEA",
} as const;

export type PaletteKey = keyof typeof palette;
