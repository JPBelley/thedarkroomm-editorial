import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getListedPresets, categories, type Category } from "../lib/data";

export const metadata = {
  title: "All Presets — The Darkroomm",
  description: "Browse every Lightroom preset pack. Cinematic, Moody, Urban, Landscape, and Vintage.",
};

export default function PresetsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  return <PresetsContent searchParams={searchParams} />;
}

async function PresetsContent({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const activeCategory = params.category as Category | undefined;
  const listed = getListedPresets();
  const filtered = activeCategory
    ? listed.filter((p) => p.category === activeCategory)
    : listed;

  return (
    <main className="bg-surface min-h-screen">
      {/* Page header */}
      <div className="pt-20 max-w-[1440px] mx-auto px-[20px] md:px-[64px]">
        <div className="mt-8 border-b border-outline-variant pb-4 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <p className="text-label-caps text-on-surface-variant mb-2">The Darkroomm</p>
            <h1 className="text-headline-lg text-primary">
              {activeCategory
                ? categories.find((c) => c.slug === activeCategory)?.label
                : "All Presets"}
            </h1>
          </div>
          <p className="text-label-caps text-on-surface-variant">{filtered.length} packs</p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          <Link
            href="/presets"
            className={`text-ui-button uppercase tracking-wider px-4 py-2 border transition-all duration-200 ${
              !activeCategory
                ? "bg-primary text-on-primary border-primary"
                : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/presets?category=${cat.slug}`}
              className={`text-ui-button uppercase tracking-wider px-4 py-2 border transition-all duration-200 ${
                activeCategory === cat.slug
                  ? "bg-primary text-on-primary border-primary"
                  : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 pb-[128px]">
          {filtered.map((preset) => (
            <Link key={preset.slug} href={`/presets/${preset.slug}`} className="group flex flex-col gap-3">
              <div className="relative w-full aspect-square overflow-hidden bg-surface-container">
                <Image
                  src={preset.coverImage}
                  alt={preset.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-surface border-ultra border-outline-variant px-2.5 py-1">
                  <span className="text-label-caps text-primary">{preset.category}</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-headline-md text-primary leading-tight">{preset.name}</h2>
                  <p className="text-label-caps text-on-surface-variant mt-1">
                    {preset.includes.desktop} desktop · {preset.includes.mobile} mobile
                  </p>
                </div>
                <span className="text-label-caps text-on-surface-variant whitespace-nowrap ml-2">
                  {preset.isFree ? "Free" : `CA$${preset.price}`}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </main>
  );
}
