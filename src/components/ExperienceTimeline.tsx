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
    <span className="relative size-2 shrink-0" aria-hidden="true">
      <span className="absolute inset-0 animate-ping rounded-full bg-[oklch(0.723_0.219_149.579)]" />
      <span className="absolute inset-0 rounded-full bg-[oklch(0.723_0.219_149.579)]" />
    </span>
  );
}

function PastMarker({ size = "large" }: { size?: "small" | "large" }) {
  return (
    <span
      className={
        size === "large"
          ? "size-2.5 shrink-0 rounded-full border border-muted-foreground/50 bg-card"
          : "size-1.5 shrink-0 rounded-full bg-muted-foreground/50"
      }
      aria-hidden="true"
    />
  );
}

function ExperienceItem({ entry, isLast }: ExperienceItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="mb-3 flex items-center justify-between gap-4 text-xs font-medium text-muted-foreground sm:hidden">
        <p className="flex items-center gap-1.5">
          <span>{entry.startDate}</span>
          <span aria-hidden="true">–</span>
          <span className={entry.current ? "font-semibold text-foreground" : undefined}>
            {entry.endDate}
          </span>
        </p>
        <p className="flex items-center gap-2 text-muted-foreground/70">
          {entry.current ? <CurrentMarker /> : <PastMarker size="small" />}
          {entry.duration}
        </p>
      </div>

      <div className="hidden text-xs font-medium text-muted-foreground sm:block">
        <p className="flex items-center gap-1.5 whitespace-nowrap">
          <span>{entry.startDate}</span>
          <span aria-hidden="true">–</span>
          <span className={entry.current ? "font-semibold text-foreground" : undefined}>
            {entry.endDate}
          </span>
        </p>
        <p className="mt-1.5 text-muted-foreground/70">{entry.duration}</p>
      </div>

      <div className="relative hidden w-2.5 justify-center sm:flex">
        {entry.current ? <CurrentMarker /> : <PastMarker />}
        {!isLast && (
          <span
            className="absolute top-3 bottom-0 w-px bg-border"
            aria-hidden="true"
          />
        )}
      </div>

      <article className={isLast ? undefined : "mb-10"}>
        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
          <h3 className="text-base leading-[22px] font-semibold">
            {entry.position}
          </h3>
          <span className="text-muted-foreground" aria-hidden="true">
            ·
          </span>
          <a
            href={entry.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
          >
            {entry.company}
            <DiagonalArrowIcon className="size-[13px] -translate-x-1 opacity-0 transition-[transform,opacity] duration-150 group-hover:translate-x-0 group-hover:opacity-100" />
          </a>
        </div>

        <p className="mt-1 text-xs text-muted-foreground">
          {entry.location} <span aria-hidden="true">•</span> {entry.locationType}
        </p>

        <div
          className={`mt-4 overflow-hidden text-sm leading-relaxed text-muted-foreground transition-opacity duration-200 ${
            isExpanded ? "h-auto opacity-100" : "h-10 opacity-60"
          }`}
        >
          <p>{entry.summary}</p>
          <div className="mt-4 flex flex-col gap-4">
            <p className="font-medium text-foreground">Key Responsibilities:</p>
            <ul className="ml-4 list-outside list-disc space-y-1.5 pl-1 marker:text-muted-foreground/50">
              {entry.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>

        <button
          type="button"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((expanded) => !expanded)}
          className="group mt-2 flex w-fit items-center gap-1 text-xs font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
        >
          {isExpanded ? "Show less" : "Show more"}
          <ChevronDownIcon
            className={`size-3.5 transition-transform duration-200 group-hover:translate-y-0.5 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </article>
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
