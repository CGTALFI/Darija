"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { easeSoft } from "@/styles/motion-presets";

/**
 * Silhouette d'arc en fer à cheval (architecture marocaine), approximée
 * par un polygone plutôt que des courbes de Bézier à main levée — plus
 * fiable à coder sans boucle de vérification visuelle.
 */
const LEFT_PANEL_CLIP =
  "polygon(0% 100%, 0% 42%, 4% 28%, 16% 16%, 36% 7%, 64% 2%, 100% 0%, 100% 100%)";
const RIGHT_PANEL_CLIP =
  "polygon(100% 100%, 100% 42%, 96% 28%, 84% 16%, 64% 7%, 36% 2%, 0% 0%, 0% 100%)";

interface PalaceDoorsProps {
  open: boolean;
  onOpened?: () => void;
  label?: string;
  /** Teinte des vantaux — permet de réutiliser ce composant pour les portes de module (étape suivante). */
  tintFrom?: string;
  tintVia?: string;
  tintTo?: string;
}

/**
 * Porte de palais à deux vantaux qui s'ouvrent en pivotant en 3D
 * (perspective CSS + rotateY Framer Motion). Composant partagé entre
 * l'entrée du hall (landing) et l'entrée de chaque module — seule la
 * teinte/étiquette change d'un usage à l'autre.
 */
export function PalaceDoors({
  open,
  onOpened,
  label,
  tintFrom = "#3a2415",
  tintVia = "#5a3822",
  tintTo = "#2a1a0f",
}: PalaceDoorsProps) {
  const reduceMotion = useReducedMotion();
  const hasFiredRef = useRef(false);

  useEffect(() => {
    if (!open || hasFiredRef.current) return;
    hasFiredRef.current = true;
    const delay = reduceMotion ? 0 : 950;
    const timeout = setTimeout(() => onOpened?.(), delay);
    return () => clearTimeout(timeout);
  }, [open, reduceMotion, onOpened]);

  const panelStyle = { backgroundImage: `linear-gradient(155deg, ${tintFrom}, ${tintVia}, ${tintTo})` };

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center" style={{ perspective: "1800px" }} aria-hidden>
      <div className="relative h-[78%] w-[58%] max-w-md [transform-style:preserve-3d]">
        <motion.div
          className="absolute inset-y-0 left-0 w-1/2"
          style={{ clipPath: LEFT_PANEL_CLIP, transformOrigin: "left center", ...panelStyle }}
          animate={open && !reduceMotion ? { rotateY: -100 } : { rotateY: 0 }}
          transition={{ duration: 0.95, ease: easeSoft }}
        />
        <motion.div
          className="absolute inset-y-0 right-0 w-1/2"
          style={{ clipPath: RIGHT_PANEL_CLIP, transformOrigin: "right center", ...panelStyle }}
          animate={open && !reduceMotion ? { rotateY: 100 } : { rotateY: 0 }}
          transition={{ duration: 0.95, ease: easeSoft }}
        />
        {!open && (
          <>
            <div className="absolute top-1/2 left-[46%] h-3 w-3 -translate-y-1/2 rounded-full bg-or-clair shadow-[0_0_8px_rgba(228,199,126,0.6)]" />
            <div className="absolute top-1/2 right-[46%] h-3 w-3 -translate-y-1/2 rounded-full bg-or-clair shadow-[0_0_8px_rgba(228,199,126,0.6)]" />
            {label && (
              <span className="font-heading absolute inset-x-0 bottom-6 text-center text-sm tracking-[0.2em] text-or-clair uppercase">
                {label}
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
}
