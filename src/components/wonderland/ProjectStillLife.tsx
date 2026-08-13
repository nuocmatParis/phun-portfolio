import { projectStillLifeManifest } from "@/data/layered-assets";
import { LayeredAsset } from "./LayeredAsset";

export function ProjectStillLife() {
  return (
    <LayeredAsset
      className="project-curiosity project-still-life"
      manifest={projectStillLifeManifest}
      label="Antique books and hourglass from the original approved artwork"
    />
  );
}
