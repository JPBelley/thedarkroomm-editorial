import MailerLiteEmbed from "./MailerLiteEmbed";

export default function Messaging() {
  return (
    <section className="bg-surface border-t border-outline-variant">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[64px] py-24 md:py-[128px]">
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Headline */}
          <div className="col-span-12 md:col-span-5">
            <p className="text-label-caps text-on-surface-variant mb-6">The Darkroomm Newsletter</p>
            <h2 className="text-display-lg text-primary mb-6">
              Edit with
              <br />
              <em style={{ fontStyle: "italic" }}>intention.</em>
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              Subscribe and get a free 6-pack of Lightroom presets. New packs first, no noise.
            </p>
          </div>

          {/* MailerLite embed */}
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <MailerLiteEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
