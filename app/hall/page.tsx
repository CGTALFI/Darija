import Link from "next/link";
import { MODULES } from "@/lib/modules/moduleMeta";

/**
 * Placeholder temporaire — remplacé à l'étape « Hall + transitions
 * d'entrée de module » (portes SVG, SceneTransition, ambiance).
 */
export default function HallPage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-16 text-center">
      <h1 className="font-display text-6xl text-nuit">Le Hall</h1>
      <p className="text-pierre-fonce">Choisis une porte à franchir.</p>
      <nav className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        {MODULES.map((m) => (
          <Link
            key={m.id}
            href={`/${m.id}`}
            className="font-heading rounded-[var(--radius-palais)] border border-sable-fonce bg-white px-5 py-6 text-lg shadow-[var(--ombre-douce)] transition-colors hover:bg-sable"
          >
            {m.title}
          </Link>
        ))}
      </nav>
    </main>
  );
}
