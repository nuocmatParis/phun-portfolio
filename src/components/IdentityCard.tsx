"use client";

import { useLanguage } from "@/context/LanguageContext";

export function IdentityCard() {
  const { data } = useLanguage();
  const { name, title, handle, status } = data.profile;

  return (
    <section className="gothic-panel parchment-panel identity-card">
      <div className="eye-bookmark" aria-hidden="true">
        <svg viewBox="0 0 76 116">
          <path
            className="eye-bookmark-cloth"
            d="M5 2h66v91L38 113 5 93Z"
          />
          <path
            className="eye-bookmark-seam"
            d="M10 7h56v82l-28 17-28-17Z"
          />
          <g className="eye-rosette" transform="translate(38 48)">
            <path d="M0-29c7 2 11 7 14 12 8-3 15 1 16 8 6 5 5 13-1 18 1 8-5 14-13 14-4 7-12 9-18 4-7 5-15 2-18-5-8 0-13-7-11-14-5-6-3-14 4-18-1-8 6-14 14-12 3-7 11-10 18-6 6-5 14-3 17 4Z" />
            <path d="M0-23c5 2 8 6 10 10 7-2 12 2 12 8 5 4 4 10-1 14 0 6-5 10-11 9-3 6-9 7-14 3-5 4-11 1-13-4-6 0-9-5-7-11-4-4-2-10 4-13 0-6 5-10 11-9 3-5 8-6 13-3 4-4 10-2 12 3Z" />
          </g>
          <path
            className="eye-white"
            d="M15 49c9-13 17-18 23-18s15 5 23 18c-9 13-17 18-23 18s-15-5-23-18Z"
          />
          <circle className="eye-iris" cx="38" cy="49" r="10" />
          <circle className="eye-pupil" cx="38" cy="49" r="5" />
          <circle className="eye-glint" cx="34.5" cy="45.5" r="2.2" />
          <path
            className="eye-scratch"
            d="M19 31 14 20m11 9-2-14m34 18 7-9m-4 16 11-3M16 65 8 72m17-2-4 13m35-17 9 8"
          />
        </svg>
      </div>
      <div className="status-ribbon">
        <span className="relative size-2" aria-hidden="true">
          <span className="status-pulse" />
          <span className="status-dot" />
        </span>
        {status}
      </div>

      <div className="identity-copy">
      <h1 className="display-name">
        {name}
      </h1>

      <div className="identity-meta">
        <h2>
          {title}
        </h2>
        <span aria-hidden="true">
          /
        </span>
        <span className="identity-handle">
          {handle}
        </span>
      </div>
      </div>
      <div className="hero-artwork" aria-hidden="true" />
    </section>
  );
}
