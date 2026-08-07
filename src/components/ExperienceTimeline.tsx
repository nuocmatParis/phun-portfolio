"use client";

import { useState } from "react";

import { ChevronDownIcon, DiagonalArrowIcon } from "@/components/icons";
import type { ExperienceEntry } from "@/types/portfolio";

const experiences: ExperienceEntry[] = [
  {
    startDate: "Aug 2025",
    endDate: "Present",
    duration: "10 mos",
    current: true,
    position: "DevSecOps Engineer",
    company: "PT. Verihubs Inteligensia Nusantara",
    companyUrl: "https://verihubs.com",
    location: "Jakarta, Indonesia",
    locationType: "Hybrid",
    summary:
      "Managing hybrid multi-cloud and on-premise infrastructure, focusing on robust DevSecOps solutions and platform reliability.",
    responsibilities: [
      "Orchestrated hybrid Kubernetes clusters across Tencent Cloud, AWS, GCP, and on-premise environments.",
      "Engineered an automated P0 incident alerting pipeline using Gatus, Incident.io, and Macrodroid.",
      "Executed production root cause analysis (RCA) utilizing advanced Linux systems analysis, including syscall tracing and kernel auditing.",
      "Developed custom CLI tooling in Go and Python for infrastructure automation.",
      "Conducted cluster capacity planning and production load testing for high-throughput AI services using k6.",
      "Hardened cluster security via network policies, container scanning, and least-privilege IAM roles.",
      "Managed Wibu CodeMeter infrastructure to enforce cryptographic licensing, DRM, and intellectual property protection for proprietary AI models.",
    ],
  },
  {
    startDate: "Feb 2025",
    endDate: "Aug 2025",
    duration: "6 mos",
    position: "Back-End Engineer Intern",
    company: "PT. Verihubs Inteligensia Nusantara",
    companyUrl: "https://verihubs.com",
    location: "Jakarta, Indonesia",
    locationType: "Hybrid",
    summary:
      "Developed high-performance Go services and laid the groundwork for automated MLOps pipelines.",
    responsibilities: [
      "Architected foundational MLOps pipelines for automated AI model training and deployment.",
      "Developed high-concurrency RESTful Go APIs for internal multi-face recognition auto-tagging systems.",
      "Optimized SQL schemas and queries for large-scale biometric data processing.",
      "Containerized legacy applications, bridging application code and infrastructure deployment.",
    ],
  },
  {
    startDate: "Oct 2024",
    endDate: "Oct 2025",
    duration: "1 yr",
    position: "Back-End Core Team",
    company: "GDGoC BINUS Bandung",
    companyUrl:
      "https://gdg.community.dev/gdg-on-campus-binus-university-bandung-bandung-indonesia",
    location: "Bandung, Indonesia",
    locationType: "Hybrid",
    summary: "Core contributor for community event backend systems.",
    responsibilities: [
      "Designed backend architectures for event registration systems.",
      "Mentored junior members on Go best practices and cloud-native concepts.",
    ],
  },
];

interface ExperienceItemProps {
  entry: ExperienceEntry;
  isLast: boolean;
}

function CurrentMarker() {
  return (
    <span className="relative flex size-2 shrink-0" aria-hidden="true">
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-75" />
      <span className="relative inline-flex size-2 rounded-full bg-green-500" />
    </span>
  );
}

function ExperienceItem({ entry, isLast }: ExperienceItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="mb-2 flex w-full items-center justify-between text-xs font-medium text-muted-foreground sm:mt-0.5 sm:mb-0 sm:w-auto sm:flex-col sm:items-start sm:justify-start sm:gap-1">
        <div className="flex items-center gap-1.5">
          <time>{entry.startDate}</time>
          <span aria-hidden="true">–</span>
          <time
            className={entry.current ? "font-semibold text-foreground" : undefined}
          >
            {entry.endDate}
          </time>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <div className="flex sm:hidden">
            {entry.current ? (
              <CurrentMarker />
            ) : (
              <span className="text-muted-foreground/40" aria-hidden="true">
                •
              </span>
            )}
          </div>
          <span className="font-normal text-muted-foreground/70">
            {entry.duration}
          </span>
        </div>
      </div>

      <div className="relative hidden w-2.5 flex-col items-center sm:flex">
        {!isLast && (
          <span
            className="absolute top-3 -bottom-3 left-1/2 w-px -translate-x-1/2 bg-border"
            aria-hidden="true"
          />
        )}
        {entry.current ? (
          <span className="relative z-10 mt-[11px] flex size-2.5 shrink-0 items-center justify-center rounded-full bg-card ring-4 ring-card">
            <CurrentMarker />
          </span>
        ) : (
          <span className="relative z-10 mt-[11px] size-2.5 shrink-0 rounded-full border border-border bg-card ring-4 ring-card" />
        )}
      </div>

      <div className={isLast ? undefined : "mb-10"}>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
          <h3 className="text-base leading-snug font-semibold text-foreground">
            {entry.position}
          </h3>
          <span className="hidden text-muted-foreground sm:inline" aria-hidden="true">
            ·
          </span>
          <a
            href={entry.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {entry.company}
            <DiagonalArrowIcon className="size-3 -translate-x-1 translate-y-1 -rotate-45 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
          </a>
        </div>

        <p className="mt-1 text-xs text-muted-foreground">
          {entry.location} <span aria-hidden="true">•</span> {entry.locationType}
        </p>

        <div className="mt-4 flex flex-col gap-4 text-sm text-muted-foreground">
          <div className="leading-relaxed">
            <p>{entry.summary}</p>
          </div>
          <div className="relative flex flex-col gap-3">
            <div
              className={`relative overflow-hidden transition-opacity duration-200 ${
                isExpanded ? "h-auto opacity-100" : "h-10 opacity-60"
              }`}
            >
              <div className="mt-3 flex flex-col gap-2">
                <span className="font-medium text-foreground">
                  Key Responsibilities:
                </span>
                <ul className="ml-4 list-outside list-disc space-y-1.5 marker:text-muted-foreground/50">
                  {entry.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="pl-1 leading-relaxed">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              type="button"
              aria-expanded={isExpanded}
              onClick={() => setIsExpanded((expanded) => !expanded)}
              className="group/more flex w-fit cursor-pointer items-center justify-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>{isExpanded ? "Show less" : "Show more"}</span>
              <ChevronDownIcon
                className={`size-3.5 transition-transform group-hover/more:translate-y-0.5 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function ExperienceTimeline() {
  return (
    <section className="flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-10">
      <h2 className="mb-8 text-[20px]/[22px] font-semibold tracking-tight sm:text-[24px]/[26.4px]">
        Experience
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-[auto_auto_1fr] sm:gap-x-8">
        {experiences.map((entry, index) => (
          <ExperienceItem
            key={`${entry.startDate}-${entry.position}`}
            entry={entry}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
