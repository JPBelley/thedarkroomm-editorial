import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getPresetsByCategory, type Category } from "../../lib/data";

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.label} Presets — The Darkroomm`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const packs = getPresetsByCategory(cat.slug as Category);

  return (
    <main className="bg-surface min-h-screen">
      <div className="pt-20 max-w-[1440px] mx-auto px-[20px] md:px-[64px]">
        {/* Header */}
        <div className="mt-8 border-b border-outline-variant pb-6 mb-12">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <p className="text-label-caps text-on-surface-variant mb-3">Collection</p>
              <h1 className="text-display-lg text-primary">{cat.label}</h1>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <p className="text-body-md text-on-surface-variant">{cat.description}</p>
              <p className="text-label-caps text-on-surface-variant mt-2">{packs.length} packs</p>
            </div>
          </div>
        </div>

        {/* Category nav */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/collections/${c.slug}`}
              className={`text-ui-button uppercase tracking-wider px-4 py-2 border transition-all duration-200 ${
                c.slug === cat.slug
                  ? "bg-primary text-on-primary border-primary"
                  : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
              }`}
            >
              {c.label}
            </Link>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 pb-[128px]">
          {packs.map((preset) => (
            <Link key={preset.slug} href={`/presets/${preset.slug}`} className="group flex flex-col gap-3">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-container">
                <Image
                  src={preset.coverImage}
                  alt={preset.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {preset.price >= 49 && (
                  <div className="absolute top-3 right-3 bg-primary text-on-primary px-2.5 py-1">
                    <span className="text-label-caps">Master</span>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-headline-md text-primary">{preset.name}</h2>
                  <p className="text-body-md text-on-surface-variant mt-1 line-clamp-2">{preset.description}</p>
                </div>
                <span className="text-label-caps text-on-surface-variant ml-4 whitespace-nowrap">
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
