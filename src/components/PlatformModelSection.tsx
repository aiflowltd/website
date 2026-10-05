import { Link } from "react-router-dom";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowUpRight } from "lucide-react";

const pillars = [
  {
    index: "01",
    title: "AI Flow Core",
    phase: "Platform",
    description:
      "Our own AI-native compliance platform. Connectors, regulatory mapping, validation rules, evidence packs and a full audit trail - reusable components every deployment runs on.",
    link: "/platform",
  },
  {
    index: "02",
    title: "Forward deployed engineers",
    phase: "Integration",
    description:
      "Finance is different in every company. Our engineers integrate Core end to end with your systems and adapt it to whatever is unique about how you work.",
    link: "/how-we-work",
  },
  {
    index: "03",
    title: "One workflow, then expand",
    phase: "Engagement",
    description:
      "4–8 weeks to take one workflow live on Core. Then add more reports, controls, evidence packs and registers on the same foundation - instead of starting again.",
    link: "/how-we-work#engagement",
  },
];

const colPad = "md:px-8 lg:px-10";
const cellBorder = [
  "border-b md:border-b-0",
  "border-b md:border-b-0 md:border-l md:border-[#E2E6F0]",
  "md:border-l md:border-[#E2E6F0]",
];

export const PlatformModelSection = () => {
  return (
    <Section id="platform" scrollMargin>
      <SectionHeader
        title="A platform, deployed by engineers."
        subtitle="The product does the work. Our engineers make it fit your company."
        className="mb-12"
      />

      <hr className="border-t border-[#E2E6F0]" />

      <div className="grid grid-cols-1 gap-0 md:[grid-template-columns:repeat(3,minmax(0,1fr))] md:[grid-template-rows:auto_auto_1fr]">
        {pillars.map((service, index) => (
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
