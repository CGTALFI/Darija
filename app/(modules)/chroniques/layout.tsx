import { ModuleBanner, ModuleTabBar, ModuleContentTransition } from "@/components/nav";
import { getModuleMeta } from "@/lib/modules/moduleMeta";

export default function ChroniquesLayout({ children }: { children: React.ReactNode }) {
  const meta = getModuleMeta("chroniques");
  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <ModuleBanner
        title={meta.title}
        intro="Le Maroc dont le darija est né : géographie, histoire, langue, gastronomie et bons plans, avec un fil rouge Agadir · Casablanca · Amizmiz."
      />
      <ModuleTabBar moduleId="chroniques" tabs={meta.tabs} />
      <div className="pt-6">
        <ModuleContentTransition>{children}</ModuleContentTransition>
      </div>
    </main>
  );
}
