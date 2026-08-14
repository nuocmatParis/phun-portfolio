import type { Metadata } from "next";

import { ProjectGrid } from "@/components/ProjectGrid";
import { ProjectsPageHeader } from "@/components/ProjectsPageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNavigation } from "@/components/SiteNavigation";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: portfolioData.meta.description,
};

export default function ProjectsPage() {
  return (
    <>
      <SiteNavigation />
      <main className="relative z-10 flex flex-1 flex-col">
        <div className="w-[calc(100%-15px)]">
          <div className="mx-auto w-full max-w-5xl px-[15px] py-24 sm:py-32">
            <ProjectsPageHeader />

            <ProjectGrid />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
