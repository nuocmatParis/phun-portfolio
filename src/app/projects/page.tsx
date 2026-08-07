import type { Metadata } from "next";

import { ProjectGrid } from "@/components/ProjectGrid";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNavigation } from "@/components/SiteNavigation";

export const metadata: Metadata = {
  title: "Projects - ラエクセラ",
  description:
    "DevSecOps Engineer specializing in hybrid multi-cloud infrastructure and distributed systems.",
};

export default function ProjectsPage() {
  return (
    <>
      <SiteNavigation />
      <main className="relative z-10 flex flex-1 flex-col">
        <div className="w-[calc(100%-15px)]">
          <div className="mx-auto w-full max-w-5xl px-[15px] py-24 sm:py-32">
            <div className="mb-12 flex flex-col gap-4">
              <h1 className="text-[36px]/[39.6px] font-bold tracking-[-0.9px] text-foreground sm:text-[60px]/[66px] sm:tracking-[-1.5px]">
                My Projects
              </h1>
              <p className="text-lg text-muted-foreground">
                A collection of my work, experiments, and contributions.
              </p>
            </div>

            <ProjectGrid />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
