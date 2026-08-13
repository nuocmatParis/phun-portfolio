"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type AnimationIntensity = "full" | "subtle" | "off";
export type AmbientEventType =
  | "cat"
  | "drifting-card"
  | "mushroom"
  | "teapot"
  | "time-reversal";

interface ActiveAmbientEvent {
  id: number;
  type: AmbientEventType;
  source: "ambient" | "user";
  duration: number;
  variant?: "float" | "side-walk";
}

interface AmbientAnimationContextValue {
  intensity: AnimationIntensity;
  setIntensity: (intensity: AnimationIntensity) => void;
  cycleIntensity: () => void;
  activeEvent: ActiveAmbientEvent | null;
  isPaused: boolean;
  isTimeReversing: boolean;
  routeLoading: boolean;
  startRouteLoading: () => void;
  hoveredProject: number | null;
  setHoveredProject: (project: number | null) => void;
  beginInteraction: () => void;
  endInteraction: () => void;
  requestMajorEvent: (
    type: AmbientEventType,
    duration?: number,
    priority?: "ambient" | "user"
  ) => boolean;
}

const AmbientAnimationContext =
  createContext<AmbientAnimationContextValue | null>(null);

const intensityOrder: AnimationIntensity[] = ["full", "subtle", "off"];
export function AmbientAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [intensity, setIntensityState] =
    useState<AnimationIntensity>("full");
  const [activeEvent, setActiveEvent] =
    useState<ActiveAmbientEvent | null>(null);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [interactionDepth, setInteractionDepth] = useState(0);
  const eventId = useRef(0);
  const lastAmbientEvent = useRef<AmbientEventType | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("wonderland_intensity");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.matchMedia("(max-width: 920px)").matches;
    const initial: AnimationIntensity =
      saved === "full" || saved === "subtle" || saved === "off"
        ? saved
        : reducedMotion
          ? "off"
          : isMobile
            ? "subtle"
            : "full";

    queueMicrotask(() => setIntensityState(initial));
  }, []);

  useEffect(() => {
    const updateVisibility = () => {
      setIsDocumentVisible(document.visibilityState === "visible");
    };

    document.addEventListener("visibilitychange", updateVisibility);
    return () =>
      document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    queueMicrotask(() => setRouteLoading(false));
  }, [pathname]);

  const setIntensity = useCallback((next: AnimationIntensity) => {
    setIntensityState(next);
    window.localStorage.setItem("wonderland_intensity", next);
  }, []);

  const cycleIntensity = useCallback(() => {
    setIntensityState((current) => {
      const next =
        intensityOrder[
          (intensityOrder.indexOf(current) + 1) % intensityOrder.length
        ];
      window.localStorage.setItem("wonderland_intensity", next);
      return next;
    });
  }, []);

  const requestMajorEvent = useCallback(
    (
      type: AmbientEventType,
      duration = 8000,
      priority: "ambient" | "user" = "ambient"
    ) => {
      if (intensity === "off" || !isDocumentVisible) {
        return false;
      }

      if (
        activeEvent &&
        priority !== "user" &&
        activeEvent.source === "user"
      ) {
        return false;
      }

      eventId.current += 1;
      setActiveEvent({
        id: eventId.current,
        type,
        duration,
        source: priority,
        variant:
          type === "cat" && Math.random() < 0.16 ? "side-walk" : "float",
      });
      return true;
    },
    [activeEvent, intensity, isDocumentVisible]
  );

  const isPaused = intensity === "off" || !isDocumentVisible;
  const isUserInteracting =
    interactionDepth > 0 || hoveredProject !== null || routeLoading;

  useEffect(() => {
    if (isPaused || activeEvent || isUserInteracting) {
      return;
    }

    const intensityFactor = intensity === "subtle" ? 1.35 : 1;
    const delay =
      (25_000 + Math.round(Math.random() * 20_000)) * intensityFactor;
    const timer = window.setTimeout(() => {
      const pageEvents: AmbientEventType[] = pathname.startsWith("/projects")
        ? ["cat", "drifting-card"]
        : pathname.startsWith("/about")
          ? ["cat", "drifting-card"]
          : ["cat", "drifting-card"];
      const candidates = pageEvents.filter(
        (event) => event !== lastAmbientEvent.current
      );
      const selected =
        candidates[Math.floor(Math.random() * candidates.length)] ?? "cat";
      lastAmbientEvent.current = selected;
      requestMajorEvent(
        selected,
        selected === "cat" ? 13_000 : selected === "drifting-card" ? 8_000 : 6_000
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [
    activeEvent,
    intensity,
    isPaused,
    isUserInteracting,
    requestMajorEvent,
    pathname,
  ]);

  useEffect(() => {
    if (!activeEvent) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveEvent((current) =>
        current?.id === activeEvent.id ? null : current
      );
    }, activeEvent.duration);

    return () => window.clearTimeout(timer);
  }, [activeEvent]);

  const beginInteraction = useCallback(() => {
    setInteractionDepth((depth) => depth + 1);
  }, []);

  const endInteraction = useCallback(() => {
    setInteractionDepth((depth) => Math.max(0, depth - 1));
  }, []);

  const startRouteLoading = useCallback(() => setRouteLoading(true), []);

  const value = useMemo<AmbientAnimationContextValue>(
    () => ({
      intensity,
      setIntensity,
      cycleIntensity,
      activeEvent,
      isPaused,
      isTimeReversing: activeEvent?.type === "time-reversal",
      routeLoading,
      startRouteLoading,
      hoveredProject,
      setHoveredProject,
      beginInteraction,
      endInteraction,
      requestMajorEvent,
    }),
    [
      activeEvent,
      beginInteraction,
      cycleIntensity,
      endInteraction,
      hoveredProject,
      intensity,
      isPaused,
      requestMajorEvent,
      routeLoading,
      setIntensity,
      startRouteLoading,
    ]
  );

  return (
    <AmbientAnimationContext.Provider value={value}>
      {children}
    </AmbientAnimationContext.Provider>
  );
}

export function useAmbientAnimation() {
  const context = useContext(AmbientAnimationContext);
  if (!context) {
    throw new Error(
      "useAmbientAnimation must be used within AmbientAnimationProvider"
    );
  }
  return context;
}
