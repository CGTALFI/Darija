import { gastronomie } from "@/content/culture/gastronomie";
import { VocabTable, Callout } from "@/components/content";

export default function ChroniquesGastronomiePage() {
  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <h2 className="font-heading text-3xl text-nuit">Gastronomie</h2>
      <p className="text-pierre-fonce leading-relaxed">{gastronomie.intro}</p>

      <VocabTable
        caption="Les incontournables"
        items={gastronomie.plats.map((p) => ({
          ar: p.ar,
          arabizi: p.arabizi,
          meaning: p.meaning,
        }))}
      />

      {gastronomie.notes.map((note, i) => (
        <Callout key={i} variant="note-regionale">
          {note}
        </Callout>
      ))}
    </section>
  );
}
