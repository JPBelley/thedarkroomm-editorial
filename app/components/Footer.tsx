import Link from "next/link";
import Logo from "./Logo";

const footerLinks = {
  Shop: ["Collections", "Bundles", "Urban Packs", "Cinematic Packs", "Moody Packs"],
  Info: ["About", "How It Works", "FAQ", "Contact"],
  Legal: ["Privacy Policy", "Terms of Use", "License Agreement"],
};

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-surface">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[64px] pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          {/* Brand column */}
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-3 text-primary mb-4">
              <Logo width="24" height="24" fillColor="currentColor" />
              <span
                className="text-label-caps tracking-[0.15em]"
                style={{ fontSize: "13px", fontWeight: 700, fontFamily: "var(--work-sans-font), sans-serif" }}
              >
                THE DARKROOMM
              </span>
            </div>
            <p className="text-body-md text-on-surface-variant max-w-xs">
              Lightroom presets for desktop and mobile. Built around mood, light, and feeling.
            </p>
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              {/* Instagram — add handle and uncomment when account is ready
              <Link
                href="https://instagram.com/thedarkroomm"
                className="text-label-caps text-on-surface-variant hover:text-primary underline transition-colors duration-300"
              >
                Instagram
              </Link>
              */}
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

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="col-span-6 md:col-span-2 md:col-start-auto">
              <p className="text-label-caps text-primary mb-6">{group}</p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-outline-variant pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-label-caps text-on-surface-variant">
            © 2024 The Darkroomm. All rights reserved.
          </p>
          <p className="text-label-caps text-on-surface-variant">
            Presets for Lightroom Classic, CC &amp; Mobile
          </p>
        </div>
      </div>
    </footer>
  );
}
