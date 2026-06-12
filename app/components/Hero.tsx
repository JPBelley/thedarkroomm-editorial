import Link from "next/link";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function Hero() {
  return (
    <section className="pt-20 max-w-[1440px] mx-auto px-[20px] md:px-[64px]">
      {/* Top meta bar */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-outline-variant pb-3 mb-10">
        <div className="flex items-center gap-6">
          <span className="text-label-caps text-on-surface-variant">THE DARKROOMM</span>
          <span className="w-px h-4 bg-outline-variant" />
          <span className="text-label-caps text-on-surface">Lightroom Presets</span>
        </div>
        <span className="hidden md:block text-label-caps text-on-surface-variant">
          Desktop + Mobile. One-click install.
        </span>
      </div>

      {/* Headline grid */}
      <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
        {/* Big display headline — 8 cols */}
        <div className="col-span-12 lg:col-span-8">
          <h1 className="text-display-xl text-primary">
            Light.
            <br />
            <em className="not-italic" style={{ fontStyle: "italic" }}>Mood.</em>
            <br />
            Film.
          </h1>
        </div>

        {/* Right column — description + CTA */}
        <div className="col-span-12 lg:col-span-3 lg:col-start-10 flex flex-col justify-end gap-6">
          <p className="text-body-lg text-on-surface-variant">
            Lightroom presets built around mood, not just color. Desktop and mobile, one-click install.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/collections"
              className="text-ui-button uppercase tracking-wider bg-primary text-on-primary px-6 py-4 text-center hover:opacity-80 transition-opacity duration-300"
            >
              Explore Collections
            </Link>
            <Link
              href="/bundles"
              className="text-ui-button uppercase tracking-wider border border-outline px-6 py-4 text-center text-on-surface hover:border-primary hover:text-primary transition-all duration-300"
            >
              View Bundles
            </Link>
          </div>
        </div>
      </div>

      {/* Hero before/after slider */}
      <BeforeAfterSlider
        before="/presets/vintage-80s-8-before.avif"
        after="/presets/vintage-80s-8-after.avif"
        beforeAlt="Original photo"
        afterAlt="Vintage 80's preset applied"
        objectPosition="center bottom"
      />

      {/* Sub-info strip */}
      <div className="grid grid-cols-12 gap-6 mt-6 pt-6 border-t border-outline-variant">
        <div className="col-span-12 md:col-span-4 border-r border-outline-variant pr-6">
          <p className="text-label-caps text-on-surface-variant mb-2">Craft</p>
          <p className="text-body-md text-on-surface">
            Every preset gets tested on real photos across different lighting conditions before it ships.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-5 mb-6 md:mb-0">
          <p className="text-label-caps text-on-surface-variant mb-2">Compatibility</p>
          <p className="text-body-md text-on-surface-variant">
            Works in Lightroom Classic, CC, and Mobile. Each pack ships with XMP files for desktop and DNG for mobile.
          </p>
        </div>
        <div className="col-span-12 md:col-span-2 md:col-start-11 flex flex-col justify-end items-end">
          <span className="text-label-caps text-on-surface-variant">EST. 2022</span>
        </div>
      </div>
    </section>
  );
}
