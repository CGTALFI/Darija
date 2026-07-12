"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { fadeIn } from "@/styles/motion-presets";

/**
 * Cross-fade léger du contenu principal au changement d'onglet — PAS
 * SceneTransition (réservée à l'entrée dans un grand module). Simple
 * fondu, clé sur le pathname pour se redéclencher à chaque navigation.
 */
export function ModuleContentTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} variants={fadeIn} initial="hidden" animate="visible" exit="exit">
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
