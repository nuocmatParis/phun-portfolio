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

export interface ExperienceEntry {
  startDate: string;
  endDate: string;
  duration: string;
  current?: boolean;
  position: string;
  company: string;
  companyUrl: string;
  location: string;
  locationType: string;
  summary: string;
  responsibilities: string[];
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface ProjectEntry {
  name: string;
  description: string;
  url: string;
  highlights: string[];
  technologies: string[];
}
