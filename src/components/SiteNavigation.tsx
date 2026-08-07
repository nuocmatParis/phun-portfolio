"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { MoonIcon, SunIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
] as const;

export function SiteNavigation() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = window.localStorage.getItem("theme");

    if (savedTheme === "dark" || savedTheme === "light") {
      const shouldUseDarkTheme = savedTheme === "dark";
      root.classList.toggle("dark", shouldUseDarkTheme);
      setIsDark(shouldUseDarkTheme);
    } else {
      setIsDark(root.classList.contains("dark"));
    }

    const updateScrolledState = () => setIsScrolled(window.scrollY > 0);

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextIsDark = !isDark;

    root.classList.add("theme-transition-lock");
    root.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);

    window.setTimeout(() => {
      root.classList.remove("theme-transition-lock");
    }, 10);
  };

  const desktopLinkClasses = (href: string) =>
    cn(
      "flex h-9 items-center rounded-md px-4 text-sm leading-5 font-medium transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
      pathname === href
        ? "bg-muted text-foreground"
        : "text-muted-foreground hover:bg-muted hover:text-foreground",
    );

  const mobileLinkClasses = (href: string) =>
    cn(
      "flex h-9 items-center rounded-lg px-3 text-sm leading-5 font-medium transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
      pathname === href
        ? "bg-muted text-foreground"
        : "text-muted-foreground hover:bg-muted hover:text-foreground",
    );

  const themeButtonClasses =
    "flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-md border border-border bg-transparent text-foreground transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-muted";

  return (
    <>
      <header
        id="site-header"
        className={cn(
          "fixed inset-x-0 top-0 z-50 hidden h-16 w-full border-b transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] md:block",
          isScrolled
            ? "border-border bg-[color-mix(in_oklab,var(--background)_60%,transparent)] backdrop-blur-md"
            : "border-transparent bg-background",
        )}
      >
        <div className="site-container flex h-full items-center justify-between">
          <Link
            href="/"
            className="w-[97.5px] font-[family-name:var(--font-yuji-mai)] text-xl leading-7 font-bold tracking-[-0.5px]"
          >
            ラエクセラ
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

          <button
            type="button"
            aria-label="Toggle light and dark theme"
            aria-pressed={isDark}
            onClick={toggleTheme}
            className={themeButtonClasses}
          >
            {isDark ? (
              <MoonIcon className="size-[19.2px]" />
            ) : (
              <SunIcon className="size-[19.2px]" />
            )}
          </button>
        </div>
      </header>

      <div className="fixed bottom-0 left-1/2 z-50 h-16 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 md:hidden">
        <div className="flex h-full items-center justify-between rounded-t-2xl border border-b-0 bg-[color-mix(in_oklab,var(--background)_80%,transparent)] px-4 py-3 backdrop-blur-md">
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

          <button
            type="button"
            aria-label="Toggle light and dark theme"
            aria-pressed={isDark}
            onClick={toggleTheme}
            className={themeButtonClasses}
          >
            {isDark ? (
              <MoonIcon className="size-[19.2px]" />
            ) : (
              <SunIcon className="size-[19.2px]" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
