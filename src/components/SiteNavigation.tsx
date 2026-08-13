"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useLanguage } from "@/context/LanguageContext";
import { useAmbientAnimation } from "@/components/wonderland/AmbientAnimationProvider";

export function SiteNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useLanguage();
  const { logoText } = data.profile;
  const { labels } = data;
  const { startRouteLoading } = useAmbientAnimation();

  const beginRoute = (href: string) => {
    setIsOpen(false);
    if (href !== pathname) startRouteLoading();
  };

  const navigationLinks = [
    { href: "/", label: labels.navHome },
    { href: "/about", label: labels.navAbout },
    { href: "/projects", label: labels.navProjects },
  ];

  useEffect(() => {
    const root = document.documentElement;
    const header = document.getElementById("site-header");
    const savedTheme = window.localStorage.getItem("theme");

    if (savedTheme === "dark" || savedTheme === "light") {
      root.classList.toggle("dark", savedTheme === "dark");
    } else {
      root.classList.toggle(
        "dark",
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }

    const updateScrolledState = () => {
      header?.classList.toggle("scrolled", window.scrollY > 0);
    };

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  return (
    <header id="site-header" className="site-header">
      <div className="site-container nav-shell">
          <Link
            href="/"
            className="brand-mark"
            onClick={() => beginRoute("/")}
          >
            <span aria-hidden="true">❧</span>
            <strong>{logoText}</strong>
            <span aria-hidden="true">❧</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className="ornate-nav-link"
                onClick={() => beginRoute(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <AnimatedThemeToggler className="theme-toggle" />
            <LanguageSwitcher />
            <button
              type="button"
              className="mobile-menu-button"
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

          <nav className={`mobile-nav ${isOpen ? "is-open" : ""}`} aria-label="Mobile navigation">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className="ornate-nav-link"
                onClick={() => beginRoute(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
      </div>
    </header>
  );
}
