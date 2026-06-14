import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { requirePresetBySlug, type Preset } from "../lib/data";

const FEATURED_SLUGS = [
  "cinematic-film",
  "moody",
  "urban-paris",
  "landscape-golden",
  "vintage-film",
  "cinematic-blue",
];

const featured = FEATURED_SLUGS.map((slug, i) => ({
  ...requirePresetBySlug(slug),
  displayId: String(i + 1).padStart(2, "0"),
}));

function CollectionCard({
  preset,
  displayId,
  aspectClass,
  sizes,
}: {
  preset: Preset;
  displayId: string;
  aspectClass: string;
  sizes: string;
}) {
  return (
    <div className="group flex flex-col gap-3">
      <div
        className={`relative w-full ${aspectClass} overflow-hidden bg-surface-container`}
      >
        <Image
          src={preset.coverImage}
          alt={`${preset.name} preset example`}
          fill
          sizes={sizes}
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
        <div className="absolute top-4 left-4 bg-surface border-ultra border-outline-variant px-3 py-1.5">
          <span className="text-label-caps text-primary">{displayId} / {preset.category.toUpperCase()}</span>
        </div>
      </div>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-headline-md text-primary leading-tight">{preset.name}</h3>
          <p className="text-body-md text-on-surface-variant mt-1 max-w-xs">{preset.description}</p>
        </div>
        <span className="text-label-caps text-on-surface-variant whitespace-nowrap ml-4">CA${preset.price}</span>
      </div>
      <Link
        href={`/presets/${preset.slug}`}
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
        <Button href="/collections" variant="ghost" className="hidden md:inline-flex items-center gap-2">
          All Collections
        </Button>
      </div>

      {/* Bento grid row 1 */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="col-span-12 md:col-span-7">
          <CollectionCard preset={featured[0]} displayId={featured[0].displayId} aspectClass="aspect-[4/3]" sizes="(min-width: 768px) 58vw, 100vw" />
        </div>
        <div className="col-span-12 md:col-span-5">
          <CollectionCard preset={featured[1]} displayId={featured[1].displayId} aspectClass="aspect-square" sizes="(min-width: 768px) 42vw, 100vw" />
        </div>
      </div>

      {/* Bento grid row 2 */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="col-span-12 md:col-span-4">
          <CollectionCard preset={featured[2]} displayId={featured[2].displayId} aspectClass="aspect-square" sizes="(min-width: 768px) 33vw, 100vw" />
        </div>
        <div className="col-span-12 md:col-span-8">
          <CollectionCard preset={featured[3]} displayId={featured[3].displayId} aspectClass="aspect-[16/9]" sizes="(min-width: 768px) 66vw, 100vw" />
        </div>
      </div>

      {/* Bento grid row 3 */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5">
          <CollectionCard preset={featured[4]} displayId={featured[4].displayId} aspectClass="aspect-[3/4]" sizes="(min-width: 768px) 42vw, 100vw" />
        </div>
        <div className="col-span-12 md:col-span-7">
          <CollectionCard preset={featured[5]} displayId={featured[5].displayId} aspectClass="aspect-[3/2]" sizes="(min-width: 768px) 58vw, 100vw" />
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="mt-10 md:hidden">
        <Button href="/collections" variant="ghost" className="w-full">
          All Collections
        </Button>
      </div>
    </section>
  );
}
