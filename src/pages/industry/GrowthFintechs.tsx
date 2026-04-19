import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { SiteButton } from "@/components/SiteButton";
import { cn } from "@/lib/utils";

const LINE = "border-[#E2E6F0]";

// ── DATA ──────────────────────────────────────────────────────────────────────

const heroStats = [
  { value: "< 10", label: "Typical compliance team headcount" },
  { value: "15h", label: "Saved per person per week" },
  { value: "~$2M", label: "In avoided fines and findings" },
];

const moments = [
  {
    num: "01",
    quote:
      "Every regulatory framework has its own reporting templates, deadlines, and data requirements. Reports are assembled manually from multiple data streams every cycle.",
    resolve: "Run it once. Run it automatically.",
  },
  {
    num: "02",
    quote:
      "Nothing changes except the dates and the numbers. Yet it is rebuilt from scratch every time.",
    resolve: "The pipeline runs on schedule. The team reviews the output, not the data.",
  },
  {
    num: "03",
    quote:
      "Adding a new state means a new money transmitter licence and a new manual reporting process. Each market entry multiplies the compliance overhead.",
    resolve: "Each new jurisdiction adds an automated output, not a manual process.",
  },
  {
    num: "04",
    quote:
      "Your most experienced compliance people are spending their hours assembling data instead of doing compliance work.",
    resolve: "The bottleneck is not expertise. It is manual work.",
  },
];

const workSteps = [
  {
    num: "01",
    title: "Compliance Diagnostic",
    meta: "1–2 weeks · Fixed price · Prioritised roadmap delivered",
  },
  {
    num: "02",
    title: "Pipeline Build",
    meta: "4–8 weeks · Fixed price · First obligation automated",
  },
  {
    num: "03",
    title: "Ongoing partnership",
    meta: "Each new obligation adds to the pipeline, not the manual process",
  },
];

const pageFaqs = [
  {
    question: "What data sources do you connect to?",
    answer:
      "We connect to whatever your data already lives in — core banking systems, payment processors, ledgers, spreadsheets, data warehouses, and internal APIs. The diagnostic identifies which sources are relevant to each obligation. Nothing is ripped out. We build the pipeline on top of your existing infrastructure.",
  },
  {
    question: "Do you work with firms that have no existing automation?",
    answer:
      "Yes. Most of our clients are starting from spreadsheets and manual processes. That is the problem we are built to solve. The Compliance Diagnostic maps your current state — however manual — and produces a prioritised plan for automating the most painful obligations first.",
  },
  {
    question: "Is data processed outside our environment?",
    answer:
      "We can build pipelines that keep all data within your environment — on-premise, private cloud, or air-gapped — if that is a requirement. Architecture and data residency are agreed before build begins. If you have specific constraints around data sovereignty or security policy, raise them early and we will design around them.",
  },
];

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function GrowthFintechs() {
  useEffect(() => {
    document.title = "AI Flow | Growth Fintechs";
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-background text-foreground page-shell">
      <Navigation />

      <main>
        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <Section padding="hero">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Growth fintechs
          </p>
          <h1 className="font-alternates text-3xl md:text-5xl font-bold leading-tight text-foreground mb-6 max-w-2xl">
            Compliance obligations scale.
            <br />
            The team does not.
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px] md:leading-[1.7] max-w-2xl">
            VC-backed fintechs in payments and lending, operating across
            multiple US states — managing overlapping obligations under FinCEN,
            CFPB, and state money transmitter licence frameworks.
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
            The same manual reporting infrastructure problem shows up at every
            growth-stage fintech — regardless of which states you operate in.
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
                  <p className="text-sm font-semibold text-foreground">
                    {m.resolve}
                  </p>
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
                Inaccurate reporting to FinCEN or state regulators triggers
                investigations, fines, and licence suspension.
              </strong>{" "}
              A compliance failure in one jurisdiction can delay expansion into
              others. Fix the infrastructure before the finding arrives.
            </p>
          </div>
        </Section>

        {/* ── HOW WE WORK ──────────────────────────────────────────────────── */}
        <Section padding="default">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 items-start">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                How we work
              </p>
              <h2 className="font-alternates text-3xl md:text-4xl font-bold text-foreground mb-4">
                Fixed scope. Fixed price. No surprises.
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px] md:leading-[1.7] mb-6">
                Each engagement is scoped before it starts. You know exactly
                what you are getting, when it arrives, and what it costs. The
                first step is a diagnostic — a 1–2 week exercise that maps your
                compliance workflows, data sources, and obligations. You leave
                with a prioritised roadmap whether or not you proceed.
              </p>
              <Link to="/services">
                <SiteButton variant="secondary" arrow="right">
                  See our engagements
                </SiteButton>
              </Link>
            </div>

            <div className={cn("border-t", LINE)}>
              {workSteps.map((s, i) => (
                <div
                  key={s.num}
                  className={cn(
                    "flex gap-5 py-6",
                    i > 0 && cn("border-t", LINE),
                  )}
                >
                  <span className="text-[11px] font-semibold tabular-nums tracking-[0.14em] text-foreground/25 mt-0.5 shrink-0 w-6">
                    {s.num}
                  </span>
                  <div>
                    <p className="font-alternates font-bold text-sm text-foreground mb-1">
                      {s.title}
                    </p>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {s.meta}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <Section padding="default">
          <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Common questions
          </p>
          <div>
            {pageFaqs.map((faq, i) => (
              <div key={i}>
                <hr className={cn("border-t", LINE)} />
                <div className="py-6">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start justify-between gap-6 text-left"
                  >
                    <span className="text-base font-medium text-foreground leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "shrink-0 w-5 h-5 flex items-center justify-center text-muted-foreground mt-0.5 transition-transform duration-200",
                        openFaq === i && "rotate-45",
                      )}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M8 3v10M3 8h10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                  {openFaq === i && (
                    <p className="mt-4 text-[15px] text-muted-foreground leading-[1.7]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
            <hr className={cn("border-t", LINE)} />
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
