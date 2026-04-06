import { Link } from "react-router-dom";
import { SiteButton } from "@/components/SiteButton";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const engagementModels = [
  {
    situation: "We have an audit coming up and we are not ready.",
    solution: "Audit-ready in hours, not weeks.",
    body: "We map your existing data sources to your regulatory obligations and build an automated audit package pipeline. The next time an examiner asks for documentation, it is ready — not assembled under pressure.",
  },
  {
    situation: "Our compliance team rebuilds the same reports every quarter.",
    solution: "Run it once. Run it automatically.",
    body: "We build the pipeline between your operational data and your regulatory output. Reports run on schedule, validated, submission-ready. Your team reviews — it does not assemble.",
  },
  {
    situation:
      "We are expanding into new markets and compliance is the bottleneck.",
    solution: "Each new jurisdiction adds a module, not a manual process.",
    body: "We build your compliance infrastructure so that each new state or regulatory framework adds an automated output on top of the existing pipeline. Expansion does not restart the manual cycle.",
  },
  {
    situation: "We know we need to fix this. We do not know where to start.",
    solution: "Start with the Diagnostic.",
    body: "A fixed-price, fixed-scope 1–2 week engagement. We map your workflows, data sources, and obligations. You leave with a prioritised roadmap — whether you proceed with us or not.",
  },
];

const engagementColPad = ["md:pr-10", "md:pl-10", "md:pr-10", "md:pl-10"];
const engagementCellBorder = [
  "border-b border-[#E2E6F0] md:border-b md:border-[#E2E6F0]",
  "border-b border-[#E2E6F0] md:border-b md:border-[#E2E6F0] md:border-l md:border-[#E2E6F0]",
  "border-b border-[#E2E6F0] md:border-b-0",
  "md:border-b-0 md:border-l md:border-[#E2E6F0]",
];

const mdGridPlacement = [
  "md:col-start-1 md:row-start-1 md:row-span-3",
  "md:col-start-2 md:row-start-1 md:row-span-3",
  "md:col-start-1 md:row-start-4 md:row-span-3",
  "md:col-start-2 md:row-start-4 md:row-span-3",
] as const;

export const EngagementSection = () => {
  return (
    <Section>
      <SectionHeader
        title="Where does this apply to you?"
        subtitle="The compliance gap shows up differently depending on where your team is. The fix is the same."
        action={
          <Link to="/contact">
            <SiteButton
              variant="primary"
              arrow="up-right"
              className="whitespace-nowrap"
            >
              Contact us
            </SiteButton>
          </Link>
        }
        titleClassName="text-3xl md:text-4xl"
        subtitleClassName="max-w-xl"
        className="mb-12"
      />

      <hr className="border-t border-[#E2E6F0]" />

      <div
        className={cn(
          "grid grid-cols-1 gap-0",
          "md:grid-cols-2 md:[grid-template-rows:repeat(2,auto_auto_minmax(0,1fr))]",
        )}
      >
        {engagementModels.map((model, index) => (
          <Link
            key={model.solution}
            to="/contact"
            className={cn(
              "relative border-[#E2E6F0]",
              engagementCellBorder[index],
              engagementColPad[index],
              "flex flex-col gap-3 py-8",
              "md:grid md:min-h-0 md:gap-0 md:py-8 md:[grid-template-rows:subgrid]",
              mdGridPlacement[index],
            )}
          >
            <div className="absolute w-7 h-7 right-4 top-4 z-10 flex items-center justify-center rounded-full border border-[#E2E6F0]">
              <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
            </div>

            <div className="relative z-10 pr-10 md:self-start md:w-full">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
                Situation
              </p>
              <p className="font-sans text-base font-medium leading-snug text-foreground">
                &ldquo;{model.situation}&rdquo;
              </p>
            </div>

            <div className="relative z-10 md:self-stretch md:w-full md:min-h-0">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
                Solution
              </p>
              <h3 className="font-sans font-medium text-lg leading-tight text-foreground">
                {model.solution}
              </h3>
              <hr className="border-0 border-t border-[#E2E6F0] mt-3 mb-0" />
            </div>

            <p className="relative z-10 font-sans font-light text-sm leading-[1.5] text-muted-foreground md:min-h-0">
              {model.body}
            </p>
          </Link>
        ))}
      </div>

      <hr className="border-t border-[#E2E6F0]" />
    </Section>
  );
};
