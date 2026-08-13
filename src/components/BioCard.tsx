"use client";

import { useLanguage } from "@/context/LanguageContext";

export function BioCard() {
  const { data } = useLanguage();
  const { biographyTitle, biography } = data.profile;

  return (
    <section className="gothic-panel dark-panel bio-card">
      <h2 className="section-script">
        {biographyTitle}
      </h2>
      <div className="ornament-divider" aria-hidden="true"><span>✦</span></div>
      <p>
        {biography}
      </p>
      <div className="card-flourish" aria-hidden="true">☙ ◈ ❧</div>
    </section>
  );
}
