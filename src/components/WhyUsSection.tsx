import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

const editorialLine = "border-[#E2E6F0]";

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

      <hr className={cn("border-t", editorialLine)} />

      <div className="grid grid-cols-1 md:grid-cols-3">
        {columns.map((col, index) => (
          <div
            key={col.title}
            className={cn(
              "flex flex-col gap-4 py-10 px-0",
              index > 0 && cn("border-t md:border-t-0 md:border-l md:pl-8 lg:pl-10", editorialLine),
              index < columns.length - 1 && "md:pr-8 lg:pr-10",
              col.highlight && "bg-[#EEF6FF] md:bg-transparent",
            )}
          >
            <h3
              className={cn(
                "font-alternates font-semibold text-lg md:text-xl leading-snug",
                col.highlight ? "text-foreground" : "text-foreground/60",
              )}
            >
              {col.title}
              {col.highlight && (
                <span className="ml-2 inline-block text-[10px] font-sans font-semibold uppercase tracking-[0.16em] text-[#2563EB] bg-[#DBEAFE] px-2 py-0.5 rounded align-middle">
                  us
                </span>
              )}
            </h3>

            <p className="font-sans font-light text-sm text-muted-foreground leading-relaxed flex-1">
              {col.body}
            </p>

            {col.differentiator && (
              <p className="font-sans font-semibold text-sm text-foreground leading-relaxed mt-auto pt-4 border-t border-[#E2E6F0]">
                {col.differentiator}
              </p>
            )}
          </div>
        ))}
      </div>

      <hr className={cn("border-t", editorialLine)} />
    </Section>
  );
};
