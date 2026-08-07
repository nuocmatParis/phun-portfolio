import { BioCard } from "@/components/BioCard";
import { IdentityCard } from "@/components/IdentityCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNavigation } from "@/components/SiteNavigation";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { SocialLinksCard } from "@/components/SocialLinksCard";

export default function HomePage() {
  return (
    <>
      <SiteNavigation />
      <main className="relative z-10 flex flex-1 flex-col">
        <section className="flex min-h-[calc(100vh-12rem)] items-center py-24 sm:py-32">
          <div className="site-container">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
              <IdentityCard />
              <BioCard />
              <SocialLinksCard />
              <SkillsMarquee />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
