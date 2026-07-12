"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import { moduleHref } from "@/lib/modules/moduleMeta";
import type { ModuleId, ModuleTab } from "@/types/module";

interface ModuleTabBarProps {
  moduleId: ModuleId;
  tabs: ModuleTab[];
}

/** Barre d'onglets sticky — navigation client-side pure (next/link), aucun rechargement. */
export function ModuleTabBar({ moduleId, tabs }: ModuleTabBarProps) {
  const pathname = usePathname();
  const sorted = [...tabs].sort((a, b) => a.order - b.order);

  return (
    <nav className="sticky top-0 z-20 -mx-6 flex gap-1.5 overflow-x-auto border-b border-sable-fonce bg-ivoire/95 px-6 py-2.5 backdrop-blur [-webkit-overflow-scrolling:touch] sm:mx-0 sm:justify-center sm:rounded-full sm:border sm:px-3">
      {sorted.map((tab) => {
        const href = moduleHref(moduleId, tab.slug);
        const isActive = pathname === href;
        return (
          <Link
            key={tab.slug}
            href={href}
            className={cn(
              "font-heading rounded-full px-4 py-1.5 text-sm whitespace-nowrap transition-colors",
              isActive ? "bg-nuit text-ivoire" : "text-pierre-fonce hover:bg-sable",
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
