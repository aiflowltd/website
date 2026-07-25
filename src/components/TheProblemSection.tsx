import { Section } from "@/components/Section";

const problems = [
  {
    title: "The systems don't talk",
    body: "The data sits across Salesforce, core systems, transaction platforms, spreadsheets, and different teams. None of them speak to each other.",
  },
  {
    title: "You chase every number by hand",
    body: "You email each deal team to confirm what closed, then wait on the replies. That chain becomes your only record.",
  },
  {
    title: "When someone leaves, the knowledge is gone",
    body: "The reasoning lived in their head and their emails. Copilot and ChatGPT can't give it back.",
  },
];

const quotes = [
  "“I have to go through this one by one and ask the deal teams by email, did this thing close?”",
  "“Regulators can come back several years later and ask for risk and compliance artifacts.”",
  "“We had to go back to the regulator and correct our reporting from three quarters ago.”",
];

export const TheProblemSection = () => {
  return (
    <Section id="the-problem" scrollMargin>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-10">
        The problem
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-12 items-start">
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
              </div>
            </div>
          ))}
        </div>

        {/* Right: quotes dark card */}
        <div className="bg-[#0E1015] rounded-xl px-8 py-10 flex flex-col divide-y divide-white/10">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40 pb-6">
            What compliance teams tell us
          </p>
          {quotes.map((quote) => (
            <p
              key={quote}
              className="font-sans text-sm text-white/70 leading-relaxed py-6 first:pt-0 last:pb-0"
            >
              {quote}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
};
