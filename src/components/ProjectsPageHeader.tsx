"use client";

import { useLanguage } from "@/context/LanguageContext";

export function ProjectsPageHeader() {
  const { data } = useLanguage();

  return (
    <div className="mb-12 flex flex-col gap-4">
      <h1 className="text-[36px]/[39.6px] font-bold tracking-[-0.9px] text-foreground sm:text-[60px]/[66px] sm:tracking-[-1.5px]">
        {data.labels.projectsTitle}
      </h1>
      <p className="text-lg text-muted-foreground">
        {data.labels.projectsSubtitle}
      </p>
    </div>
  );
}
