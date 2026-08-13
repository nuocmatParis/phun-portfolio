"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { useAmbientAnimation } from "./AmbientAnimationProvider";

const CLOCK_ASSET = "/images/clock-cutout/antique-clock-isolated-v2.png";

/**
 * A real-time, isolated pocket watch. The raster supplies the original
 * storybook material; the hands stay code-native so they always show the
 * visitor's local time and remain crisp at every responsive size.
 */
export function AntiqueClock() {
  const clockRef = useRef<HTMLButtonElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const { beginInteraction, endInteraction, isTimeReversing, requestMajorEvent } =
    useAmbientAnimation();

  useEffect(() => {
    const clock = clockRef.current;
    if (!clock) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lastPaint = 0;

    const paintTime = (now: Date) => {
      const milliseconds = now.getMilliseconds();
      const seconds = now.getSeconds() + milliseconds / 1000;
      const minutes = now.getMinutes() + seconds / 60;
      const hours = (now.getHours() % 12) + minutes / 60;

      clock.style.setProperty("--clock-hour-angle", `${hours * 30}deg`);
      clock.style.setProperty("--clock-minute-angle", `${minutes * 6}deg`);
      clock.style.setProperty("--clock-second-angle", `${seconds * 6}deg`);
      clock.dataset.time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    };

    const tick = (timestamp: number) => {
      if (timestamp - lastPaint >= 33) {
        paintTime(new Date());
        lastPaint = timestamp;
      }
      animationFrameRef.current = window.requestAnimationFrame(tick);
    };

    const startClock = () => {
      if (animationFrameRef.current !== null || document.hidden) return;
      paintTime(new Date());
      if (!reducedMotion.matches) {
        animationFrameRef.current = window.requestAnimationFrame(tick);
      }
    };

    const stopClock = () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };

    const handleVisibility = () => {
      if (document.hidden) stopClock();
      else startClock();
    };

    const handleMotionPreference = () => {
      stopClock();
      paintTime(new Date());
      startClock();
    };

    paintTime(new Date());
    startClock();
    document.addEventListener("visibilitychange", handleVisibility);
    reducedMotion.addEventListener("change", handleMotionPreference);

    return () => {
      stopClock();
      document.removeEventListener("visibilitychange", handleVisibility);
      reducedMotion.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty("--clock-tilt-x", `${-y * 3.2}deg`);
    event.currentTarget.style.setProperty("--clock-tilt-y", `${x * 4.4}deg`);
  };

  const handlePointerLeave = () => {
    const clock = clockRef.current;
    if (clock) {
      clock.style.setProperty("--clock-tilt-x", "0deg");
      clock.style.setProperty("--clock-tilt-y", "0deg");
    }
    endInteraction();
  };

  return (
    <button
      ref={clockRef}
      type="button"
      className="antique-clock-control"
      data-reversing={isTimeReversing}
      aria-label="Antique pocket watch showing your local time"
      title="Your local time — click to turn back time"
      onClick={() => requestMajorEvent("time-reversal", 2500, "user")}
      onPointerEnter={beginInteraction}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <span className="antique-clock-float" aria-hidden="true">
        <span className="antique-clock-object">
          <Image
            className="antique-clock-art"
            src={CLOCK_ASSET}
            alt=""
            width={1254}
            height={1254}
            sizes="(max-width: 920px) 0px, 230px"
            priority
            draggable={false}
          />
          <span className="antique-clock-glass" />
          <span className="antique-clock-hand antique-clock-hour-hand" />
          <span className="antique-clock-hand antique-clock-minute-hand" />
          <span className="antique-clock-hand antique-clock-second-hand" />
          <span className="antique-clock-pin" />
        </span>
      </span>
      <span className="antique-clock-shadow" aria-hidden="true" />
    </button>
  );
}
