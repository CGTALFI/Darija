import Link from "next/link";
import type { ReactNode } from "react";

interface ModuleBannerProps {
  title: string;
  intro: string;
  children?: ReactNode; // illustration/ornement optionnel
}

export function ModuleBanner({ title, intro, children }: ModuleBannerProps) {
  return (
    <header className="mb-6 border-b border-sable-fonce pb-6">
      <Link href="/hall" className="font-heading text-sm text-pierre-fonce hover:text-nuit">
        ← Retour au hall
      </Link>
      <h1 className="font-display mt-2 text-5xl text-nuit">{title}</h1>
      <p className="mt-2 max-w-2xl text-pierre-fonce">{intro}</p>
      {children}
    </header>
  );
}
