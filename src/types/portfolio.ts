export type LanguageCode = "JP" | "VN" | "EN";

export type SocialIconName =
  | "email"
  | "linkedin"
  | "github"
  | "x";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIconName;
}

export interface PortfolioMeta {
  title: string;
  description: string;
}

export interface PortfolioProfile {
  name: string;
  title: string;
  handle: string;
  status: string;
  biographyTitle: string;
  biography: string;
  logoText: string;
  resumeUrl: string;
  resumeFileName: string;
  socialLinks: SocialLink[];
  marqueeSkills: string[];
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface EducationEntry {
  institution: string;
  institutionUrl: string;
  period: string;
  degree: string;
}

export interface AwardEntry {
  title: string;
  date: string;
  awarder: string;
}

export interface ProjectEntry {
  name: string;
  description: string;
  url: string;
  technologies: string[];
}

export interface PortfolioLabels {
  navHome: string;
  navAbout: string;
  navProjects: string;
  downloadCv: string;
  aboutTitle: string;
  aboutSubtitle: string;
  projectsTitle: string;
  projectsSubtitle: string;
  skillsSectionTitle: string;
  educationSectionTitle: string;
  awardsSectionTitle: string;
}

export interface PortfolioData {
  meta: PortfolioMeta;
  profile: PortfolioProfile;
  labels: PortfolioLabels;
  skillGroups: SkillGroup[];
  education: EducationEntry[];
  awards: AwardEntry[];
  projects: ProjectEntry[];
}
