"use client";

import { useEffect, useRef, useState } from "react";

import { MoonIcon, SunIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface AnimatedThemeTogglerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  duration?: number;
}

export function AnimatedThemeToggler({
  className,
  duration = 1200,
  onClick,
  ...props
}: AnimatedThemeTogglerProps) {
  const [isDark, setIsDark] = useState(true);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const isTransitioningRef = useRef(false);

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });

    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isTransitioningRef.current) {
      return;
    }

    if (onClick) {
      onClick(event);
    }

    const root = document.documentElement;
    const newIsDark = !root.classList.contains("dark");

    const changeTheme = () => {
      root.classList.toggle("dark", newIsDark);
      window.localStorage.setItem("theme", newIsDark ? "dark" : "light");
      setIsDark(newIsDark);
    };

    // Fallback if View Transitions API is not supported or reduced motion is enabled
    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      changeTheme();
      return;
    }

    isTransitioningRef.current = true;

    const rect = buttonRef.current?.getBoundingClientRect();
    const x =
      event.clientX && event.clientX > 0
        ? event.clientX
        : rect
          ? rect.left + rect.width / 2
          : window.innerWidth / 2;
    const y =
      event.clientY && event.clientY > 0
        ? event.clientY
        : rect
          ? rect.top + rect.height / 2
          : window.innerHeight / 2;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = document.startViewTransition(() => {
      changeTheme();
    });

    transition.ready
      .then(() => {
        const animation = document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
        );

        return animation.finished;
      })
      .catch(() => undefined)
      .finally(() => {
        isTransitioningRef.current = false;
      });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label="Toggle light and dark theme"
      onClick={toggleTheme}
      className={cn(
        "relative flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-md border border-border bg-transparent text-muted-foreground transition-colors duration-300 ease-in-out hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        className,
      )}
      {...props}
    >
      {isDark ? (
        <MoonIcon className="size-[1.2rem] transition-transform duration-500" />
      ) : (
        <SunIcon className="size-[1.2rem] transition-transform duration-500" />
      )}
    </button>
  );
}
