interface AlphaCellData {
  glyph: string;
  name: string;
  arabizi?: string;
}

export function AlphaGrid({ cells }: { cells: AlphaCellData[] }) {
  return (
    <div className="my-5 grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2.5">
      {cells.map((cell, i) => (
        <div
          key={i}
          className="rounded-[var(--radius-palais)] border border-sable-fonce bg-white px-1.5 py-3 text-center shadow-[var(--ombre-douce)]"
        >
          <div className="font-arabic text-4xl leading-none text-nuit">{cell.glyph}</div>
          <div className="mt-1.5 text-[13px] text-pierre-fonce">
            {cell.name}
            {cell.arabizi && <span className="font-semibold text-rouge-sombre"> — {cell.arabizi}</span>}
          </div>
        </div>
      ))}
    </div>
  );
}
