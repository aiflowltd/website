import { Section } from "@/components/Section";

const timing = [
  {
    title: "Models now read a 400 page rule and apply it",
    body: "80 to 100% on legal-reasoning benchmarks (LegalBench).",
  },
  {
    title: "Agents run the workflow end to end",
    body: "Task length AI can complete autonomously doubles every ~7 months.",
  },
  {
    title: "The risk of not modernizing beats the risk of change",
    body: "85% of financial institutions are deploying or planning to deploy AI.",
  },
];

export const WhyNowSection = () => {
  return (
    <Section id="why-now" scrollMargin>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-3">
        Why build with AI Flow now?
      </p>
      <p className="font-alternates font-semibold text-xl md:text-2xl text-foreground leading-snug max-w-2xl mb-10">
        90% right used to mean 100% wrong. Current AI progress changes this.
      </p>

      <hr className="border-t border-[#E2E6F0]" />

      <div className="grid grid-cols-1 gap-0 md:[grid-template-columns:repeat(3,minmax(0,1fr))] md:[grid-template-rows:auto_auto_1fr]">
        {timing.map((item, index) => (
          <div
            key={item.title}
            className={[
              index === 0 ? "border-b md:border-b-0" : "",
              index === 1
                ? "border-b md:border-b-0 md:border-l md:border-[#E2E6F0]"
                : "",
              index === 2 ? "md:border-l md:border-[#E2E6F0]" : "",
              "md:px-8 lg:px-10 flex flex-col gap-6 py-12 md:gap-0 md:py-0 md:[display:subgrid] md:[grid-row:span_3]",
            ].join(" ")}
          >
            <div className="flex items-center justify-between md:pt-12 md:pb-6">
              <span className="font-sans font-extralight text-xs text-foreground/30 tracking-widest tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-alternates font-bold text-xl text-foreground leading-snug md:pb-6">
              {item.title}
            </h3>
            <p className="font-sans font-light text-sm text-muted-foreground leading-relaxed md:pb-12">
              {item.body}
            </p>
          </div>
        ))}
      </div>

      <hr className="border-t border-[#E2E6F0]" />
    </Section>
  );
};
