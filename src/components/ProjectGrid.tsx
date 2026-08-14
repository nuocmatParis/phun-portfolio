"use client";

import { DiagonalArrowIcon } from "@/components/icons";
import { useLanguage } from "@/context/LanguageContext";
import type { ProjectEntry } from "@/types/portfolio";

interface ProjectCardProps {
  project: ProjectEntry;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-border/80 hover:bg-muted/10 sm:p-8">
      <div className="flex h-full flex-col gap-4">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start justify-between gap-2"
          aria-label={`${project.name} GitHub repository`}
        >
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            {project.name}
          </h2>
          <DiagonalArrowIcon className="mt-1 size-4 shrink-0 -translate-x-1 translate-y-1 -rotate-45 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-foreground group-hover:opacity-100" />
        </a>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="inline-flex items-center rounded-lg border border-border bg-muted/20 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:border-border/80 group-hover:bg-muted group-hover:text-foreground"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function ProjectGrid() {
  const { data } = useLanguage();

  return (
    <div className="grid w-full grid-cols-1 items-stretch gap-4 sm:grid-cols-2">
      {data.projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}
