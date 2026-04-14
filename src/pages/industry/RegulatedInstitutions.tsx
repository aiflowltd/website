import { useEffect } from "react";
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
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Regulated institutions — EU &amp; UK
          </p>
          <h1 className="font-alternates text-3xl md:text-5xl font-bold leading-tight text-foreground mb-6 max-w-2xl">
            The compliance obligation stack grows.
            <br />
            The team does not.
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px] md:leading-[1.7] max-w-2xl">
            Banks, payment institutions, and regulated entities in the UK,
            Benelux, and Nordics — managing overlapping obligations across
            PSD2, MiFID II, DORA, GDPR, and national AML frameworks.
          </p>

          {/* Stats row */}
          <div className={cn("mt-10 pt-6 border-t max-w-2xl", LINE)}>
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
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-[15px] md:leading-[1.7] mb-8">
            We build the infrastructure between your operational data and your
            regulatory output. The system connects to your existing data sources
            across operations, finance, risk, and technology — unifies the data,
            and maps it against the specific requirements of each active
            obligation.
          </p>

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
