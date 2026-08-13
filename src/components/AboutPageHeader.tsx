"use client";

import { DownloadIcon } from "@/components/icons";
import { useLanguage } from "@/context/LanguageContext";

export function AboutPageHeader() {
  const { data } = useLanguage();
  const { labels, profile } = data;

  return (
    <header className="page-heading about-heading">
      <div>
        <span className="eyebrow">Chapter II · The looking glass</span>
        <h1>
          {labels.aboutTitle}
        </h1>
        <p>
          {labels.aboutSubtitle}
        </p>
      </div>

      <a
        href={profile.resumeUrl}
        download={profile.resumeFileName}
        className="gothic-button"
      >
        <DownloadIcon />
        <span>{labels.downloadCv}</span>
      </a>
    </header>
  );
}
