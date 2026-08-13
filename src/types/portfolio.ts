export interface NavigationItem {
  label: string;
  href: string;
}
export type SocialIconName = "email" | "linkedin" | "github" | "telegram";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIconName;
}

export interface PortfolioMeta {
  title: string;
  description: string;
  url: string;
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

export interface EducationEntry {
  institution: string;
  institutionUrl: string;
  period: string;
  degree: string;
  description: string;
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
  highlights: string[];
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
  experienceSectionTitle: string;
  skillsSectionTitle: string;
  educationSectionTitle: string;
  awardsSectionTitle: string;
  keyResponsibilities: string;
  showMore: string;
  showLess: string;
}

export interface PortfolioData {
  meta: PortfolioMeta;
  profile: PortfolioProfile;
  labels: PortfolioLabels;
  experiences: ExperienceEntry[];
  skillGroups: SkillGroup[];
  education: EducationEntry[];
  awards: AwardEntry[];
  projects: ProjectEntry[];
}
