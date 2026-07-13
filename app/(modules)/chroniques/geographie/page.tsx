import { geographie } from "@/content/culture/villes";
import { VilleCard, VillesGrid, Callout } from "@/components/content";

export default function ChroniquesGeographiePage() {
  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <h2 className="font-heading text-3xl text-nuit">Géographie</h2>
      <p className="text-pierre-fonce leading-relaxed">{geographie.intro}</p>

      <VillesGrid>
        {geographie.villes.map((v) => (
          <VilleCard
            key={v.name}
            name={v.name}
            arabicName={v.arabicName}
            description={v.description}
          />
        ))}
      </VillesGrid>

      {geographie.notes.map((note, i) => (
        <Callout key={i} variant="note-regionale">
          {note}
        </Callout>
      ))}
    </section>
  );
}
