import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { SiteButton } from "@/components/SiteButton";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";

const frameworks = [
  {
    id: "psd2",
    title: "PSD2",
    fullName: "Payment Services Directive 2",
    jurisdiction: "EU · UK",
    appliesTo: "Payment institutions, banks",
    automated: [
      "Incident reporting to competent authorities",
      "SCA exemption monitoring and documentation",
      "Fraud reporting (Article 96)",
      "Operational and security risk reporting",
    ],
    detail:
      "Each incident report requires data from operations, risk, and technology assembled within 24 hours of detection. We build the pipeline so the report is ready before the deadline — not assembled under it.",
  },
  {
    id: "mifid2",
    title: "MiFID II",
    fullName: "Markets in Financial Instruments Directive II",
    jurisdiction: "EU · UK",
    appliesTo: "Investment firms, banks with trading operations",
    automated: [
      "Transaction reporting to NCAs and ESMA",
      "Best execution reporting (RTS 27 / 28)",
      "Trade and order records",
      "Investor suitability documentation",
    ],
    detail:
      "Transaction reporting runs on tight deadlines with data from multiple trading systems. We map your trade data to the required fields and automate submission — no manual reconciliation, full audit trail.",
  },
  {
    id: "dora",
    title: "DORA",
    fullName: "Digital Operational Resilience Act",
    jurisdiction: "EU",
    appliesTo: "Banks, payment institutions, investment firms",
    automated: [
      "Major ICT incident classification and reporting",
      "Third-party ICT provider risk register",
      "Operational resilience testing documentation",
      "TLPT coordination reporting",
    ],
    detail:
      "DORA penalties for inadequate incident reporting start at €1M. The classification timeline is 4 hours for initial notification, 72 hours for intermediate report. We automate the data collection so classification happens on facts, not memory.",
  },
  {
    id: "aml",
    title: "AML",
    fullName: "Anti-Money Laundering",
    jurisdiction: "EU · UK · US",
    appliesTo: "Banks, payment institutions, fintechs",
    automated: [
      "Suspicious Activity Report (SAR) filing",
      "Transaction monitoring report generation",
      "Customer due diligence documentation",
      "Periodic AML compliance reporting",
    ],
    detail:
      "AML reporting pulls data from transaction systems, customer records, and risk flags across departments. We unify those sources into a single automated pipeline — reports that are accurate, timely, and fully auditable.",
  },
  {
    id: "fincen",
    title: "FinCEN",
    fullName: "Financial Crimes Enforcement Network",
    jurisdiction: "US",
    appliesTo: "Banks, money services businesses, fintechs",
    automated: [
      "Suspicious Activity Reports (SARs)",
      "Currency Transaction Reports (CTRs)",
      "Beneficial Ownership reporting",
      "BSA compliance documentation",
    ],
    detail:
      "Growth-stage fintechs operating across multiple states often have SAR and CTR obligations before they have the infrastructure to file consistently. We build the pipeline so every obligation is met — regardless of how fast the company is growing.",
  },
  {
    id: "cfpb",
    title: "CFPB",
    fullName: "Consumer Financial Protection Bureau",
    jurisdiction: "US",
    appliesTo: "Lenders, payment companies, fintechs",
    automated: [
      "HMDA loan application register",
      "Fair lending data analysis and reporting",
      "Complaint data reporting",
      "Supervisory examination preparation",
    ],
    detail:
      "CFPB examinations arrive on a schedule — but the data preparation should not. We automate the HMDA register and fair lending analysis so the team walks into an examination with documentation ready, not assembled under pressure.",
  },
];

export const IndustriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const frameworkRefs = useRef<(HTMLElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const check = () => {
      const triggerY = window.innerHeight * 0.35;
      const refs = frameworkRefs.current.filter(
        (el): el is HTMLElement => el != null,
      );
      for (let i = refs.length - 1; i >= 0; i--) {
        const rect = refs[i].getBoundingClientRect();
        if (rect.top <= triggerY) {
          setActiveIndex(i);
          return;
        }
      }
      setActiveIndex(0);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  const active = frameworks[activeIndex];

  return (
    <Section ref={sectionRef} className="w-full">
      <SectionHeader
        title="Built for the frameworks your team reports to."
        subtitle="PSD2, MiFID II, DORA, AML, FinCEN, CFPB — each with its own templates, deadlines, and data requirements. We automate the pipeline for each one."
        titleClassName="mb-3"
        className="mb-12 lg:mb-16"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: framework list */}
        <div className="lg:col-span-5">
          <div className="space-y-0">
            {frameworks.map((framework, index) => (
              <div
                key={framework.id}
                ref={(el) => {
                  frameworkRefs.current[index] = el;
                }}
                className="border-b border-border last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group flex w-full items-start justify-between gap-4 py-6 text-left transition-opacity hover:opacity-100 ${
                    index === activeIndex ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl md:text-2xl font-bold font-alternates mb-1">
                      {framework.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {framework.fullName}
                    </p>
                  </div>
                  <ChevronRight
                    className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all mt-1"
                    aria-hidden
                  />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/contact">
              <SiteButton variant="primary" arrow="up-right">
                Book a diagnostic call
              </SiteButton>
            </Link>
          </div>
        </div>

        {/* Right: framework detail panel */}
        <div className="lg:col-span-7 lg:self-start lg:sticky lg:top-24">
          {active && (
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              {/* Header */}
              <div className="px-6 py-6 border-b border-border">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="font-alternates text-3xl font-bold text-foreground">
                    {active.title}
                  </h3>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground border border-border rounded px-2 py-1 shrink-0 mt-1.5">
                    {active.jurisdiction}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-snug">
                  {active.fullName}
                </p>
                <p className="text-xs text-muted-foreground/60 mt-0.5">
                  {active.appliesTo}
                </p>
              </div>

              {/* What we automate */}
              <div className="px-6 py-5 border-b border-border">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-4">
                  What we automate
                </p>
                <ul className="space-y-3">
                  {active.automated.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-success mt-[0.4rem] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detail paragraph */}
              <div className="px-6 py-5">
                <p className="text-sm font-light leading-relaxed text-muted-foreground">
                  {active.detail}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};
