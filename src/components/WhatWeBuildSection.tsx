import { Section, type SectionPadding } from "@/components/Section";
import { cn } from "@/lib/utils";

const pillars = [
  {
    kicker: "Recurring reporting",
    title: "Completed, validated reports ready for review and submission",
    body: "Each reporting cycle produces completed, validated reports ready for review and submission, with a full audit trail.",
  },
  {
    kicker: "Audit requests",
    title: "Structured document packages in hours instead of weeks",
    body: "Audit requests produce structured document packages in hours instead of weeks, with a full audit trail.",
  },
  {
    kicker: "New obligations",
    title: "Each new jurisdiction adds an automated output, not a manual process",
    body: "For fintechs entering new markets, the pipeline is built before the market launches. Each new obligation adds an automated output, not a manual process.",
  },
] as const;

const editorialLine = "border-[#E2E6F0]";

function pillarCellClass(index: number) {
  return cn(
    "flex flex-col gap-2 px-4 py-8 md:px-8 md:py-10",
    index < pillars.length - 1 && cn("border-b md:border-b-0", editorialLine),
    index > 0 && cn("md:border-l", editorialLine),
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
            <p className="font-alternates text-lg font-semibold text-foreground md:text-xl">
              {pillar.title}
            </p>
            <p className="text-sm font-light leading-relaxed text-muted-foreground">
              {pillar.body}
            </p>
          </div>
        ))}
      </div>

      <hr className={cn("border-t", editorialLine)} />
    </Section>
  );
};
