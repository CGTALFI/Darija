"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PalaceDoors, AmbientParticles, MoroccanFlagReveal } from "@/components/scene";

export default function Home() {
  const [opening, setOpening] = useState(false);
  const router = useRouter();

  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#F6E9CE] via-[#EDE0C8] to-[#C9BFAE] px-6 py-16 text-center">
      <AmbientParticles />

      <div className="relative z-10 flex flex-col items-center gap-3">
        <MoroccanFlagReveal />
        <p className="font-heading text-sm tracking-[0.3em] text-or-sombre uppercase">
          Une aventure narrative
        </p>
        <h1 className="font-display text-7xl text-nuit sm:text-8xl">Le Palais du Darija</h1>
        <p className="font-body max-w-md text-lg text-pierre-fonce italic">
          Un voyageur, un palais oublié, une langue à réveiller.
        </p>

        <button
          type="button"
          onClick={() => setOpening(true)}
          disabled={opening}
          aria-label="Ouvrir la porte du palais"
          className="relative mt-10 h-64 w-44 disabled:pointer-events-none"
        >
          <PalaceDoors open={opening} onOpened={() => router.push("/hall")} label="Entrer" />
        </button>
        <span className="font-heading text-xs tracking-[0.15em] text-pierre-fonce uppercase">
          Clique sur la porte
        </span>
      </div>
    </main>
  );
}
