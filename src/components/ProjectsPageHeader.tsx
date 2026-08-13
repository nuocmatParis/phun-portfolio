"use client";

import { useLanguage } from "@/context/LanguageContext";

export function ProjectsPageHeader() {
  const { data } = useLanguage();
  const { labels } = data;

  return (
    <header className="page-heading projects-heading">
      <h1>
        {labels.projectsTitle}
      </h1>
      <p>
        {labels.projectsSubtitle}
      </p>
      <div className="heading-flourish" aria-hidden="true">──── ◆ ❧</div>
    </header>
  );
}
