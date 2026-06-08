"use client";

import { useState } from "react";

export default function Messaging() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-primary text-on-primary">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[64px] py-24 md:py-[128px]">
        <div className="grid grid-cols-12 gap-6 items-end">
          {/* Headline */}
          <div className="col-span-12 md:col-span-7">
            <p className="text-label-caps text-on-primary/60 mb-6">The Darkroomm Newsletter</p>
            <h2 className="text-display-lg" style={{ color: "#faf9f9" }}>
              Edit with
              <br />
              <em style={{ fontStyle: "italic" }}>intention.</em>
            </h2>
          </div>

          {/* Form */}
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            {submitted ? (
              <div className="border border-on-primary/20 px-6 py-8">
                <p className="text-label-caps text-on-primary/60 mb-2">You&apos;re in.</p>
                <p className="text-body-lg" style={{ color: "#faf9f9" }}>
                  New packs first, free presets occasionally. That&apos;s the deal.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <p className="text-body-md text-on-primary/70">
                  New packs first. Free presets for subscribers. Unsubscribe whenever you want.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="border-b border-on-primary/40 focus-within:border-on-primary transition-colors">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-transparent py-3 text-body-md text-on-primary placeholder:text-on-primary/40 outline-none"
                      style={{ fontFamily: "var(--work-sans-font), sans-serif" }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-ui-button uppercase tracking-wider border border-on-primary/40 px-6 py-4 text-on-primary hover:bg-on-primary hover:text-primary transition-all duration-300"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-label-caps text-on-primary/40">
                  No spam. One email per new pack.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
