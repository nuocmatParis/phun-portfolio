"use client";

import { useLanguage } from "@/context/LanguageContext";

export function SiteFooter() {
  const { data } = useLanguage();

  return (
    <footer className="relative mt-auto hidden w-full md:block">
      <div className="mx-auto w-full max-w-5xl px-[15px]">
        <div className="flex items-center justify-center border-t py-8">
          <p className="text-center text-sm leading-5 font-normal tracking-[-0.35px] text-muted-foreground transition-colors duration-300 hover:text-foreground">
            © 2026 {data.profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
