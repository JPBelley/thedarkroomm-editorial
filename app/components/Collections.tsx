import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    id: "01",
    category: "Cinematic",
    name: "Cinematic Film",
    description: "Deep shadows and lifted blacks. The color grade you've seen on screen but couldn't pin down.",
    image: "/presets/cinematic-film-cover.jpg",
    price: "$24",
    size: "large",
  },
  {
    id: "02",
    category: "Moody",
    name: "Moody Collection",
    description: "Heavy, atmospheric tones. Works well in overcast light, fog, or anything shot after golden hour.",
    image: "/presets/moody-cover.jpg",
    price: "$24",
    size: "small",
  },
  {
    id: "03",
    category: "Urban",
    name: "Urban Paris",
    description: "Soft, desaturated film tones. Made for city streets, but it handles portraits just as well.",
    image: "/presets/urban-paris-cover.jpg",
    price: "$24",
    size: "small",
  },
  {
    id: "04",
    category: "Landscape",
    name: "Golden Hour",
    description: "Warm tones that don't go orange. Built on landscape and travel shots across three continents.",
    image: "/presets/landscape-golden-cover.jpg",
    price: "$24",
    size: "large",
  },
  {
    id: "05",
    category: "Vintage",
    name: "Vintage Film",
    description: "Grain and faded highlights. Looks like old film without looking like a filter.",
    image: "/presets/vintage-cover.jpg",
    price: "$24",
    size: "small",
  },
  {
    id: "06",
    category: "Cinematic",
    name: "Cinematic Blue",
    description: "Cool teal shadows, desaturated mids. Good for fashion, architecture, or anything that should feel cold.",
    image: "/presets/cinematic-blue-cover.jpg",
    price: "$24",
    size: "small",
  },
];

function CollectionCard({
  collection,
  aspectClass,
}: {
  collection: (typeof collections)[0];
  aspectClass: string;
}) {
  return (
    <div className="group flex flex-col gap-3">
      <div
        className={`relative w-full ${aspectClass} overflow-hidden bg-surface-container`}
      >
        <Image
          src={collection.image}
          alt={`${collection.name} preset example`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
        {/* Label */}
        <div className="absolute top-4 left-4 bg-surface border-ultra border-outline-variant px-3 py-1.5">
          <span className="text-label-caps text-primary">{collection.id} / {collection.category.toUpperCase()}</span>
        </div>
      </div>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-headline-md text-primary leading-tight">{collection.name}</h3>
          <p className="text-body-md text-on-surface-variant mt-1 max-w-xs">{collection.description}</p>
        </div>
        <span className="text-label-caps text-on-surface-variant whitespace-nowrap ml-4">{collection.price}</span>
      </div>
      <Link
        href={`/collections/${collection.category.toLowerCase()}`}
        className="inline-flex items-center gap-2 text-ui-button uppercase tracking-wider border-b border-primary pb-0.5 hover:gap-3 transition-all duration-300 w-fit"
      >
        Explore
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="square"/>
        </svg>
      </Link>
    </div>
  );
}

export default function Collections() {
  return (
    <section className="max-w-[1440px] mx-auto px-[20px] md:px-[64px] pb-[128px]">
      {/* Section header */}
      <div className="flex items-end justify-between border-b border-outline-variant pb-4 mb-12">
        <div>
          <p className="text-label-caps text-on-surface-variant mb-2">The Collection</p>
          <h2 className="text-headline-lg text-primary">Every genre. Every mood.</h2>
        </div>
        <Link
          href="/collections"
          className="hidden md:inline-flex items-center gap-2 text-ui-button uppercase tracking-wider border border-primary px-6 py-3 hover:bg-primary hover:text-on-primary transition-all duration-300"
        >
          All Collections
        </Link>
      </div>

      {/* Bento grid row 1 */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="col-span-12 md:col-span-7">
          <CollectionCard collection={collections[0]} aspectClass="aspect-[4/3]" />
        </div>
        <div className="col-span-12 md:col-span-5">
          <CollectionCard collection={collections[1]} aspectClass="aspect-square" />
        </div>
      </div>

      {/* Bento grid row 2 */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="col-span-12 md:col-span-4">
          <CollectionCard collection={collections[2]} aspectClass="aspect-square" />
        </div>
        <div className="col-span-12 md:col-span-8">
          <CollectionCard collection={collections[3]} aspectClass="aspect-[16/9]" />
        </div>
      </div>

      {/* Bento grid row 3 */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5">
          <CollectionCard collection={collections[4]} aspectClass="aspect-[3/4]" />
        </div>
        <div className="col-span-12 md:col-span-7">
          <CollectionCard collection={collections[5]} aspectClass="aspect-[3/2]" />
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="mt-10 md:hidden">
        <Link
          href="/collections"
          className="w-full flex items-center justify-center text-ui-button uppercase tracking-wider border border-primary py-4 hover:bg-primary hover:text-on-primary transition-all duration-300"
        >
          All Collections
        </Link>
      </div>
    </section>
  );
}
