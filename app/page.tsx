/**
 * Placeholder temporaire — remplacé à l'étape « Landing + animation d'entrée »
 * (hero, porte du palais, drapeau, particules ambiantes, SceneTransition).
 * Sert ici uniquement à vérifier que les tokens de thème et les polices
 * chargent correctement.
 */
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 bg-ivoire px-6 text-center">
      <p className="font-heading text-sm tracking-[0.3em] text-or-sombre uppercase">
        Une aventure narrative
      </p>
      <h1 className="font-display text-7xl text-nuit">Le Palais du Darija</h1>
      <p className="font-body max-w-md text-pierre-fonce">
        Le chantier est en cours — la porte du palais s&apos;ouvrira bientôt.
      </p>
    </main>
  );
}
