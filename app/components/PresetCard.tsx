import Image from "next/image";
import Link from "next/link";
import type { Preset } from "../lib/data";

type Props = {
  preset: Preset;
  /** Responsive sizes for the cover image, matching the grid the card sits in. */
  sizes: string;
  aspectClass?: string;
  showBadge?: boolean;
  subtitle?: "counts" | "description";
  titleAs?: "h2" | "h3";
  /** Extra overlays rendered inside the image frame (e.g. a custom badge). */
  children?: React.ReactNode;
};

export default function PresetCard({
  preset,
  sizes,
  aspectClass = "aspect-square",
  showBadge = true,
  subtitle,
  titleAs: Title = "h2",
  children,
}: Props) {
  return (
    <Link href={`/presets/${preset.slug}`} className="group flex flex-col gap-3">
      <div className={`relative w-full ${aspectClass} overflow-hidden bg-surface-container`}>
        <Image
          src={preset.coverImage}
          alt={preset.name}
          fill
          sizes={sizes}
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {showBadge && (
          <div className="absolute top-3 left-3 bg-surface border-ultra border-outline-variant px-2.5 py-1">
            <span className="text-label-caps text-primary capitalize">{preset.category}</span>
          </div>
        )}
        {children}
      </div>
      <div className="flex justify-between items-start">
        <div>
          <Title className="text-headline-md text-primary leading-tight">{preset.name}</Title>
          {subtitle === "counts" && (
            <p className="text-label-caps text-on-surface-variant mt-1">
              {preset.includes.desktop} desktop · {preset.includes.mobile} mobile
            </p>
          )}
          {subtitle === "description" && (
            <p className="text-body-md text-on-surface-variant mt-1 line-clamp-2">
              {preset.description}
            </p>
          )}
        </div>
        <span className="text-label-caps text-on-surface-variant ml-4 whitespace-nowrap">
          {preset.isFree ? "Free" : `CA$${preset.price}`}
        </span>
      </div>
    </Link>
  );
}
