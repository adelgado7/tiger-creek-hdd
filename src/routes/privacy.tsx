import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_CONFIG } from "../lib/site-config";
import { ArrowLeft, Shield } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Notice (Draft) | Tiger Creek Enterprises Inc." },
      {
        name: "description",
        content:
          "Draft demonstration privacy notice for Tiger Creek Enterprises Inc. website concept.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[oklch(0.965_0.009_92)] text-[oklch(0.23_0.02_168)]">
      {/* Breadcrumb / Back */}
      <div className="border-b border-[oklch(0.86_0.012_90)] bg-white/50">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-[oklch(0.23_0.02_168)] hover:text-[oklch(0.67_0.19_43.5)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>

      <main className="max-w-[1000px] mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white border border-[oklch(0.86_0.012_90)] p-8 sm:p-12 shadow-sm rounded-[2px] space-y-8">
          <div className="flex items-center gap-3 text-[oklch(0.67_0.19_43.5)] font-bold text-xs uppercase tracking-widest font-mono">
            <Shield className="w-4 h-4" />
            <span>Demonstration & Concept Notice</span>
          </div>

          <header className="space-y-2 border-b border-[oklch(0.86_0.012_90)] pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[oklch(0.23_0.02_168)]">
              Privacy Notice (Draft)
            </h1>
            <p className="text-sm text-[oklch(0.46_0.02_165)]">
              Last reviewed: November 2026 · Tiger Creek Enterprises Inc. demonstration site
            </p>
          </header>

          <section className="space-y-4 text-sm leading-relaxed text-[oklch(0.35_0.02_165)]">
            <h2 className="text-lg font-bold text-[oklch(0.23_0.02_168)]">
              1. Purpose of this Notice
            </h2>
            <p>
              This draft privacy notice reflects the current operating state of this demonstration
              website for <strong>{SITE_CONFIG.companyName}</strong>. It accurately describes what
              information is and is not collected during this review phase.
            </p>

            <h2 className="text-lg font-bold text-[oklch(0.23_0.02_168)] pt-4">
              2. Current Data Collection Practices
            </h2>
            <p>In this demonstration release:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>No online form submissions:</strong> There is no active online contact form
                transmitting user inputs to external databases or CRM endpoints. Contact is
                conducted by direct telephone communication.
              </li>
              <li>
                <strong>No analytics or third-party cookies:</strong> No tracking beacons,
                third-party marketing tags, or automated user profiling scripts are loaded on this
                demonstration.
              </li>
              <li>
                <strong>Search engine indexing:</strong> This preview site serves{" "}
                <code className="bg-neutral-100 px-1 py-0.5 rounded text-xs">
                  noindex, nofollow
                </code>{" "}
                headers and robots.txt disallow directives to prevent public search engine indexing
                during client evaluation.
              </li>
            </ul>

            <h2 className="text-lg font-bold text-[oklch(0.23_0.02_168)] pt-4">
              3. Direct Phone Inquiries
            </h2>
            <p>
              When calling <strong>{SITE_CONFIG.phoneFormatted}</strong> to discuss a potential
              project, project details (such as crossing location, pipe dimensions, and engineering
              parameters) are discussed directly with company personnel for estimating and project
              scoping purposes only.
            </p>

            <h2 className="text-lg font-bold text-[oklch(0.23_0.02_168)] pt-4">
              4. Future Online Forms & Lead Capture
            </h2>
            <p>
              Prior to activating any integrated inquiry form on the production site, verified CRM
              field identifiers, secure transport, and explicit, optional consent wording will be
              approved and incorporated into an updated final Privacy Policy.
            </p>

            <h2 className="text-lg font-bold text-[oklch(0.23_0.02_168)] pt-4">
              5. Questions & Company Contact
            </h2>
            <p>For questions regarding this demonstration or company operations:</p>
            <div className="p-4 bg-[oklch(0.965_0.009_92)] border border-[oklch(0.86_0.012_90)] rounded-[2px] font-mono text-xs space-y-1">
              <div>
                <strong>{SITE_CONFIG.companyName}</strong>
              </div>
              <div>Telephone: {SITE_CONFIG.phoneFormatted}</div>
              <div>Location: {SITE_CONFIG.address}</div>
            </div>
          </section>

          <div className="pt-6 border-t border-[oklch(0.86_0.012_90)] flex justify-between items-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[oklch(0.23_0.02_168)] hover:bg-[oklch(0.32_0.03_168)] text-white font-bold text-xs uppercase tracking-wider rounded-[2px]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
