import { societe } from "@/content/culture/societe";
import { Callout } from "@/components/content";

export default function ChroniquesPresentationPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <h2 className="font-heading text-3xl text-nuit">Bienvenue dans les Chroniques</h2>
      <p className="text-pierre-fonce leading-relaxed">
        Ce module te plonge dans le Maroc — sa géographie, son histoire, ses langues, sa
        gastronomie et ses codes culturels. Trois fils rouges te guident : Agadir la balnéaire,
        Casablanca la métropole, Amizmiz la montagnarde.
      </p>

      <h3 className="font-heading text-2xl text-nuit">Le Maroc en bref</h3>
      {societe.geopolitique.map((para, i) => (
        <p key={i} className="text-pierre-fonce leading-relaxed">
          {para}
        </p>
      ))}

      <Callout variant="retenir">{societe.bilan}</Callout>
    </section>
  );
}
