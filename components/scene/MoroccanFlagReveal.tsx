"use client";

import { motion } from "framer-motion";

/** Drapeau marocain discret, en fondu — étoile à cinq branches verte sur fond rouge. */
export function MoroccanFlagReveal() {
  return (
    <motion.svg
      viewBox="0 0 60 40"
      className="h-6 w-9"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.85 }}
      transition={{ delay: 1.2, duration: 1.4 }}
      aria-label="Drapeau du Maroc"
      role="img"
    >
      <rect width="60" height="40" fill="#C1272D" />
      <path
        d="M30,12 L32.35,17.53 L38.36,17.53 L33.5,21.06 L35.29,27 L30,23.53 L24.71,27 L26.5,21.06 L21.64,17.53 L27.65,17.53 Z"
        fill="none"
        stroke="#006233"
        strokeWidth="1.6"
      />
    </motion.svg>
  );
}
