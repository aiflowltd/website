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

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 lg:gap-12 items-start">
        {/* Left: problems */}
        <div className="flex flex-col divide-y divide-[#E2E6F0]">
          {problems.map((problem, index) => (
            <div key={problem.title} className="py-8 first:pt-0 last:pb-0 flex gap-5">
              <span className="font-sans font-extralight text-xs text-foreground/25 tracking-widest tabular-nums shrink-0 pt-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-3 min-w-0">
                <h3 className="font-alternates font-semibold text-lg md:text-xl text-foreground leading-snug">
                  {problem.title}
                </h3>
                <p className="font-sans font-light text-sm text-muted-foreground leading-relaxed">
                  {problem.body}
                </p>
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/40">
                  {problem.source}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: stats dark card */}
        <div className="bg-[#0E1015] rounded-xl px-8 py-10 flex flex-col divide-y divide-white/10">
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col gap-2 py-8 first:pt-0 last:pb-0">
              <p
                className="font-sans font-extralight tracking-[-0.03em] leading-none"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", color: "#EA2849" }}
              >
                {stat.value}
              </p>
              {stat.sublabel && (
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35">
                  {stat.sublabel}
                </p>
              )}
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
