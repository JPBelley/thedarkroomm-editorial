import Image from "next/image";
import Link from "next/link";
import MailerLiteEmbed from "../components/MailerLiteEmbed";
import { getPresetBySlug, presets } from "../lib/data";

export const metadata = {
  title: "Free Preset Pack — The Darkroomm",
  description:
    "Subscribe to the newsletter and get the Earth Collection free. 6 desktop + 5 mobile Lightroom presets.",
};

const EXPLORE_SLUGS = ["cinematic-film", "moody-fog", "urban-paris"];

const afterImages = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
  src: `/presets/earth-after-${n}.avif`,
  alt: `Earth Collection — photo ${n}`,
}));

export default function NewsletterPage() {
  const earth = getPresetBySlug("earth")!;
  const explorePacks = EXPLORE_SLUGS.map(
    (s) => presets.find((p) => p.slug === s)!
  );

  return (
    <main className="bg-surface min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="pt-20 border-b border-outline-variant">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[64px] py-24 md:py-[128px]">
          <div className="mx-auto text-center">
            <p className="text-label-caps text-on-surface-variant mb-8">
              The Darkroomm Newsletter
            </p>
            <h1 className="text-display-lg text-primary mb-6 text-balance">
              Subscribe and get <em style={{ fontStyle: "italic" }}>the pack below</em> for free.
            </h1>
            <p className="max-w-2xl mx-auto text-body-lg text-on-surface-variant mb-10">
              The Earth Collection, 6 desktop and 5 mobile presets, is yours
              when you subscribe. You'll also get new pack drops, promos, and
              occasional news from the site.
            </p>
            <div className="max-w-md mx-auto">
              <MailerLiteEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PACK ─────────────────────────────────────────── */}
      <section className="border-b border-outline-variant">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[64px] py-16 md:py-24">
          <p className="text-label-caps text-on-surface-variant mb-12">
            The pack
          </p>
          <div className="grid grid-cols-12 gap-6 items-start">
            {/* Cover */}
            <div className="col-span-12 md:col-span-6">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container">
                <Image
                  src={earth.coverImage}
                  alt="Earth Collection cover"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col justify-center">
              <h2 className="text-display-lg text-primary mb-4">
                Earth
                <br />
                <em style={{ fontStyle: "italic" }}>Collection</em>
              </h2>
              <p className="text-body-lg text-on-surface-variant mb-10">
                Warm, earthy tones built on natural light. Greens that stay
                green, skies that stay honest.
              </p>
              <div className="border-t border-outline-variant">
                {[
                  ["Desktop presets", `${earth.includes.desktop} XMP files`],
                  ["Mobile presets", `${earth.includes.mobile} DNG files`],
                  ["Formats", earth.formats.join(" + ")],
                  ["Compatibility", "Lightroom Classic, CC, Mobile"],
                  ["Price", "Free"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between items-center py-3 border-b border-outline-variant"
                  >
                    <span className="text-label-caps text-on-surface-variant">
                      {label}
                    </span>
                    <span className="text-body-md text-on-surface">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PREVIEW GRID ─────────────────────────────────────── */}
      <section className="border-b border-outline-variant">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[64px] py-16 md:py-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-label-caps text-on-surface-variant mb-2">
                What you get
              </p>
              <h2 className="text-headline-lg text-primary">
                See it in practice.
              </h2>
            </div>
            <p className="hidden md:block text-body-md text-on-surface-variant max-w-xs text-right">
              Every image shot in natural light. No studio, no artificial setup.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="col-span-2 row-span-2 relative aspect-square md:aspect-auto overflow-hidden bg-surface-container">
              <Image
                src={afterImages[0].src}
                alt={afterImages[0].alt}
                fill
                className="object-cover"
              />
            </div>
            {afterImages.slice(1).map((img) => (
              <div
                key={img.src}
                className="relative aspect-square overflow-hidden bg-surface-container"
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEEP EXPLORING ───────────────────────────────────── */}
      <section>
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[64px] py-16 md:py-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-label-caps text-on-surface-variant mb-2">
                Keep exploring
              </p>
              <h2 className="text-headline-lg text-primary">
                More packs worth seeing.
              </h2>
            </div>
            <Link
              href="/presets"
              className="hidden md:inline-flex items-center gap-2 text-ui-button uppercase tracking-wider border border-primary px-6 py-3 hover:bg-primary hover:text-on-primary transition-all duration-300"
            >
              All Presets
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {explorePacks.map((preset) => (
              <Link
                key={preset.slug}
                href={`/presets/${preset.slug}`}
                className="group flex flex-col gap-3"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-container">
                  <Image
                    src={preset.coverImage}
                    alt={preset.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-surface border-ultra border-outline-variant px-2.5 py-1">
                    <span className="text-label-caps text-primary capitalize">
                      {preset.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-headline-md text-primary leading-tight">
                      {preset.name}
                    </h3>
                    <p className="text-body-md text-on-surface-variant mt-1 line-clamp-2">
                      {preset.description}
                    </p>
                  </div>
                  <span className="text-label-caps text-on-surface-variant ml-4 whitespace-nowrap">
                    CA${preset.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/presets"
            className="md:hidden w-full flex items-center justify-center text-ui-button uppercase tracking-wider border border-primary py-4 hover:bg-primary hover:text-on-primary transition-all duration-300"
          >
            All Presets
          </Link>
        </div>
      </section>

    </main>
  );
}
