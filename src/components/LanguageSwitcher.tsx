"use client";

import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import type { LanguageCode } from "@/types/portfolio";

const languages: LanguageCode[] = ["EN", "JP", "VN"];

interface LanguageSwitcherProps {
  className?: string;
  compact?: boolean;
}

export function LanguageSwitcher({
  className,
  compact = false,
}: LanguageSwitcherProps) {
  const { lang: activeLanguage, setLang } = useLanguage();

  if (compact) {
    return (
      <select
        aria-label="Language selector"
        value={activeLanguage}
        onChange={(event) => setLang(event.target.value as LanguageCode)}
        className={cn(
          "h-9 w-11 cursor-pointer appearance-none rounded-md border border-border bg-transparent text-center text-[10px] font-semibold text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground",
          className,
        )}
      >
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    );
  }

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={cn(
        "flex h-9 items-center rounded-md border border-border bg-transparent p-0.5",
        className,
      )}
    >
      {languages.map((language) => (
        <button
          key={language}
          type="button"
          onClick={() => setLang(language)}
          aria-pressed={activeLanguage === language}
          className={cn(
            "flex h-7 min-w-7 cursor-pointer items-center justify-center rounded-sm px-1.5 text-[10px] font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
            activeLanguage === language && "bg-muted text-foreground",
          )}
        >
          {language}
        </button>
      ))}
    </div>
  );
}
