import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default for immediate preview

  const faqs = [
    {
      q: "What is horizontal directional drilling (HDD)?",
      a: "Horizontal directional drilling (HDD)—often referred to as horizontal boring—is a steerable trenchless method of installing underground utilities, conduits, and pipes along a planned path. A specialized drill rig guides a pilot bore beneath obstacles such as highways, driveways, or landscaping, which is then reamed to size before pulling the pipe into place.",
    },
    {
      q: "Is trenchless installation completely excavation-free?",
      a: "No. While horizontal boring substantially reduces continuous surface disturbance compared to open-trenching, excavation is still required for drill entry and exit pits, connection tie-ins, and exposure/pot-holing of crossing utilities along the alignment.",
    },
    {
      q: "Can HDD be used beneath roads and driveways?",
      a: "Yes. Boring beneath roadways, driveways, sidewalks, and municipal easements is one of the most common applications of directional drilling, allowing new infrastructure to be installed without interrupting traffic or tearing up pavement.",
    },
    {
      q: "What determines whether a crossing is suitable?",
      a: "Suitability depends on geotechnical soil and rock conditions, adequate setback space for equipment at the entry and exit points, required bend radius for the specified pipe diameter, depth clearance relative to existing underground utilities, and applicable right-of-way or TxDOT permits.",
    },
    {
      q: "What affects project cost and timing?",
      a: "Crossing length, pipe diameter and material, ground composition (e.g., sand, dense clay, or rocky strata), depth profile requirements, and the density of existing underground utilities that require pre-drill verification all directly influence the project schedule and cost.",
    },
    {
      q: "Why must existing utilities be located before drilling?",
      a: "Safety and infrastructure integrity are paramount. Surface locator paint marks and flags alone do not establish exact subsurface depth. Visual exposure (such as potholing or vacuum excavation) of existing utility crossings is a critical safety step to confirm clearances before any boring commences.",
    },
    {
      q: "What information should I have ready when contacting TCE?",
      a: "Having your project location or municipality, proposed pipe material and diameter, estimated crossing length, available engineering or plan drawings, and your target schedule will help us evaluate the crossing scope and discuss feasibility.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 sm:py-24 bg-white scroll-mt-20">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-3 pb-12">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[oklch(0.67_0.19_43.5)] font-mono">
            Before You Break Ground
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[oklch(0.23_0.02_168)]">
            Good questions. Clear answers.
          </h2>
          <p className="text-sm text-[oklch(0.46_0.02_165)]">
            Every underground utility bore requires thorough site assessment and upfront utility
            verification.
          </p>
        </div>

        {/* Keyboard-accessible Accordion */}
        <div className="border-t border-[oklch(0.86_0.012_90)] divide-y divide-[oklch(0.86_0.012_90)]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.q} className="py-2">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[oklch(0.23_0.02_168)] hover:text-[oklch(0.67_0.19_43.5)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[oklch(0.67_0.19_43.5)]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[oklch(0.67_0.19_43.5)] text-sm">▶</span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[oklch(0.46_0.02_165)] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[oklch(0.67_0.19_43.5)]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="pb-5 pt-1 pl-7 pr-4 text-sm text-[oklch(0.46_0.02_165)] leading-relaxed space-y-2 animate-in fade-in-50"
                  >
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-4 bg-[oklch(0.965_0.009_92)] border border-[oklch(0.86_0.012_90)] rounded-[2px] text-xs text-[oklch(0.46_0.02_165)]">
          <strong>Notice:</strong> Surface utility flags or paint marks alone do not confirm depth.
          Visual verification and potholing are essential elements of responsible trenchless project
          management.
        </div>
      </div>
    </section>
  );
}
