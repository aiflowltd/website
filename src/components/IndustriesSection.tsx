import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { SiteButton } from "@/components/SiteButton";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";

const audiences = [
  {
    id: "regulated-institutions",
    title: "Regulated Institutions",
    subtitle: "RegFin Europe",
    jurisdiction: "EU · UK",
    profile:
      "Banks, payment institutions, and other entities under direct supervisory authority within EU and UK frameworks. UK, Benelux, and Nordics.",
    characteristics: [
      "Small compliance teams (under 10) responsible for obligations that scale faster than the team can grow",
      "PSD2, MiFID II, DORA, GDPR, and national AML frameworks",
      "Regulatory work competes with daily operations for the same people",
    ],
    regulations: ["PSD2", "MiFID II", "DORA", "AML"],
    buyer: "Head of Compliance",
    link: "/industry/regulated-institutions",
  },
  {
    id: "growth-fintechs",
    title: "Growth Fintechs",
    subtitle: "US FinTech",
    jurisdiction: "US",
    profile:
      "VC-backed, typically Series B or C, operating across multiple states in payments and lending. Engineering resources allocated to product, not compliance tooling.",
    characteristics: [
      "Small compliance teams (under 10) managing an expanding set of state and federal filings",
      "FinCEN, CFPB, SEC, and state banking authorities - each new state adds a new reporting template",
      "Compliance is a gate to growth. Every manual week in a new market is a week not generating revenue",
    ],
    regulations: ["FinCEN", "CFPB", "State MTLs"],
    buyer: "Head of Compliance, VP Compliance, or CEO/COO",
    link: "/industry/growth-fintechs",
  },
];

export const IndustriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = audiences[activeIndex];

  return (
    <Section className="w-full">
      <SectionHeader
        title="Who we work with."
        subtitle="Two client profiles. One underlying problem - compliance obligations scaling faster than the team and the infrastructure can handle."
        titleClassName="mb-3"
        className="mb-12 lg:mb-16"
      />

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: audience list */}
        <div className="lg:col-span-5">
          <div className="space-y-0">
            {audiences.map((audience, index) => (
              <div
                key={audience.id}
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
                    <h3 className="font-alternates mb-1 text-xl font-bold md:text-2xl">
                      {audience.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {audience.subtitle}
                    </p>
                  </div>
                  <ChevronRight
                    className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-foreground"
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

        {/* Right: audience detail panel */}
        <div className="lg:col-span-7 lg:self-start lg:sticky lg:top-24">
          {active && (
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              {/* Header */}
              <div className="border-b border-border px-6 py-6">
                <div className="mb-1 flex items-start justify-between gap-4">
                  <h3 className="font-alternates text-2xl font-bold text-foreground md:text-3xl">
                    {active.title}
                  </h3>
                  <span className="mt-1 shrink-0 rounded border border-border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {active.jurisdiction}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {active.profile}
                </p>
              </div>

              {/* Key characteristics */}
              <div className="border-b border-border px-6 py-5">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Defining characteristics
                </p>
                <ul className="space-y-3">
                  {active.characteristics.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed text-foreground"
                    >
                      <span className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Regulations + buyer */}
              <div className="flex items-start justify-between gap-6 border-b border-border px-6 py-5">
                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Regulatory scope
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {active.regulations.map((reg) => (
                      <span
                        key={reg}
                        className="rounded border border-border px-2 py-0.5 text-[11px] font-medium text-foreground/70"
                      >
                        {reg}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Buyer
                  </p>
                  <p className="text-sm text-foreground/70">{active.buyer}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="px-6 py-5">
                <Link to={active.link}>
                  <SiteButton variant="secondary" arrow="up-right">
                    Read the full profile
                  </SiteButton>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};
