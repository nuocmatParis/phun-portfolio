import { DiagonalArrowIcon } from "@/components/icons";
import type { ProjectEntry } from "@/types/portfolio";

const projects: ProjectEntry[] = [
  {
    name: "MyLinx",
    description: "Multi-Tenant Web Generator for MSMEs",
    url: "https://mylinx.tech/",
    highlights: [
      "Architected a scalable multi-tenant platform enabling MSMEs to deploy customized e-commerce storefronts and portfolios via dynamic subdomain routing.",
      "Engineered real-time storefront customization features and a secure checkout flow integrated seamlessly with WhatsApp.",
      "Containerized the application and deployed the production environment using Docker and Nginx.",
    ],
    technologies: ["PHP", "Laravel", "Docker", "Nginx"],
  },
  {
    name: "Shusseki",
    description: "Biometric Attendance System",
    url: "https://github.com/raexera/shusseki",
    highlights: [
      "Built a Python-based facial recognition pipeline achieving 95% accuracy.",
      "Optimized image processing latency for real-time logging.",
    ],
    technologies: ["Python", "OpenCV", "Dlib", "SQL"],
  },
  {
    name: "Yoru",
    description: "Event-Driven Linux Workspace Automation",
    url: "https://github.com/raexera/yoru",
    highlights: [
      "Engineered a highly optimized, low-overhead Linux environment utilizing Arch Linux and AwesomeWM.",
      "Developed custom Lua modules for system resource monitoring, process management, and workflow automation.",
    ],
    technologies: ["Linux", "Lua", "Shell", "AwesomeWM"],
  },
  {
    name: "Yuki",
    description: "Declarative Infrastructure & Immutable Workspace",
    url: "https://github.com/raexera/yuki",
    highlights: [
      "Architected a fully reproducible, declarative system configuration utilizing Nix Flakes and Home Manager.",
      "Managed immutable developer workspace provisioning, ensuring zero configuration drift across physical workstations.",
    ],
    technologies: ["Nix", "NixOS", "Infrastructure as Code", "Shell"],
  },
];

export function ProjectGrid() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.name}
          className="group flex h-full items-center rounded-2xl border border-border bg-card p-6 transition-colors hover:border-border/80 hover:bg-muted/10 sm:p-8"
        >
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full w-full flex-col gap-4"
          >
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                {project.name}
              </h2>
              <DiagonalArrowIcon className="mt-1 size-4 shrink-0 -translate-x-1 translate-y-1 -rotate-45 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-foreground group-hover:opacity-100" />
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <ul className="flex-1 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="inline-flex items-center rounded-lg border border-border bg-muted/20 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:border-border/80 group-hover:bg-muted group-hover:text-foreground"
                >
                  {technology}
                </span>
              ))}
            </div>
          </a>
        </article>
      ))}
    </div>
  );
}
