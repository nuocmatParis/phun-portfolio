"use client";

import {
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/icons";
import { useLanguage } from "@/context/LanguageContext";

const socialIcons = {
  email: EmailIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon,
  x: XIcon,
};

export function SocialLinksCard() {
  const { data } = useLanguage();

  return (
    <div className="surface-card flex items-center justify-center p-6 sm:p-8 md:col-span-1">
      <div className="grid w-full grid-cols-4 gap-4 md:grid-cols-2">
        {data.profile.socialLinks.map((link) => {
          const Icon = socialIcons[link.icon];

          return (
            <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={link.label}
            title={link.label}
            className="group flex aspect-square items-center justify-center rounded-2xl border border-border bg-background transition-colors duration-150 hover:border-border/80 hover:bg-muted/50"
          >
            <Icon className="size-6 text-muted-foreground transition-colors duration-150 group-hover:text-foreground md:size-8" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
