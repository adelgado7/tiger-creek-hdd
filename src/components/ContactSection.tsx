import { useState } from "react";
import { Phone, ArrowUpRight, ClipboardList, Info } from "lucide-react";
import { SITE_CONFIG } from "../lib/site-config";

export function ContactSection() {
  const [showFormSpec, setShowFormSpec] = useState(false);

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-[oklch(0.67_0.19_43.5)] text-white scroll-mt-20"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Heading & Readiness Checklist */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/80 font-mono">
              Let&apos;s Get The Conversation Started
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Have a project <br />
              under the surface?
            </h2>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl">
              Have your project location, pipe size, approximate bore length, plans, and desired
              schedule ready when you call.
            </p>

            <div className="bg-black/20 border border-white/20 p-5 rounded-[2px] space-y-3 max-w-lg">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-white/90 flex items-center gap-2">
                <ClipboardList className="w-4 h-4 text-white" />
                <span>Helpful Project Details to Prepare</span>
              </div>
              <ul className="text-xs space-y-1.5 text-white/85 list-disc pl-4">
                <li>Project county / municipality & crossing location</li>
                <li>Pipe type (e.g. natural gas PE/steel), diameter, and bore length</li>
                <li>Site conditions (road crossing, easement, right-of-way)</li>
                <li>Required engineering schedule and target start date</li>
              </ul>
            </div>
          </div>

          {/* Right: Prominent Phone Card & Direct Action */}
          <div className="lg:col-span-5 bg-[oklch(0.23_0.02_168)] p-8 sm:p-10 rounded-[2px] shadow-xl border border-[oklch(0.32_0.03_168)] space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold tracking-widest text-[oklch(0.67_0.19_43.5)] uppercase">
                {SITE_CONFIG.companyName}
              </span>
              <div className="pt-2">
                <a
                  href={SITE_CONFIG.phoneTelLink}
                  className="text-3xl sm:text-4xl font-black text-white hover:text-[oklch(0.67_0.19_43.5)] transition-colors block tracking-tight"
                >
                  {SITE_CONFIG.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="pt-2 pb-2 text-xs text-[oklch(0.75_0.02_168)] leading-relaxed space-y-1 font-mono">
              <div>{SITE_CONFIG.address}</div>
              <div className="text-[11px] text-[oklch(0.6_0.02_168)] pt-1">
                Filing address listed for reference. By project appointment only.
              </div>
            </div>

            {/* Direct Primary Call Action Button */}
            <div className="space-y-3 pt-2">
              <a
                href={SITE_CONFIG.phoneTelLink}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[oklch(0.67_0.19_43.5)] hover:bg-[oklch(0.62_0.20_42)] text-white font-extrabold text-sm tracking-wide rounded-[2px] transition-all shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call to Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <p className="text-center text-[11px] text-[oklch(0.7_0.02_168)]">
                Direct commercial contractor phone line for Texas utility projects
              </p>
            </div>

            {/* Preparation toggle for future CRM Web Form */}
            <div className="pt-4 border-t border-[oklch(0.32_0.03_168)]">
              <button
                type="button"
                onClick={() => setShowFormSpec(!showFormSpec)}
                className="inline-flex items-center gap-1.5 text-xs text-[oklch(0.75_0.02_168)] hover:text-white underline underline-offset-4 cursor-pointer"
              >
                <Info className="w-3.5 h-3.5" />
                <span>
                  {showFormSpec ? "Hide form integration spec" : "Future CRM Web Form Spec"}
                </span>
              </button>

              {showFormSpec && (
                <div className="mt-3 p-3 bg-[oklch(0.18_0.02_168)] border border-[oklch(0.28_0.02_168)] rounded text-[11px] text-[oklch(0.75_0.02_168)] space-y-2 animate-in fade-in-50">
                  <div className="font-bold text-white uppercase tracking-wider font-mono">
                    Form Integration Inputs (Prepared)
                  </div>
                  <p>
                    Per project brief, online submissions are held until exact CRM field
                    identifiers, verified recipient, and explicit consent wording are approved.
                  </p>
                  <ul className="list-disc pl-4 space-y-1 font-mono text-[10px]">
                    <li>Contact Name (text)</li>
                    <li>Company / Entity (text)</li>
                    <li>Email (email) &amp; Phone (tel)</li>
                    <li>Project Location (Texas city/county)</li>
                    <li>Service Needed (Horizontal Boring / Gas Installation)</li>
                    <li>Project Details (bore length, pipe size, timeline)</li>
                    <li>Marketing Consent (unchecked by default)</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
