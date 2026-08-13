"use client";

import Image from "next/image";

import type { LayeredAssetManifest } from "@/data/layered-assets";
import { useSceneVisibility } from "./useSceneVisibility";

interface LayeredAssetProps {
  manifest: LayeredAssetManifest;
  className?: string;
  label?: string;
}

export function LayeredAsset({
  manifest,
  className = "",
  label,
}: LayeredAssetProps) {
  const rootRef = useSceneVisibility<HTMLElement>();

  return (
    <figure
      ref={rootRef}
      className={`layered-asset ${className}`}
      data-asset={manifest.id}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <div className="layered-asset-canvas">
        {manifest.layers.map((layer) => (
          <Image
            key={layer.id}
            className="layered-asset-layer"
            data-layer={layer.id}
            data-motion={layer.motion}
            src={layer.src}
            alt={layer.alt}
            fill
            sizes="(max-width: 920px) 100vw, 50vw"
            priority={layer.eager}
            draggable={false}
          />
        ))}
      </div>
    </figure>
  );
}
