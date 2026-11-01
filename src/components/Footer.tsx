import { Link } from "@tanstack/react-router";
import { SITE_CONFIG } from "../lib/site-config";
import { Phone, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.23_0.02_168)] text-[oklch(0.96_0.01_90)] border-t border-[oklch(0.32_0.03_168)]">
      {/* Top Footer Section */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: TCE Branding */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[oklch(0.67_0.19_43.5)] text-white flex items-center justify-center font-black text-base tracking-tighter shrink-0 rounded-[2px]">
                TC
              </div>
              <div>
                <div className="font-extrabold text-base tracking-tight text-white uppercase font-mono leading-none">
                  Tiger Creek
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-[oklch(0.7_0.02_168)] uppercase mt-1">
                  Enterprises Inc.
                </div>
              </div>
            </div>
            <p className="text-sm text-[oklch(0.75_0.02_168)] leading-relaxed max-w-sm">
              Horizontal boring and natural gas line installation for underground utility projects
              across Texas.
            </p>
            <div className="pt-2 text-xs text-[oklch(0.65_0.02_168)] font-mono">
              Brookeland, Texas · Primary Service: Horizontal Directional Drilling
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[oklch(0.67_0.19_43.5)]">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/#our-work"
                  className="text-[oklch(0.85_0.02_168)] hover:text-white transition-colors"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="/#why-hdd"
                  className="text-[oklch(0.85_0.02_168)] hover:text-white transition-colors"
                >
                  Why Horizontal Boring
                </a>
              </li>
              <li>
                <a
                  href="/#about-tce"
                  className="text-[oklch(0.85_0.02_168)] hover:text-white transition-colors"
                >
                  About TCE
                </a>
              </li>
              <li>
                <a
                  href="/#faqs"
                  className="text-[oklch(0.85_0.02_168)] hover:text-white transition-colors"
                >
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-[oklch(0.85_0.02_168)] hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact summary & Call */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[oklch(0.67_0.19_43.5)]">
              Direct Contact
            </h3>
            <div className="space-y-2 text-sm text-[oklch(0.85_0.02_168)]">
              <p>
                <a
                  href={SITE_CONFIG.phoneTelLink}
                  className="font-bold text-lg text-white hover:text-[oklch(0.67_0.19_43.5)] transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[oklch(0.67_0.19_43.5)]" />
                  {SITE_CONFIG.phoneFormatted}
                </a>
              </p>
              <p className="text-xs text-[oklch(0.7_0.02_168)] leading-relaxed">
                {SITE_CONFIG.address}
              </p>
              <p className="text-[11px] text-[oklch(0.6_0.02_168)] pt-1">
                Filing address listed for reference. Site visits by project appointment only.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright, Draft Privacy, Back to Top */}
      <div className="border-t border-[oklch(0.32_0.03_168)] bg-[oklch(0.18_0.02_168)]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[oklch(0.65_0.02_168)]">
          <div>
            &copy; {currentYear} {SITE_CONFIG.companyName} All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              Privacy (Draft)
            </Link>
            <span className="text-[oklch(0.4_0.02_168)]">|</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[oklch(0.67_0.19_43.5)]"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
