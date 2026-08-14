"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { AnimatedThemeToggler } from "@/registry/magicui/animated-theme-toggler";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function SiteNavigation() {
  const pathname = usePathname();
  const { data } = useLanguage();
  const navigationLinks = [
    { href: "/", label: data.labels.navHome },
    { href: "/about", label: data.labels.navAbout },
    { href: "/projects", label: data.labels.navProjects },
  ] as const;

  useEffect(() => {
    const root = document.documentElement;
    const header = document.getElementById("site-header");
    const savedTheme = window.localStorage.getItem("theme");

    if (savedTheme === "dark" || savedTheme === "light") {
      root.classList.toggle("dark", savedTheme === "dark");
    } else {
      root.classList.toggle(
        "dark",
        window.matchMedia("(prefers-color-scheme: dark)").matches,
      );
    }

    const updateScrolledState = () => {
      header?.classList.toggle("scrolled", window.scrollY > 0);
    };

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  const desktopLinkClasses = (href: string) =>
    cn(
      "flex h-9 items-center rounded-md px-4 text-sm leading-5 font-medium transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
      pathname === href
        ? "bg-muted text-foreground"
        : "text-muted-foreground hover:bg-muted hover:text-foreground",
    );

  const mobileLinkClasses = (href: string) =>
    cn(
      "flex h-9 items-center rounded-lg px-3 text-sm leading-5 font-medium transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] max-[360px]:px-2 max-[360px]:text-xs",
      pathname === href
        ? "bg-muted text-foreground"
        : "text-muted-foreground hover:bg-muted hover:text-foreground",
    );

  return (
    <>
      <header
        id="site-header"
        className="site-header fixed inset-x-0 top-0 z-50 hidden h-16 w-full border-b md:block"
      >
        <div className="site-container flex h-full items-center justify-between">
          <Link
            href="/"
            className="whitespace-nowrap font-[family-name:var(--font-yuji-mai)] text-xl leading-7 font-bold tracking-[-0.5px]"
          >
            {data.profile.logoText}
          </Link>

          <nav className="flex items-center gap-2" aria-label="Primary navigation">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={desktopLinkClasses(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <AnimatedThemeToggler duration={2000} />
          </div>
        </div>
      </header>

      <div className="fixed bottom-0 left-1/2 z-50 flex h-16 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 items-end md:hidden">
        <div className="flex w-full items-center justify-between rounded-t-2xl border border-b-0 bg-[color-mix(in_oklab,var(--background)_80%,transparent)] px-4 py-3 backdrop-blur-md">
          <nav className="flex items-center gap-1" aria-label="Primary navigation">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={mobileLinkClasses(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <LanguageSwitcher compact />
            <AnimatedThemeToggler duration={2000} />
          </div>
        </div>
      </div>
    </>
  );
}
