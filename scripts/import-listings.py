"""Copy listing media from D: into public/properties and build contact sheets."""

from __future__ import annotations

import os
import shutil
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(r"D:\Perwaz Real Estate")
DEST = Path(r"c:\Work\Combine Shipment Automation\public\properties")
SHEETS = Path(r"c:\Work\Combine Shipment Automation\tmp-review")

LISTINGS = [
    ("10-marla-adyala", "10 Marla single story house pani bjli gass available location adyallah road near nadra office demand 190"),
    ("4-marla-caltex", "4 marla 1.5 story for sale pani bjli available gass not available demand 180 location caltex road"),
    ("4-marla-defense", "4 marla single story house pani bjli available gass not available demand 95  location defense road near askry 14 gate 2"),
    ("4-5-marla-defense", "4.5 Marla single story house pani bjli available demand 98 lack location defense road near askry 14 gate 2"),
    ("5-marla-double-caltex", "5 Marla double story house pani bjli available demand 240 bank loan py bb available ha location caltex road lane no 4 near askry 14 gate 1"),
    ("5-marla-khan-house", "5 marla house 2.5 story for sale demand 170 pani bjli available gass not available wasa ka bb connection available ha location defense road askry 14 gate 2 near sector (D) street name khan house"),
    ("9-marla-defense", "9 marla house triple story for rent pani bjli gass available rent 110 location defense road"),
    ("4-marla-executive", "New folder"),
    ("samarzar-plots", "these are 3 plots each is 5 marla plot location samarzar price 65 lac for all"),
]

IMAGE_EXT = {".jpg", ".jpeg", ".png", ".webp"}
VIDEO_EXT = {".mp4", ".mov", ".webm"}


def long(path: Path) -> str:
    p = str(path)
    if p.startswith("\\\\?\\"):
        return p
    return "\\\\?\\" + p


def collect(src: Path) -> tuple[list[Path], list[Path]]:
    images: list[Path] = []
    videos: list[Path] = []
    walk_root = long(src)
    for dirpath, _dirs, files in os.walk(walk_root):
        for name in files:
            fp = Path(dirpath) / name
            ext = fp.suffix.lower()
            if ext in IMAGE_EXT:
                images.append(fp)
            elif ext in VIDEO_EXT:
                videos.append(fp)
    images.sort(key=lambda p: p.name.lower())
    videos.sort(key=lambda p: p.name.lower())
    return images, videos


def copy_media(slug: str, images: list[Path], videos: list[Path]) -> None:
    photos = DEST / slug / "photos"
    vids = DEST / slug / "videos"
    photos.mkdir(parents=True, exist_ok=True)
    if videos:
        vids.mkdir(parents=True, exist_ok=True)

    for old in photos.glob("*"):
        old.unlink()
    if vids.exists():
        for old in vids.glob("*"):
            old.unlink()

    for i, src in enumerate(images, 1):
        dest = photos / f"{i:02d}.jpg"
        shutil.copy2(long(src), dest)

    for i, src in enumerate(videos, 1):
        dest = vids / f"{i:02d}{src.suffix.lower()}"
        shutil.copy2(long(src), dest)

    print(f"{slug}: {len(images)} photos, {len(videos)} videos")


def contact_sheet(slug: str, images: list[Path]) -> None:
    if not images:
        return
    SHEETS.mkdir(parents=True, exist_ok=True)
    cols = 4
    thumb = 280
    pad = 12
    rows = (len(images) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * (thumb + pad) + pad, rows * (thumb + 36) + pad), (18, 18, 18))
    draw = ImageDraw.Draw(sheet)
    try:
        font = ImageFont.truetype("arial.ttf", 18)
    except OSError:
        font = ImageFont.load_default()

    for i, src in enumerate(images):
        with Image.open(src) as im:
            im = im.convert("RGB")
            im.thumbnail((thumb, thumb))
        x = pad + (i % cols) * (thumb + pad)
        y = pad + (i // cols) * (thumb + 36)
        ox = x + (thumb - im.width) // 2
        oy = y + (thumb - im.height) // 2
        sheet.paste(im, (ox, oy))
        draw.text((x + 6, y + thumb + 4), f"{i+1:02d}", fill=(226, 201, 132), font=font)

    out = SHEETS / f"{slug}.jpg"
    sheet.save(out, quality=82)
    print(f"  sheet {out.name} {sheet.size}")


def main() -> None:
    DEST.mkdir(parents=True, exist_ok=True)
    for slug, folder in LISTINGS:
        src = ROOT / folder
        images, videos = collect(src)
        copy_media(slug, images, videos)
        copied = sorted((DEST / slug / "photos").glob("*"))
        contact_sheet(slug, copied)


if __name__ == "__main__":
    main()
