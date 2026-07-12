import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export type CalloutVariant = "retenir" | "astuce" | "piege" | "note-regionale";

const VARIANT_STYLES: Record<
  CalloutVariant,
  { icon: string; border: string; bg: string; title: string }
> = {
  retenir: {
    icon: "📌",
    border: "border-emeraude",
    bg: "bg-emeraude-voile",
    title: "text-emeraude",
  },
  astuce: {
    icon: "💡",
    border: "border-or",
    bg: "bg-or-clair/25",
    title: "text-or-sombre",
  },
  piege: {
    icon: "⚠️",
    border: "border-rouge",
    bg: "bg-rouge/10",
    title: "text-rouge-sombre",
  },
  "note-regionale": {
    icon: "📍",
    border: "border-pierre-fonce",
    bg: "bg-sable",
    title: "text-pierre-fonce",
  },
};

const DEFAULT_TITLES: Record<CalloutVariant, string> = {
  retenir: "À retenir",
  astuce: "Astuce",
  piege: "Piège fréquent",
  "note-regionale": "Note régionale",
};

interface CalloutProps {
  variant: CalloutVariant;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Callout({ variant, title, children, className }: CalloutProps) {
  const styles = VARIANT_STYLES[variant];
  return (
    <div
      className={cn(
        "relative my-6 rounded-[var(--radius-palais)] border-l-4 py-4 pr-5 pl-14 font-body text-[17px] leading-relaxed",
        styles.border,
        styles.bg,
        className,
      )}
    >
      <span aria-hidden className="absolute top-4 left-4 text-2xl leading-none">
        {styles.icon}
      </span>
      <span className={cn("font-heading mb-1 block text-lg font-bold", styles.title)}>
        {title ?? DEFAULT_TITLES[variant]}
      </span>
      {children}
    </div>
  );
}
