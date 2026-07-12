import { ModuleBanner, ModuleTabBar, ModuleContentTransition } from "@/components/nav";
import { getModuleMeta } from "@/lib/modules/moduleMeta";

export default function ExplorateursLayout({ children }: { children: React.ReactNode }) {
  const meta = getModuleMeta("explorateurs");
  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <ModuleBanner
        title={meta.title}
        intro="Ton profil de voyageur : progression, badges, objectifs CECRL et historique d'exploration du palais."
      />
      <ModuleTabBar moduleId="explorateurs" tabs={meta.tabs} />
      <div className="pt-6">
        <ModuleContentTransition>{children}</ModuleContentTransition>
      </div>
    </main>
  );
}
