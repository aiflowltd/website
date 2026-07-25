import { Section, type SectionPadding } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

const pillars = [
  {
    title: "Recurring regulatory reporting",
    body: "Done and checked, on schedule, ready to sign off and submit.",
  },
  {
    title: "Continuous control testing",
    body: "You sample a few controls by hand each cycle. We monitor all of them and capture the misses.",
  },
  {
    title: "Proof packs for the regulator",
    body: "They come back years later for the proof behind a number. We keep it with the report.",
  },
  {
    title: "Reporting the first line can actually file",
    body: "Fewer errors landing on compliance. The rules live in the tool, so the first line can't miss them.",
  },
] as const;

const editorialLine = "border-[#E2E6F0]";

function pillarCellClass(index: number) {
  const isTopRow = index < 2;
  const isRightCol = index % 2 === 1;
  return cn(
    "flex flex-col gap-2 px-4 py-8 md:px-8 md:py-10",
    isTopRow && cn("border-b", editorialLine),
    isRightCol && cn("md:border-l", editorialLine),
  );
}

export const WhatWeBuildSection = ({ padding = "default" }: { padding?: SectionPadding }) => {
  return (
    <Section id="what-we-build" scrollMargin padding={padding}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-6">
        What we build
      </p>

      <SectionHeader
        title="We automate assembly, reconciliation, validation and evidence collection your team does by hand."
        subtitle="The system connects to existing data sources, maps them to the regulatory templates for each jurisdiction, and runs automatically on schedule."
        titleClassName="text-3xl md:text-5xl"
        subtitleClassName="max-w-2xl text-base md:text-lg leading-relaxed"
        className="mb-10"
      />

      <hr className={cn("border-t", editorialLine)} />

      <div className="grid grid-cols-1 md:grid-cols-2">
        {pillars.map((pillar, index) => (
          <div key={pillar.title} className={pillarCellClass(index)}>
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

      <p className="text-center font-sans font-semibold text-sm md:text-base text-foreground pt-8">
        Built around the systems you already use.
      </p>
    </Section>
  );
};
