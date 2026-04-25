import { Section } from "@/components/Section";

const problems = [
  {
    title: "Every cycle starts from scratch",
    body: "Same data, same templates, same deadlines - rebuilt manually every reporting period. The cost of getting it wrong is rising fast: global AML fines totalled $1.23 billion in H1 2025 alone, a 417% increase on the same period in 2024.",
    source: "Comply Advantage",
  },
  {
    title: "Audits arrive without warning",
    body: "Preparing a document package takes days or weeks. The team stops everything else. Moreover, starting Jan 2026, the EBA can conduct on-site inspections, demand your full documentation on the spot, and fine you up to €10M - and they already began.",
    source: "European Banking Authority",
  },
  {
    title: "Each new market adds a manual process",
    body: "Expansion should be automated. Instead it creates new compliance bottlenecks. Executives now spend 42% of their working time on compliance - up from 24% in 2016. For every new market you enter, that number grows.",
    source: "BPI",
  },
];

const stats = [
  {
    value: "$1.23 billion",
    label: "AML fines in H1 2025",
  },
  {
    value: "up to 10M€",
    sublabel: "or 2% of global turnover",
    label: "DORA fine for non-compliance",
  },
  {
    value: "42%",
    label: "of an executive's time is spent on compliance",
  },
];

export const TheProblemSection = () => {
  return (
    <Section id="the-problem" scrollMargin>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-10">
        The problem
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16">
        {/* Left: problems */}
        <div className="flex flex-col divide-y divide-[#E2E6F0]">
          {problems.map((problem) => (
            <div key={problem.title} className="py-8 first:pt-0 last:pb-0 flex flex-col gap-3">
              <h3 className="font-alternates font-semibold text-lg md:text-xl text-foreground leading-snug">
                {problem.title}
              </h3>
              <p className="font-sans font-light text-sm text-muted-foreground leading-relaxed">
                {problem.body}
              </p>
              <p className="font-sans text-[11px] text-muted-foreground/50 font-medium">
                {problem.source}
              </p>
            </div>
          ))}
        </div>

        {/* Right: stats */}
        <div className="flex flex-row lg:flex-col gap-0 divide-x lg:divide-x-0 lg:divide-y divide-[#E2E6F0] lg:w-56">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col gap-1 px-6 py-0 lg:px-0 lg:py-8 first:pl-0 lg:first:pt-0 last:pr-0 lg:last:pb-0 flex-1 lg:flex-none"
            >
              <p
                className="font-sans font-extralight tracking-[-0.03em] leading-none"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#EA2849" }}
              >
                {stat.value}
              </p>
              {stat.sublabel && (
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/40">
                  {stat.sublabel}
                </p>
              )}
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
