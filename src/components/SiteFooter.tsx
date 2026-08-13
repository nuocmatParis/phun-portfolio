"use client";

import { useLanguage } from "@/context/LanguageContext";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const { data } = useLanguage();
  const { name } = data.profile;

  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-inner">
          <span aria-hidden="true">☙ ───── ◈ ───── ❧</span>
          <p>
            © {currentYear} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
