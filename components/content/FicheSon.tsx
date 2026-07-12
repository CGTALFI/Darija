interface FicheSonProps {
  glyph: string; // lettre arabe, ex: "ع"
  arabizi: string; // chiffre/symbole arabizi, ex: "3"
  name: string; // nom du son, ex: "3ayn"
  ipa: string;
  place: string;
  manner: string;
  placement: string;
  comparison: string;
  example: { ar: string; arabizi: string; fr: string };
}

export function FicheSon({
  glyph,
  arabizi,
  name,
  ipa,
  place,
  manner,
  placement,
  comparison,
  example,
}: FicheSonProps) {
  return (
    <div className="my-6 grid overflow-hidden rounded-[var(--radius-palais)] border border-sable-fonce bg-white shadow-[var(--ombre-douce)] [break-inside:avoid] sm:grid-cols-[130px_1fr]">
      <div className="flex flex-col items-center justify-center gap-1.5 bg-gradient-to-br from-nuit to-nuit-voile px-3 py-4 text-center text-ivoire sm:flex-col">
        <span className="font-arabic text-5xl leading-none">{glyph}</span>
        <span className="font-heading text-2xl font-bold text-or-clair">{arabizi}</span>
        <span className="text-xs tracking-[0.12em] text-ivoire/85 uppercase">{name}</span>
      </div>
      <dl className="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-1.5 px-5 py-4">
        <dt className="font-heading text-sm font-semibold text-rouge-sombre">API</dt>
        <dd className="font-arabic">{ipa}</dd>
        <dt className="font-heading text-sm font-semibold text-rouge-sombre">Lieu</dt>
        <dd>{place}</dd>
        <dt className="font-heading text-sm font-semibold text-rouge-sombre">Mode</dt>
        <dd>{manner}</dd>
        <dt className="font-heading text-sm font-semibold text-rouge-sombre">Placement</dt>
        <dd>{placement}</dd>
        <dt className="font-heading text-sm font-semibold text-rouge-sombre">Comparaison</dt>
        <dd>{comparison}</dd>
        <dt className="font-heading text-sm font-semibold text-rouge-sombre">Exemple</dt>
        <dd>
          <span className="font-arabic text-lg">{example.ar}</span> ·{" "}
          <span className="font-semibold text-emeraude">{example.arabizi}</span> · {example.fr}
        </dd>
      </dl>
    </div>
  );
}
