import type { Metadata } from "next";

import {
  AwardsSection,
  EducationSection,
  SkillsSection,
} from "@/components/AboutProfileSections";
import { AboutPageHeader } from "@/components/AboutPageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNavigation } from "@/components/SiteNavigation";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: portfolioData.meta.description,
};

export default function AboutPage() {
  return (
    <>
      <SiteNavigation />
      <main className="relative z-10 flex flex-1 flex-col">
        <div className="w-[calc(100%-15px)]">
          <div className="mx-auto w-full max-w-5xl px-[15px] py-24 sm:py-32">
            <AboutPageHeader />

            <div className="grid grid-cols-1 gap-4">
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
