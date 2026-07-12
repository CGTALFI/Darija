import { ModuleBanner, ModuleTabBar, ModuleContentTransition } from "@/components/nav";
import { getModuleMeta } from "@/lib/modules/moduleMeta";

export default function AcademieLayout({ children }: { children: React.ReactNode }) {
  const meta = getModuleMeta("academie");
  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <ModuleBanner
        title={meta.title}
        intro="Le cours complet : phonétique, grammaire, dialogues, écriture et exercices — du niveau A1 au niveau C2."
      />
      <ModuleTabBar moduleId="academie" tabs={meta.tabs} />
      <div className="pt-6">
        <ModuleContentTransition>{children}</ModuleContentTransition>
      </div>
    </main>
  );
}
