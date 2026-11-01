export function ServiceStrip() {
  const items = [
    "HORIZONTAL BORING",
    "NATURAL GAS LINE INSTALLATION",
    "LINE REPLACEMENT",
    "TEXAS PROJECTS",
  ];

  return (
    <section
      aria-label="Core Capabilities Summary"
      className="w-full bg-[oklch(0.67_0.19_43.5)] text-white border-y border-[oklch(0.62_0.20_42)] shadow-sm"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-xs sm:text-sm font-extrabold uppercase tracking-widest font-mono">
          {items.map((item, idx) => (
            <div key={item} className="flex items-center gap-4">
              <span>{item}</span>
              {idx < items.length - 1 && (
                <span className="hidden lg:inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
