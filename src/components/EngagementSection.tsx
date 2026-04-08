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
    body: "Audits arrive without warning and trigger days or weeks of manual document preparation. We build the pipeline so the next time an examiner asks, documentation is ready — not assembled under pressure, with a full audit trail.",
  },
  {
    situation: "Our compliance team rebuilds the same reports every quarter.",
    solution: "Run it once. Run it automatically.",
    body: "Nothing changes except the dates and the numbers. Yet it is rebuilt from scratch each time. We build the pipeline so reports run on schedule, validated, submission-ready. The compliance team stops assembling data and starts doing compliance.",
  },
  {
    situation:
      "We are expanding into new markets and compliance is the bottleneck.",
    solution: "Each new jurisdiction adds a module, not a manual process.",
    body: "Every week the compliance team spends building reporting infrastructure manually in a new market is a week the company is not generating revenue there. Compliance is a gate to growth. We build the pipeline before the market launches.",
  },
  {
    situation: "We know there is a data handoff problem. We do not know where it is.",
    solution: "Start with the Diagnostic.",
    body: "A fixed-price, fixed-scope 1–2 week engagement. We map your compliance workflows, data sources, and regulatory obligations across all active jurisdictions. Deliverable: a prioritised automation roadmap.",
  },
];

const engagementColPad = ["md:pr-10", "md:pl-10", "md:pr-10", "md:pl-10"];
const engagementCellBorder = [
  "border-b border-[#E2E6F0] md:border-b md:border-[#E2E6F0]",
  "border-b border-[#E2E6F0] md:border-b md:border-[#E2E6F0] md:border-l md:border-[#E2E6F0]",
  "border-b border-[#E2E6F0] md:border-b-0",
  "md:border-b-0 md:border-l md:border-[#E2E6F0]",
];

export const EngagementSection = () => {
  return (
    <Section>
      <SectionHeader
        title="Recognise any of these?"
        subtitle="The data handoff problem shows up differently depending on where your team is. The fix is the same."
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
          "md:grid-cols-2",
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
              "flex flex-col gap-5 py-10",
              // Fixed desktop tracks keep the solution divider aligned across all cards.
              "md:grid md:min-h-0 md:gap-0 md:py-10 md:[grid-template-rows:120px_88px_minmax(0,1fr)]",
            )}
          >
            <div className="absolute w-7 h-7 right-4 top-4 z-10 flex items-center justify-center rounded-full border border-[#E2E6F0]">
              <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
            </div>

            <div className="relative z-10 pr-10 md:w-full">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
                Situation
              </p>
              <p className="font-sans text-base font-medium leading-snug text-foreground">
                &ldquo;{model.situation}&rdquo;
              </p>
            </div>

            <div className="relative z-10 md:w-full md:min-h-0">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
                Solution
              </p>
              <h3 className="font-sans font-medium text-lg leading-tight text-foreground">
                {model.solution}
              </h3>
              <hr className="mt-4 mb-0 border-0 border-t border-[#E2E6F0]" />
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
