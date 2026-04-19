import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

type PipelineComponent = (typeof components)[number];

const components = [
  {
    id: "data-unification",
    name: "Data Unification",
    fullName: "Single validated data layer across all sources",
    metric: "4 sources connected",
    details: [
      "Reads from operations, finance, risk, and technology systems",
      "Validates and normalises data before it enters the pipeline",
      "No data leaves existing systems - the pipeline reads and transforms in place",
      "Full source lineage tracked for every output field",
    ],
    description:
      "The first step in the pipeline. No unified data layer, no automated compliance output. Once unified, every downstream component runs off the same source of truth.",
  },
  {
    id: "regulatory-mapping",
    name: "Regulatory Mapping",
    fullName: "Data mapped to regulatory templates per jurisdiction",
    metric: "3 jurisdictions active",
    details: [
      "Maps unified data fields to each regulatory template",
      "Handles jurisdiction-specific field requirements and formats",
      "Flags missing or out-of-range data before a run",
      "Updated when templates change - no manual rework",
    ],
    description:
      "Takes the unified data and maps it to the specific fields required by each regulatory template. One data layer, multiple output formats.",
  },
  {
    id: "audit-package-generation",
    name: "Audit Package Generation",
    fullName: "Submission-ready document packages on request",
    metric: "Last run: today, 09:14",
    details: [
      "Produces structured document packages for audit requests",
      "Includes supporting data with full provenance",
      "Generated in hours, not weeks",
      "Formatted for the receiving authority",
    ],
    description:
      "When an audit request arrives, the package is assembled automatically from the pipeline's data and audit trail. No manual document collection.",
  },
  {
    id: "recurring-report-automation",
    name: "Recurring Report Automation",
    fullName: "Scheduled runs for every active reporting obligation",
    metric: "Next: Mon 14 Apr · 5 reports",
    details: [
      "Runs on schedule for each active reporting obligation",
      "Produces validated reports ready for review and submission",
      "Alerts on data anomalies before submission",
      "Complete run log included with every report",
    ],
    description:
      "Each reporting cycle runs automatically. The compliance team reviews the output, not the data - because the data is already assembled, validated, and formatted.",
  },
  {
    id: "full-audit-trail",
    name: "Full Audit Trail",
    fullName: "Every run, every decision, every data point logged",
    metric: "1,247 entries logged",
    details: [
      "Logs every data read, transformation, and mapping decision",
      "Timestamps every pipeline run",
      "Included in every report and audit package",
      "Queryable by obligation, date range, or data source",
    ],
    description:
      "The audit trail is not an afterthought. Every step of the pipeline produces a log entry. When the auditor asks for the data behind the report, the answer is already there.",
  },
];

function PipelineBrowserPanel({ data }: { data: PipelineComponent }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
      <div className="flex items-center gap-3 border-b border-border bg-muted/50 px-4 py-3">
        <div className="flex shrink-0 items-center gap-1.5">
          <span
            className="h-3 w-3 rounded-full"
            style={{ background: "#FF5F57" }}
          />
          <span
            className="h-3 w-3 rounded-full"
            style={{ background: "#FEBC2E" }}
          />
          <span
            className="h-3 w-3 rounded-full"
            style={{ background: "#28C840" }}
          />
        </div>
        <div className="mx-2 flex flex-1 items-center gap-2 rounded-md border border-border/60 bg-background/50 px-3 py-1">
          <svg
            className="h-3 w-3 shrink-0 text-muted-foreground/40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span className="truncate font-mono text-xs tracking-tight text-muted-foreground/60">
            app.aiflow.ltd/pipeline/{data.id}
          </span>
        </div>
      </div>

      <div className="border-b border-border px-6 py-6">
        <div className="mb-1 flex items-start justify-between gap-4">
          <h3 className="font-alternates text-2xl font-bold text-foreground">
            {data.name}
          </h3>
          <span className="mt-1 shrink-0 rounded border border-border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Active
          </span>
        </div>
        <p className="text-sm leading-snug text-muted-foreground">
          {data.fullName}
        </p>
        <p className="mt-0.5 font-mono text-xs text-muted-foreground/50">
          {data.metric}
        </p>
      </div>

      <div className="border-b border-border px-6 py-5">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          What it does
        </p>
        <ul className="space-y-3">
          {data.details.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm leading-relaxed text-foreground"
            >
              <span className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="px-6 py-5">
        <p className="text-sm font-light leading-relaxed text-muted-foreground">
          {data.description}
        </p>
      </div>
    </div>
  );
}

const LG_QUERY = "(min-width: 1024px)";

export const PipelineComponentsSection = () => {
  const [isLg, setIsLg] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(0);
  const componentRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const mq = window.matchMedia(LG_QUERY);
    const sync = () => setIsLg(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!isLg) return;

    const check = () => {
      const triggerY = window.innerHeight * 0.15;
      const refs = componentRefs.current.filter(
        (el): el is HTMLElement => el != null,
      );
      for (let i = refs.length - 1; i >= 0; i--) {
        const rect = refs[i].getBoundingClientRect();
        if (rect.top <= triggerY) {
          setActiveIndex(i);
          return;
        }
      }
      setActiveIndex(0);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [isLg]);

  const desktopActive = components[activeIndex];

  const handleRowClick = (index: number) => {
    if (isLg) {
      setActiveIndex(index);
      return;
    }
    setMobileOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Section className="w-full">
      <SectionHeader
        title="The core components"
        subtitle="Data unification, regulatory mapping, audit package generation, recurring report automation, and a full audit trail - five components, one pipeline."
        titleClassName="mb-3"
        className="mb-12 lg:mb-16"
      />

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="space-y-0 lg:mb-72">
            {components.map((component, index) => {
              const isMobileOpen = !isLg && mobileOpenIndex === index;
              const listDimmed =
                isLg && index !== activeIndex
                  ? "opacity-40"
                  : !isLg &&
                      mobileOpenIndex !== null &&
                      mobileOpenIndex !== index
                    ? "opacity-50"
                    : "opacity-100";

              return (
                <div
                  key={component.id}
                  ref={(el) => {
                    componentRefs.current[index] = el;
                  }}
                  className="border-b border-border last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => handleRowClick(index)}
                    aria-expanded={
                      !isLg ? mobileOpenIndex === index : undefined
                    }
                    className={cn(
                      "group flex w-full items-start justify-between gap-4 py-6 text-left transition-opacity hover:opacity-100",
                      listDimmed,
                    )}
                  >
                    <div className="min-w-0 min-h-24 flex-1">
                      <h3 className="font-alternates mb-1 text-xl font-bold md:text-2xl">
                        {component.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {component.fullName}
                      </p>
                    </div>
                    <ChevronRight
                      className={cn(
                        "mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-foreground lg:rotate-0",
                        isMobileOpen && "rotate-90",
                      )}
                      aria-hidden
                    />
                  </button>

                  {!isLg && isMobileOpen ? (
                    <div className="pb-6 pt-2">
                      <PipelineBrowserPanel data={component} />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden lg:col-span-7 lg:block lg:self-start lg:sticky lg:top-24">
          {desktopActive ? <PipelineBrowserPanel data={desktopActive} /> : null}
        </div>
      </div>
    </Section>
  );
};
