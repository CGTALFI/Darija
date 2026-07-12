import type { Variants, Transition } from "framer-motion";

/**
 * Presets Framer Motion partagés. Les configurations plus riches pour les
 * transitions de scène (porte du palais, entrée de module) vivent dans
 * components/scene/SceneTransition.tsx et consomment ces mêmes constantes
 * de durée/easing pour rester cohérentes.
 */

export const easeSoft: Transition["ease"] = [0.22, 1, 0.36, 1];

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeSoft } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: easeSoft } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: easeSoft } },
};

/** Utilisé par ModuleTabBar : cross-fade léger du contenu, sans SceneTransition. */
export const tabContentTransition: Transition = {
  duration: 0.25,
  ease: easeSoft,
};
