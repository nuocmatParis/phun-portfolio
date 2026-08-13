"use client";

import {
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
  TelegramIcon,
} from "@/components/icons";
import { useLanguage } from "@/context/LanguageContext";
import type { SocialIconName } from "@/types/portfolio";

const iconMap: Record<SocialIconName, React.ComponentType<{ className?: string }>> = {
  email: EmailIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon,
  telegram: TelegramIcon,
};

export function SocialLinksCard() {
  const { data } = useLanguage();
  const { socialLinks } = data.profile;

  return (
    <section className="gothic-panel dark-panel social-card" aria-label="Social links">
      <div className="social-grid">
        {socialLinks.map(({ label, href, icon }) => {
          const IconComponent = iconMap[icon] || EmailIcon;
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} link`}
              className="social-link"
            >
              <IconComponent />
              <span aria-hidden="true">◆</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
