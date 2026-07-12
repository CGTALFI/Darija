import {
  Callout,
  FicheSon,
  DialogueBlock,
  VocabTable,
  ConjugationTable,
  Timeline,
  ExerciseBlock,
  VilleCard,
  VillesGrid,
  AlphaGrid,
} from "@/components/content";

/**
 * Galerie de composants — non liée depuis la navigation, sert de banc
 * de vérification visuelle pendant le développement des primitives UI.
 */
export default function ShowcasePage() {
  return (
    <main className="mx-auto max-w-3xl space-y-10 px-6 py-12">
      <h1 className="font-display text-5xl text-nuit">Galerie des composants</h1>

      <section>
        <h2>Encadrés</h2>
        <Callout variant="retenir">Les encadrés colorés guident la lecture.</Callout>
        <Callout variant="astuce">Un moyen mnémotechnique pour retenir plus facilement.</Callout>
        <Callout variant="piege">Une erreur fréquente à éviter.</Callout>
        <Callout variant="note-regionale">Ce qui change entre Agadir, Casa et Amizmiz.</Callout>
      </section>

      <section>
        <h2>Fiche de son</h2>
        <FicheSon
          glyph="ع"
          arabizi="3"
          name="3ayn"
          ipa="/ʕ/"
          place="pharyngal"
          manner="fricative sonore"
          placement="racine de la langue reculée, gorge serrée"
          comparison="absent en français"
          example={{ ar: "عين", arabizi: "3ayn", fr: "œil" }}
        />
      </section>

      <section>
        <h2>Dialogue</h2>
        <DialogueBlock
          scene="On se croise dans la rue"
          register="detendu"
          lines={[
            { speaker: "Amine", ar: "أهلا صاحبي، كي داير؟", translit: "ahlan sa7bi, ki dayer ?", fr: "Salut, comment tu vas ?" },
            { speaker: "Karim", ar: "لاباس الحمد لله", translit: "labas l7amdoullah", fr: "Ça va Dieu merci" },
          ]}
        />
      </section>

      <section>
        <h2>Tableaux</h2>
        <VocabTable
          caption="Salutations"
          items={[
            { ar: "سلام", arabizi: "salam", pronFr: "sa-lam", ipa: "/saˈlam/", meaning: "salut" },
            { ar: "بسلامة", arabizi: "bslama", meaning: "au revoir" },
          ]}
        />
        <ConjugationTable
          caption="Présent — kteb"
          rows={[
            { person: "ana", form: "kanekteb", meaning: "j'écris" },
            { person: "nta", form: "katekteb", meaning: "tu écris" },
          ]}
        />
        <Timeline
          caption="Dynasties"
          rows={[
            { period: "788–974", label: "Idrissides" },
            { period: "1666–…", label: "Alaouites" },
          ]}
        />
      </section>

      <section>
        <h2>Exercice</h2>
        <ExerciseBlock
          number="1"
          instruction="Écris en arabizi les sons de gorge que tu entends."
          items={[
            { prompt: "حال", answer: "7al (état)" },
            { prompt: "عام", answer: "3am (année)" },
          ]}
        />
      </section>

      <section>
        <h2>Villes</h2>
        <VillesGrid>
          <VilleCard name="Agadir" arabicName="أݣادير" description="Souss, océan, amazighe tachelhit." />
          <VilleCard name="Casablanca" arabicName="كازا" description="Métropole, darija urbaine rapide." />
          <VilleCard name="Amizmiz" arabicName="أمزميز" description="Piémont de l'Atlas, marché hebdomadaire." />
        </VillesGrid>
      </section>

      <section>
        <h2>Alphabet</h2>
        <AlphaGrid
          cells={[
            { glyph: "ب", name: "bā", arabizi: "b" },
            { glyph: "ح", name: "ḥā", arabizi: "7" },
            { glyph: "ع", name: "3ayn", arabizi: "3" },
            { glyph: "ق", name: "qāf", arabizi: "9" },
          ]}
        />
      </section>
    </main>
  );
}
