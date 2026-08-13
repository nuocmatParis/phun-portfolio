"""Build pixel-preserving cutout layers from the flattened antique clock source.

This script never recolors or regenerates artwork. Pixels in moving layers are
copied directly from the source; only the small hidden face area is inpainted.
"""

import json
import zipfile
from pathlib import Path
from xml.etree.ElementTree import Element, SubElement, tostring

import numpy as np
from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "images" / "gothic-wonderland-bg-v2.png"
OUTPUT = ROOT / "public" / "images" / "clock-cutout"
QA_OUTPUT = ROOT / "temp" / "clock-cutout-qa"

# Full-resolution source coordinates. Keep this crop unchanged after layer QA.
CROP = (1210, 560, 1515, 945)
CENTER = (133, 222)
HOUR_END = (108, 181)
MINUTE_END = (179, 194)


def line_mask(size: tuple[int, int], start: tuple[int, int], end: tuple[int, int], width: int) -> Image.Image:
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    draw.line((start, end), fill=255, width=width)
    return mask


def circle_mask(size: tuple[int, int], center: tuple[int, int], radius: int) -> Image.Image:
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    x, y = center
    draw.ellipse((x - radius, y - radius, x + radius, y + radius), fill=255)
    return mask


def subtract_mask(mask: Image.Image, cutout: Image.Image) -> Image.Image:
    source = np.asarray(mask, dtype=np.uint8)
    removed = np.asarray(cutout, dtype=np.uint8)
    return Image.fromarray(np.where(removed > 0, 0, source).astype(np.uint8), "L")


def extract_layer(source: Image.Image, mask: Image.Image) -> Image.Image:
    layer = Image.new("RGBA", source.size, (0, 0, 0, 0))
    layer.paste(source, (0, 0), mask)
    return layer


def inpaint_average(source: Image.Image, mask: Image.Image) -> Image.Image:
    pixels = np.asarray(source.convert("RGB"), dtype=np.float32).copy()
    missing = np.asarray(mask, dtype=np.uint8) > 0
    known = ~missing

    for _ in range(24):
      if known.all():
          break
      color_sum = np.zeros_like(pixels)
      weight = np.zeros(known.shape, dtype=np.float32)
      for dy, dx in ((-1, 0), (1, 0), (0, -1), (0, 1), (-1, -1), (-1, 1), (1, -1), (1, 1)):
          shifted_known = np.zeros_like(known)
          shifted_pixels = np.zeros_like(pixels)
          source_y = slice(max(0, -dy), min(known.shape[0], known.shape[0] - dy))
          source_x = slice(max(0, -dx), min(known.shape[1], known.shape[1] - dx))
          target_y = slice(max(0, dy), min(known.shape[0], known.shape[0] + dy))
          target_x = slice(max(0, dx), min(known.shape[1], known.shape[1] + dx))
          shifted_known[target_y, target_x] = known[source_y, source_x]
          shifted_pixels[target_y, target_x] = pixels[source_y, source_x]
          color_sum += shifted_pixels * shifted_known[..., None]
          weight += shifted_known
      fillable = missing & (weight > 0)
      pixels[fillable] = color_sum[fillable] / weight[fillable, None]
      known[fillable] = True
      missing[fillable] = False

    result = Image.fromarray(np.clip(pixels, 0, 255).astype(np.uint8), "RGB").convert("RGBA")
    result.putalpha(source.getchannel("A"))
    return result


def write_open_raster(path: Path, layers: list[tuple[str, Path]], merged: Path) -> None:
    image = Image.open(merged)
    stack = Element("image", {"name": "antique-clock-cutout", "w": str(image.width), "h": str(image.height)})
    stack_node = SubElement(stack, "stack", {"name": "Clock Layers"})
    for name, layer_path in reversed(layers):
        SubElement(stack_node, "layer", {"name": name, "src": f"data/{layer_path.name}", "visibility": "visible"})

    with zipfile.ZipFile(path, "w") as archive:
        archive.writestr("mimetype", "image/openraster", compress_type=zipfile.ZIP_STORED)
        archive.writestr("stack.xml", tostring(stack, encoding="utf-8", xml_declaration=True))
        archive.write(merged, "mergedimage.png")
        thumbnail = QA_OUTPUT / "clock-thumbnail.png"
        image.copy().thumbnail((256, 256))
        image.save(thumbnail)
        archive.write(thumbnail, "Thumbnails/thumbnail.png")
        for _, layer_path in layers:
            archive.write(layer_path, f"data/{layer_path.name}")


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    QA_OUTPUT.mkdir(parents=True, exist_ok=True)
    source = Image.open(SOURCE).convert("RGBA")
    crop = source.crop(CROP)
    source_path = QA_OUTPUT / "clock-source-crop.png"
    crop.save(source_path)
    crop.resize((crop.width * 4, crop.height * 4), Image.Resampling.NEAREST).save(
        QA_OUTPUT / "clock-source-crop-4x.png"
    )

    pin_mask = circle_mask(crop.size, CENTER, 7)
    hour_mask = subtract_mask(line_mask(crop.size, CENTER, HOUR_END, 8), pin_mask)
    minute_mask = subtract_mask(line_mask(crop.size, CENTER, MINUTE_END, 7), pin_mask)
    combined = Image.fromarray(
        np.maximum.reduce(
            [np.asarray(hour_mask), np.asarray(minute_mask), np.asarray(pin_mask)]
        ).astype(np.uint8),
        "L",
    )

    body = inpaint_average(crop, combined)
    hour = extract_layer(crop, hour_mask)
    minute = extract_layer(crop, minute_mask)
    pin = extract_layer(crop, pin_mask)

    files = {
        "clock-body-clean": body,
        "clock-hour-hand": hour,
        "clock-minute-hand": minute,
        "clock-glass-pin": pin,
    }
    layer_paths: list[tuple[str, Path]] = []
    for name, image in files.items():
        path = OUTPUT / f"{name}.png"
        image.save(path, optimize=True)
        layer_paths.append((name, path))

    composite = body.copy()
    composite.alpha_composite(hour)
    composite.alpha_composite(minute)
    composite.alpha_composite(pin)
    composite_path = QA_OUTPUT / "clock-reconstructed-rest.png"
    composite.save(composite_path)

    source_array = np.asarray(crop.convert("RGB"), dtype=np.int16)
    composite_array = np.asarray(composite.convert("RGB"), dtype=np.int16)
    absolute_error = np.abs(source_array - composite_array)
    mae = float(absolute_error.mean())
    maximum_error = int(absolute_error.max())
    changed_pixels = int(np.any(absolute_error > 0, axis=2).sum())

    manifest = {
        "source": "/images/gothic-wonderland-bg-v2.png",
        "sourceSize": list(source.size),
        "crop": list(CROP),
        "canvas": list(crop.size),
        "pivot": list(CENTER),
        "layers": [
            {"id": "clock-body-clean", "file": "clock-body-clean.png", "zIndex": 0, "motion": "none"},
            {"id": "clock-hour-hand", "file": "clock-hour-hand.png", "zIndex": 1, "motion": "clock-hour"},
            {"id": "clock-minute-hand", "file": "clock-minute-hand.png", "zIndex": 2, "motion": "clock-minute"},
            {"id": "clock-glass-pin", "file": "clock-glass-pin.png", "zIndex": 3, "motion": "none"},
        ],
        "quality": {"meanAbsoluteError": mae, "maxChannelError": maximum_error, "changedPixels": changed_pixels},
    }
    (OUTPUT / "clock-manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    write_open_raster(OUTPUT / "antique-clock-master.ora", layer_paths, composite_path)
    print(json.dumps(manifest["quality"]))
    print(f"source={source.size} crop={crop.size} output={OUTPUT}")


if __name__ == "__main__":
    main()
