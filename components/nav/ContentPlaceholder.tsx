/** Repli visuel pour un onglet dont le contenu réel n'est pas encore câblé (étapes suivantes). */
export function ContentPlaceholder({ label }: { label: string }) {
  return (
    <div className="rounded-[var(--radius-palais)] border border-dashed border-sable-fonce bg-sable/40 px-6 py-10 text-center text-pierre-fonce italic">
      « {label} » — contenu à venir.
    </div>
  );
}
