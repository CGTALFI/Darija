interface VilleCardProps {
  name: string;
  arabicName: string;
  description: string;
}

export function VilleCard({ name, arabicName, description }: VilleCardProps) {
  return (
    <div className="rounded-[var(--radius-palais)] border border-sable-fonce bg-white px-4 py-3.5 shadow-[var(--ombre-douce)]">
      <h4 className="font-heading mb-1.5 text-lg font-semibold">
        {name} <span className="font-arabic text-or text-[1.2em]">{arabicName}</span>
      </h4>
      <p className="text-sm text-pierre-fonce">{description}</p>
    </div>
  );
}

export function VillesGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3.5">{children}</div>
  );
}
