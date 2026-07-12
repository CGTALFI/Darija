import { ModuleBanner, ModuleTabBar, ModuleContentTransition } from "@/components/nav";
import { getModuleMeta } from "@/lib/modules/moduleMeta";

export default function BibliothequeLayout({ children }: { children: React.ReactNode }) {
  const meta = getModuleMeta("bibliotheque");
  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <ModuleBanner
        title={meta.title}
        intro="Vidéos, podcasts, livres et liens utiles pour continuer à pratiquer le darija en dehors du palais."
      />
      <ModuleTabBar moduleId="bibliotheque" tabs={meta.tabs} />
      <div className="pt-6">
        <ModuleContentTransition>{children}</ModuleContentTransition>
      </div>
    </main>
  );
}
