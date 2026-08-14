"use client";

import { DownloadIcon } from "@/components/icons";
import { useLanguage } from "@/context/LanguageContext";

export function AboutPageHeader() {
  const { data } = useLanguage();

  return (
    <div className="mb-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-4">
        <h1 className="text-[36px]/[39.6px] font-bold tracking-[-0.9px] text-foreground sm:text-[60px]/[66px] sm:tracking-[-1.5px]">
          {data.labels.aboutTitle}
        </h1>
        <p className="text-lg text-muted-foreground">
          {data.labels.aboutSubtitle}
        </p>
      </div>

      <a
        href={data.profile.resumeUrl}
        download={data.profile.resumeFileName}
        className="group flex h-9 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-medium text-muted-foreground transition-all hover:border-border/80 hover:bg-muted hover:text-foreground sm:h-10"
      >
        <DownloadIcon className="size-4 transition-transform group-hover:-translate-y-0.5" />
        <span>{data.labels.downloadCv}</span>
      </a>
    </div>
  );
}
