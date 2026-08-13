import type { Metadata } from "next";

import {
  AwardsSection,
  EducationSection,
  SkillsSection,
} from "@/components/AboutProfileSections";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNavigation } from "@/components/SiteNavigation";
import { portfolioData } from "@/data/portfolio";
import { WonderlandScene } from "@/components/wonderland/WonderlandScene";

export const metadata: Metadata = {
  title: "About",
  description: portfolioData.meta.description,
};

export default function AboutPage() {
  return (
    <div className="gothic-page">
      <WonderlandScene page="about" />
      <SiteNavigation />
      <main className="gothic-main">
        <div className="site-container inner-page">
            <div className="about-grid">
              <ExperienceTimeline />
              <SkillsSection />
              <div className="about-lower-grid">
                <EducationSection />
                <AwardsSection />
              </div>
            </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
