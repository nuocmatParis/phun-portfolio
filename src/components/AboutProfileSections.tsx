"use client";

import Image from "next/image";

import {
  ArrowUpRightIcon,
  AwardIcon,
  GraduationCapIcon,
} from "@/components/icons";
import { useLanguage } from "@/context/LanguageContext";

const cardClasses =
  "flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-10";
const headingClasses =
  "mb-8 text-[20px]/[22px] font-semibold tracking-[-0.5px] text-foreground sm:text-[24px]/[26.4px] sm:tracking-[-0.6px]";

export function SkillsSection() {
  const { data } = useLanguage();

  return (
    <section className={cardClasses}>
      <h2 className={headingClasses}>{data.labels.skillsSectionTitle}</h2>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
        {data.skillGroups.map((group) => (
          <div key={group.name} className="flex flex-col gap-4">
            <h3 className="text-[14px]/[15.4px] font-semibold tracking-[-0.35px] text-foreground">
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
  const { data } = useLanguage();

  return (
    <section className={`${cardClasses} sm:col-span-2`}>
      <h2 className={headingClasses}>{data.labels.educationSectionTitle}</h2>
      <div className="space-y-6">
        {data.education.map((entry) => (
          <div key={entry.institution} className="flex gap-3">
            <GraduationCapIcon className="mt-0.5 hidden size-5 shrink-0 text-muted-foreground md:block" />
            <div className="flex w-full flex-col gap-1">
              <div className="flex flex-col items-start justify-between gap-2 sm:flex-row">
                <a
                  href={entry.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-base leading-[22px] font-medium text-foreground transition-colors hover:text-muted-foreground"
                >
                  {entry.institution}
                  <ArrowUpRightIcon className="ml-1 size-4 shrink-0" />
                </a>
                <span className="shrink-0 text-xs font-medium text-muted-foreground sm:mt-0.5">
                  {entry.period}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{entry.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AwardsSection() {
  const { data } = useLanguage();

  if (data.awards.length === 0) {
    return null;
  }

  return (
    <section
      className={`${cardClasses} relative isolate overflow-hidden sm:col-span-2 sm:min-h-[360px]`}
    >
      <div
        className="identity-art pointer-events-none absolute inset-y-0 right-2 hidden w-[48%] sm:block"
        aria-hidden="true"
      >
        <Image
          src="/images/certifications-character-cutout.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 440px, (min-width: 640px) 46vw, 0px"
          className="identity-art-image object-contain object-bottom"
          draggable={false}
        />
      </div>

      <div className="relative z-10 sm:max-w-[60%]">
        <h2 className={headingClasses}>{data.labels.awardsSectionTitle}</h2>
        <div className="space-y-6">
          {data.awards.map((award) => (
            <div key={award.title} className="flex gap-3">
              <AwardIcon className="mt-0.5 hidden size-5 shrink-0 text-muted-foreground md:block" />
              <div className="flex w-full flex-col gap-1">
                <div className="flex flex-col items-start justify-between gap-2 sm:flex-row">
                  <h3 className="text-base leading-[22px] font-medium text-foreground">
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
      </div>
    </section>
  );
}
