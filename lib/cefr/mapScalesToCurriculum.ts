import cecrScalesRaw from "@/content/cefr/cecr_scales.json";
import type { CefrDescriptor, CefrLevel } from "@/types/cefr";

const LEVELS: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];
const NO_DESCRIPTOR = "Pas de descripteur disponible.";

interface RawScaleEntry {
  title: string;
  cells: Partial<Record<CefrLevel, string>>;
}

interface RawScales {
  scales: Record<string, RawScaleEntry[]>;
}

let cachedDescriptors: CefrDescriptor[] | null = null;

/**
 * Aplatit content/cefr/cecr_scales.json (référence générique, toutes langues)
 * en une liste de descripteurs consultables. Ce n'est PAS le curriculum darija :
 * sert uniquement de référence pour curater à la main les DarijaCefrTag de
 * chaque leçon/série d'exercices (voir types/cefr.ts — sourceDescriptorIds).
 */
export function getCefrDescriptors(): CefrDescriptor[] {
  if (cachedDescriptors) return cachedDescriptors;

  const raw = cecrScalesRaw as unknown as RawScales;
  const descriptors: CefrDescriptor[] = [];

  for (const [groupKey, entries] of Object.entries(raw.scales)) {
    entries.forEach((entry, index) => {
      const scaleId = `${groupKey}#${index}`;
      for (const level of LEVELS) {
        const text = entry.cells[level];
        if (!text || text.trim() === NO_DESCRIPTOR) continue;
        descriptors.push({ scaleId, title: entry.title, level, text });
      }
    });
  }

  cachedDescriptors = descriptors;
  return descriptors;
}

export function findCefrDescriptor(scaleId: string): CefrDescriptor[] {
  return getCefrDescriptors().filter((d) => d.scaleId === scaleId);
}
