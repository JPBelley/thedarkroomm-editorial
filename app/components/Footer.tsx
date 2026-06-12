import Link from "next/link";
import Logo from "./Logo";

const shop = [
  { label: "Collections", href: "/collections" },
  { label: "Bundles", href: "/bundles" },
  { label: "Urban Packs", href: "/collections/urban" },
  { label: "Cinematic Packs", href: "/collections/cinematic" },
  { label: "Moody Packs", href: "/collections/moody" },
];

const info = [
  { label: "Sell Your Presets", href: "/sell" },
  { label: "Free Preset", href: "/newsletter" },
  // { label: "About", href: "/about" },
  // { label: "How It Works", href: "/how-it-works" },
  // { label: "FAQ", href: "/faq" },
  // { label: "Contact", href: "/contact" },
];

// Legal — uncomment when pages are ready
// { label: "Privacy Policy", href: "/privacy" },
// { label: "Terms of Use", href: "/terms" },
// { label: "License Agreement", href: "/license" },

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-surface">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[64px] pt-16 pb-8">

        <div className="grid grid-cols-12 gap-6 mb-16">

          {/* Brand — takes up more room now that there are only 2 nav cols */}
          <div className="col-span-12 md:col-span-6">
            <div className="flex items-center gap-3 text-primary mb-4">
              <Logo width="24" height="24" fillColor="currentColor" />
              <span
                className="text-label-caps tracking-[0.15em]"
                style={{ fontSize: "13px", fontWeight: 700, fontFamily: "var(--work-sans-font), sans-serif" }}
              >
                THE DARKROOMM
              </span>
            </div>
            <p className="text-body-md text-on-surface-variant max-w-sm">
              Lightroom presets for desktop and mobile. Built around mood, light, and feeling.
            </p>
            <div className="flex gap-4 mt-6">
              <Link
                href="https://ca.pinterest.com/thedarkroomm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-label-caps text-on-surface-variant hover:text-primary underline transition-colors duration-300"
              >
                Pinterest
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div className="col-span-6 md:col-span-2 md:col-start-8">
            <p className="text-label-caps text-primary mb-6">Shop</p>
            <ul className="flex flex-col gap-3">
              {shop.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="col-span-6 md:col-span-2">
            <p className="text-label-caps text-primary mb-6">Info</p>
            <ul className="flex flex-col gap-3">
              {info.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-outline-variant pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-label-caps text-on-surface-variant">
            © {new Date().getFullYear()} The Darkroomm. All rights reserved.
          </p>
          <p className="text-label-caps text-on-surface-variant">
            Presets for Lightroom Classic, CC &amp; Mobile
          </p>
        </div>

      </div>
    </footer>
  );
}
