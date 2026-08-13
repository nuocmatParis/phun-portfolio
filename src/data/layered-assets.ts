export type LayerMotion =
  | "none"
  | "clock-hour"
  | "clock-minute"
  | "clock-chain"
  | "glass-reflection"
  | "foreground-parallax"
  | "sand-top"
  | "sand-stream"
  | "sand-bottom";

export interface LayeredAssetLayer {
  id: string;
  src: string;
  alt: string;
  motion: LayerMotion;
  eager?: boolean;
}

export interface LayeredAssetManifest {
  id: string;
  width: number;
  height: number;
  layers: LayeredAssetLayer[];
}

export const projectStillLifeManifest: LayeredAssetManifest = {
  id: "project-still-life",
  width: 1553,
  height: 1013,
  layers: [
    {
      id: "stilllife-body-clean",
      src: "/images/project-stilllife-cutout/stilllife-body-clean.png",
      alt: "Antique books, an hourglass, parchment, crystal, and thorny vines",
      motion: "none",
      eager: true,
    },
    {
      id: "hourglass-top-sand",
      src: "/images/project-stilllife-cutout/hourglass-top-sand.png",
      alt: "",
      motion: "sand-top",
    },
    {
      id: "hourglass-falling-sand",
      src: "/images/project-stilllife-cutout/hourglass-falling-sand.png",
      alt: "",
      motion: "sand-stream",
    },
    {
      id: "hourglass-bottom-sand",
      src: "/images/project-stilllife-cutout/hourglass-bottom-sand.png",
      alt: "",
      motion: "sand-bottom",
    },
  ],
};

export const antiqueClockManifest: LayeredAssetManifest = {
  id: "antique-clock",
  width: 305,
  height: 385,
  layers: [
    {
      id: "clock-body-clean",
      src: "/images/clock-cutout/clock-body-clean.png",
      alt: "",
      motion: "none",
      eager: true,
    },
    {
      id: "clock-hour-hand",
      src: "/images/clock-cutout/clock-hour-hand.png",
      alt: "",
      motion: "clock-hour",
    },
    {
      id: "clock-minute-hand",
      src: "/images/clock-cutout/clock-minute-hand.png",
      alt: "",
      motion: "clock-minute",
    },
    {
      id: "clock-glass-pin",
      src: "/images/clock-cutout/clock-glass-pin.png",
      alt: "",
      motion: "none",
    },
  ],
};

export const teaSettingManifest: LayeredAssetManifest = {
  id: "tea-setting",
  width: 1568,
  height: 1003,
  layers: [
    {
      id: "tea-setting-source",
      src: "/images/generated/tea-setting-source.png",
      alt: "",
      motion: "none",
      eager: true,
    },
  ],
};

export const gothicCatManifest: LayeredAssetManifest = {
  id: "gothic-cat",
  width: 1568,
  height: 1003,
  layers: [
    {
      id: "gothic-cat-source",
      src: "/images/generated/gothic-cat-source.png",
      alt: "",
      motion: "none",
    },
  ],
};

export const doorCreatureManifest: LayeredAssetManifest = {
  id: "door-creature",
  width: 1568,
  height: 1003,
  layers: [
    {
      id: "door-creature-source",
      src: "/images/generated/door-creature-source.png",
      alt: "",
      motion: "none",
    },
  ],
};

export const backgroundEvidenceManifest: LayeredAssetManifest = {
  id: "background-evidence",
  width: 1568,
  height: 1003,
  layers: [
    {
      id: "approved-background-source",
      src: "/images/gothic-wonderland-bg-v2.png",
      alt: "",
      motion: "none",
      eager: true,
    },
  ],
};
