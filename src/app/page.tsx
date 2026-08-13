import { BioCard } from "@/components/BioCard";
import { IdentityCard } from "@/components/IdentityCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNavigation } from "@/components/SiteNavigation";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { SocialLinksCard } from "@/components/SocialLinksCard";
import { WonderlandScene } from "@/components/wonderland/WonderlandScene";

export default function HomePage() {
  return (
    <div className="gothic-page">
      <WonderlandScene page="home" />
      <SiteNavigation />
      <main className="gothic-main">
        <section className="home-stage">
          <div className="site-container home-layout">
            <div className="home-grid">
              <IdentityCard />
              <BioCard />
              <SocialLinksCard />
              <SkillsMarquee />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
