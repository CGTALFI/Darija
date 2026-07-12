export type ModuleId = "chroniques" | "explorateurs" | "academie" | "bibliotheque";

export const MODULE_IDS: ModuleId[] = ["chroniques", "explorateurs", "academie", "bibliotheque"];

export interface ModuleTab {
  slug: string;
  label: string;
  order: number;
}

export interface ModuleMeta {
  id: ModuleId;
  title: string;
  /** Nom d'origine du cahier des charges, conservé pour traçabilité pendant la migration. */
  legacyName: string;
  tabs: ModuleTab[];
}
