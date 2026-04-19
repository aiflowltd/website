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
    body: "Audits arrive without warning and trigger days or weeks of manual document preparation. We build the pipeline so the next time an examiner asks, documentation is ready - not assembled under pressure, with a full audit trail.",
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
    situation: "Data is scattered across departments with no unified source mapping it to regulatory obligations.",
    solution: "One pipeline. Every source connected to every obligation.",
    body: "The data exists. It is sitting in operations, finance, risk, and technology. Nothing connects it to the regulatory templates in time. We build that connection.",
  },
  {
    situation: "Key people are spending their time on data collection and document assembly instead of compliance analysis or risk assessment.",
    solution: "The bottleneck is not expertise. It is manual work.",
    body: "The compliance team is not short of expertise. It is short of hours. The work before the work - pulling data, transforming formats, chasing confirmations - is where the time goes. Automate the assembly. Free the expertise.",
  },
  {
    situation: "DORA penalties for inadequate incident reporting start at €1M. Regulatory findings lead to remediation programs, negative media coverage, and client loss.",
    solution: "Fix the infrastructure before the finding arrives.",
    body: "The cost of a regulatory finding is not just the fine. It is the remediation programme, the media coverage, the client conversations that follow. The infrastructure needs to be in place before the examiner arrives - not assembled under it.",
  },
];

function getCellClasses(index: number, total: number) {
  const isRight = index % 2 === 1;
  const isLastMobile = index === total - 1;
  const lastRowStart = total % 2 === 0 ? total - 2 : total - 1;
  const isLastDesktopRow = index >= lastRowStart;

  return cn(
    isRight ? "md:pl-10" : "md:pr-10",
    !isLastMobile && "border-b border-[#E2E6F0]",
    isLastDesktopRow && "md:border-b-0",
    isRight && "md:border-l md:border-[#E2E6F0]",
  );
}

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
              "group relative border-[#E2E6F0]",
              getCellClasses(index, engagementModels.length),
              "flex flex-col gap-6 py-12",
            )}
          >
            {/* Step number */}
            <span className="font-sans text-[11px] font-semibold tabular-nums tracking-[0.14em] text-foreground/25">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Quote - visual hero */}
            <p className="font-sans text-2xl md:text-[1.65rem] font-light leading-snug text-foreground flex-1">
              &ldquo;{model.situation}&rdquo;
            </p>

            {/* Solution line */}
            <div className="flex items-center gap-2 text-sm font-medium text-foreground/50 group-hover:text-foreground transition-colors duration-200">
              {model.solution}
              <ArrowUpRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </div>
          </Link>
        ))}
      </div>

      <hr className="border-t border-[#E2E6F0]" />
    </Section>
  );
};
