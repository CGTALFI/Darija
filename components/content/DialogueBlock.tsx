import { cn } from "@/lib/utils/cn";
import type { Register } from "@/types/register";

export type { Register };

const REGISTER_LABELS: Record<Register, string> = {
  detendu: "détendu",
  tendre: "tendre",
  "semi-formel": "semi-formel",
  poli: "poli",
};

const REGISTER_STYLES: Record<Register, string> = {
  detendu: "bg-emeraude",
  tendre: "bg-rouge",
  "semi-formel": "bg-nuit",
  poli: "bg-or-sombre",
};

export function RegisterBadge({ register }: { register: Register }) {
  return (
    <span
      className={cn(
        "font-heading inline-block rounded-full px-3 py-0.5 align-middle text-xs tracking-[0.08em] text-ivoire uppercase",
        REGISTER_STYLES[register],
      )}
    >
      {REGISTER_LABELS[register]}
    </span>
  );
}

interface DialogueLine {
  speaker: string;
  ar: string;
  translit: string;
  fr: string;
}

interface DialogueBlockProps {
  scene?: string;
  register?: Register;
  lines: DialogueLine[];
}

export function DialogueBlock({ scene, register, lines }: DialogueBlockProps) {
  return (
    <div className="my-5 rounded-[var(--radius-palais)] border border-sable-fonce bg-white px-5 py-3 shadow-[var(--ombre-douce)] [break-inside:avoid]">
      {(scene || register) && (
        <div className="mt-2 mb-1 flex items-center gap-2 font-heading text-sm text-pierre-fonce italic">
          {scene && <span>— {scene} —</span>}
          {register && <RegisterBadge register={register} />}
        </div>
      )}
      {lines.map((line, i) => (
        <div
          key={i}
          className={cn(
            "grid grid-cols-[74px_1fr] items-start gap-3 border-b border-dotted border-or-clair py-2.5",
            i === lines.length - 1 && "border-b-0",
          )}
        >
          <div className="font-heading pt-0.5 font-semibold text-rouge-sombre">{line.speaker}</div>
          <div>
            <span className="font-arabic block text-right text-[1.35em] leading-normal">
              {line.ar}
            </span>
            <span className="block text-[0.95em] font-medium text-emeraude italic">
              {line.translit}
            </span>
            <span className="block text-[0.92em] text-pierre-fonce italic">{line.fr}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
