import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteButton } from "@/components/SiteButton";
import { LineGridCta } from "@/components/LineGridCta";
import { TheProblemSection } from "@/components/TheProblemSection";
import { WhatWeBuildSection } from "@/components/WhatWeBuildSection";
import { PipelineComponentsSection } from "@/components/PipelineComponentsSection";
import { cn } from "@/lib/utils";

const editorialLine = "border-[#E2E6F0]";

const sources = [
  "Core banking",
  "Transaction systems",
  "CRM",
  "Email",
  "Teams",
  "Vendors",
  "Spreadsheets & documents",
];

const coreComponents = [
  "Data unification",
  "Regulatory mapping",
  "Validation & controls",
  "Report automation",
  "Audit trail",
];

const outputs = [
  "Recurring regulatory reports",
  "Continuous control testing",
  "Audit & evidence packs",
  "First-line reporting",
];

const aiNative = [
  {
    title: "Reads what your team reads",
    body: "Deal-team emails, confirmations, PDFs, spreadsheets. Core turns the unstructured inputs your team chases by hand into structured, checked data.",
  },
  {
    title: "Maps it to the regulation",
    body: "Fields are mapped to each regulatory template per jurisdiction. Missing or out-of-range data is flagged before a run, not after a submission.",
  },
  {
    title: "Catches what sampling misses",
    body: "Every control, every cycle. Anomalies surface before the report goes out - not three quarters later, when you have to correct it with the regulator.",
  },
  {
    title: "Explains every number",
    body: "Each output field carries its lineage back to source. When the regulator asks where a number came from, the answer is already there.",
  },
];

const deployment = [
  {
    title: "Runs in your environment",
    body: "On-premise, private cloud, or air-gapped. No data leaves your infrastructure unless you decide it should.",
  },
  {
    title: "Works on what you have",
    body: "No migration. No rip-and-replace. Core reads from your existing systems and writes to the formats your regulators expect.",
  },
  {
    title: "Built to security standards",
    body: "OWASP and industry-recognised practices throughout. NDA from the first conversation, as standard.",
  },
  {
    title: "Data residency respected",
    body: "Multi-jurisdiction deployments designed around where your data is allowed to live.",
  },
];

function DiagramColumn({
  label,
  items,
  dark = false,
}: {
  label: string;
  items: string[];
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-xl px-6 py-7",
        dark ? "bg-[#0E1015]" : "bg-foreground/[0.03]",
      )}
    >
      <p
        className={cn(
          "text-[11px] font-semibold uppercase tracking-[0.14em]",
          dark ? "text-success" : "text-muted-foreground",
        )}
      >
        {label}
      </p>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item}
            className={cn(
              "rounded-md border px-3 py-2 text-sm",
              dark
                ? "border-white/10 text-white"
                : "border-[#E2E6F0] bg-background text-foreground",
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DiagramArrow() {
  return (
    <div className="flex items-center justify-center text-muted-foreground/50" aria-hidden>
      <ArrowDown className="h-5 w-5 lg:hidden" />
      <ArrowRight className="hidden h-5 w-5 lg:block" />
    </div>
  );
}

const Platform = () => {
  useEffect(() => {
    document.title = "AI Flow Core | The AI-native compliance platform";
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground page-shell">
      <Navigation />

      <main>
        {/* Hero */}
        <Section padding="hero">
          <p className="text-sm font-light text-muted-foreground tracking-widest uppercase mb-6 font-sans">
            AI Flow Core
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold font-alternates mb-10 leading-[1.1] text-foreground">
            The AI-native compliance platform
            <br />
            <span className="font-extralight">for regulated finance.</span>
          </h1>
          <p className="max-w-2xl text-base md:text-lg font-light leading-relaxed text-muted-foreground mb-10">
            Financial institutions bought the compliance software. The reporting is
            still done by hand. AI Flow Core changes that. It works with the systems
            you already use, does the reporting your team does by hand today, and
            hands it back checked, on schedule, with the proof behind every number.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact#calendly">
              <SiteButton variant="primary" arrow="up-right">
                Book a discovery call
              </SiteButton>
            </Link>
            <Link to="/how-we-work">
              <SiteButton variant="secondary" arrow={false}>
                How we deploy it →
              </SiteButton>
            </Link>
          </div>
        </Section>

        {/* Architecture */}
        <Section padding="compact">
          <SectionHeader
            title="Your systems in. Regulator-ready output out."
            subtitle="Core sits between the systems you already run and the reports, controls and evidence your regulators expect."
            titleClassName="text-3xl md:text-4xl"
            subtitleClassName="max-w-2xl"
            className="mb-10"
          />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
            <DiagramColumn label="Your systems" items={sources} />
            <DiagramArrow />
            <DiagramColumn label="AI Flow Core" items={coreComponents} dark />
            <DiagramArrow />
            <DiagramColumn label="What you get" items={outputs} />
          </div>
        </Section>

        <TheProblemSection />

        <WhatWeBuildSection />

        <PipelineComponentsSection />

        {/* AI-native */}
        <Section padding="default">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-6">
            AI-native
          </p>
          <SectionHeader
            title="AI assembles. Rules decide. You sign off."
            subtitle="AI does the work your team does by hand today. The regulatory rules stay explicit and testable. Nothing reaches a regulator without a person's sign-off."
            titleClassName="text-3xl md:text-4xl"
            subtitleClassName="max-w-2xl"
            className="mb-10"
          />
          <hr className={cn("border-t", editorialLine)} />
          <div className="grid grid-cols-1 md:grid-cols-2">
            {aiNative.map((item, index) => (
              <div
                key={item.title}
                className={cn(
                  "flex flex-col gap-2 px-4 py-8 md:px-8 md:py-10",
                  index < 2 && cn("border-b", editorialLine),
                  index % 2 === 1 && cn("md:border-l", editorialLine),
                )}
              >
                <p className="font-alternates text-lg font-semibold text-foreground md:text-xl">
                  {item.title}
                </p>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <hr className={cn("border-t", editorialLine)} />
        </Section>

        {/* Deployment & security */}
        <Section padding="default">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-6">
            Deployment & security
          </p>
          <SectionHeader
            title="Built for regulated environments."
            titleClassName="text-3xl md:text-4xl"
            className="mb-10"
          />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 md:gap-4">
            {deployment.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-xl bg-foreground/[0.03] px-6 py-8"
              >
                <p className="font-alternates font-semibold text-base text-foreground">
                  {item.title}
                </p>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Bridge to How we work */}
        <Section padding="compact">
          <LineGridCta>
            <SectionHeader
              title="Every finance function is different. That's why Core comes with engineers."
              subtitle="Our forward deployed engineers integrate AI Flow Core end to end with your systems and adapt it to whatever is unique about how your company works."
              variant="centered"
              titleClassName="font-alternates text-2xl text-foreground md:text-3xl"
              subtitleClassName="mx-auto mb-8 max-w-xl text-muted-foreground"
              action={
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Link to="/contact#calendly">
                    <SiteButton variant="primary" arrow="up-right">
                      Book a discovery call
                    </SiteButton>
                  </Link>
                  <Link to="/how-we-work">
                    <SiteButton variant="secondary">See how we work</SiteButton>
                  </Link>
                </div>
              }
            />
          </LineGridCta>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default Platform;
