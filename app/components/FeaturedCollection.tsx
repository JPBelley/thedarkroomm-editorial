import Image from "next/image";
import Link from "next/link";

export default function FeaturedCollection() {
  return (
    <section className="max-w-[1440px] mx-auto px-[20px] md:px-[64px] pb-[128px]">
      <div className="grid grid-cols-12 gap-6 items-stretch">
        {/* Image panel — full height */}
        <div className="col-span-12 md:col-span-7 relative aspect-[3/4] md:aspect-auto min-h-[600px] overflow-hidden group">
          <Image
            src="/presets/moody-fog-cover.jpg"
            alt="Moody Fog preset: atmospheric foggy landscape"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Floating tag */}
          <div className="absolute bottom-6 left-6 bg-primary text-on-primary px-4 py-2">
            <span className="text-label-caps">Bestseller</span>
          </div>
        </div>

        {/* Text panel */}
        <div className="col-span-12 md:col-span-5 flex flex-col justify-between py-8 md:py-12 md:pl-6">
          <div>
            <p className="text-label-caps text-on-surface-variant mb-8">Featured Collection</p>
            <h2 className="text-display-lg text-primary mb-6">
              Moody
              <br />
              <em style={{ fontStyle: "italic" }}>Fog</em>
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-10">
              Fog, overcast skies, that hour before the light gives up. This pack
              was built on those conditions, the kind most presets struggle with.
            </p>

            {/* Pack details */}
            <div className="flex flex-col gap-0 border-t border-outline-variant mb-10">
              {[
                ["Presets Included", "12 Desktop + 12 Mobile"],
                ["Format", "XMP + DNG"],
                ["Compatibility", "Lightroom Classic, CC, Mobile"],
                ["License", "Personal & Commercial"],
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

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <Link
              href="/collections/moody"
              className="text-ui-button uppercase tracking-wider bg-primary text-on-primary px-6 py-4 text-center hover:opacity-80 transition-opacity duration-300"
            >
              Buy for $24
            </Link>
            <Link
              href="/bundles"
              className="text-ui-button uppercase tracking-wider border border-outline-variant px-6 py-4 text-center text-on-surface-variant hover:border-primary hover:text-primary transition-all duration-300"
            >
              Get the Full Bundle
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
