import { societe } from "@/content/culture/societe";
import { VocabTable, Callout, TableScroll, BaseTable } from "@/components/content";

export default function ChroniquesLanguePage() {
  return (
    <section className="mx-auto max-w-3xl space-y-8">
      <h2 className="font-heading text-3xl text-nuit">Langue &amp; culture</h2>

      {/* --- Langues du Maroc --- */}
      <div className="space-y-3">
        <h3 className="font-heading text-2xl text-nuit">Les langues du Maroc</h3>
        <TableScroll>
          <BaseTable>
            <thead>
              <tr className="bg-nuit text-ivoire">
                <th className="font-heading px-3.5 py-2.5 text-left text-[15px] font-semibold">
                  Langue
                </th>
                <th className="font-heading px-3.5 py-2.5 text-left text-[15px] font-semibold">
                  Rôle &amp; zone
                </th>
              </tr>
            </thead>
            <tbody>
              {societe.langues.map((l, i) => (
                <tr key={i} className="odd:bg-white even:bg-ivoire-voile">
                  <td className="border-t border-sable-fonce px-3.5 py-2.5 font-semibold">
                    {l.name}
                  </td>
                  <td className="border-t border-sable-fonce px-3.5 py-2.5">{l.description}</td>
                </tr>
              ))}
            </tbody>
          </BaseTable>
        </TableScroll>
      </div>

      {/* --- Variétés amazighes --- */}
      <div className="space-y-3">
        <h3 className="font-heading text-2xl text-nuit">Les variétés amazighes</h3>
        <ul className="list-disc space-y-1.5 pl-6 text-pierre-fonce">
          {societe.amazigheVarietes.map((v, i) => (
            <li key={i}>
              <strong>{v.region}</strong> — {v.variete}
            </li>
          ))}
        </ul>
      </div>

      {societe.linguistiqueNotes.map((note, i) => (
        <Callout key={i} variant="astuce">
          {note}
        </Callout>
      ))}

      {/* --- Musique --- */}
      <div className="space-y-3">
        <h3 className="font-heading text-2xl text-nuit">Musique</h3>
        <ul className="list-disc space-y-1.5 pl-6 text-pierre-fonce">
          {societe.musique.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </div>

      {/* --- Artisanat --- */}
      <div className="space-y-3">
        <h3 className="font-heading text-2xl text-nuit">Artisanat</h3>
        <ul className="list-disc space-y-1.5 pl-6 text-pierre-fonce">
          {societe.artisanat.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>

      {/* --- Codes de conduite --- */}
      <div className="space-y-3">
        <h3 className="font-heading text-2xl text-nuit">Codes de conduite</h3>
        <ul className="list-disc space-y-1.5 pl-6 text-pierre-fonce">
          {societe.codesConduite.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>

      {/* --- Expressions du quotidien --- */}
      <div className="space-y-3">
        <h3 className="font-heading text-2xl text-nuit">Expressions du quotidien</h3>
        <VocabTable
          caption="Dieu dans la langue"
          items={societe.expressions.map((e) => ({
            ar: e.ar,
            arabizi: e.arabizi,
            meaning: e.meaning,
          }))}
        />
      </div>
    </section>
  );
}
