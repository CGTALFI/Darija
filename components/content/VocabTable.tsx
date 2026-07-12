import { TableScroll, BaseTable } from "@/components/content/TableScroll";

interface VocabItem {
  ar: string;
  arabizi: string;
  pronFr?: string;
  ipa?: string;
  meaning: string;
}

interface VocabTableProps {
  caption?: string;
  items: VocabItem[];
}

export function VocabTable({ caption, items }: VocabTableProps) {
  return (
    <TableScroll>
      <BaseTable>
        {caption && (
          <caption className="font-heading mb-2 text-left text-[17px] font-semibold text-rouge-sombre">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="bg-nuit text-ivoire">
            <th className="font-heading px-3.5 py-2.5 text-left text-[15px] font-semibold">Arabe</th>
            <th className="font-heading px-3.5 py-2.5 text-left text-[15px] font-semibold">Arabizi</th>
            {items.some((i) => i.pronFr) && (
              <th className="font-heading px-3.5 py-2.5 text-left text-[15px] font-semibold">
                Pron. FR
              </th>
            )}
            {items.some((i) => i.ipa) && (
              <th className="font-heading px-3.5 py-2.5 text-left text-[15px] font-semibold">API</th>
            )}
            <th className="font-heading px-3.5 py-2.5 text-left text-[15px] font-semibold">Sens</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i} className="odd:bg-white even:bg-ivoire-voile">
              <td className="font-arabic border-t border-sable-fonce px-3.5 py-2.5 text-right text-[1.35em]">
                {item.ar}
              </td>
              <td className="border-t border-sable-fonce px-3.5 py-2.5 font-semibold text-emeraude">
                {item.arabizi}
              </td>
              {items.some((i) => i.pronFr) && (
                <td className="border-t border-sable-fonce px-3.5 py-2.5">{item.pronFr}</td>
              )}
              {items.some((i) => i.ipa) && (
                <td className="font-arabic border-t border-sable-fonce px-3.5 py-2.5">{item.ipa}</td>
              )}
              <td className="border-t border-sable-fonce px-3.5 py-2.5">{item.meaning}</td>
            </tr>
          ))}
        </tbody>
      </BaseTable>
    </TableScroll>
  );
}
