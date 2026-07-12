import type { ReactNode } from "react";

/** Enveloppe de défilement horizontal pour tout tableau — évite le débordement sur mobile. */
export function TableScroll({ children }: { children: ReactNode }) {
  return <div className="my-5 overflow-x-auto [-webkit-overflow-scrolling:touch]">{children}</div>;
}

export function BaseTable({ children }: { children: ReactNode }) {
  return (
    <table className="w-full min-w-[420px] border-collapse overflow-hidden rounded-[var(--radius-palais)] bg-white text-[16px] shadow-[var(--ombre-douce)]">
      {children}
    </table>
  );
}
