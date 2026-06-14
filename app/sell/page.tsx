import Link from "next/link";
import Button from "../components/Button";

export const metadata = {
  title: "Sell Your Presets — The Darkroomm",
  description:
    "Sell your Lightroom presets on The Darkroomm. Lower fees than Etsy or Creative Market, a preset-focused audience, and your own creator page.",
};

const perks = [
  {
    label: "Your own page",
    body: "A dedicated creator profile with your packs, your bio, and your link. Yours to own.",
  },
  {
    label: "A focused audience",
    body: "People here are looking for presets specifically. No jewelry, no fonts, no noise to compete with.",
  },
  {
    label: "Newsletter exposure",
    body: "New packs get featured in the newsletter. Direct access to buyers who already opted in.",
  },
  {
    label: "Simple setup",
    body: "No listing fees. Upload your pack, write a description, set a price. Done.",
  },
  {
    label: "Site traffic",
    body: "You benefit from every visitor the site gets, not just people who already know your name.",
  },
  {
    label: "Featured placement",
    body: "Good packs get surfaced. If your work stands out, we'll make sure people see it.",
  },
];

export default function SellPage() {
  return (
    <main className="bg-surface min-h-screen">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="pt-20 border-b border-outline-variant">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[64px] py-24 md:py-[128px]">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8">
              <p className="text-label-caps text-on-surface-variant mb-8">Sell on The Darkroomm</p>
              <h1 className="text-display-lg text-primary mb-8 text-balance">
                Built by a photographer.<br />
                <em>Open to the right ones.</em>
              </h1>
              <p className="text-body-lg text-on-surface-variant max-w-xl mb-4">
                The Darkroomm started as one creator with a specific look. It grew into something bigger, and we're keeping it tight on purpose.
              </p>
              <p className="text-body-lg text-on-surface-variant max-w-xl mb-4">
                We're opening it to other photographers now. A small group of founding creators who'll help shape what this place becomes. You bring the presets. We bring the audience, the platform, and a catalog that isn't cluttered with every filter pack on the internet.
              </p>
              <p className="text-body-lg text-on-surface-variant max-w-xl mb-12">
                Founding spots are limited. We're filling them now.
              </p>
              <Button href="mailto:info@thedarkroomm.com" className="px-8">
                Apply to sell
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* ── WHAT YOU GET ──────────────────────────────────────── */}
      <section className="border-b border-outline-variant">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[64px] py-16 md:py-24">
          <p className="text-label-caps text-on-surface-variant mb-4">What you get</p>
          <h2 className="text-headline-lg text-primary mb-12">Your space to sell.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant border border-outline-variant">
            {perks.map((perk) => (
              <div key={perk.label} className="bg-surface p-8">
                <p className="text-label-caps text-primary mb-3">{perk.label}</p>
                <p className="text-body-md text-on-surface-variant">{perk.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ──────────────────────────────────────── */}
      <section className="border-b border-outline-variant">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[64px] py-16 md:py-24">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8">
              <p className="text-label-caps text-on-surface-variant mb-4">Who it's for</p>
              <h2 className="text-headline-lg text-primary mb-8">Photographers with a point of view.</h2>
              <div className="flex flex-col gap-6">
                {[
                  "You already shoot with a consistent look. Your presets came from your own editing, not a template.",
                  "You've made presets for your own work and the people around you want them.",
                  "You want a place to sell that's built for this specifically, not buried in a general marketplace.",
                ].map((line, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-label-caps text-outline-variant pt-1 shrink-0">0{i + 1}</span>
                    <p className="text-body-lg text-on-surface-variant">{line}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section>
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[64px] py-24 md:py-[128px]">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-label-caps text-on-surface-variant mb-6">Ready?</p>
            <h2 className="text-display-lg text-primary mb-6 text-balance">
              Apply now.<br />
              <em>Founding rate locked in.</em>
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-10">
              Creator accounts aren't open yet. Apply now and you'll be first in line — and locked into the lowest rate we'll ever offer.
            </p>
            <Button href="mailto:info@thedarkroomm.com" className="px-10">
              Apply to sell
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}
