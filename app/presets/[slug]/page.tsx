import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "../../components/Button";
import PresetCard from "../../components/PresetCard";
import { presets, getPresetBySlug, getPresetsByCategory } from "../../lib/data";

export async function generateStaticParams() {
  return presets.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const preset = getPresetBySlug(slug);
  if (!preset) return {};
  return {
    title: `${preset.name} — The Darkroomm`,
    description: preset.description,
  };
}

export default async function PresetPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const preset = getPresetBySlug(slug);
  if (!preset) notFound();

  const related = getPresetsByCategory(preset.category)
    .filter((p) => p.slug !== preset.slug)
    .slice(0, 3);

  return (
    <main className="bg-surface min-h-screen">
      <div className="pt-20 max-w-[1440px] mx-auto px-[20px] md:px-[64px]">
        {/* Breadcrumb */}
        <div className="mt-8 mb-10 flex items-center gap-3">
          <Link href="/presets" className="text-label-caps text-on-surface-variant hover:text-primary transition-colors">
            Presets
          </Link>
          <span className="text-label-caps text-outline-variant">/</span>
          <Link
            href={`/collections/${preset.category}`}
            className="text-label-caps text-on-surface-variant hover:text-primary transition-colors capitalize"
          >
            {preset.category}
          </Link>
          <span className="text-label-caps text-outline-variant">/</span>
          <span className="text-label-caps text-primary">{preset.name}</span>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-12 gap-6 mb-24">
          {/* Cover image */}
          <div className="col-span-12 md:col-span-7">
            <div className="relative w-full aspect-square overflow-hidden bg-surface-container">
              <Image
                src={preset.coverImage}
                alt={preset.name}
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover"
                preload
              />
            </div>
          </div>

          {/* Product info */}
          <div className="col-span-12 md:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-label-caps text-on-surface-variant mb-4 capitalize">{preset.category}</p>
              <h1 className="text-display-lg text-primary mb-6">{preset.name}</h1>
              <p className="text-body-lg text-on-surface-variant mb-4">{preset.description}</p>
              {preset.etsyLink && (
                <span className="inline-flex items-center gap-1.5 text-label-caps border border-outline-variant px-2.5 py-1 mb-8 text-on-surface-variant">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                    <circle cx="5" cy="5" r="5" />
                  </svg>
                  Available on Etsy
                </span>
              )}

              {/* Pack details */}
              <div className="border-t border-outline-variant mb-8">
                {[
                  ["Desktop presets", `${preset.includes.desktop} XMP files`],
                  ["Mobile presets", `${preset.includes.mobile} DNG files`],
                  ["Formats", preset.formats.join(" + ")],
                  ["Compatibility", "Lightroom Classic, CC, Mobile"],
                  // ["License", "Personal & Commercial"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center py-3 border-b border-outline-variant">
                    <span className="text-label-caps text-on-surface-variant">{label}</span>
                    <span className="text-body-md text-on-surface">{value}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {preset.tags.map((tag) => (
                  <span key={tag} className="text-label-caps text-on-surface-variant border border-outline-variant px-3 py-1.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-headline-md text-primary">
                  {preset.isFree ? "Free" : `CA$${preset.price}`}
                </span>
                <span className="text-label-caps text-on-surface-variant">One-time purchase</span>
              </div>
              <Button href={preset.etsyLink} className="w-full">
                {preset.isFree ? "Download Free" : `Buy for CA$${preset.price}`}
              </Button>
              <Button href="/bundles" variant="outline" className="w-full">
                Get more with a bundle
              </Button>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="border-t border-outline-variant pt-12 pb-[128px]">
            <p className="text-label-caps text-on-surface-variant mb-8">More in {preset.category}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((r) => (
                <PresetCard
                  key={r.slug}
                  preset={r}
                  showBadge={false}
                  titleAs="h3"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
              ))}
            </div>
          </div>
        )}
      </div>

    </main>
  );
}
