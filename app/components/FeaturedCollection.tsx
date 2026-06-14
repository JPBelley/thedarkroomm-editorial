import Image from "next/image";
import Button from "./Button";
import { BEST_SELLER_SLUG, requirePresetBySlug, bundles } from "../lib/data";

const preset = requirePresetBySlug(BEST_SELLER_SLUG);
const bundle = bundles.find((b) => b.presetSlugs.includes(BEST_SELLER_SLUG));

// Split name at first space: "Vintage 80's" → ["Vintage", "80's"]
const spaceIdx = preset.name.indexOf(" ");
const nameLine1 = spaceIdx === -1 ? preset.name : preset.name.slice(0, spaceIdx);
const nameLine2 = spaceIdx === -1 ? null : preset.name.slice(spaceIdx + 1);

export default function FeaturedCollection() {
  return (
    <section className="max-w-[1440px] mx-auto px-[20px] md:px-[64px] pb-[128px]">
      <div className="grid grid-cols-12 gap-6 items-stretch">
        {/* Image panel */}
        <div className="col-span-12 md:col-span-7 relative aspect-[3/4] md:aspect-auto min-h-[600px] overflow-hidden group">
          <Image
            src={preset.coverImage}
            alt={preset.name}
            fill
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute bottom-6 left-6 bg-primary text-on-primary px-4 py-2">
            <span className="text-label-caps">Bestseller</span>
          </div>
        </div>

        {/* Text panel */}
        <div className="col-span-12 md:col-span-5 flex flex-col justify-between py-8 md:py-12 md:pl-6">
          <div>
            <p className="text-label-caps text-on-surface-variant mb-8">Featured Collection</p>
            <h2 className="text-display-lg text-primary mb-6">
              {nameLine1}
              {nameLine2 && (
                <>
                  <br />
                  <em>{nameLine2}</em>
                </>
              )}
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-10">
              {preset.description}
            </p>

            <div className="flex flex-col gap-0 border-t border-outline-variant mb-10">
              {[
                ["Presets Included", `${preset.includes.desktop} Desktop + ${preset.includes.mobile} Mobile`],
                ["Format", preset.formats.join(" + ")],
                ["Compatibility", "Lightroom Classic, CC, Mobile"],
                // ["License", "Personal & Commercial"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between items-center py-4 border-b border-outline-variant"
                >
                  <span className="text-label-caps text-on-surface-variant">{label}</span>
                  <span className="text-body-md text-on-surface">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button href={preset.etsyLink ?? `/presets/${preset.slug}`}>
              Buy for CA${preset.price}
            </Button>
            {bundle && (
              <Button href="/bundles" variant="outline">
                Get the Full Bundle
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
