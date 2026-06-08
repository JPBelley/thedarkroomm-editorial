const props = [
  {
    index: "01",
    title: "A point of view",
    body:
      "Each pack owns one specific look and commits to it. Pick the mood that fits your photos and go.",
  },
  {
    index: "02",
    title: "Desktop + Mobile",
    body:
      "Each pack ships with XMP files for Lightroom Classic and CC, plus DNG files for Lightroom Mobile. You buy once, you get both.",
  },
  {
    index: "03",
    title: "One-click install",
    body:
      "Open Lightroom, import the presets, apply. That's it. No plugins, no account to create, no subscription required.",
  },
];

export default function ValueProps() {
  return (
    <section className="max-w-[1440px] mx-auto px-[20px] md:px-[64px] py-24 border-t border-outline-variant">
      {/* Section label */}
      <p className="text-label-caps text-on-surface-variant mb-12">Why The Darkroomm</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {props.map((prop, i) => (
          <div
            key={prop.index}
            className={`py-8 md:py-0 ${
              i < props.length - 1
                ? "border-b md:border-b-0 md:border-r border-outline-variant md:pr-12"
                : ""
            } ${i > 0 ? "md:pl-12" : ""}`}
          >
            <span className="text-label-caps text-on-surface-variant block mb-6">
              {prop.index}
            </span>
            <h3 className="text-headline-md text-primary mb-4">{prop.title}</h3>
            <p className="text-body-md text-on-surface-variant">{prop.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
