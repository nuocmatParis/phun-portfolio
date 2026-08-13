"use client";

import { useEffect, useRef } from "react";

export function useSceneVisibility<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) {
      element?.setAttribute("data-scene-visible", "true");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        element.setAttribute(
          "data-scene-visible",
          entry?.isIntersecting ? "true" : "false"
        );
      },
      { rootMargin: "160px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}
