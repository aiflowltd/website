import { Link } from "react-router-dom";
import { SiteButton } from "@/components/SiteButton";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

const stats = [
  {
    value: "10+",
    label: "years in fintech",
    description:
      "building compliance infrastructure for regulated institutions in Europe and the United States",
  },
  {
    value: "50+",
    label: "compliance workflows automated",
    description:
      "across payments, lending, and investment firms under EU and US regulatory frameworks",
  },
  {
    value: "20+",
    label: "regulated institutions served",
    description:
      "banks, payment institutions, and growth-stage fintechs across the EU and United States",
  },
  {
    value: "4h",
    label: "DORA initial notification window",
    description:
      "the tightest reporting deadline in our stack — and the one that makes data handoff failures most costly",
  },
];

const LINE = "border-[#E2E6F0]";

/** Horizontal padding between columns (matches ServicesSection). */
const colPad = ["md:pr-10", "md:px-10", "md:px-10", "md:pl-10"] as const;

function statCellClass(index: number) {
  return cn(
    LINE,
    colPad[index],
    "flex flex-col gap-3 py-8 max-md:px-4",
    "md:gap-0 md:py-0 md:[display:subgrid] md:[grid-row:span_3] md:[grid-template-rows:subgrid]",
    // Mobile 2×2: only these edges (max-md so they never stack with desktop rules)
    index === 0 && "max-md:border-b max-md:border-r",
    index === 1 && "max-md:border-b",
    index === 2 && "max-md:border-r",
    // Desktop: one vertical rule between columns, not r+l on neighbors
    index > 0 && "md:border-l",
  );
}

export const TeamSection = () => {
  return (
    <Section id="team" scrollMargin>
      <SectionHeader
        title={
          <>
            The team.{" "}
            <span className="font-extralight">Four years in fintech.</span>
          </>
        }
        subtitle="The regulatory knowledge comes from working inside the institutions. The infrastructure delivery comes from building production systems from scratch."
        titleClassName="text-3xl md:text-4xl"
        className="mb-12"
      />

      <hr className="border-t border-[#E2E6F0]" />

      {/*
        Desktop: 4 columns, 3 shared row tracks (value / label / description).
        Mobile: 2×2 with dividers matching ServicesSection line weight.
      */}
      <div className="grid grid-cols-2 md:grid-cols-4 md:[grid-template-rows:auto_auto_1fr] gap-0">
        {stats.map((stat, index) => (
          <div key={stat.label} className={statCellClass(index)}>
            <p
              className="font-extralight text-[#0E1015] leading-none tracking-[-0.04em] md:pt-12 md:pb-4"
              style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
            >
              {stat.value}
            </p>
            <p className="text-[13px] font-semibold text-[#0E1015] md:pb-4">
              {stat.label}
            </p>
            <p className="text-[13px] text-[#555A66] leading-[1.6] md:pb-12">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      <hr className="border-t border-[#E2E6F0]" />

      <div className="flex flex-wrap gap-4 mt-10">
        <Link to="/team">
          <SiteButton variant="primary" arrow="up-right">
            Discover more about us
          </SiteButton>
        </Link>
        <Link to="/careers">
          <SiteButton variant="secondary">Careers at AI Flow</SiteButton>
        </Link>
      </div>
    </Section>
  );
};
