import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { SITE_CONFIG } from "../lib/site-config";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "Our Work", href: "/#our-work" },
    { label: "Why Horizontal Boring", href: "/#why-hdd" },
    { label: "About TCE", href: "/#about-tce" },
    { label: "FAQs", href: "/#faqs" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      {/* Concept / Demo Notice Banner */}
      {SITE_CONFIG.isDemoMode && (
        <div className="bg-[oklch(0.23_0.02_168)] text-[oklch(0.96_0.01_90)] px-4 py-2 text-xs text-center border-b border-[oklch(0.32_0.03_168)] flex items-center justify-center gap-2 font-medium tracking-wide">
          <span className="inline-block w-2 h-2 rounded-full bg-[oklch(0.67_0.19_43.5)]"></span>
          <span>{SITE_CONFIG.demoBannerText}</span>
          <span className="text-[oklch(0.7_0.02_168)] hidden sm:inline">| Non-indexed preview</span>
        </div>
      )}

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[oklch(0.965_0.009_92)]/95 backdrop-blur-md border-b border-[oklch(0.86_0.012_90)]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Text Wordmark with TC Monogram */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[oklch(0.67_0.19_43.5)]"
            aria-label="Tiger Creek Enterprises - Home"
          >
            {/* Restrained orange TC monogram */}
            <div className="w-10 h-10 bg-[oklch(0.67_0.19_43.5)] text-white flex items-center justify-center font-black text-lg tracking-tighter shrink-0 rounded-[2px] shadow-sm">
              TC
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-lg tracking-tight leading-none text-[oklch(0.23_0.02_168)] uppercase font-mono">
                Tiger Creek
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[oklch(0.46_0.02_165)] mt-1 uppercase">
                Enterprises Inc.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-[oklch(0.23_0.02_168)] hover:text-[oklch(0.67_0.19_43.5)] transition-colors py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[oklch(0.67_0.19_43.5)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action: Discuss Your Project */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[oklch(0.67_0.19_43.5)] hover:bg-[oklch(0.62_0.20_42)] text-white font-bold text-sm tracking-wide transition-all shadow-sm rounded-[2px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[oklch(0.67_0.19_43.5)]"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={SITE_CONFIG.phoneTelLink}
              className="p-2 text-[oklch(0.67_0.19_43.5)] hover:bg-[oklch(0.92_0.012_90)] rounded"
              aria-label={`Call ${SITE_CONFIG.phoneFormatted}`}
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[oklch(0.23_0.02_168)] hover:bg-[oklch(0.92_0.012_90)] rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[oklch(0.67_0.19_43.5)]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown panel */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-panel"
            className="md:hidden border-t border-[oklch(0.86_0.012_90)] bg-[oklch(0.965_0.009_92)] px-5 py-6 space-y-4 shadow-lg"
          >
            <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold text-[oklch(0.23_0.02_168)] hover:text-[oklch(0.67_0.19_43.5)] py-2 border-b border-[oklch(0.86_0.012_90)]/50"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[oklch(0.67_0.19_43.5)] text-white font-bold text-sm tracking-wide rounded-[2px]"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.phoneTelLink}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 border border-[oklch(0.23_0.02_168)] text-[oklch(0.23_0.02_168)] font-bold text-sm tracking-wide rounded-[2px]"
              >
                <Phone className="w-4 h-4" />
                <span>Call {SITE_CONFIG.phoneFormatted}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
