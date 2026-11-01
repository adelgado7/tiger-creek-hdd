import { SITE_CONFIG } from "../lib/site-config";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full bg-[oklch(0.23_0.02_168)] overflow-hidden">
      {/* Background Image with dark left-to-right gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={SITE_CONFIG.heroImage}
          alt={SITE_CONFIG.heroImageAlt}
          className="w-full h-full object-cover object-right md:object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Left-to-right dark overlay to guarantee text legibility on left while keeping machinery visible on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.23_0.02_168)] via-[oklch(0.23_0.02_168)]/90 to-transparent sm:via-[oklch(0.23_0.02_168)]/75 lg:to-transparent" />
        {/* Subtle vertical gradient for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.23_0.02_168)]/80 via-transparent to-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 flex flex-col justify-center min-h-[580px] lg:min-h-[640px]">
        <div className="max-w-2xl space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <span className="h-0.5 w-6 bg-[oklch(0.67_0.19_43.5)]"></span>
            <span className="text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-white/90 font-mono">
              {SITE_CONFIG.eyebrow}
            </span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
            Grounded in Texas. <br />
            Built for what&apos;s <span className="text-[oklch(0.67_0.19_43.5)]">below.</span>
          </h1>

          {/* Body Text */}
          <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl font-normal">
            Horizontal boring and natural gas line installation. Tiger Creek Enterprises helps put
            essential infrastructure underground across Texas.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[oklch(0.67_0.19_43.5)] hover:bg-[oklch(0.62_0.20_42)] text-white font-bold text-sm tracking-wide transition-all rounded-[2px] shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>Let&apos;s Talk About Your Project</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              href="#why-hdd"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black/40 hover:bg-black/60 text-white font-semibold text-sm border border-white/30 backdrop-blur-xs transition-all rounded-[2px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>Explore Horizontal Boring</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Hero image caption watermark per brief */}
        <div className="mt-12 sm:mt-16 text-[11px] font-mono text-white/60 tracking-wider">
          {SITE_CONFIG.heroImageCaption}
        </div>
      </div>
    </section>
  );
}
