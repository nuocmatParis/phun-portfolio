"use client";

import { AnimationIntensityControl } from "./AnimationIntensityControl";
import { AntiqueClock } from "./AntiqueClock";
import { useAmbientAnimation } from "./AmbientAnimationProvider";
import { LayeredAsset } from "./LayeredAsset";
import { EnvironmentalMotion } from "./EnvironmentalMotion";
import {
  doorCreatureManifest,
  gothicCatManifest,
  teaSettingManifest,
} from "@/data/layered-assets";

interface WonderlandSceneProps {
  page: "home" | "about" | "projects";
}

export function WonderlandScene({ page }: WonderlandSceneProps) {
  const { activeEvent, intensity, isTimeReversing, routeLoading } =
    useAmbientAnimation();
  return (
    <div
      className="wonderland-scene"
      data-page={page}
      data-intensity={intensity}
      data-reversing={isTimeReversing}
      data-route-loading={routeLoading}
      data-event={activeEvent?.type ?? "none"}
    >
      <EnvironmentalMotion />
      {page === "home" ? (
        <>
          <LayeredAsset
            className="home-tea-source"
            manifest={teaSettingManifest}
          />
          <LayeredAsset
            className="surreal-door-source"
            manifest={doorCreatureManifest}
          />
        </>
      ) : null}
      <LayeredAsset
        className="loading-creature-source"
        manifest={doorCreatureManifest}
      />
      <LayeredAsset
        className="ambient-cat-source"
        manifest={gothicCatManifest}
      />
      {page === "about" ? <AntiqueClock /> : null}
      <AnimationIntensityControl />
    </div>
  );
}
