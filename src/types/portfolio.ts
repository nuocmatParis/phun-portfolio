export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
}

export type SocialIconName = "email" | "linkedin" | "github" | "telegram";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIconName;
}

export interface PortfolioProfile {
  name: string;
  title: string;
  handle: string;
  status: string;
  biography: string;
  socialLinks: SocialLink[];
  skills: string[];
}
