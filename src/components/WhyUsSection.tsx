import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

const columns = [
  {
    title: "RegTech Platforms",
    body: "Generic coverage for common filings. They assume your data is clean and mapped. They work with pre-defined data sources that most often don't satisfy your needs.",
    differentiator: "We're not a SaaS, we don't ask you to migrate data. We work with existing systems.",
    highlight: false,
  },
  {
    title: "Dev Agencies",
    body: "They ship what you spec. They cannot tell you whether the output satisfies a DORA incident report or a MiFID II transaction filing.",
    differentiator: "We are not another dev shop that just places engineers, we think the solution end-to-end.",
    highlight: false,
  },
  {
    title: "AI Flow",
    body: "We build the compliance pipeline between your operational data and its regulatory output. The system connects to existing data sources, maps them to the regulatory templates for each jurisdiction, and runs automatically on schedule.",
    differentiator: null,
    highlight: true,
  },
] as const;

export const WhyUsSection = () => {
  return (
    <Section id="why-us" scrollMargin>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-10">
        Why us
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {columns.map((col) => (
          <div
            key={col.title}
            className={cn(
              "flex flex-col gap-5 rounded-xl px-8 py-10",
              col.highlight
                ? "bg-[#0E1015]"
                : "bg-foreground/[0.03]",
            )}
          >
            <h3
              className={cn(
                "font-alternates font-semibold text-lg md:text-xl leading-snug",
                col.highlight ? "text-white" : "text-foreground/50",
              )}
            >
              {col.title}
            </h3>

            <p
              className={cn(
                "font-sans font-light text-sm leading-relaxed flex-1",
                col.highlight ? "text-white/60" : "text-muted-foreground",
              )}
            >
              {col.body}
            </p>

            {col.differentiator && (
              <p className="font-sans font-semibold text-sm text-foreground leading-relaxed pt-4 border-t border-foreground/10">
                {col.differentiator}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};
