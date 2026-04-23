import { Section, type SectionPadding } from "@/components/Section";
import { cn } from "@/lib/utils";

const pillars = [
  {
    kicker: "Recurring Reporting",
    body: "Completed, validated reports on schedule - ready for review and submission with a full audit trail.",
  },
  {
    kicker: "Audit Requests",
    body: "Structured document packages in hours instead of weeks. With full traceability by default.",
  },
  {
    kicker: "New Obligations",
    body: "Each new jurisdiction adds an automated output, not a manual process.",
  },
] as const;

const editorialLine = "border-[#E2E6F0]";

function pillarCellClass(index: number) {
  return cn(
    "flex flex-col gap-2 py-8 md:py-10",
    index < pillars.length - 1 && cn("border-b md:border-b-0", editorialLine),
    index > 0 && cn("md:border-l md:pl-8 lg:pl-10", editorialLine),
    index < pillars.length - 1 && "md:pr-8 lg:pr-10",
  );
}

export const WhatWeBuildSection = ({ padding = "default" }: { padding?: SectionPadding }) => {
  return (
    <Section id="what-we-build" scrollMargin padding={padding}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-6">
        What we build
      </p>

      <p className="font-alternates font-bold text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug mb-4 max-w-3xl">
        We build the compliance pipeline between your operational data and its regulatory output.
      </p>

      <p className="font-sans font-light text-base text-muted-foreground leading-relaxed mb-10 max-w-2xl">
        The system connects to existing data sources, maps them to the regulatory templates for each jurisdiction, and runs automatically on schedule.
      </p>

      <hr className={cn("border-t", editorialLine)} />

      <div className="grid grid-cols-1 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <div key={pillar.kicker} className={pillarCellClass(index)}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {pillar.kicker}
            </p>
            <p className="font-sans font-light text-sm text-muted-foreground leading-relaxed">
              {pillar.body}
            </p>
          </div>
        ))}
      </div>

      <hr className={cn("border-t", editorialLine)} />
    </Section>
  );
};
