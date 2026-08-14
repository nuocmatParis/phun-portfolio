"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { portfolioDataByLang } from "@/data/portfolio";
import type { LanguageCode, PortfolioData } from "@/types/portfolio";

interface LanguageContextValue {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  data: PortfolioData;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LanguageCode>("EN");

  useEffect(() => {
    const savedLang = window.localStorage.getItem("portfolio_lang");

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

  const setLang = (nextLang: LanguageCode) => {
    setLangState(nextLang);
    window.localStorage.setItem("portfolio_lang", nextLang);
  };

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, data: portfolioDataByLang[lang] }}
    >
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
