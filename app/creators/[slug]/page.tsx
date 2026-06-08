import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Logo from "../../components/Logo";
import { creators, getCreatorBySlug, getPresetsByCreator } from "../../lib/data";

export async function generateStaticParams() {
  return creators.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const creator = getCreatorBySlug(slug);
  if (!creator) return {};
  return {
    title: `${creator.name} — The Darkroomm`,
    description: creator.bio,
  };
}

export default async function CreatorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const creator = getCreatorBySlug(slug);
  if (!creator) notFound();

  const packs = getPresetsByCreator(creator.slug);
  const isOwn = creator.slug === "thedarkroomm";

  return (
    <main className="bg-surface min-h-screen">
      <Navbar />

      <div className="pt-20 max-w-[1440px] mx-auto px-[20px] md:px-[64px]">
        {/* Creator header */}
        <div className="mt-8 border-b border-outline-variant pb-10 mb-12">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8 flex items-center gap-6">
              {/* Avatar / logo */}
              <div className="w-16 h-16 flex items-center justify-center bg-surface-container border border-outline-variant shrink-0">
                {isOwn ? (
                  <Logo width="36" height="36" fillColor="currentColor" />
                ) : (
                  <span className="text-headline-md text-primary">{creator.name[0]}</span>
                )}
              </div>
              <div>
                <h1 className="text-headline-lg text-primary">{creator.name}</h1>
                <p className="text-label-caps text-on-surface-variant mt-1">{creator.location}</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right flex md:justify-end gap-4">
              {creator.instagram && (
                <Link
                  href={`https://instagram.com/${creator.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ui-button uppercase tracking-wider border border-outline-variant px-4 py-2 text-on-surface-variant hover:border-primary hover:text-primary transition-all duration-300"
                >
                  Instagram
                </Link>
              )}
            </div>
          </div>
          <p className="text-body-lg text-on-surface-variant mt-6 max-w-2xl">{creator.bio}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-0 border border-outline-variant mb-16">
          {[
            ["Packs", packs.length.toString()],
            ["Presets", (packs.reduce((acc, p) => acc + p.includes.desktop, 0)).toString() + "+"],
            ["Formats", "XMP + DNG"],
          ].map(([label, value], i) => (
            <div
              key={label}
              className={`px-6 py-5 ${i < 2 ? "border-r border-outline-variant" : ""}`}
            >
              <p className="text-label-caps text-on-surface-variant mb-1">{label}</p>
              <p className="text-headline-md text-primary">{value}</p>
            </div>
          ))}
        </div>

        {/* Presets grid */}
        <p className="text-label-caps text-on-surface-variant mb-8">{packs.length} packs</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 pb-[128px]">
          {packs.map((preset) => (
            <Link key={preset.slug} href={`/presets/${preset.slug}`} className="group flex flex-col gap-3">
              <div className="relative w-full aspect-square overflow-hidden bg-surface-container">
                <Image
                  src={preset.coverImage}
                  alt={preset.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-surface border-ultra border-outline-variant px-2.5 py-1">
                  <span className="text-label-caps text-primary capitalize">{preset.category}</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <h2 className="text-headline-md text-primary leading-tight">{preset.name}</h2>
                <span className="text-label-caps text-on-surface-variant ml-2 whitespace-nowrap">
                  {preset.isFree ? "Free" : `$${preset.price}`}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
