import {
  ArrowUpRightIcon,
  AwardIcon,
  GraduationCapIcon,
} from "@/components/icons";
import type { SkillGroup } from "@/types/portfolio";

const skillGroups: SkillGroup[] = [
  {
    name: "Programming Languages",
    skills: ["Go", "Python", "Shell/Bash", "Nix", "SQL"],
  },
  {
    name: "Cloud Platforms",
    skills: [
      "AWS (EKS, EC2)",
      "Google Cloud (GKE)",
      "Tencent Cloud (TKE)",
      "On-Premise",
    ],
  },
  {
    name: "Containers & Orchestration",
    skills: ["Kubernetes", "Docker"],
  },
  {
    name: "Infrastructure as Code",
    skills: ["Terraform", "NixOS", "Ansible"],
  },
  {
    name: "CI/CD & GitOps",
    skills: ["GitHub Actions", "GitOps"],
  },
  {
    name: "Operating Systems",
    skills: ["Linux", "NixOS"],
  },
  {
    name: "Monitoring & Alerting",
    skills: ["Prometheus", "Grafana", "Gatus", "Incident.io"],
  },
  {
    name: "Testing",
    skills: ["k6"],
  },
];

const awards = [
  {
    title: "Finalist of Chain Fusion Hacker House",
    date: "August 2024",
    awarder: "ICP Protocol",
  },
  {
    title: "Finalist of ICPC Asia Jakarta National Contest",
    date: "November 2023",
    awarder: "ICPC Foundation",
  },
] as const;

const cardClasses =
  "flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-10";
const headingClasses =
  "mb-8 text-xl font-semibold tracking-tight text-foreground sm:text-2xl";

export function SkillsSection() {
  return (
    <section className={cardClasses}>
      <h2 className={headingClasses}>Skills</h2>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.name} className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-tight text-foreground">
              {group.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex cursor-default items-center rounded-md bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section className={cardClasses}>
      <h2 className={headingClasses}>Education</h2>
      <div className="flex gap-3">
        <GraduationCapIcon className="mt-0.5 hidden size-5 shrink-0 text-muted-foreground md:block" />
        <div className="flex w-full flex-col gap-1">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row">
            <a
              href="https://binus.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-base font-medium leading-[22px] text-foreground transition-colors hover:text-muted-foreground"
            >
              Bina Nusantara University
              <ArrowUpRightIcon className="ml-1 size-4 shrink-0" />
            </a>
            <span className="shrink-0 text-xs font-medium text-muted-foreground sm:mt-0.5">
              2022 - Present
            </span>
          </div>
          <p className="text-sm text-muted-foreground">Computer Science</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Currently in Final Year (Semester 8). Specializing in Systems
            Engineering and Cloud Architecture. Researching multi-tenant web
            generator architectures for MSMEs.
          </p>
        </div>
      </div>
    </section>
  );
}

export function AwardsSection() {
  return (
    <section className={cardClasses}>
      <h2 className={headingClasses}>Awards</h2>
      <div className="space-y-6">
        {awards.map((award) => (
          <div key={award.title} className="flex gap-3">
            <AwardIcon className="mt-0.5 hidden size-5 shrink-0 text-muted-foreground md:block" />
            <div className="flex w-full flex-col gap-1">
              <div className="flex flex-col items-start justify-between gap-2 sm:flex-row">
                <h3 className="text-base font-medium leading-[22px] text-foreground">
                  {award.title}
                </h3>
                <span className="shrink-0 text-xs font-medium text-muted-foreground sm:mt-0.5">
                  {award.date}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{award.awarder}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
