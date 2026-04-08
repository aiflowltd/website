import { useState } from "react";
import { Link } from "react-router-dom";
import { SiteButton } from "@/components/SiteButton";

const faqs = [
  {
    question: "We're not sure where to start. What do you recommend?",
    answer:
      "That is exactly what the AI Clarity Session is for. In one focused session we map your processes, identify where AI creates measurable value, and give you a clear answer — including realistic cost and return. No obligation to continue after that.",
  },
  {
    question: "How do you price? We need to present this internally.",
    answer:
      "We price on scope and expected outcomes — not on days or headcount. The Clarity Session and Opportunity Audit are fixed-price with defined deliverables. Build engagements are scoped after the audit, with a clear budget range before any commitment. We are comfortable helping you build the business case for internal sign-off.",
  },
  {
    question:
      "We have sensitive data and strict security requirements. How do you handle that?",
    answer:
      "We work under NDA from the first conversation, as standard. Architecture, data access, and deployment environments are designed around your requirements — not a default template. We have experience with on-premise deployments and multi-jurisdiction data residency constraints.",
  },
  {
    question: "We have an internal data team. Where do you fit?",
    answer:
      "We work alongside internal teams, not instead of them. We provide the AI and ML engineering depth — model development, agent architecture, LLM integration, production deployment — that most internal data teams do not have in-house. Your team retains ownership. We accelerate delivery.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left: heading */}
          <div className="md:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0E1015]/40 mb-3">
              FAQ
            </p>
            <h2
              className="font-sans font-extrabold text-[#0E1015] tracking-[-0.02em] leading-tight mb-6"
              style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
            >
              Got <span className="font-extralight">questions</span>?
            </h2>
            <p className="text-[15px] text-[#555A66] leading-[1.7] mb-8">
              Not finding what you need?
            </p>
            <Link to="/contact">
              <SiteButton variant="primary" arrow="up-right">
                Reach out and we'll help
              </SiteButton>
            </Link>
          </div>

          {/* Right: accordion */}
          <div className="md:col-span-8">
            {faqs.map((faq, index) => (
              <div key={index}>
                <hr className="border-t border-[#E2E6F0]" />
                <div className="py-6">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex items-start justify-between gap-6 text-left"
                  >
                    <span className="text-[16px] font-medium text-[#0E1015] leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 w-5 h-5 flex items-center justify-center text-[#555A66] mt-0.5 transition-transform duration-200 ${
                        openIndex === index ? "rotate-45" : ""
                      }`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8 3v10M3 8h10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>

                  {openIndex === index && (
                    <p className="mt-4 text-[15px] text-[#555A66] leading-[1.7]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
            <hr className="border-t border-[#E2E6F0]" />
          </div>
        </div>
      </div>
    </section>
  );
};
