import Image from "next/image";
import Link from "next/link";
import { categories, getListedPresets } from "../lib/data";

export const metadata = {
  title: "Collections — The Darkroomm",
  description: "Browse every preset collection. Cinematic, Moody, Urban, Landscape, and Vintage.",
};

// Representative cover per category — first listed preset in that category
function getCover(category: string) {
  const preset = getListedPresets().find((p) => p.category === category);
  return preset?.coverImage ?? "";
}

export default function CollectionsPage() {
  const listed = getListedPresets();

  return (
    <main className="bg-surface min-h-screen">
      <div className="pt-20 max-w-[1440px] mx-auto px-[20px] md:px-[64px]">

        {/* Header */}
        <div className="mt-8 border-b border-outline-variant pb-6 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-label-caps text-on-surface-variant mb-3">The Darkroomm</p>
            <h1 className="text-display-lg text-primary">Collections</h1>
          </div>
          <p className="text-body-md text-on-surface-variant max-w-sm md:text-right">
            {listed.length} packs across {categories.length} collections. Each one built around a single look.
          </p>
        </div>

        {/* Grid — row 1: 2 large, row 2: 3 */}
        <div className="grid grid-cols-12 gap-6 pb-[128px]">

          {categories.slice(0, 2).map((cat) => {
            const count = listed.filter((p) => p.category === cat.slug).length;
            return (
              <Link
                key={cat.slug}
                href={`/collections/${cat.slug}`}
                className="col-span-12 md:col-span-6 group flex flex-col gap-4"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-container">
                  <Image
                    src={getCover(cat.slug)}
                    alt={cat.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h2 className="text-display-lg text-white leading-none">{cat.label}</h2>
                  </div>
                  <div className="absolute top-4 right-4 bg-surface text-primary px-3 py-1">
                    <span className="text-label-caps">{count} packs</span>
                  </div>
                </div>
                <p className="text-body-md text-on-surface-variant">{cat.description}</p>
              </Link>
            );
          })}

          {categories.slice(2).map((cat) => {
            const count = listed.filter((p) => p.category === cat.slug).length;
            return (
              <Link
                key={cat.slug}
                href={`/collections/${cat.slug}`}
                className="col-span-12 sm:col-span-6 lg:col-span-4 group flex flex-col gap-4"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-surface-container">
                  <Image
                    src={getCover(cat.slug)}
                    alt={cat.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h2 className="text-headline-lg text-white leading-none">{cat.label}</h2>
                  </div>
                  <div className="absolute top-4 right-4 bg-surface text-primary px-3 py-1">
                    <span className="text-label-caps">{count} packs</span>
                  </div>
                </div>
                <p className="text-body-md text-on-surface-variant">{cat.description}</p>
              </Link>
            );
          })}

        </div>
      </div>
    </main>
  );
}
