import { Link } from "react-router-dom";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    index: "01",
    title: "Compliance Diagnostic",
    phase: "Diagnose",
    description:
      "A focused 1–2 week engagement. We map your compliance workflows, data sources, and regulatory obligations across operations, finance, risk, and technology. You leave with a prioritised roadmap and a clear brief — whether you proceed with us or not.",
    link: "/contact",
  },
  {
    index: "02",
    title: "Pipeline Build",
    phase: "Build",
    description:
      "A fixed-scope, fixed-price build: 4–8 weeks. We connect your data sources across operations, finance, risk, and technology, map them to your regulatory obligations, and deliver a fully automated compliance pipeline — operational, validated, audit trail included.",
    link: "/services",
  },
  {
    index: "03",
    title: "Quarterly Retainer",
    phase: "Operate",
    description:
      "Ongoing infrastructure management, scoped by obligation. Each new regulatory requirement adds an automated output on top of the existing pipeline — not a new manual process for the team. The client meeting stays on the calendar.",
    link: "/services",
  },
];

const colPad = "md:px-8 lg:px-10";
const cellBorder = [
  "border-b md:border-b-0",
  "border-b md:border-b-0 md:border-l md:border-[#E2E6F0]",
  "md:border-l md:border-[#E2E6F0]",
];

export const ServicesSection = () => {
  return (
    <Section id="services" scrollMargin>
      <SectionHeader
        title="Three engagements. Each with a fixed outcome."
        subtitle="Start with the Diagnostic. Build when the scope is clear. Priced on deliverables, not hours."
        className="mb-12"
      />

      <hr className="border-t border-[#E2E6F0]" />

      <div className="grid grid-cols-1 gap-0 md:[grid-template-columns:repeat(3,minmax(0,1fr))] md:[grid-template-rows:auto_auto_1fr]">
        {services.map((service, index) => (
          <Link
            key={service.index}
            to={service.link}
            className={`
              group min-w-0 border-[#E2E6F0] ${cellBorder[index]} ${colPad}
              transition-opacity duration-200 hover:opacity-75
              flex flex-col gap-8 py-12
              md:gap-0 md:py-0 md:[display:subgrid] md:[grid-row:span_3]
            `}
          >
            <div className="flex items-center justify-between md:pt-12 md:pb-6">
              <span className="font-sans font-extralight text-xs text-foreground/30 tracking-widest tabular-nums">
                {service.index}
              </span>
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {service.phase}
              </span>
            </div>

            <h3 className="font-alternates font-bold text-2xl text-foreground leading-snug md:pb-6">
              {service.title}
            </h3>

            <div className="flex min-h-0 flex-col gap-6 md:h-full md:min-h-0 md:self-stretch md:justify-between md:pb-12">
              <p className="font-sans font-light text-sm text-muted-foreground leading-relaxed md:min-h-0">
                {service.description}
              </p>
              <div className="flex h-12 shrink-0 items-center gap-1.5 text-sm font-medium text-foreground/40 group-hover:text-foreground transition-colors duration-200">
                Learn more
                <ArrowUpRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <hr className="border-t border-[#E2E6F0]" />
    </Section>
  );
};
