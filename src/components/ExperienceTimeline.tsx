"use client";

import { useState } from "react";

import { ChevronDownIcon, DiagonalArrowIcon } from "@/components/icons";
import { useLanguage } from "@/context/LanguageContext";
import type { ExperienceEntry } from "@/types/portfolio";

interface ExperienceItemProps {
  entry: ExperienceEntry;
  isLast: boolean;
}

function CurrentMarker() {
  return (
    <span className="timeline-gem is-current" aria-hidden="true">
      <span />
    </span>
  );
}

function TimelineVine({ isLast }: { isLast: boolean }) {
  return (
    <svg
      className="timeline-vine"
      viewBox="0 0 48 150"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className="timeline-vine-stem"
        d={
          isLast
            ? "M22 7C31 27 13 46 23 68S32 89 22 108 16 130 23 146"
            : "M22 7C31 27 13 46 23 68S32 89 22 108 16 130 23 150"
        }
      />
      <path
        className="timeline-vine-curl"
        d="M20 42c-9-1-13 6-8 11 4 3 8 0 6-4M25 98c10-2 14 6 8 11-4 3-8-1-5-5"
      />
      <path
        className="timeline-vine-leaf"
        d="M19 29c-10-8-12-1-4 6 4 3 7 1 4-6Zm7 25c10-8 13-1 5 6-5 3-8 0-5-6ZM18 83c-11-7-13 1-5 7 5 3 8 0 5-7Zm8 39c10-8 13-1 5 6-5 4-8 1-5-6Z"
      />
      <path
        className="timeline-vine-thorn"
        d="m18 22-6-3 5 8m12 34 6-5-7 10m-11 28-6-5 5 10m11 31 6-6-6 11"
      />
    </svg>
  );
}

function ExperienceItem({ entry, isLast }: ExperienceItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { data } = useLanguage();
  const { labels } = data;

  return (
    <>
      <div className="experience-dates">
        <div>
          <time>{entry.startDate}</time>
          <span aria-hidden="true"> — </span>
          <time
            className={entry.current ? "is-current" : undefined}
          >
            {entry.endDate}
          </time>
        </div>
        <div className="experience-duration">
          <div className="mobile-current-marker">
            {entry.current ? (
              <CurrentMarker />
            ) : (
              <span aria-hidden="true">
                •
              </span>
            )}
          </div>
          <span>
            {entry.duration}
          </span>
        </div>
      </div>

      <div className="timeline-rail">
        <TimelineVine isLast={isLast} />
        {entry.current ? (
          <span className="timeline-node">
            <CurrentMarker />
          </span>
        ) : (
          <span className="timeline-gem" />
        )}
      </div>

      <div className={`experience-copy ${isLast ? "" : "has-next"}`}>
        <div className="experience-title-row">
          <h3>
            {entry.position}
          </h3>
          <span className="title-dot" aria-hidden="true">
            ·
          </span>
          <a
            href={entry.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="company-link"
          >
            {entry.company}
            <DiagonalArrowIcon />
          </a>
        </div>

        <p className="experience-location">
          {entry.location} <span aria-hidden="true">•</span> {entry.locationType}
        </p>

        <div className="experience-details">
          <div>
            <p>{entry.summary}</p>
          </div>
          <div className="responsibilities">
            <div
              className={`responsibility-list ${isExpanded ? "is-expanded" : ""}`}
            >
              <div>
                <span className="responsibility-label">
                  {labels.keyResponsibilities}
                </span>
                <ul>
                  {entry.responsibilities.map((responsibility) => (
                    <li key={responsibility}>
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
              className="show-more-button"
            >
              <span>{isExpanded ? labels.showLess : labels.showMore}</span>
              <ChevronDownIcon
                className={`${
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
  const { data } = useLanguage();
  const { experiences, labels } = data;

  return (
    <section className="gothic-panel parchment-panel experience-panel">
      <h2 className="panel-title">
        {labels.experienceSectionTitle}
      </h2>

      <div className="experience-grid">
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
