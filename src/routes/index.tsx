import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { ServiceStrip } from "../components/ServiceStrip";
import { OurWorkSection } from "../components/OurWorkSection";
import { HddEducationalSection } from "../components/HddEducationalSection";
import { AboutSection } from "../components/AboutSection";
import { FaqSection } from "../components/FaqSection";
import { ContactSection } from "../components/ContactSection";
import { OwnerReviewChecklist } from "../components/OwnerReviewChecklist";
import { Footer } from "../components/Footer";
import { SITE_CONFIG } from "../lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tiger Creek Enterprises | Horizontal Boring in Texas" },
      {
        name: "description",
        content:
          "Tiger Creek Enterprises Inc. provides horizontal boring and natural gas line installation and replacement for utility projects across Texas. Discuss your project.",
      },
      { name: "robots", content: "noindex, nofollow" }, // Demo mode default per brief
      { property: "og:title", content: "Tiger Creek Enterprises | Horizontal Boring in Texas" },
      {
        property: "og:description",
        content:
          "Horizontal boring and natural gas line installation across Texas. Essential infrastructure underground with reduced surface disruption.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: SITE_CONFIG.heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Tiger Creek Enterprises | Horizontal Boring in Texas" },
      {
        name: "twitter:description",
        content:
          "Tiger Creek Enterprises Inc. provides horizontal boring and natural gas line installation across Texas.",
      },
      { name: "twitter:image", content: SITE_CONFIG.heroImage },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: SITE_CONFIG.companyName,
          alternateName: SITE_CONFIG.shortName,
          telephone: SITE_CONFIG.phoneFormatted,
          address: {
            "@type": "PostalAddress",
            streetAddress: "409 Private Road 7065",
            addressLocality: "Brookeland",
            addressRegion: "TX",
            postalCode: "75931",
            addressCountry: "US",
          },
          areaServed: {
            "@type": "State",
            name: "Texas",
          },
          description:
            "Underground utility contractor specializing in horizontal boring and natural gas line installation and replacement in Texas.",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.965_0.009_92)] text-[oklch(0.23_0.02_168)] selection:bg-[oklch(0.67_0.19_43.5)] selection:text-white">
      {/* Skip link for WCAG 2.2 accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[oklch(0.67_0.19_43.5)] text-white font-bold text-xs rounded"
      >
        Skip to main content
      </a>

      {/* Shared Concept Header */}
      <Header />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        {/* A. Hero */}
        <HeroSection />

        {/* B. Service Strip */}
        <ServiceStrip />

        {/* C. Our Work Section */}
        <OurWorkSection />

        {/* D. HDD Educational Diagram Section */}
        <HddEducationalSection />

        {/* E. About & Service Area Section */}
        <AboutSection />

        {/* F. FAQs Section */}
        <FaqSection />

        {/* G. Contact Section */}
        <ContactSection />
      </main>

      {/* Review & Launch Handoff Notes */}
      <OwnerReviewChecklist />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
