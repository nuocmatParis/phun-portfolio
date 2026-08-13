"use client";

import {
  ArrowUpRightIcon,
  AwardIcon,
  GraduationCapIcon,
} from "@/components/icons";
import { useLanguage } from "@/context/LanguageContext";

const cardClasses = "gothic-panel dark-panel profile-panel";
const headingClasses = "panel-title";

export function SkillsSection() {
  const { data } = useLanguage();
  const { skillGroups, labels } = data;

  return (
    <section className={cardClasses}>
      <h2 className={headingClasses}>{labels.skillsSectionTitle}</h2>
      <div className="skill-category-grid">
        {skillGroups.map((group) => (
          <div key={group.name} className="skill-category">
            <h3>
              {group.name}
            </h3>
            <div className="skill-list">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-tag"
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
  const { education, labels } = data;

  return (
    <section className={cardClasses}>
      <h2 className={headingClasses}>{labels.educationSectionTitle}</h2>
      <div className="profile-list">
        {education.map((item) => (
          <div key={`${item.institution}-${item.degree}`} className="profile-entry">
            <GraduationCapIcon className="profile-entry-icon" />
            <div>
              <div className="profile-entry-topline">
                <a
                  href={item.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-entry-link"
                >
                  {item.institution}
                  <ArrowUpRightIcon />
                </a>
                <span className="profile-entry-date">
                  {item.period}
                </span>
              </div>
              <p className="profile-entry-subtitle">{item.degree}</p>
              <p className="profile-entry-description">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AwardsSection() {
  const { data } = useLanguage();
  const { awards, labels } = data;

  return (
    <section className={cardClasses}>
      <h2 className={headingClasses}>{labels.awardsSectionTitle}</h2>
      <div className="profile-list">
        {awards.map((award) => (
          <div key={award.title} className="profile-entry">
            <AwardIcon className="profile-entry-icon award" />
            <div>
              <div className="profile-entry-topline">
                <h3>
                  {award.title}
                </h3>
                <span className="profile-entry-date">
                  {award.date}
                </span>
              </div>
              <p className="profile-entry-description">{award.awarder}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
