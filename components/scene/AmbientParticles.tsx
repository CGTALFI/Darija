"use client";

import { useReducedMotion } from "framer-motion";

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  delay: `${(i % 7) * 1.3}s`,
  duration: `${9 + (i % 5) * 2}s`,
  size: 2 + (i % 3),
}));

/** Poussière/lumière flottante en CSS pur — coupée entièrement sous prefers-reduced-motion. */
export function AmbientParticles() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="bg-or-clair/40 absolute rounded-full"
          style={{
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            animation: `float-up ${p.duration} linear ${p.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
