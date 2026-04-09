import { useState } from "react";
import { Link } from "react-router-dom";
import { SiteButton } from "@/components/SiteButton";

const faqs = [
  {
    question: "We're not sure where to start. What do you recommend?",
    answer:
      "That is exactly what the Compliance Diagnostic is for. In 1–2 weeks we map your compliance workflows, data sources, and regulatory obligations across operations, finance, risk, and technology. You leave with a prioritised roadmap and a clear answer on where the data handoff problem is — whether you proceed with us or not.",
  },
  {
    question: "Is AI Flow right for us?",
    answer:
      "AI Flow is built for two situations. First: a compliance team managing a regulatory obligation stack that is growing faster than the team can handle — spending most of their hours on data assembly rather than compliance work. Second: a regulated institution or growth-stage fintech that has had a data handoff failure that looked like a compliance failure, and knows it needs infrastructure, not more headcount. If your team rebuilds the same reports from scratch every cycle, if adding a new jurisdiction means adding a new manual process, or if an audit request triggers days of document preparation — this is the problem we solve.",
  },
  {
    question:
      "We have sensitive data and strict security requirements. How do you handle that?",
    answer:
      "We work under NDA from the first conversation, as standard. Our systems are built to OWASP standards and follow industry-recognised security practices throughout the development lifecycle. Architecture, data access, and deployment environments are designed around your requirements — not a default template. We have experience with on-premise deployments, air-gapped environments, and multi-jurisdiction data residency constraints.",
  },
  {
    question: "We have an internal data team. Where do you fit?",
    answer:
      "We work alongside internal teams, not instead of them. We provide the compliance infrastructure engineering — data pipeline design, regulatory mapping, automated reporting, audit trail implementation — that most internal data teams do not have in-house. Regulatory obligations do not respect department boundaries. A MiFID II transaction report pulls from trading, risk, and finance simultaneously. A DORA incident report requires data from IT operations, security, and senior management. We sit with the compliance team but work across operations, finance, risk, and technology — because that is where the data lives. Your team retains ownership of what we build. We provide the runbook.",
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
