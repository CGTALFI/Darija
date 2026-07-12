"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PalaceDoors } from "@/components/scene/PalaceDoors";
import type { ModuleMeta, ModuleId } from "@/types/module";

const MODULE_TINTS: Record<ModuleId, { from: string; via: string; to: string }> = {
  chroniques: { from: "#5a231c", via: "#7a3226", to: "#3a1712" },
  explorateurs: { from: "#5a3822", via: "#8c6d2f", to: "#3a2a15" },
  academie: { from: "#123f36", via: "#2f6b58", to: "#0c2b24" },
  bibliotheque: { from: "#4a4438", via: "#6e6656", to: "#2e2a22" },
};

interface ModuleCardProps {
  module: ModuleMeta;
  description: string;
}

/** Carte-porte du hall : même mécanisme d'ouverture que la porte d'entrée, teinte propre à chaque module. */
export function ModuleCard({ module, description }: ModuleCardProps) {
  const [opening, setOpening] = useState(false);
  const router = useRouter();
  const tint = MODULE_TINTS[module.id];

  return (
    <button
      type="button"
      onClick={() => setOpening(true)}
      disabled={opening}
      aria-label={`Entrer dans ${module.title}`}
      className="relative flex h-72 flex-col items-center justify-end gap-1.5 overflow-hidden rounded-[var(--radius-palais)] border border-sable-fonce bg-white/70 px-4 pt-4 pb-5 text-center shadow-[var(--ombre-douce)] transition-transform hover:scale-[1.015] disabled:pointer-events-none"
    >
      <div className="relative h-40 w-28">
        <PalaceDoors
          open={opening}
          onOpened={() => router.push(`/${module.id}`)}
          tintFrom={tint.from}
          tintVia={tint.via}
          tintTo={tint.to}
        />
      </div>
      <h2 className="font-heading text-xl text-nuit">{module.title}</h2>
      <p className="text-sm text-pierre-fonce">{description}</p>
    </button>
  );
}
