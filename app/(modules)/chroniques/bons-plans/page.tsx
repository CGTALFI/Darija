import { Callout } from "@/components/content";

export default function ChroniquesBonsPlansPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <h2 className="font-heading text-3xl text-nuit">Bons plans</h2>
      <p className="text-pierre-fonce leading-relaxed">
        Quelques conseils pratiques pour profiter du Maroc — que tu prépares un voyage ou que tu
        veuilles simplement mieux comprendre le quotidien marocain.
      </p>

      <div className="space-y-3">
        <h3 className="font-heading text-2xl text-nuit">Monnaie &amp; pourboire</h3>
        <p className="text-pierre-fonce leading-relaxed">
          La monnaie est le <strong>dirham marocain (MAD)</strong>. On dit{" "}
          <span className="font-semibold text-emeraude">drhem</span> en darija. Le pourboire
          (<span className="font-semibold text-emeraude">baqchich</span>) est courant : quelques
          dirhams au café, au gardien de voiture, au porteur de bagages. Dans un restaurant, 10 %
          est apprécié.
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="font-heading text-2xl text-nuit">Hammam &amp; souk</h3>
        <p className="text-pierre-fonce leading-relaxed">
          Le <strong>hammam</strong> est une institution : bain de vapeur collectif, gommage au
          savon noir et gant de crin (<span className="font-semibold text-emeraude">kess</span>).
          Le <strong>souk</strong> est le marché traditionnel — on négocie presque tout. Commence
          à 50 % du prix annoncé et remonte, avec le sourire.
        </p>
      </div>

      <Callout variant="astuce" title="Agadir">
        Station balnéaire et porte du Souss. Profite de la corniche, du souk El Had (un des plus
        grands du Maroc) et des excursions dans la vallée du Paradis ou vers Taghazout pour le
        surf. L&apos;huile d&apos;argan et l&apos;amlou font les meilleurs souvenirs.
      </Callout>

      <Callout variant="astuce" title="Casablanca">
        Métropole économique. La mosquée Hassan II (bord de mer, minaret de 210 m) est
        incontournable. Explore le quartier des Habous pour l&apos;artisanat, la corniche
        d&apos;Aïn Diab pour le coucher de soleil, et les restaurants de la Marina pour le
        poisson.
      </Callout>

      <Callout variant="astuce" title="Amizmiz">
        Bourgade amazighe au pied du Haut Atlas, à 55 km de Marrakech. Souk du mardi animé,
        randonnées dans les villages alentour, accueil chaleureux. La région a été durement
        touchée par le séisme d&apos;Al Haouz (sept. 2023) — le tourisme solidaire y aide à la
        reconstruction.
      </Callout>

      <div className="space-y-3">
        <h3 className="font-heading text-2xl text-nuit">Quelques mots utiles pour le voyage</h3>
        <ul className="list-disc space-y-1.5 pl-6 text-pierre-fonce">
          <li>
            <span className="font-semibold text-emeraude">sme7 liya</span> — excuse-moi /
            pardon
          </li>
          <li>
            <span className="font-semibold text-emeraude">b ch7al ?</span> — combien ?
          </li>
          <li>
            <span className="font-semibold text-emeraude">neqqes chwiya</span> — baisse un peu
            (le prix)
          </li>
          <li>
            <span className="font-semibold text-emeraude">fin kayn… ?</span> — où se trouve… ?
          </li>
          <li>
            <span className="font-semibold text-emeraude">bslama</span> — au revoir
          </li>
        </ul>
      </div>

      <Callout variant="retenir">
        Le Maroc se vit avec le sourire et la patience. Les mots de darija que tu apprends ici
        ouvriront les portes bien plus que n&apos;importe quel guide touristique.
      </Callout>
    </section>
  );
}
