"use client";

import { useLanguage } from "@/context/LanguageContext";

function SkillGroup({ duplicate = false }: { duplicate?: boolean }) {
  const { data } = useLanguage();
  const skills = data.profile.marqueeSkills;

  return (
    <div
      aria-hidden={duplicate || undefined}
      className="skill-group"
    >
      {skills.map((skill) => (
        <span
          className="skill-plaque"
          key={skill}
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

export function SkillsMarquee() {
  return (
    <section
      aria-label="Skills and technologies"
      className="gothic-panel dark-panel skills-marquee"
    >
      <span className="marquee-gem" aria-hidden="true">◆</span>
      <div className="marquee-mask">
        <div className="marquee-track">
          <SkillGroup />
          <SkillGroup duplicate />
        </div>
      </div>
      <span className="marquee-gem" aria-hidden="true">◆</span>
    </section>
  );
}
