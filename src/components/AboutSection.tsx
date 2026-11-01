import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "../lib/site-config";

export function AboutSection() {
  return (
    <section id="about-tce" className="py-20 sm:py-24 bg-[oklch(0.965_0.009_92)] scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Clean Texas Silhouette with Brookeland Marker */}
          <div className="lg:col-span-6 bg-white border border-[oklch(0.86_0.012_90)] p-6 sm:p-10 rounded-[2px] shadow-2xs">
            <div className="aspect-[4/3] w-full flex items-center justify-center relative">
              <svg
                viewBox="0 0 500 450"
                className="w-full h-full max-h-[380px]"
                aria-label="Stylized map of Texas showing Brookeland in East Texas"
                role="img"
              >
                {/* Clean, simplified geographic polygon of Texas */}
                <polygon
                  points="
                    130,40 230,40 230,130 330,130 380,180 430,220 440,290 
                    380,380 340,430 290,410 240,360 210,310 160,310 100,270 
                    30,270 50,170 130,170
                  "
                  fill="#1c2824"
                  stroke="#2d3c36"
                  strokeWidth="2"
                />

                {/* East Texas Region subtle indicator */}
                <circle cx="390" cy="245" r="45" fill="#f47626" fillOpacity="0.12" />

                {/* Brookeland marker (East Texas, near Jasper/Lake Sam Rayburn) */}
                <g id="brookeland-pin" transform="translate(390, 245)">
                  {/* Concentric marker rings */}
                  <circle
                    cx="0"
                    cy="0"
                    r="14"
                    fill="none"
                    stroke="#f47626"
                    strokeWidth="2"
                    strokeOpacity="0.6"
                  />
                  <circle cx="0" cy="0" r="6" fill="#f47626" />

                  {/* Leader line to label */}
                  <line x1="-14" y1="0" x2="-110" y2="0" stroke="#f47626" strokeWidth="1.5" />
                  <circle cx="-110" cy="0" r="2.5" fill="#f47626" />

                  {/* Brookeland label text */}
                  <text
                    x="-120"
                    y="4"
                    fill="#18221f"
                    fontSize="13"
                    fontFamily="Fira Sans, monospace"
                    fontWeight="800"
                    letterSpacing="0.12em"
                    textAnchor="end"
                  >
                    BROOKELAND
                  </text>
                </g>

                {/* Caption in bottom corner */}
                <text
                  x="20"
                  y="435"
                  fill="#546159"
                  fontSize="11"
                  fontFamily="Fira Sans, monospace"
                  fontWeight="700"
                  letterSpacing="0.18em"
                >
                  EAST TEXAS ROOTS. TEXAS PROJECTS.
                </text>
              </svg>
            </div>
            <p className="mt-4 text-center text-xs font-mono text-[oklch(0.46_0.02_165)]">
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
