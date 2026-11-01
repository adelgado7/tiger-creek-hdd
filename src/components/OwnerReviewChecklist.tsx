import { useState } from "react";
import { CheckCircle2, ChevronDown, ShieldAlert, Sparkles, Copy, Check } from "lucide-react";
import { SITE_CONFIG } from "../lib/site-config";

export function OwnerReviewChecklist() {
  const [collapsed, setCollapsed] = useState(true);
  const [copied, setCopied] = useState(false);

  const checklistItems = [
    {
      num: 1,
      title: "Official logo & actual photos",
      desc: "Supply official TCE vector logo (if available) and actual jobsite photos of TCE equipment and Texas crews with customer/site permission. The current hero image is illustrative.",
    },
    {
      num: 2,
      title: "Current contact details confirmation",
      desc: "Confirm preferred telephone number, email address for bid solicitations, physical/mailing address, and designated project inquiry recipient before launch.",
    },
    {
      num: 3,
      title: "Exact drilling methods & capabilities",
      desc: "Confirm TCE's precise boring equipment capabilities (max pipe diameters, max bore distances, ground conditions handled) and approved scope in Texas.",
    },
    {
      num: 4,
      title: "Approved company history & customer references",
      desc: "Review and approve company founding background, team bios, certifications, and explicit permissions for referencing customers or prime contractor relationships.",
    },
    {
      num: 5,
      title: "Verified form & CRM identifiers",
      desc: "Provide verified form/embed ID, exact CRM custom field keys, submission notification email, and privacy consent wording before online form activation.",
    },
    {
      num: 6,
      title: "Final production domain & indexing switch",
      desc: "Select final domain (e.g. tigercreekenterprises.com or tigercreektx.com), review legal/privacy copy, and set isDemoMode: false to enable search engine indexing.",
    },
    {
      num: 7,
      title: "Production launch verification tasks",
      desc: "Upon publishing on the live domain: verify Google Search Console, submit production sitemap, verify real 24-character IndexNow key file, and test social share preview.",
    },
  ];

  const copyNotes = () => {
    const text = checklistItems
      .map((item) => `${item.num}. ${item.title}: ${item.desc}`)
      .join("\n\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside
      aria-label="Owner Review & Demonstration Checklist"
      className="bg-[oklch(0.93_0.01_90)] border-t border-[oklch(0.86_0.012_90)] text-[oklch(0.23_0.02_168)] py-8"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[oklch(0.86_0.012_90)] rounded-[2px] p-6 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[oklch(0.92_0.012_90)]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[oklch(0.67_0.19_43.5)]/10 text-[oklch(0.67_0.19_43.5)] flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm sm:text-base text-[oklch(0.23_0.02_168)] flex items-center gap-2">
                  <span>Owner & Client Review Handoff Checklist</span>
                  <span className="text-[10px] font-mono uppercase bg-[oklch(0.67_0.19_43.5)] text-white px-2 py-0.5 rounded">
                    Demo Mode Active
                  </span>
                </h3>
                <p className="text-xs text-[oklch(0.46_0.02_165)]">
                  7 concrete items required from company leadership prior to production go-live
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={copyNotes}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border border-[oklch(0.86_0.012_90)] rounded hover:bg-neutral-50 transition-colors"
                aria-label="Copy checklist notes"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-green-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span>{copied ? "Copied" : "Copy Checklist"}</span>
              </button>
              <button
                type="button"
                onClick={() => setCollapsed(!collapsed)}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-[oklch(0.23_0.02_168)] text-white rounded hover:bg-[oklch(0.32_0.03_168)] transition-colors"
                aria-expanded={!collapsed}
              >
                <span>{collapsed ? "Expand Checklist" : "Collapse"}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${!collapsed ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>

          {!collapsed && (
            <div className="pt-6 space-y-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {checklistItems.map((item) => (
                  <div
                    key={item.num}
                    className="p-4 bg-[oklch(0.965_0.009_92)] border border-[oklch(0.86_0.012_90)] rounded space-y-1.5"
                  >
                    <div className="font-bold text-[oklch(0.23_0.02_168)] flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[oklch(0.67_0.19_43.5)] text-white flex items-center justify-center font-mono text-[10px]">
                        {item.num}
                      </span>
                      <span>{item.title}</span>
                    </div>
                    <p className="text-[oklch(0.46_0.02_165)] leading-relaxed pl-7">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 text-amber-900 rounded flex items-start gap-3 mt-4">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <strong>Demo Mode Protection:</strong> The site currently enforces{" "}
                  <code className="bg-amber-100 px-1 py-0.5 rounded text-[11px]">
                    noindex, nofollow
                  </code>{" "}
                  and robots.txt disallows search engine indexing until company review is approved
                  and the live production domain is configured in{" "}
                  <code className="bg-amber-100 px-1 py-0.5 rounded text-[11px]">
                    src/lib/site-config.ts
                  </code>
                  .
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
