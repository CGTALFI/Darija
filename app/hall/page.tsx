import { ModuleCard } from "@/components/nav";
import { AmbientParticles } from "@/components/scene";
import { MODULES } from "@/lib/modules/moduleMeta";
import type { ModuleId } from "@/types/module";

const DESCRIPTIONS: Record<ModuleId, string> = {
  chroniques: "Géographie, histoire et culture du royaume.",
  explorateurs: "Ton profil, ta progression, tes badges.",
  academie: "Le cours complet, du son à la phrase.",
  bibliotheque: "Vidéos, podcasts et ressources choisies.",
};

export default function HallPage() {
  return (
    <main className="relative flex flex-1 flex-col items-center gap-10 overflow-hidden bg-gradient-to-b from-[#EDE0C8] via-[#F3EAD9] to-[#FBF6EC] px-6 py-14">
      <AmbientParticles />

      <div className="relative z-10 text-center">
        <h1 className="font-display text-6xl text-nuit">Le Hall du Palais</h1>
        <p className="mt-2 text-pierre-fonce">Choisis la porte que tu veux franchir.</p>
      </div>

      <div className="relative z-10 grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        {MODULES.map((m) => (
          <ModuleCard key={m.id} module={m} description={DESCRIPTIONS[m.id]} />
        ))}
      </div>
    </main>
  );
}
