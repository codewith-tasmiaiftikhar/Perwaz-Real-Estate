export type PropertyType =
  | "house"
  | "apartment"
  | "plot"
  | "farmhouse"
  | "commercial";

export type PropertyStatus = "for-sale" | "for-rent" | "sold";

export type Property = {
  slug: string;
  title: string;
  location: string;
  city: string;
  type: PropertyType;
  bedrooms?: number;
  bathrooms?: number;
  area: string;
  facilities: string[];
  description: string;
  /** Main photo filename inside photos/. Empty when the card uses video. */
  coverImage: string;
  images: string[];
  videos?: string[];
  status?: PropertyStatus;
};

function photoList(count: number, cover: string) {
  return Array.from({ length: count }, (_, i) => `${String(i + 1).padStart(2, "0")}.jpg`).filter(
    (file) => file !== cover,
  );
}

export const properties: Property[] = [
  {
    slug: "4-marla-executive",
    title: "4 Marla Triple-Unit House for Sale",
    location: "Near Askari 14 Gate 1, Caltex Road",
    city: "Rawalpindi",
    type: "house",
    bedrooms: 5,
    bathrooms: 7,
    area: "4 Marla",
    facilities: [
      "Brand-new modern design",
      "Triple unit",
      "Front 22.3 ft, depth 45 ft",
      "Green view from the front",
      "5 rooms",
      "2 drawing rooms",
      "7 washrooms",
      "3 kitchens",
      "Car porch for 1 car",
      "Underground large water tank",
      "Automatic electric gate lock",
      "3 separate water tanks, one per portion",
      "4 water pumps, including one per portion",
      "Separate electricity meter for each portion (3 meters)",
      "Four-core cable ready for solar",
      "Gas available in the street",
      "25 ft street",
    ],
    description:
      "An executive home near Askari 14 Gate No. 1 on Caltex Road. Brand-new modern design on 4 marla (front 22.3 ft, back 45 ft), built as a triple unit. Green view from the front. Five rooms, two drawing rooms, seven washrooms and three kitchens. One-car porch, underground water tank, automatic electric gate lock. Each portion has its own water tank, water pump and electricity meter (three meters), plus a fourth pump. Four-core cable for solar is already in. Gas is available in the 25 ft street. WhatsApp us for the price.",
    coverImage: "17.jpg",
    images: photoList(27, "17.jpg"),
    status: "for-sale",
  },
  {
    slug: "5-marla-double-caltex",
    title: "5 Marla Double-Storey House for Sale",
    location: "Caltex Road, Lane 4, near Askari 14 Gate 1",
    city: "Rawalpindi",
    type: "house",
    area: "5 Marla",
    facilities: [
      "Water available",
      "Electricity available",
      "Bank loan available",
    ],
    description:
      "A 5 marla double-storey house on Caltex Road, Lane 4, near Askari 14 Gate 1. Water and electricity are connected. A bank loan can be arranged on this house. WhatsApp us for the price and a viewing.",
    coverImage: "23.jpg",
    images: photoList(26, "23.jpg"),
    status: "for-sale",
  },
  {
    slug: "4-marla-caltex",
    title: "4 Marla 1.5-Storey House",
    location: "Caltex Road",
    city: "Rawalpindi",
    type: "house",
    area: "4 Marla",
    facilities: [
      "Water available",
      "Electricity available",
      "Gas not available",
    ],
    description:
      "A 4 marla 1.5-storey house on Caltex Road. Water and electricity are connected. Sui gas is not available. This house is sold out. WhatsApp us if you want something similar.",
    coverImage: "19.jpg",
    images: photoList(21, "19.jpg"),
    status: "sold",
  },
  {
    slug: "10-marla-adyala",
    title: "10 Marla Single-Storey House for Sale",
    location: "Adyala Road, near NADRA office",
    city: "Rawalpindi",
    type: "house",
    area: "10 Marla",
    facilities: [
      "Water available",
      "Electricity available",
      "Gas available",
      "Lawn and car porch",
    ],
    description:
      "A 10 marla single-storey house on Adyala Road, near the NADRA office. Water, electricity and gas are connected. WhatsApp us for the price and a viewing.",
    coverImage: "02.jpg",
    images: photoList(19, "02.jpg"),
    status: "for-sale",
  },
  {
    slug: "9-marla-defense",
    title: "9 Marla Triple-Storey House for Rent",
    location: "Defense Road",
    city: "Rawalpindi",
    type: "house",
    area: "9 Marla",
    facilities: [
      "Water available",
      "Electricity available",
      "Gas available",
    ],
    description:
      "A 9 marla triple-storey house on Defense Road, offered for rent. Water, electricity and gas are connected. WhatsApp us for the rent and a viewing.",
    coverImage: "02.jpg",
    images: photoList(34, "02.jpg"),
    videos: ["01.mp4", "02.mp4"],
    status: "for-rent",
  },
  {
    slug: "4-5-marla-defense",
    title: "4.5 Marla Single-Storey House for Sale",
    location: "Defense Road, near Askari 14 Gate 2",
    city: "Rawalpindi",
    type: "house",
    area: "4.5 Marla",
    facilities: ["Water available", "Electricity available"],
    description:
      "A 4.5 marla single-storey house on Defense Road, near Askari 14 Gate 2. Water and electricity are connected. WhatsApp us for the price and a viewing.",
    coverImage: "11.jpg",
    images: photoList(13, "11.jpg"),
    status: "for-sale",
  },
  {
    slug: "4-marla-defense",
    title: "4 Marla Single-Storey House for Sale",
    location: "Defense Road, near Askari 14 Gate 2",
    city: "Rawalpindi",
    type: "house",
    area: "4 Marla",
    facilities: [
      "Water available",
      "Electricity available",
      "Gas not available",
    ],
    description:
      "A 4 marla single-storey house on Defense Road, near Askari 14 Gate 2. Water and electricity are connected. Sui gas is not available. A walk-through video is on the listing. WhatsApp us for the price and a visit.",
    coverImage: "",
    images: [],
    videos: ["01.mp4"],
    status: "for-sale",
  },
  {
    slug: "5-marla-khan-house",
    title: "5 Marla 2.5-Storey House for Sale",
    location: "Defense Road, Askari 14 Gate 2, Sector D, Khan House",
    city: "Rawalpindi",
    type: "house",
    area: "5 Marla",
    facilities: [
      "Water available",
      "Electricity available",
      "Gas not available",
      "WASA connection available",
    ],
    description:
      "A 5 marla 2.5-storey house for sale on Defense Road near Askari 14 Gate 2, Sector D (Khan House). Water and electricity are connected, including a WASA connection. Sui gas is not available. Walk-through videos are on the listing. WhatsApp us for the price and a visit.",
    coverImage: "",
    images: [],
    videos: ["01.mp4", "02.mp4"],
    status: "for-sale",
  },
  {
    slug: "5-marla-house",
    title: "5 Marla House for Sale",
    location: "Street and sector on WhatsApp",
    city: "Rawalpindi",
    type: "house",
    area: "5 Marla",
    facilities: [
      "Water available",
      "Electricity available",
      "Gas not available",
      "Covered car porch",
      "Iron gate",
      "Fitted kitchen",
      "Built-in wardrobes",
      "Marble flooring",
      "False ceiling",
      "Wooden doors",
    ],
    description:
      "A 5 marla house with a grey front elevation, a gated car porch, marble floors, false ceilings and wooden doors throughout. The home includes a drawing lounge, a fitted kitchen with cabinets, and bedrooms with built-in wardrobes. Water and electricity are connected. Sui gas is not available. WhatsApp us for the price, the exact location, and a viewing.",
    coverImage: "02.jpg",
    images: photoList(11, "02.jpg"),
    status: "for-sale",
  },
  {
    slug: "samarzar-plots",
    title: "Three 5 Marla Plots for Sale",
    location: "Samarzar",
    city: "Rawalpindi",
    type: "plot",
    area: "5 Marla each (3 plots)",
    facilities: ["Three adjoining 5 marla plots"],
    description:
      "Three 5 marla plots in Samarzar. Site videos are on the listing. WhatsApp us for the price, the exact street, and papers.",
    coverImage: "",
    images: [],
    videos: ["01.mp4", "02.mp4", "03.mp4"],
    status: "for-sale",
  },
];

/** Front-page hero: same set of stills, served as compressed copies. */
export const heroSlides = [
  { src: "/hero/4-marla-executive-17.jpg", slug: "4-marla-executive" },
  { src: "/hero/5-marla-double-caltex-05.jpg", slug: "5-marla-double-caltex" },
  { src: "/hero/4-marla-caltex-19.jpg", slug: "4-marla-caltex" },
  { src: "/hero/10-marla-adyala-15.jpg", slug: "10-marla-adyala" },
  { src: "/hero/5-marla-double-caltex-21.jpg", slug: "5-marla-double-caltex" },
  { src: "/hero/4-marla-executive-03.jpg", slug: "4-marla-executive" },
  { src: "/hero/5-marla-double-caltex-23.jpg", slug: "5-marla-double-caltex" },
  { src: "/hero/4-marla-caltex-15.jpg", slug: "4-marla-caltex" },
  { src: "/hero/10-marla-adyala-02.jpg", slug: "10-marla-adyala" },
  { src: "/hero/5-marla-double-caltex-17.jpg", slug: "5-marla-double-caltex" },
  { src: "/hero/4-marla-executive-13.jpg", slug: "4-marla-executive" },
  { src: "/hero/5-marla-house-01.jpg", slug: "5-marla-house" },
  { src: "/hero/4-marla-caltex-02.jpg", slug: "4-marla-caltex" },
  { src: "/hero/5-marla-double-caltex-19.jpg", slug: "5-marla-double-caltex" },
  { src: "/hero/4-marla-executive-20.jpg", slug: "4-marla-executive" },
  { src: "/hero/10-marla-adyala-17.jpg", slug: "10-marla-adyala" },
  { src: "/hero/9-marla-defense-02.jpg", slug: "9-marla-defense" },
  { src: "/hero/4-marla-executive-01.jpg", slug: "4-marla-executive" },
  { src: "/hero/5-marla-house-02.jpg", slug: "5-marla-house" },
  { src: "/hero/4-5-marla-defense-07.jpg", slug: "4-5-marla-defense" },
  { src: "/hero/5-marla-double-caltex-06.jpg", slug: "5-marla-double-caltex" },
];

export const heroRooms = [
  "/hero/5-marla-double-caltex-05.jpg",
  "/hero/10-marla-adyala-15.jpg",
  "/hero/5-marla-double-caltex-21.jpg",
  "/hero/4-marla-executive-03.jpg",
  "/hero/4-marla-caltex-15.jpg",
  "/hero/5-marla-double-caltex-17.jpg",
  "/hero/4-marla-executive-20.jpg",
  "/hero/4-marla-caltex-18.jpg",
  "/hero/5-marla-house-01.jpg",
  "/hero/10-marla-adyala-17.jpg",
  "/hero/4-marla-executive-01.jpg",
  "/hero/5-marla-double-caltex-19.jpg",
  "/hero/4-marla-caltex-02.jpg",
  "/hero/4-5-marla-defense-11.jpg",
  "/hero/5-marla-double-caltex-06.jpg",
];

export function getProperty(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export function propertyPhoto(property: Property, file: string) {
  return `/properties/${property.slug}/photos/${file}`;
}

export function propertyVideos(property: Property) {
  return (property.videos ?? []).map(
    (file) => `/properties/${property.slug}/videos/${file}`,
  );
}

export function propertyVideo(property: Property) {
  return propertyVideos(property)[0];
}

export function gallery(property: Property) {
  if (!property.coverImage && property.images.length === 0) return [];
  const files = [property.coverImage, ...property.images].filter(
    (file, index, all) => file && all.indexOf(file) === index,
  );
  return files.map((file) => propertyPhoto(property, file));
}

export const typeLabel: Record<PropertyType, string> = {
  house: "House",
  apartment: "Apartment",
  plot: "Plot",
  farmhouse: "Farmhouse",
  commercial: "Commercial",
};
