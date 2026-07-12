import { TableScroll, BaseTable } from "@/components/content/TableScroll";

interface ConjugationRow {
  person: string;
  form: string;
  meaning: string;
}

export function ConjugationTable({ caption, rows }: { caption?: string; rows: ConjugationRow[] }) {
  return (
    <TableScroll>
      <BaseTable>
        {caption && (
          <caption className="font-heading mb-2 text-left text-[17px] font-semibold text-rouge-sombre">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="bg-rouge-sombre text-ivoire">
            <th className="font-heading px-3.5 py-2.5 text-left text-[15px] font-semibold">Personne</th>
            <th className="font-heading px-3.5 py-2.5 text-left text-[15px] font-semibold">Forme</th>
            <th className="font-heading px-3.5 py-2.5 text-left text-[15px] font-semibold">Sens</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="odd:bg-white even:bg-ivoire-voile">
              <td className="font-heading border-t border-sable-fonce px-3.5 py-2.5 font-semibold whitespace-nowrap text-rouge-sombre">
                {row.person}
              </td>
              <td className="border-t border-sable-fonce px-3.5 py-2.5 font-semibold text-emeraude">
                {row.form}
              </td>
              <td className="border-t border-sable-fonce px-3.5 py-2.5">{row.meaning}</td>
            </tr>
          ))}
        </tbody>
      </BaseTable>
    </TableScroll>
  );
}
