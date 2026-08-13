"use client";

import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export type LanguageCode = "JP" | "VN" | "EN";

interface LanguageSwitcherProps {
  className?: string;
  onChange?: (lang: LanguageCode) => void;
}

const languages: LanguageCode[] = ["JP", "VN", "EN"];

export function LanguageSwitcher({
  className,
  onChange,
}: LanguageSwitcherProps) {
  const { lang: activeLang, setLang } = useLanguage();

  const handleSelect = (lang: LanguageCode) => {
    setLang(lang);
    if (onChange) {
      onChange(lang);
    }
  };

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={cn(
        "language-switcher",
        className
      )}
    >
      {languages.map((lang) => {
        const isSelected = activeLang === lang;
        return (
          <button
            key={lang}
            type="button"
            onClick={() => handleSelect(lang)}
            aria-pressed={isSelected}
            className={cn(
              "language-button",
              isSelected && "is-selected"
            )}
          >
            {lang}
          </button>
        );
      })}
    </div>
  );
}
