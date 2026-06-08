import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { bundles, presets } from "../lib/data";

export const metadata = {
  title: "Bundles — The Darkroomm",
  description: "Get every pack in a category for one price. Better value, same one-click install.",
};

export default function BundlesPage() {
  return (
    <main className="bg-surface min-h-screen">
      <Navbar />

      <div className="pt-20 max-w-[1440px] mx-auto px-[20px] md:px-[64px]">
        {/* Header */}
        <div className="mt-8 border-b border-outline-variant pb-6 mb-16">
          <p className="text-label-caps text-on-surface-variant mb-3">Save more</p>
          <h1 className="text-display-lg text-primary">Bundles</h1>
        </div>

        {/* Bundles list */}
        <div className="flex flex-col gap-0 pb-[128px]">
          {bundles.map((bundle, i) => {
            const includedPacks = bundle.presetSlugs
              .map((s) => presets.find((p) => p.slug === s))
              .filter(Boolean);
            const savings = bundle.originalPrice - bundle.price;

            return (
              <div
                key={bundle.slug}
                className={`grid grid-cols-12 gap-6 py-12 ${i < bundles.length - 1 ? "border-b border-outline-variant" : ""}`}
              >
                {/* Cover */}
                <div className="col-span-12 md:col-span-4">
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-container group">
                    <Image
                      src={bundle.coverImage}
                      alt={bundle.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 bg-primary text-on-primary px-3 py-1.5">
                      <span className="text-label-caps">Save ${savings}</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="col-span-12 md:col-span-5 flex flex-col justify-between">
                  <div>
                    <h2 className="text-headline-lg text-primary mb-3">{bundle.name}</h2>
                    <p className="text-body-lg text-on-surface-variant mb-6">{bundle.description}</p>
                    <p className="text-label-caps text-on-surface-variant mb-3">Includes</p>
                    <div className="flex flex-wrap gap-2">
                      {includedPacks.map((pack) =>
                        pack ? (
                          <span key={pack.slug} className="text-label-caps text-on-surface-variant border border-outline-variant px-3 py-1.5">
                            {pack.name}
                          </span>
                        ) : null
                      )}
                    </div>
                  </div>
                </div>

                {/* Price + CTA */}
                <div className="col-span-12 md:col-span-3 flex flex-col justify-end gap-4">
                  <div>
                    <p className="text-label-caps text-on-surface-variant mb-1">Bundle price</p>
                    <p className="text-headline-lg text-primary">${bundle.price}</p>
                    <p className="text-label-caps text-on-surface-variant mt-1 line-through">
                      ${bundle.originalPrice} separately
                    </p>
                  </div>
                  <Link
                    href={`/bundles/${bundle.slug}`}
                    className="text-ui-button uppercase tracking-wider bg-primary text-on-primary px-6 py-4 text-center hover:opacity-80 transition-opacity"
                  >
                    Buy for ${bundle.price}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
