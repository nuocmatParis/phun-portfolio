"use client";

import { useEffect, useRef } from "react";

import { backgroundEvidenceManifest } from "@/data/layered-assets";
import { LayeredAsset } from "./LayeredAsset";

export function EnvironmentalMotion() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let idleTimer = 0;
    let pointerX = 0;
    let pointerY = 0;

    const render = () => {
      frame = 0;
      if (!finePointer.matches || reducedMotion.matches) return;
      root.style.setProperty("--evidence-x", `${pointerX * 1.8}px`);
      root.style.setProperty("--evidence-y", `${pointerY * 1.15}px`);
      root.style.setProperty("--floor-skew", `${pointerX * 0.06}deg`);
    };

    const handlePointer = (event: PointerEvent) => {
      pointerX = event.clientX / window.innerWidth - 0.5;
      pointerY = event.clientY / window.innerHeight - 0.5;
      root.dataset.reacting = "true";
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        root.dataset.reacting = "false";
      }, 720);
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const reset = () => {
      pointerX = 0;
      pointerY = 0;
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", handlePointer, { passive: true });
    window.addEventListener("blur", reset);
    return () => {
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("blur", reset);
      window.clearTimeout(idleTimer);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={rootRef} className="environmental-motion" aria-hidden="true">
      <LayeredAsset
        className="environmental-motion-source"
        manifest={backgroundEvidenceManifest}
      />
      <LayeredAsset
        className="living-cards-source"
        manifest={backgroundEvidenceManifest}
      />
    </div>
  );
}
