from pathlib import Path
from PIL import Image

ROOT = Path(r"c:\Work\Combine Shipment Automation\public")
OUT = ROOT / "hero"
OUT.mkdir(parents=True, exist_ok=True)

files = [
    "properties/4-marla-executive/photos/17.jpg",
    "properties/5-marla-double-caltex/photos/05.jpg",
    "properties/4-marla-caltex/photos/19.jpg",
    "properties/10-marla-adyala/photos/15.jpg",
    "properties/5-marla-double-caltex/photos/21.jpg",
    "properties/4-marla-executive/photos/03.jpg",
    "properties/5-marla-double-caltex/photos/23.jpg",
    "properties/4-marla-caltex/photos/15.jpg",
    "properties/10-marla-adyala/photos/02.jpg",
    "properties/5-marla-house/photos/02.jpg",
    "properties/5-marla-double-caltex/photos/17.jpg",
    "properties/4-marla-executive/photos/20.jpg",
    "properties/4-marla-caltex/photos/18.jpg",
    "properties/5-marla-house/photos/01.jpg",
    "properties/4-marla-executive/photos/01.jpg",
]

for rel in files:
    src = ROOT / rel
    name = rel.replace("properties/", "").replace("/photos/", "-")
    dest = OUT / name
    with Image.open(src) as im:
        im = im.convert("RGB")
        im.thumbnail((1600, 1600))
        im.save(dest, "JPEG", quality=72, optimize=True, progressive=True)
    print(f"{src.stat().st_size//1024}KB -> {dest.stat().st_size//1024}KB  {name}")
