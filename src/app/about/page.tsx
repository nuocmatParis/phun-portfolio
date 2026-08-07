import type { Metadata } from "next";

import {
  AwardsSection,
  EducationSection,
  SkillsSection,
} from "@/components/AboutProfileSections";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { DownloadIcon } from "@/components/icons";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNavigation } from "@/components/SiteNavigation";

export const metadata: Metadata = {
  title: "About - ラエクセラ",
  description:
    "DevSecOps Engineer specializing in hybrid multi-cloud infrastructure and distributed systems.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNavigation />
      <main className="relative z-10 flex flex-1 flex-col">
        <div className="w-[calc(100%-15px)]">
          <div className="mx-auto w-full max-w-5xl px-[15px] py-24 sm:py-32">
          <div className="mb-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-4">
              <h1 className="text-[36px]/[39.6px] font-bold tracking-[-0.9px] text-foreground sm:text-[60px]/[66px] sm:tracking-[-1.5px]">
                About Me
              </h1>
              <p className="text-lg text-muted-foreground">
                My professional background, experience, and skills.
              </p>
            </div>

            <a
              href="/documents/Rayhan_Kafi_Pratama_CV.pdf"
              download="Rayhan_Kafi_Pratama_CV.pdf"
              className="group flex h-9 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-medium text-muted-foreground transition-all hover:border-border/80 hover:bg-muted hover:text-foreground sm:h-10"
            >
              <DownloadIcon className="size-4 transition-transform group-hover:-translate-y-0.5" />
              <span>Download CV</span>
            </a>
          </div>

            <div className="grid grid-cols-1 gap-4">
              <ExperienceTimeline />
              <SkillsSection />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <EducationSection />
                <AwardsSection />
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
