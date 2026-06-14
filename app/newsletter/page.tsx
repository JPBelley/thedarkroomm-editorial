import Image from "next/image";
import Button from "../components/Button";
import MailerLiteEmbed from "../components/MailerLiteEmbed";
import PresetCard from "../components/PresetCard";
import { requirePresetBySlug } from "../lib/data";

const earth = requirePresetBySlug("earth");

export const metadata = {
  title: "Free Preset Pack — The Darkroomm",
  description: `Subscribe to the newsletter and get the ${earth.name} free. ${earth.includes.desktop} desktop + ${earth.includes.mobile} mobile Lightroom presets.`,
};

const EXPLORE_SLUGS = ["cinematic-film", "moody-fog", "urban-paris"];

const afterImages = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
  src: `/presets/earth-after-${n}.avif`,
  alt: `Earth Collection — photo ${n}`,
}));

export default function NewsletterPage() {
  const explorePacks = EXPLORE_SLUGS.map((s) => requirePresetBySlug(s));

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
              Subscribe and get <em>the pack below</em> for free.
            </h1>
            <p className="max-w-2xl mx-auto text-body-lg text-on-surface-variant mb-10">
              The {earth.name}, {earth.includes.desktop} desktop and{" "}
              {earth.includes.mobile} mobile presets, is yours when you
              subscribe. You'll also get new pack drops, promos, and
              occasional news from the site.
            </p>
            <Button href="#subscribe" className="px-8">Get it free</Button>
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
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col justify-center">
              <h2 className="text-display-lg text-primary mb-4">
                Earth
                <br />
                <em>Collection</em>
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
              <Button href="#subscribe" className="self-start mt-8 px-8">
                Get it free
              </Button>
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
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            {afterImages.slice(1).map((img) => (
              <div
                key={img.src}
                className="relative aspect-square overflow-hidden bg-surface-container"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button href="#subscribe" className="px-8">Get it free</Button>
          </div>
        </div>
      </section>

      {/* ── SUBSCRIBE FORM ───────────────────────────────────── */}
      <section id="subscribe" className="border-b border-outline-variant">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[64px] py-16 md:py-24">
          <div className="max-w-md mx-auto text-center">
            <p className="text-label-caps text-on-surface-variant mb-6">Subscribe</p>
            <MailerLiteEmbed />
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
            <Button href="/presets" variant="ghost" className="hidden md:inline-flex items-center gap-2">
              All Presets
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {explorePacks.map((preset) => (
              <PresetCard
                key={preset.slug}
                preset={preset}
                aspectClass="aspect-[4/3]"
                subtitle="description"
                titleAs="h3"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
            ))}
          </div>
          <Button href="/presets" variant="ghost" className="md:hidden w-full">
            All Presets
          </Button>
        </div>
      </section>

    </main>
  );
}
