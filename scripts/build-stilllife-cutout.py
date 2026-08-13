"""Extract pixel-identical sand layers from the approved still-life artwork."""

import json
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "images" / "project-stilllife.png"
OUTPUT = ROOT / "public" / "images" / "project-stilllife-cutout"
QA_OUTPUT = ROOT / "temp" / "stilllife-cutout-qa"


def polygon_mask(size: tuple[int, int], points: list[tuple[int, int]]) -> Image.Image:
    mask = Image.new("L", size, 0)
    ImageDraw.Draw(mask).polygon(points, fill=255)
    return mask


def line_mask(size: tuple[int, int], points: list[tuple[int, int]], width: int) -> Image.Image:
    mask = Image.new("L", size, 0)
    ImageDraw.Draw(mask).line(points, fill=255, width=width)
    return mask


def extract(source: Image.Image, mask: Image.Image) -> Image.Image:
    layer = Image.new("RGBA", source.size, (0, 0, 0, 0))
    layer.paste(source, (0, 0), mask)
    return layer


def inpaint_average(source: Image.Image, mask: Image.Image) -> Image.Image:
    pixels = np.asarray(source.convert("RGB"), dtype=np.float32).copy()
    missing = np.asarray(mask, dtype=np.uint8) > 0
    known = ~missing

    for _ in range(160):
        if known.all():
            break
        color_sum = np.zeros_like(pixels)
        weight = np.zeros(known.shape, dtype=np.float32)
        for dy, dx in ((-1, 0), (1, 0), (0, -1), (0, 1), (-1, -1), (-1, 1), (1, -1), (1, 1)):
            shifted_known = np.zeros_like(known)
            shifted_pixels = np.zeros_like(pixels)
            sy = slice(max(0, -dy), min(known.shape[0], known.shape[0] - dy))
            sx = slice(max(0, -dx), min(known.shape[1], known.shape[1] - dx))
            ty = slice(max(0, dy), min(known.shape[0], known.shape[0] + dy))
            tx = slice(max(0, dx), min(known.shape[1], known.shape[1] + dx))
            shifted_known[ty, tx] = known[sy, sx]
            shifted_pixels[ty, tx] = pixels[sy, sx]
            color_sum += shifted_pixels * shifted_known[..., None]
            weight += shifted_known
        fillable = missing & (weight > 0)
        pixels[fillable] = color_sum[fillable] / weight[fillable, None]
        known[fillable] = True
        missing[fillable] = False

    result = Image.fromarray(np.clip(pixels, 0, 255).astype(np.uint8), "RGB").convert("RGBA")
    result.putalpha(source.getchannel("A"))
    return result


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    QA_OUTPUT.mkdir(parents=True, exist_ok=True)
    source = Image.open(SOURCE).convert("RGBA")
    size = source.size

    top = polygon_mask(size, [(880, 205), (991, 205), (945, 279), (927, 279)])
    stream = line_mask(size, [(936, 274), (936, 356)], 7)
    bottom = polygon_mask(size, [(882, 384), (992, 384), (970, 355), (936, 338), (904, 358)])
    union = Image.fromarray(
        np.maximum.reduce([np.asarray(top), np.asarray(stream), np.asarray(bottom)]).astype(np.uint8),
        "L",
    )

    layers = {
        "stilllife-body-clean": inpaint_average(source, union),
        "hourglass-top-sand": extract(source, top),
        "hourglass-falling-sand": extract(source, stream),
        "hourglass-bottom-sand": extract(source, bottom),
    }
    for name, image in layers.items():
        image.save(OUTPUT / f"{name}.png", optimize=True)

    composite = layers["stilllife-body-clean"].copy()
    composite.alpha_composite(layers["hourglass-top-sand"])
    composite.alpha_composite(layers["hourglass-falling-sand"])
    composite.alpha_composite(layers["hourglass-bottom-sand"])
    composite.save(QA_OUTPUT / "stilllife-reconstructed-rest.png")

    original_array = np.asarray(source.convert("RGB"), dtype=np.int16)
    composite_array = np.asarray(composite.convert("RGB"), dtype=np.int16)
    difference = np.abs(original_array - composite_array)
    quality = {
        "meanAbsoluteError": float(difference.mean()),
        "maxChannelError": int(difference.max()),
        "changedPixels": int(np.any(difference > 0, axis=2).sum()),
    }
    manifest = {
        "source": "/images/project-stilllife.png",
        "canvas": list(size),
        "layers": [
            {"id": "stilllife-body-clean", "file": "stilllife-body-clean.png", "motion": "none"},
            {"id": "hourglass-top-sand", "file": "hourglass-top-sand.png", "motion": "sand-top"},
            {"id": "hourglass-falling-sand", "file": "hourglass-falling-sand.png", "motion": "sand-stream"},
            {"id": "hourglass-bottom-sand", "file": "hourglass-bottom-sand.png", "motion": "sand-bottom"},
        ],
        "quality": quality,
    }
    (OUTPUT / "stilllife-manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print(json.dumps(quality))
    print(f"source={size} output={OUTPUT}")


if __name__ == "__main__":
    main()
