const pipelineComponents = [
  {
    name: "Data Unification",
    metric: "4 sources connected",
    tags: "Operations · Finance · Risk · Technology",
    description:
      "Connects data from across the organisation into a single validated layer. No manual exports, no data handoff between teams.",
  },
  {
    name: "Regulatory Mapping",
    metric: "3 jurisdictions active",
    tags: "PSD2 · MiFID II · DORA · AML",
    description:
      "Maps the unified data layer against the reporting templates required for each active jurisdiction and obligation.",
  },
  {
    name: "Audit Package Generation",
    metric: "Last run: today, 09:14",
    tags: "342 documents · submission-ready",
    description:
      "Produces structured, submission-ready document packages on request. Hours instead of weeks.",
  },
  {
    name: "Recurring Report Automation",
    metric: "Next: Mon 14 Apr",
    tags: "5 reports scheduled",
    description:
      "Runs on schedule for every recurring obligation. Produces validated reports ready for review and submission, with a full audit trail.",
  },
  {
    name: "Full Audit Trail",
    metric: "1,247 entries logged",
    tags: "All filings traceable",
    description:
      "Every data point, every mapping decision, every run — logged and traceable. Included in every audit package.",
  },
];

export const PipelineBrowserMock = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-border bg-muted/40 px-4 py-3">
        <div className="flex shrink-0 items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-foreground/10" />
          <span className="h-3 w-3 rounded-full bg-foreground/10" />
          <span className="h-3 w-3 rounded-full bg-foreground/10" />
        </div>
        <div className="mx-2 flex max-w-xs flex-1 items-center gap-2 rounded-md border border-border/60 bg-background/50 px-3 py-1">
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
          <span className="font-mono text-xs tracking-tight text-muted-foreground/60">
            app.aiflow.ltd/pipeline
          </span>
        </div>
      </div>

      {/* App header */}
      <div className="flex items-center justify-between border-b border-border/50 bg-background/20 px-6 py-4">
        <div>
          <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/50">
            Compliance Pipeline
          </p>
          <p className="text-sm font-semibold text-foreground">
            Pipeline Components
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium text-success">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          All systems active
        </div>
      </div>

      {/* Component rows */}
      <div className="divide-y divide-border/40">
        {pipelineComponents.map((component, index) => (
          <div
            key={index}
            className="flex items-start gap-4 px-6 py-4 transition-colors hover:bg-muted/10"
          >
            <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                <p className="text-sm font-semibold text-foreground">
                  {component.name}
                </p>
                <p className="font-mono text-[11px] tabular-nums text-muted-foreground/50">
                  {component.metric}
                </p>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {component.description}
              </p>
              <p className="mt-1 text-[11px] tracking-wide text-muted-foreground/40">
                {component.tags}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
