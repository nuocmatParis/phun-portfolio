"use client";

import { DiagonalArrowIcon } from "@/components/icons";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectStillLife } from "@/components/wonderland/ProjectStillLife";

export function ProjectGrid() {
  const { data } = useLanguage();
  const projects = data.projects;

  return (
    <div className="project-grid">
      {projects.map((project, index) => {
        return (
        <article
          key={project.name}
          className={`gothic-panel project-card ${index === 0 ? "parchment-panel" : "dark-panel"}`}
        >
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="project-copy">
            <div className="project-title-row">
              <h2>
                {project.name}
              </h2>
              <span className="project-arrow"><DiagonalArrowIcon /></span>
            </div>

            <p className="project-description">
              {project.description}
            </p>

            <ul className="project-highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <div className="project-tech">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="project-tech-tag"
                >
                  {technology}
                </span>
              ))}
            </div>
            </div>
            <div className="project-illustration" aria-hidden="true">
            </div>
          </a>
        </article>
        );
      })}
      <ProjectStillLife />
    </div>
  );
}
