"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import PresetCard from "../components/PresetCard";
import { getListedPresets, categories, type Category } from "../lib/data";

export default function PresetsPage() {
  return (
    <Suspense>
      <PresetsContent />
    </Suspense>
  );
}

function PresetsContent() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") as Category | undefined;
  const listed = getListedPresets();
  const filtered = activeCategory
    ? listed.filter((p) => p.category === activeCategory)
    : listed;

  return (
    <main className="bg-surface min-h-screen">
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
            <PresetCard
              key={preset.slug}
              preset={preset}
              subtitle="counts"
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
