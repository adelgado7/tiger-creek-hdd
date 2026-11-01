import { SITE_CONFIG } from "../lib/site-config";

export function OurWorkSection() {
  return (
    <section id="our-work" className="py-20 sm:py-24 bg-[oklch(0.965_0.009_92)] scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-14 border-b border-[oklch(0.86_0.012_90)]">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[oklch(0.67_0.19_43.5)] font-mono">
              The Work Beneath Everyday Life
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[oklch(0.23_0.02_168)] leading-tight">
              Essential connections. <br />
              Less surface disruption.
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4 text-base leading-relaxed text-[oklch(0.46_0.02_165)]">
            <p>
              Roads, driveways, and developed sites don&apos;t always leave room for an open trench.
              Horizontal directional drilling creates a guided underground path for new pipe while
              reducing excavation along the route.
            </p>
            <p className="text-sm font-medium text-[oklch(0.35_0.02_165)]">
              Tiger Creek Enterprises focuses on horizontal boring and installing and replacing
              natural gas lines for utility projects throughout Texas.
            </p>
          </div>
        </div>

        {/* 3 Verified Service Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {SITE_CONFIG.services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-[oklch(0.86_0.012_90)] p-8 rounded-[2px] flex flex-col justify-between hover:border-[oklch(0.67_0.19_43.5)]/60 transition-colors shadow-2xs"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[oklch(0.67_0.19_43.5)]">
                  <span>{service.num}</span>
                  <span>/</span>
                  <span className="uppercase">{service.category}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[oklch(0.23_0.02_168)] capitalize tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-[oklch(0.46_0.02_165)] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[oklch(0.92_0.012_90)] flex items-center justify-between text-xs font-mono font-semibold text-[oklch(0.46_0.02_165)]">
                <span>TEXAS INFRASTRUCTURE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.67_0.19_43.5)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
