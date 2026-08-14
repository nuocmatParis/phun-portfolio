"use client";

import { useLanguage } from "@/context/LanguageContext";

export function BioCard() {
  const { data } = useLanguage();

  return (
    <div className="surface-card flex flex-col justify-center p-8 sm:p-10 md:col-span-2">
      <span className="mb-4 text-sm leading-5 font-medium text-foreground">
        {data.profile.biographyTitle}
      </span>
      <div className="space-y-4 text-base leading-[26px] font-normal text-muted-foreground sm:text-[18px] sm:leading-[29.25px]">
        {data.profile.biography.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
