import { histoire } from "@/content/culture/histoire";
import { Timeline, Callout } from "@/components/content";

export default function ChroniquesHistoirePage() {
  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <h2 className="font-heading text-3xl text-nuit">Histoire</h2>
      <p className="text-pierre-fonce leading-relaxed">{histoire.intro}</p>

      <Timeline caption="Les grandes dynasties" rows={histoire.timeline} />

      {histoire.notes.map((note, i) => (
        <Callout key={i} variant="note-regionale">
          {note}
        </Callout>
      ))}
    </section>
  );
}
