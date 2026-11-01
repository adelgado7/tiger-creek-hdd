import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "../lib/site-config";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Inquiry Confirmation | Tiger Creek Enterprises Inc." },
      {
        name: "description",
        content:
          "Form submission confirmation route for future Tiger Creek Enterprises contact integration.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[oklch(0.965_0.009_92)] text-[oklch(0.23_0.02_168)] flex flex-col justify-center py-16 px-4 sm:px-6">
      <div className="max-w-md mx-auto w-full bg-white border border-[oklch(0.86_0.012_90)] p-8 sm:p-10 shadow-sm rounded-[2px] text-center space-y-6">
        <div className="w-14 h-14 bg-[oklch(0.67_0.19_43.5)]/10 text-[oklch(0.67_0.19_43.5)] mx-auto flex items-center justify-center rounded-full">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold text-[oklch(0.23_0.02_168)]">
            Inquiry Routing Template
          </h1>
          <p className="text-sm text-[oklch(0.46_0.02_165)] leading-relaxed">
            This route is prepared for future integration with the approved CRM inquiry form once
            field IDs and webhook recipients are verified.
          </p>
        </div>

        <div className="p-4 bg-[oklch(0.965_0.009_92)] border border-[oklch(0.86_0.012_90)] text-xs text-[oklch(0.46_0.02_165)] space-y-2 rounded-[2px]">
          <p className="font-semibold text-[oklch(0.23_0.02_168)]">
            Need immediate assistance with a Texas project?
          </p>
          <p>Direct telephone consultation is available during standard business hours:</p>
          <a
            href={SITE_CONFIG.phoneTelLink}
            className="text-base font-bold text-[oklch(0.67_0.19_43.5)] block hover:underline"
          >
            {SITE_CONFIG.phoneFormatted}
          </a>
        </div>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-[oklch(0.23_0.02_168)] hover:bg-[oklch(0.32_0.03_168)] text-white font-bold text-xs uppercase tracking-wider rounded-[2px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
