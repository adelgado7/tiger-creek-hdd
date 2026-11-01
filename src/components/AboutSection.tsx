import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "../lib/site-config";

export function AboutSection() {
  return (
    <section id="about-tce" className="py-20 sm:py-24 bg-[oklch(0.965_0.009_92)] scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Texas Map Graphic */}
          <div className="lg:col-span-6 bg-white border border-[oklch(0.86_0.012_90)] p-4 sm:p-6 rounded-[2px] shadow-2xs">
            <div className="aspect-square w-full max-w-[480px] mx-auto overflow-hidden bg-[#f6f4ed] rounded-[2px]">
              <img
                src="https://vibe.filesafe.space/1793575584947955523/attachments/d2c144cb-cb4c-48fc-a5ca-3f07b4935eee.png"
                alt="Map of Texas highlighting Brookeland in East Texas with text: East Texas Roots. Texas Projects."
                className="w-full h-full object-contain"
                width={800}
                height={800}
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-center text-xs font-mono text-[oklch(0.46_0.02_165)]">
              Conceptual geographic illustration. Not a precise coverage boundary or street
              navigation map.
            </p>
          </div>

          {/* Right Column: About Details & Boundaries */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[oklch(0.67_0.19_43.5)] font-mono">
              Meet Tiger Creek
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[oklch(0.23_0.02_168)] leading-tight">
              Texas work. <br />
              Underground focus.
            </h2>

            <div className="space-y-4 text-base text-[oklch(0.46_0.02_165)] leading-relaxed">
              <p className="text-lg font-medium text-[oklch(0.23_0.02_168)]">
                Tiger Creek Enterprises Inc. is based in Brookeland, Texas, with a primary focus on
                horizontal boring.
              </p>
              <p>
                Its current work includes installing and replacing natural gas lines across Texas
                for essential utility infrastructure projects.
              </p>
            </div>

            <div className="pt-4 border-t border-[oklch(0.86_0.012_90)] space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[oklch(0.23_0.02_168)]">
                A conversation starts with your site.
              </h3>
              <p className="text-sm text-[oklch(0.46_0.02_165)] leading-relaxed">
                Tell us where the project is, what needs to be installed, and the crossings or site
                constraints involved. Let&apos;s discuss whether horizontal boring fits the scope.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[oklch(0.67_0.19_43.5)] hover:text-[oklch(0.62_0.20_42)] transition-colors group"
                >
                  <span>Connect with Tiger Creek</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
