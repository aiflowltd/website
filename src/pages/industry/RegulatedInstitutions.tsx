import { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

const LINE = "border-[#E2E6F0]";

// ── DATA ──────────────────────────────────────────────────────────────────────

const heroStats = [
  { value: "< 10", label: "Typical compliance team headcount" },
  { value: "15h", label: "Saved per person per week" },
  { value: "€1M+", label: "DORA penalty floor per finding" },
];

const purpleTags = ["PSD2", "MiFID II", "DORA", "GDPR", "AML"];
const neutralTags = ["UK", "Benelux", "Nordics"];

const moments = [
  {
    num: "01",
    quote:
      "Audits arrive without warning and trigger days or weeks of manual document preparation.",
    resolve: "Audit readiness becomes the default, not the emergency.",
  },
  {
    num: "02",
    quote:
      "Every filing is rebuilt from scratch — pulling data from multiple sources, transforming it into required formats, submitting under deadline.",
    resolve: "Run it once. Run it automatically.",
  },
  {
    num: "03",
    quote:
      "Your data is scattered across departments with no unified source mapping it to your regulatory obligations.",
    resolve: "One pipeline connects every source to every obligation.",
  },
  {
    num: "04",
    quote:
      "Your most experienced people are spending their time on data collection and document assembly instead of compliance analysis.",
    resolve: "The bottleneck is not expertise. It is manual work.",
  },
];

const solutionCards = [
  {
    num: "01",
    title: "Data unification",
    desc: "Connects to existing sources across operations, finance, risk, and technology. No ripping and replacing.",
    fullWidth: false,
  },
  {
    num: "02",
    title: "Regulatory mapping",
    desc: "Maps unified data against PSD2, MiFID II, DORA, GDPR, and AML templates. Updated as obligations evolve.",
    fullWidth: false,
  },
  {
    num: "03",
    title: "Audit package generation",
    desc: "Structured document packages produced in hours, not weeks. Every data point traced to its source.",
    fullWidth: false,
  },
  {
    num: "04",
    title: "Recurring report automation",
    desc: "Validated, submission-ready reports on schedule. No manual rebuild each cycle.",
    fullWidth: false,
  },
  {
    num: "05",
    title: "Full audit trail",
    desc: "Every data point, every mapping decision, every run — logged. When a supervisor asks, the answer is ready.",
    fullWidth: true,
  },
];

const engagementSteps = [
  {
    step: "Step 1",
    title: "Compliance Diagnostic",
    meta: "Fixed scope · Fixed price · 1–2 weeks",
  },
  {
    step: "Step 2",
    title: "Pipeline Build",
    meta: "Fixed scope · Fixed price · 4–8 weeks",
  },
  {
    step: "Step 3",
    title: "Quarterly Retainer",
    meta: "Ongoing · Per quarter · By coverage",
  },
  {
    step: "Step 4",
    title: "Performance Layer",
    meta: "Pain-share / gain-share on compliance metrics",
  },
];

// ── PIPELINE SVG ──────────────────────────────────────────────────────────────

function PipelineDiagram() {
  const srcFill = "#F1EFE8";
  const srcStroke = "#B4B2A9";
  const srcText = "#444441";
  const ctrFill = "#EEEDFE";
  const ctrStroke = "#534AB7";
  const ctrText = "#26215C";
  const outFill = "#E1F5EE";
  const outStroke = "#0F6E56";
  const outText = "#085041";
  const arrowLeft = "#B4B2A9";
  const arrowRight = "#534AB7";

  const bw = 100;
  const bh = 32;
  const lx = 8;

  const srcBoxes = [
    { label: "Operations", y: 16 },
    { label: "Finance", y: 62 },
    { label: "Risk", y: 108 },
    { label: "Technology", y: 154 },
  ];

  // Vertical center of the source group
  const srcCenterY =
    (srcBoxes[0].y + bh / 2 + srcBoxes[srcBoxes.length - 1].y + bh / 2) / 2;

  const cw = 128;
  const ch = 44;
  const cx = 185;
  const cy = srcCenterY - ch / 2;
  const ctrRight = cx + cw;

  const ow = 112;
  const oh = 32;
  const ox = 378;
  const outSpacing = 46;

  const outBoxes = [
    {
      label: "DORA report",
      sub: "(validated)",
      y: srcCenterY - outSpacing - oh / 2,
    },
    { label: "MiFID filing", sub: "(automated)", y: srcCenterY - oh / 2 },
    {
      label: "Audit package",
      sub: "(in hours)",
      y: srcCenterY + outSpacing - oh / 2,
    },
  ];

  const svgH = 210;

  return (
    <svg
      viewBox={`0 0 500 ${svgH}`}
      className="w-full h-auto"
      aria-hidden="true"
    >
      <defs>
        <marker
          id="ri-arrowL"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L6,3 z" fill={arrowLeft} />
        </marker>
        <marker
          id="ri-arrowR"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L6,3 z" fill={arrowRight} />
        </marker>
      </defs>

      {/* Left arrows: source boxes → center box */}
      {srcBoxes.map((box) => {
        const fromY = box.y + bh / 2;
        return (
          <path
            key={`la-${box.label}`}
            d={`M ${lx + bw},${fromY} C ${lx + bw + 38},${fromY} ${cx - 38},${srcCenterY} ${cx},${srcCenterY}`}
            fill="none"
            stroke={arrowLeft}
            strokeWidth="1.5"
            markerEnd="url(#ri-arrowL)"
          />
        );
      })}

      {/* Right arrows: center box → output boxes */}
      {outBoxes.map((box) => {
        const toY = box.y + oh / 2;
        return (
          <path
            key={`ra-${box.label}`}
            d={`M ${ctrRight},${srcCenterY} C ${ctrRight + 35},${srcCenterY} ${ox - 35},${toY} ${ox},${toY}`}
            fill="none"
            stroke={arrowRight}
            strokeWidth="1.5"
            markerEnd="url(#ri-arrowR)"
          />
        );
      })}

      {/* Source boxes */}
      {srcBoxes.map((box) => (
        <g key={box.label}>
          <rect
            x={lx}
            y={box.y}
            width={bw}
            height={bh}
            rx="4"
            fill={srcFill}
            stroke={srcStroke}
            strokeWidth="1"
          />
          <text
            x={lx + bw / 2}
            y={box.y + bh / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="10"
            fontFamily="Montserrat, sans-serif"
            fill={srcText}
          >
            {box.label}
          </text>
        </g>
      ))}

      {/* Center box */}
      <rect
        x={cx}
        y={cy}
        width={cw}
        height={ch}
        rx="6"
        fill={ctrFill}
        stroke={ctrStroke}
        strokeWidth="1.5"
      />
      <text
        x={cx + cw / 2}
        y={cy + ch / 2 - 7}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="11"
        fontWeight="600"
        fontFamily="Montserrat, sans-serif"
        fill={ctrText}
      >
        AI Flow
      </text>
      <text
        x={cx + cw / 2}
        y={cy + ch / 2 + 7}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="9"
        fontFamily="Montserrat, sans-serif"
        fill={ctrText}
        opacity="0.75"
      >
        pipeline
      </text>

      {/* Output boxes */}
      {outBoxes.map((box) => (
        <g key={box.label}>
          <rect
            x={ox}
            y={box.y}
            width={ow}
            height={oh}
            rx="4"
            fill={outFill}
            stroke={outStroke}
            strokeWidth="1"
          />
          <text
            x={ox + ow / 2}
            y={box.y + oh / 2 - 6}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="9.5"
            fontFamily="Montserrat, sans-serif"
            fill={outText}
          >
            {box.label}
          </text>
          <text
            x={ox + ow / 2}
            y={box.y + oh / 2 + 7}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="8"
            fontFamily="Montserrat, sans-serif"
            fill={outText}
            opacity="0.75"
          >
            {box.sub}
          </text>
        </g>
      ))}

      {/* Caption */}
      <text
        x={250}
        y={svgH - 6}
        textAnchor="middle"
        fontSize="9"
        fontFamily="Montserrat, sans-serif"
        fill={srcText}
        opacity="0.55"
      >
        Nothing lost between teams.
      </text>
    </svg>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function RegulatedInstitutions() {
  useEffect(() => {
    document.title = "AI Flow | Regulated Institutions";
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground page-shell">
      <Navigation />

      <main>
        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <Section padding="hero">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 items-start">
            {/* Left column */}
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Regulated institutions — EU &amp; UK
              </p>
              <h1 className="font-alternates text-3xl md:text-5xl font-bold leading-tight text-foreground mb-6">
                The compliance obligation stack grows.
                <br />
                The team does not.
              </h1>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px] md:leading-[1.7] max-w-lg">
                Banks, payment institutions, and regulated entities in the UK,
                Benelux, and Nordics — managing overlapping obligations across
                PSD2, MiFID II, DORA, GDPR, and national AML frameworks.
              </p>

              {/* Stats row */}
              <div className={cn("mt-8 pt-6 border-t", LINE)}>
                <div className="grid grid-cols-3">
                  {heroStats.map((stat, i) => (
                    <div
                      key={stat.label}
                      className={cn(
                        "flex flex-col gap-1",
                        i > 0 && cn("border-l pl-4 md:pl-5", LINE),
                      )}
                    >
                      <p className="font-alternates text-xl md:text-2xl font-bold text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-[11px] leading-snug text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-5">
              {/* Regulatory tags */}
              <div className="flex flex-wrap gap-2">
                {purpleTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background: "#EEEDFE",
                      border: "1px solid #534AB7",
                      color: "#26215C",
                    }}
                  >
                    {tag}
                  </span>
                ))}
                {neutralTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-muted border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Pipeline diagram */}
              <div className="rounded-xl border border-border bg-card p-4 md:p-5">
                <PipelineDiagram />
              </div>
            </div>
          </div>
        </Section>

        {/* ── PROBLEM ───────────────────────────────────────────────────────── */}
        <Section padding="default">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Does this sound familiar?
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-[15px] md:leading-[1.7] mb-12">
            The compliance obligation stack in EU and UK institutions produces
            the same infrastructure problem — regardless of the regulation.
          </p>

          <hr className={cn("border-t", LINE)} />

          <div className="grid grid-cols-1 md:grid-cols-2">
            {moments.map((m, index) => {
              const isRight = index % 2 === 1;
              const isLast = index === moments.length - 1;
              const lastRowStart =
                moments.length % 2 === 0
                  ? moments.length - 2
                  : moments.length - 1;
              const isLastRow = index >= lastRowStart;
              return (
                <div
                  key={m.num}
                  className={cn(
                    "flex flex-col gap-4 py-10",
                    isRight ? "md:pl-10" : "md:pr-10",
                    !isLast && cn("border-b", LINE),
                    isLastRow && "md:border-b-0",
                    isRight && cn("md:border-l", LINE),
                  )}
                >
                  <p className="text-[11px] font-semibold tabular-nums tracking-[0.14em] text-foreground/25">
                    {m.num}
                  </p>
                  <p className="font-sans text-xl font-light italic leading-snug text-foreground md:text-2xl flex-1">
                    &ldquo;{m.quote}&rdquo;
                  </p>
                  <div
                    className="pl-3"
                    style={{ borderLeft: "2px solid #534AB7" }}
                  >
                    <p className="text-sm font-semibold text-foreground">
                      {m.resolve}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <hr className={cn("border-t", LINE)} />

          {/* Fine callout */}
          <div
            className="mt-8 p-5 rounded-sm"
            style={{
              background: "#FCEBEB",
              borderLeft: "3px solid #E24B4A",
            }}
          >
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#791F1F" }}
            >
              <strong style={{ color: "#501313" }}>
                DORA penalties for inadequate incident reporting start at €1M.
              </strong>{" "}
              Regulatory findings lead to remediation programmes, negative media
              coverage, and client loss. Fix the infrastructure before the
              finding arrives.
            </p>
          </div>
        </Section>

        {/* ── SOLUTION ──────────────────────────────────────────────────────── */}
        <Section padding="default">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            How we help
          </p>
          <h2 className="font-alternates text-3xl md:text-4xl font-bold text-foreground mb-4">
            One pipeline. Every source. Every obligation.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-[15px] md:leading-[1.7] mb-10">
            We build the infrastructure between your operational data and your
            regulatory output. The system connects to your existing data sources
            across operations, finance, risk, and technology — unifies the data,
            and maps it against the specific requirements of each active
            obligation.
          </p>

          {/* Before / After strip */}
          <div className="rounded-lg bg-muted border border-border p-5 mb-10">
            <div className="flex flex-col gap-4">
              {/* Before */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground w-24 shrink-0">
                  Before AI Flow
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-background border border-border text-muted-foreground">
                  Ops data
                </span>
                <span className="text-muted-foreground/60 text-sm font-medium">
                  +
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-background border border-border text-muted-foreground">
                  Finance data
                </span>
                <span className="text-muted-foreground/60 text-sm font-medium">
                  +
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-background border border-border text-muted-foreground">
                  Risk data
                </span>
                <span className="text-muted-foreground/60 text-sm font-medium">
                  →
                </span>
                <span
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: "#FCEBEB",
                    border: "1px solid #F09595",
                    color: "#791F1F",
                  }}
                >
                  Manual assembly · weeks · errors
                </span>
              </div>

              <hr className={cn("border-t", LINE)} />

              {/* After */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground w-24 shrink-0">
                  After AI Flow
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-background border border-border text-muted-foreground">
                  All sources
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: "#534AB7" }}
                >
                  →
                </span>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{
                    background: "#EEEDFE",
                    border: "1px solid #534AB7",
                    color: "#26215C",
                  }}
                >
                  AI Flow pipeline
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: "#534AB7" }}
                >
                  →
                </span>
                <span
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: "#E1F5EE",
                    border: "1px solid #0F6E56",
                    color: "#085041",
                  }}
                >
                  Validated output · hours · audit trail
                </span>
              </div>
            </div>
          </div>

          {/* Component cards: 2-col, last card full-width */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {solutionCards.map((card) => (
              <div
                key={card.num}
                className={cn(
                  "rounded-lg border border-border bg-card p-6",
                  card.fullWidth && "md:col-span-2",
                )}
              >
                <p className="text-[11px] font-semibold tabular-nums tracking-[0.14em] text-foreground/25 mb-2">
                  {card.num}
                </p>
                <p className="font-alternates font-bold text-base text-foreground mb-2">
                  {card.title}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── ENGAGEMENT ────────────────────────────────────────────────────── */}
        <Section padding="default">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            How we engage
          </p>
          <h2 className="font-alternates text-3xl md:text-4xl font-bold text-foreground mb-4">
            We price deliverables, not hours.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-[15px] md:leading-[1.7] mb-10">
            Compliance leaders cannot afford vendor risk on critical
            infrastructure. Each step builds evidence and trust before the next
            commitment.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-stretch gap-3 sm:gap-0">
            {engagementSteps.map((s, i) => (
              <Fragment key={s.step}>
                <div className="sm:flex-1 rounded-lg border border-border bg-card p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground mb-2">
                    {s.step}
                  </p>
                  <p className="font-alternates font-bold text-base text-foreground mb-1">
                    {s.title}
                  </p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {s.meta}
                  </p>
                </div>
                {i < engagementSteps.length - 1 && (
                  <div className="hidden sm:flex items-center justify-center w-7 shrink-0 text-muted-foreground/30 text-base select-none">
                    →
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </Section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <Section padding="default">
          <div className="bg-[#0E1015] rounded-xl px-8 py-10 md:px-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <p className="font-alternates text-2xl md:text-3xl font-bold text-white mb-3">
                Let's start with your picture.
              </p>
              <p className="text-sm md:text-[15px] leading-relaxed text-white/60">
                In 1–2 weeks we map your workflows, data sources, and regulatory
                obligations — and give you a prioritised roadmap. Fixed price.
                No commitment beyond that unless it makes sense.
              </p>
            </div>
            <div className="shrink-0">
              <Link to="/contact#calendly">
                <button
                  className="rounded-full text-sm font-medium bg-background text-foreground transition-opacity hover:opacity-80 whitespace-nowrap"
                  style={{ padding: "12px 24px" }}
                >
                  Book a diagnostic call
                </button>
              </Link>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
