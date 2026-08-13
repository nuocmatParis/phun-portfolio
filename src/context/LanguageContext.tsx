"use client";

import { createContext, useContext, useEffect, useState } from "react";

import type { LanguageCode } from "@/components/LanguageSwitcher";
import { portfolioDataByLang } from "@/data/portfolio";
import type { PortfolioData } from "@/types/portfolio";

interface LanguageContextType {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  data: PortfolioData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LanguageCode>("EN");

  const setLang = (newLang: LanguageCode) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_lang", newLang);
    }
  };

  useEffect(() => {
    const savedLang = window.localStorage.getItem(
      "portfolio_lang"
    ) as LanguageCode | null;

    if (savedLang === "EN" || savedLang === "VN" || savedLang === "JP") {
      queueMicrotask(() => setLangState(savedLang));
    }
  }, []);

  useEffect(() => {
    const htmlLanguage: Record<LanguageCode, string> = {
      EN: "en",
      VN: "vi",
      JP: "ja",
    };

    document.documentElement.lang = htmlLanguage[lang];
  }, [lang]);

  const data = portfolioDataByLang[lang] || portfolioDataByLang.EN;

  return (
    <LanguageContext.Provider value={{ lang, setLang, data }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
