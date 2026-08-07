import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const projectRoot = process.cwd();
const sourceRoot = "https://raexera.is-a.dev";

const assets = [
  {
    url: `${sourceRoot}/fonts/Inter-Regular.woff2`,
    output: "public/fonts/Inter-Regular.woff2",
  },
  {
    url: `${sourceRoot}/fonts/Inter-Bold.woff2`,
    output: "public/fonts/Inter-Bold.woff2",
  },
  {
    url: "https://fonts.gstatic.com/s/yujimai/v8/ZgNQjPxdJ7DEHrS0gC357nHkJ-LuyC5JewH2Pfspy6CtipsJ1Q.119.woff2",
    output: "public/fonts/YujiMai-Katakana.woff2",
  },
  {
    url: `${sourceRoot}/apple-touch-icon.png`,
    output: "public/seo/apple-touch-icon.png",
  },
  {
    url: `${sourceRoot}/favicon-32x32.png`,
    output: "public/seo/favicon-32x32.png",
  },
  {
    url: `${sourceRoot}/favicon-16x16.png`,
    output: "public/seo/favicon-16x16.png",
  },
  {
    url: `${sourceRoot}/android-chrome-192x192.png`,
    output: "public/seo/android-chrome-192x192.png",
  },
  {
    url: `${sourceRoot}/android-chrome-512x512.png`,
    output: "public/seo/android-chrome-512x512.png",
  },
  {
    url: `${sourceRoot}/site.webmanifest`,
    output: "public/seo/site.webmanifest",
  },
];

async function downloadAsset(asset) {
  const response = await fetch(asset.url);

  if (!response.ok) {
    throw new Error(`Failed ${response.status} ${response.statusText}: ${asset.url}`);
  }

  const outputPath = join(projectRoot, asset.output);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, Buffer.from(await response.arrayBuffer()));
  return asset.output;
}

async function runBatch(batch) {
  return Promise.all(batch.map(downloadAsset));
}

const completed = [];

for (let index = 0; index < assets.length; index += 4) {
  completed.push(...(await runBatch(assets.slice(index, index + 4))));
}

console.log(`Downloaded ${completed.length} assets:`);
for (const output of completed) {
  console.log(`- ${output}`);
}
