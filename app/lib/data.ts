// Static data layer — mirrors the Supabase schema.
// When the backend is ready, replace these exports with API calls.
// The page components won't need to change.

export type Category = "cinematic" | "moody" | "urban" | "landscape" | "vintage";

export type Creator = {
  slug: string;
  name: string;
  bio: string;
  location: string;
  website?: string;
};

export type Preset = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  tags: string[];
  price: number;
  isFree: boolean;
  isBestSeller?: boolean;
  unlisted?: boolean;
  etsyLink?: string;
  coverImage: string;
  description: string;
  includes: { desktop: number; mobile: number };
  formats: string[];
  creatorSlug: string;
};

export type Bundle = {
  id: string;
  slug: string;
  name: string;
  description: string;
  coverImage: string;
  presetSlugs: string[];
  price: number;
  originalPrice: number;
  etsyLink?: string;
};

// ─── Creators ────────────────────────────────────────────────────────────────

export const creators: Creator[] = [
  {
    slug: "thedarkroomm",
    name: "The Darkroomm",
    bio: "Lightroom presets built around mood, light, and feeling. Each pack owns one specific look and commits to it.",
    location: "Montreal, QC",
  },
];

// ─── Presets ─────────────────────────────────────────────────────────────────

export const presets: Preset[] = [
  // CINEMATIC
  {
    id: "1",
    slug: "cinematic-film",
    name: "Cinematic Film",
    category: "cinematic",
    tags: ["film", "warm", "shadows", "contrast"],
    price: 5,
    isFree: false,
    coverImage: "/presets/cinematic-film-cover.avif",
    description: "Deep shadows and lifted blacks. The color grade you've seen on screen but couldn't pin down.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    unlisted: true
  },
  {
    id: "2",
    slug: "cinematic-blue",
    name: "Cinematic Blue",
    category: "cinematic",
    tags: ["cool", "teal", "desaturated", "modern"],
    price: 4,
    isFree: false,
    coverImage: "/presets/cinematic-blue-cover.avif",
    description: "Cool teal shadows, desaturated mids. Good for fashion, architecture, or anything that should feel cold.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/1838508074"
  },
  {
    id: "3",
    slug: "cinematic-dark",
    name: "Cinematic Dark",
    category: "cinematic",
    tags: ["dark", "moody", "contrast", "dramatic"],
    price: 5,
    isFree: false,
    coverImage: "/presets/cinematic-dark-cover.avif",
    description: "Heavy contrast, crushed blacks. For shots that need to feel like a movie still.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/1880654115"
  },
  {
    id: "4",
    slug: "cinematic-green",
    name: "Cinematic Green",
    category: "cinematic",
    tags: ["green", "teal", "nature", "muted"],
    price: 5,
    isFree: false,
    coverImage: "/presets/cinematic-green-cover.avif",
    description: "Muted greens and faded tones. Works well in forests, fields, or anywhere with natural light.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/1842233178"
  },
  {
    id: "5",
    slug: "cinematic-pink",
    name: "Cinematic Pink",
    category: "cinematic",
    tags: ["pink", "soft", "warm", "portrait"],
    price: 5,
    isFree: false,
    coverImage: "/presets/cinematic-pink-cover.avif",
    description: "Soft pink tones with warm highlights. Built for portraits and golden hour.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/4361659747"
  },

  // MOODY
  {
    id: "6",
    slug: "moody",
    name: "Moody Collection",
    category: "moody",
    tags: ["dark", "atmospheric", "shadows", "overcast"],
    price: 5,
    isFree: false,
    coverImage: "/presets/moody-cover.avif",
    description: "Heavy, atmospheric tones. Works well in overcast light, fog, or anything shot after golden hour.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/1872613423"
  },
  {
    id: "7",
    slug: "moody-fog",
    name: "Moody Fog",
    category: "moody",
    tags: ["fog", "mist", "overcast", "landscape", "atmospheric"],
    price: 5,
    isFree: false,
    coverImage: "/presets/moody-fog-cover.avif",
    description: "Fog, overcast skies, that hour before the light gives up. Built on the conditions most presets struggle with.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/4343403613"
  },
  {
    id: "8",
    slug: "moody-retro",
    name: "Moody Retro",
    category: "moody",
    tags: ["retro", "faded", "warm", "vintage", "dark"],
    price: 5,
    isFree: false,
    coverImage: "/presets/moody-retro-cover.avif",
    description: "Faded tones with a retro warmth. Sits between moody and vintage — somewhere in the late afternoon.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/4455351092"
  },

  // URBAN
  {
    id: "9",
    slug: "urban-paris",
    name: "Urban Paris",
    category: "urban",
    tags: ["paris", "street", "film", "soft", "muted"],
    price: 5,
    isFree: false,
    coverImage: "/presets/urban-paris-cover.avif",
    description: "Soft, desaturated film tones. Made for city streets, but it handles portraits just as well.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/4300279004"
  },
  {
    id: "10",
    slug: "urban-tokyo",
    name: "Urban Tokyo",
    category: "urban",
    tags: ["tokyo", "neon", "night", "cool", "street"],
    price: 5,
    isFree: false,
    coverImage: "/presets/urban-tokyo-cover.avif",
    description: "Cool, high-contrast tones with a slight neon cast. Made for night streets and artificial light.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/4322881888"
  },
  {
    id: "11",
    slug: "urban-berlin",
    name: "Urban Berlin",
    category: "urban",
    tags: ["berlin", "street", "grey", "concrete", "raw"],
    price: 5,
    isFree: false,
    coverImage: "/presets/urban-berlin-cover.avif",
    description: "Grey, raw, concrete. Matches the city it's named after — no warmth, no softening.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/1906155467"
  },
  {
    id: "12",
    slug: "urban-london",
    name: "Urban London",
    category: "urban",
    tags: ["london", "street", "overcast", "muted", "cool"],
    price: 5,
    isFree: false,
    coverImage: "/presets/urban-london-cover.avif",
    description: "Muted and cool, like a grey London morning. Works in overcast conditions better than most.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/1896100007"
  },
  {
    id: "13",
    slug: "urban-newyork",
    name: "Urban New York",
    category: "urban",
    tags: ["new york", "street", "contrast", "gritty"],
    price: 5,
    isFree: false,
    coverImage: "/presets/urban-newyork-cover.avif",
    description: "High contrast, gritty and direct. Built for the kind of streets that don't slow down.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/1794541809"
  },
  {
    id: "14",
    slug: "urban-hongkong",
    name: "Urban Hong Kong",
    category: "urban",
    tags: ["hong kong", "night", "neon", "dense", "street"],
    price: 5,
    isFree: false,
    coverImage: "/presets/urban-hongkong-cover.avif",
    description: "Dense, layered, neon-soaked. For cities that feel like they're always on.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/4355034483"
  },
  {
    id: "15",
    slug: "urban-mexico",
    name: "Urban Mexico",
    category: "urban",
    tags: ["mexico", "warm", "vibrant", "street", "color"],
    price: 5,
    isFree: false,
    coverImage: "/presets/urban-mexico-cover.avif",
    description: "Warm and saturated with punchy shadows. For colorful streets and bright midday sun.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/4450014103"
  },
  {
    id: "16",
    slug: "urban-sf",
    name: "Urban San Francisco",
    category: "urban",
    tags: ["san francisco", "fog", "cool", "street"],
    price: 5,
    isFree: false,
    coverImage: "/presets/urban-sf-cover.avif",
    description: "Foggy, cool-toned, slightly overcast. The light you get when the marine layer rolls in.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/4339270736"
  },
  {
    id: "17",
    slug: "urban-teal",
    name: "Urban Teal & Warmth",
    category: "urban",
    tags: ["teal", "warm", "split tone", "street", "portrait"],
    price: 5,
    isFree: false,
    coverImage: "/presets/urban-teal-cover.avif",
    description: "The classic teal and orange split, done right. Works on streets and portraits without looking overdone.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/4412028150"
  },
  {
    id: "18",
    slug: "urban-master",
    name: "Urban Master Collection",
    category: "urban",
    tags: ["street", "versatile", "all cities", "bundle"],
    price: 5,
    isFree: false,
    coverImage: "/presets/urban-master-cover.avif",
    description: "Every urban pack in one. 60+ presets covering every city mood.",
    includes: { desktop: 60, mobile: 60 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    unlisted: true
  },

  // LANDSCAPE
  {
    id: "19",
    slug: "landscape-golden",
    name: "Landscape Golden Hour",
    category: "landscape",
    tags: ["golden hour", "warm", "sunset", "travel"],
    price: 5,
    isFree: false,
    coverImage: "/presets/landscape-golden-cover.avif",
    description: "Warm tones that don't go orange. Built on landscape and travel shots across three continents.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/4513332617"
  },
  {
    id: "20",
    slug: "landscape-bali",
    name: "Landscape Bali",
    category: "landscape",
    tags: ["tropical", "warm", "green", "travel", "bali"],
    price: 5,
    isFree: false,
    coverImage: "/presets/landscape-bali-cover.avif",
    description: "Lush greens and warm skies. Tuned for tropical light where everything is a bit too saturated.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/4303233411"
  },
  {
    id: "21",
    slug: "landscape-beach",
    name: "Landscape Beach",
    category: "landscape",
    tags: ["beach", "ocean", "blue", "bright", "summer"],
    price: 5,
    isFree: false,
    coverImage: "/presets/landscape-beach-cover.avif",
    description: "Bright blues, clean whites. For coastlines and open skies without blowing out the highlights.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/4395578165"
  },
  {
    id: "22",
    slug: "landscape-forest",
    name: "Landscape Forest",
    category: "landscape",
    tags: ["forest", "green", "nature", "moody", "shadows"],
    price: 5,
    isFree: false,
    coverImage: "/presets/landscape-forest-cover.avif",
    description: "Deep greens and dark shadows. For dense forests and tree canopy light.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/4452656859"
  },
  {
    id: "23",
    slug: "landscape-nordic",
    name: "Landscape Nordic",
    category: "landscape",
    tags: ["nordic", "cold", "blue", "winter", "minimalist"],
    price: 6,
    isFree: false,
    coverImage: "/presets/landscape-nordic-cover.avif",
    description: "Cold, blue-grey tones with clean shadows. Built for winter, mountains, and open sky.",
    includes: { desktop: 20, mobile: 20 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/4418096499"
  },
  {
    id: "24",
    slug: "landscape-hawai",
    name: "Landscape Hawaii",
    category: "landscape",
    tags: ["hawaii", "tropical", "warm", "ocean", "volcanic"],
    price: 5,
    isFree: false,
    coverImage: "/presets/landscape-hawai-cover.avif",
    description: "Tropical warmth without the oversaturation. Tuned on Hawaiian coastline and volcanic terrain.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/4313127465"
  },
  {
    id: "25",
    slug: "landscape",
    name: "Landscape Collection",
    category: "landscape",
    tags: ["landscape", "versatile", "nature", "travel"],
    price: 5,
    isFree: false,
    coverImage: "/presets/landscape-cover.avif",
    description: "The core landscape pack. Versatile enough for any outdoor shot, specific enough to have a look.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/1819820658"
  },
  {
    id: "26",
    slug: "landscape-master",
    name: "Landscape Master Collection",
    category: "landscape",
    tags: ["landscape", "versatile", "all terrain", "master"],
    price: 25,
    isFree: false,
    coverImage: "/presets/landscape-master-cover.avif",
    description: "Every landscape pack in one. 70+ presets covering every terrain and light condition.",
    includes: { desktop: 350, mobile: 350 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    unlisted: true
  },

  // VINTAGE
  {
    id: "27",
    slug: "vintage-film",
    name: "Vintage Film",
    category: "vintage",
    tags: ["film", "grain", "analog", "faded"],
    price: 5,
    isFree: false,
    coverImage: "/presets/vintage-film-cover.avif",
    description: "Grain and faded highlights. Looks like old film without looking like a filter.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/1868500317"
  },
  {
    id: "28",
    slug: "vintage-35mm",
    name: "Vintage 35MM",
    category: "vintage",
    tags: ["35mm", "grain", "analog", "film", "sharp"],
    price: 5,
    isFree: false,
    coverImage: "/presets/vintage-35mm-cover.avif",
    description: "The grain and contrast of a 35mm roll. Close to real film without the unpredictability.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    unlisted: true
  },
  {
    id: "29",
    slug: "vintage-80s",
    name: "Vintage 80's",
    category: "vintage",
    tags: ["80s", "warm", "faded", "pastel", "retro"],
    price: 5,
    isFree: false,
    isBestSeller: true,
    coverImage: "/presets/vintage-80s-cover.avif",
    description: "Faded pastels and warm highlights. The kind of photo you'd find in an old shoebox.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/4387759848"
  },
  {
    id: "30",
    slug: "vintage-90s",
    name: "Vintage 90's",
    category: "vintage",
    tags: ["90s", "disposable", "grain", "faded", "retro"],
    price: 5,
    isFree: false,
    coverImage: "/presets/vintage-90s-cover.avif",
    description: "Disposable camera grain and color shifts. For the era of photos you couldn't delete.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/1836255354"
  },
  {
    id: "31",
    slug: "vintage-analog",
    name: "Vintage Analog",
    category: "vintage",
    tags: ["analog", "warm", "grain", "film", "soft"],
    price: 5,
    isFree: false,
    coverImage: "/presets/vintage-analog-cover.avif",
    description: "Soft analog warmth with a natural grain. Feels less processed than most film presets.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/4469836963"
  },
  {
    id: "32",
    slug: "vintage-expired",
    name: "Vintage Expired Film",
    category: "vintage",
    tags: ["expired film", "color shift", "grain", "unpredictable"],
    price: 5,
    isFree: false,
    coverImage: "/presets/vintage-expired-cover.avif",
    description: "Color shifts and unpredictable tones that come from shooting past the expiry date.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/4516146143"
  },
  {
    id: "33",
    slug: "vintage-summer",
    name: "Vintage Summer Film",
    category: "vintage",
    tags: ["summer", "warm", "bright", "faded", "nostalgic"],
    price: 5,
    isFree: false,
    coverImage: "/presets/vintage-summer-cover.avif",
    description: "Bright, warm, and slightly overexposed — the way summer looks in memory.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/4512807268"
  },
  {
    id: "34",
    slug: "vintage-warm-analog",
    name: "Vintage Warm Analog",
    category: "vintage",
    tags: ["warm", "analog", "golden", "portrait", "soft"],
    price: 5,
    isFree: false,
    coverImage: "/presets/vintage-warm-analog-cover.avif",
    description: "Golden and warm without going yellow. The sweet spot between analog and clean.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/4484150319"
  },
  {
    id: "35",
    slug: "vintage-warm",
    name: "Vintage Warm",
    category: "vintage",
    tags: ["warm", "soft", "portrait", "lifestyle"],
    price: 5,
    isFree: false,
    coverImage: "/presets/vintage-warm-cover.avif",
    description: "Clean warmth with a vintage tint. Works across portraits, lifestyle, and travel.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/4440800685"
  },
  {
    id: "36",
    slug: "vintage",
    name: "Vintage Collection",
    category: "vintage",
    tags: ["vintage", "film", "analog", "versatile"],
    price: 5,
    isFree: false,
    coverImage: "/presets/vintage-cover.avif",
    description: "The core vintage pack. A starting point for anyone who wants the film look without committing to a decade.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/1868500317"
  },
  {
    id: "37",
    slug: "vintage-film2",
    name: "Vintage Film II",
    category: "vintage",
    tags: ["film", "grain", "analog", "cool", "faded"],
    price: 5,
    isFree: false,
    coverImage: "/presets/vintage-film2-cover.avif",
    description: "A cooler, slightly muted follow-up to the original Film pack. More blue in the shadows.",
    includes: { desktop: 10, mobile: 10 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/4402651604"
  },
  {
    id: "38",
    slug: "earth",
    name: "Earth Collection",
    category: "landscape",
    tags: ["earthy", "warm", "natural", "outdoor", "free"],
    price: 0,
    isFree: true,
    unlisted: true,
    coverImage: "/presets/earth-cover.avif",
    description: "Warm, earthy tones built on natural light. Greens that stay green, skies that stay honest. Free with your newsletter subscription.",
    includes: { desktop: 6, mobile: 5 },
    formats: ["XMP", "DNG"],
    creatorSlug: "thedarkroomm",
  },
];

// ─── Bundles ─────────────────────────────────────────────────────────────────

export const bundles: Bundle[] = [
  {
    id: "b1",
    slug: "cinematic-bundle",
    name: "The Cinematic Bundle",
    description: "All 5 cinematic packs in one. 60 desktop + 60 mobile presets.",
    coverImage: "/presets/cinematic-film-cover.avif",
    presetSlugs: ["cinematic-film", "cinematic-blue", "cinematic-dark", "cinematic-green", "cinematic-pink"],
    price: 10,
    originalPrice: 10,
    etsyLink: 'https://thedarkroomfactory.etsy.com/listing/1860795138'
  },
  // {
  //   id: "b2",
  //   slug: "vintage-bundle",
  //   name: "The Vintage Bundle",
  //   description: "Every vintage pack. From 35mm grain to expired film shifts.",
  //   coverImage: "/presets/vintage-film-cover.avif",
  //   presetSlugs: ["vintage-film", "vintage-35mm", "vintage-80s", "vintage-90s", "vintage-analog", "vintage-expired", "vintage-summer", "vintage-warm-analog", "vintage-warm", "vintage", "vintage-film2"],
  //   price: 5,
  //   originalPrice: 264,
  // },
  {
    id: "b3",
    slug: "urban-bundle",
    name: "The Urban Bundle",
    description: "Every city. Every mood. The full urban collection.",
    coverImage: "/presets/urban-paris-cover.avif",
    presetSlugs: ["urban-paris", "urban-tokyo", "urban-berlin", "urban-london", "urban-newyork", "urban-hongkong", "urban-mexico", "urban-sf", "urban-teal"],
    price: 11,
    originalPrice: 11,
    etsyLink: "https://thedarkroomfactory.etsy.com/listing/1896552989"
  },
];

// ─── Editorial picks ─────────────────────────────────────────────────────────
// Change this slug to swap what shows on the home page best seller section.

export const BEST_SELLER_SLUG = "vintage-80s";

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function getListedPresets(): Preset[] {
  return presets.filter((p) => !p.unlisted);
}

export function getPresetBySlug(slug: string): Preset | undefined {
  return presets.find((p) => p.slug === slug);
}

// For hardcoded slugs (featured sections, editorial picks) — fails loudly at
// build time if the slug ever gets renamed or removed.
export function requirePresetBySlug(slug: string): Preset {
  const preset = getPresetBySlug(slug);
  if (!preset) throw new Error(`Preset not found: "${slug}"`);
  return preset;
}

export function getPresetsByCategory(category: Category): Preset[] {
  return presets.filter((p) => p.category === category);
}

export function getCreatorBySlug(slug: string): Creator | undefined {
  return creators.find((c) => c.slug === slug);
}

export function getPresetsByCreator(creatorSlug: string): Preset[] {
  return presets.filter((p) => p.creatorSlug === creatorSlug);
}

export function getBundleBySlug(slug: string): Bundle | undefined {
  return bundles.find((b) => b.slug === slug);
}

export const categories: { slug: Category; label: string; description: string }[] = [
  { slug: "cinematic", label: "Cinematic", description: "Cinema-grade color grading for dramatic, filmic shots." },
  { slug: "moody", label: "Moody", description: "Heavy, atmospheric tones for overcast and low-light conditions." },
  { slug: "urban", label: "Urban", description: "Street and city photography across 9 cities worldwide." },
  { slug: "landscape", label: "Landscape", description: "Nature, travel, and outdoor photography in every terrain." },
  { slug: "vintage", label: "Vintage", description: "Analog film looks from 35mm to expired stock." },
];
