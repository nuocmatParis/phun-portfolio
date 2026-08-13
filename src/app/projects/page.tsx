import type { Metadata } from "next";

import { ProjectGrid } from "@/components/ProjectGrid";
import { ProjectsPageHeader } from "@/components/ProjectsPageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNavigation } from "@/components/SiteNavigation";
import { portfolioData } from "@/data/portfolio";
import { WonderlandScene } from "@/components/wonderland/WonderlandScene";

export const metadata: Metadata = {
  title: "Projects",
  description: portfolioData.meta.description,
};

export default function ProjectsPage() {
  return (
    <div className="gothic-page">
      <WonderlandScene page="projects" />
      <SiteNavigation />
      <main className="gothic-main">
        <div className="site-container inner-page projects-stage">
            <ProjectsPageHeader />
            <ProjectGrid />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
