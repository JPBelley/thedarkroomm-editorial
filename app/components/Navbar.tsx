"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-surface border-b border-outline-variant"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[64px] h-20 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 text-primary">
          <Logo width="28" height="28" fillColor="currentColor" />
          <span
            className="text-label-caps tracking-[0.15em]"
            style={{ fontFamily: "var(--work-sans-font), sans-serif", fontSize: "13px", fontWeight: 700 }}
          >
            THE DARKROOMM
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Presets", href: "/presets" },
            { label: "Bundles", href: "/bundles" },
            { label: "Creators", href: "/creators/thedarkroomm" },
            { label: "Free Preset", href: "/newsletter", reload: true },
          ].map((item) =>
            item.reload ? (
              <a
                key={item.label}
                href={item.href}
                className="text-ui-button text-on-surface-variant hover:text-primary transition-colors duration-300 uppercase tracking-widest"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-ui-button text-on-surface-variant hover:text-primary transition-colors duration-300 uppercase tracking-widest"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* CTA */}
        <Link
          href="/collections"
          className="text-ui-button uppercase tracking-wider border border-primary px-6 py-2.5 text-primary hover:bg-primary hover:text-on-primary transition-all duration-300"
        >
          Shop Now
        </Link>
      </div>
    </nav>
  );
}
