interface ExerciseItem {
  prompt: string;
  answer: string;
}

interface ExerciseBlockProps {
  number: string;
  instruction: string;
  items: ExerciseItem[];
}

export function ExerciseBlock({ number, instruction, items }: ExerciseBlockProps) {
  return (
    <div className="my-5 rounded-[var(--radius-palais)] border border-dashed border-or bg-white px-5 py-4">
      <p className="mb-2">
        <span className="font-heading font-bold text-rouge-sombre">Exercice {number}.</span>{" "}
        <span className="text-pierre-fonce italic">{instruction}</span>
      </p>
      <ol className="ml-5 list-decimal space-y-1.5">
        {items.map((item, i) => (
          <li key={i}>{item.prompt}</li>
        ))}
      </ol>
      <details className="mt-2.5 rounded-md bg-emeraude-voile px-4 py-3 text-[15px]">
        <summary className="font-heading cursor-pointer font-semibold text-emeraude">
          Voir le corrigé
        </summary>
        <ol className="mt-2 ml-5 list-decimal space-y-1">
          {items.map((item, i) => (
            <li key={i}>{item.answer}</li>
          ))}
        </ol>
      </details>
    </div>
  );
}
