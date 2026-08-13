"use client";

import { useAmbientAnimation } from "./AmbientAnimationProvider";
import { useLanguage } from "@/context/LanguageContext";

const labels = {
  EN: { full: "Full", subtle: "Subtle", off: "Still" },
  VN: { full: "Đầy đủ", subtle: "Tinh tế", off: "Tĩnh" },
  JP: { full: "フル", subtle: "控えめ", off: "静止" },
} as const;

export function AnimationIntensityControl() {
  const { intensity, cycleIntensity } = useAmbientAnimation();
  const { lang } = useLanguage();
  const label = labels[lang][intensity];

  return (
    <button
      type="button"
      className="wonder-intensity-control"
      onClick={cycleIntensity}
      aria-label={`Animation intensity: ${label}. Press to change.`}
      title={`Animation: ${label}`}
      data-intensity={intensity}
    >
      <span className="wonder-intensity-eye" aria-hidden="true" />
      <span className="wonder-intensity-label">{label}</span>
    </button>
  );
}
