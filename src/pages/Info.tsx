import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteButton } from "@/components/SiteButton";
import { ClientsCarousel } from "@/components/ClientsCarousel";
import { ServicesSection } from "@/components/ServicesSection";
import { HowWeWorkSection } from "@/components/HowWeWorkSection";
import { HomeProofStatsSection } from "@/components/home/HomeProofStatsSection";
import { TeamSection } from "@/components/TeamSection";
import { ContactFormSection } from "@/components/ContactFormSection";
import { VideoSection } from "@/components/VideoSection";

// ─── Who we serve ────────────────────────────────────────────────────────────

const audiences = [
  {
    title: "Regulated Institutions",
    body: "Banks, payment institutions, and other entities under direct supervisory authority within EU and UK regulations like PSD2, MiFID II, DORA, GDPR, and national AML frameworks. UK, Benelux, and Nordics. The compliance obligation stack grows. The team does not.",
  },
  {
    title: "Growth Fintechs",
    body: "VC-backed, Series B or C, operating across multiple states in payments and lending, filing across FinCEN, CFPB, SEC, and multiple state banking authorities simultaneously. Every new state is another set of manual processes.",
  },
];

const WhoWeServeSection = () => (
  <Section id="who-we-serve" scrollMargin>
    <SectionHeader
      title="Who we serve"
      subtitle="Two situations. One infrastructure gap."
      className="mb-12"
    />

    <hr className="border-t border-[#E2E6F0]" />

    <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
      {audiences.map((item, index) => (
        <div
          key={item.title}
          className={[
            index === 0 ? "border-b md:border-b-0" : "md:border-l md:border-[#E2E6F0]",
            "md:px-8 lg:px-10 flex flex-col gap-6 py-12",
          ].join(" ")}
        >
          <h3 className="font-alternates font-bold text-2xl text-foreground leading-snug">
            {item.title}
          </h3>
          <p className="font-sans font-light text-sm text-muted-foreground leading-relaxed">
            {item.body}
          </p>
        </div>
      ))}
    </div>

    <hr className="border-t border-[#E2E6F0]" />
  </Section>
);

// ─── The problem ─────────────────────────────────────────────────────────────

const problems = [
  {
    index: "01",
    title: "Every cycle starts from scratch",
    body: "Same data, same templates, same deadlines – rebuilt manually every reporting period.",
  },
  {
    index: "02",
    title: "Audits arrive without warning",
    body: "Preparing a document package takes days or weeks. The team stops everything else.",
  },
  {
    index: "03",
    title: "Each new market adds a manual process",
    body: "Expansion should be automated. Instead it creates new compliance bottlenecks.",
  },
];

const TheProblemSection = () => (
  <Section id="the-problem" scrollMargin>
    <SectionHeader
      title="The problem"
      subtitle="The gap between your data and your regulator is filled by your best people doing manual work."
      subtitleClassName="text-xl md:text-2xl text-foreground font-light max-w-3xl"
      className="mb-12"
    />

    <hr className="border-t border-[#E2E6F0]" />

    <div className="grid grid-cols-1 gap-0 md:[grid-template-columns:repeat(3,minmax(0,1fr))] md:[grid-template-rows:auto_auto_1fr]">
      {problems.map((item, index) => (
        <div
          key={item.index}
          className={[
            index === 0 ? "border-b md:border-b-0" : "",
            index === 1 ? "border-b md:border-b-0 md:border-l md:border-[#E2E6F0]" : "",
            index === 2 ? "md:border-l md:border-[#E2E6F0]" : "",
            "md:px-8 lg:px-10 flex flex-col gap-8 py-12 md:gap-0 md:py-0 md:[display:subgrid] md:[grid-row:span_3]",
          ].join(" ")}
        >
          <div className="flex items-center justify-between md:pt-12 md:pb-6">
            <span className="font-sans font-extralight text-xs text-foreground/30 tracking-widest tabular-nums">
              {item.index}
            </span>
          </div>
          <h3 className="font-alternates font-bold text-2xl text-foreground leading-snug md:pb-6">
            {item.title}
          </h3>
          <div className="flex min-h-0 flex-col gap-6 md:h-full md:self-stretch md:justify-between md:pb-12">
            <p className="font-sans font-light text-sm text-muted-foreground leading-relaxed">
              {item.body}
            </p>
          </div>
        </div>
      ))}
    </div>

    <hr className="border-t border-[#E2E6F0]" />
  </Section>
);

// ─── The regulatory environment ──────────────────────────────────────────────

const regulatoryItems = [
  {
    index: "01",
    title: "EU Enforcement Shift",
    body: "DORA became enforceable January 2025. ICT incident notification: 4 hours initial, 72 hours intermediate. Penalty exposure up to 10% of annual turnover, senior managers personally up to €1M.",
  },
  {
    index: "02",
    title: "US Expansion Trap",
    body: "Every new US state requires a money transmitter license, a separate reporting template, and a separate workflow – built manually each time. FinCEN BSA/AML enforcement is accelerating.",
  },
  {
    index: "03",
    title: "The Capacity Gap",
    body: "Global bank compliance costs exceed $270B annually. Compliance teams of 3–8 spend 60–70% of each reporting cycle on data collection — not on compliance.",
  },
];

const RegulatoryEnvironmentSection = () => (
  <Section id="regulatory-environment" scrollMargin>
    <SectionHeader
      title="The regulatory environment"
      subtitle="The cost of not automating is no longer theoretical."
      className="mb-12"
    />

    <hr className="border-t border-[#E2E6F0]" />

    <div className="grid grid-cols-1 gap-0 md:[grid-template-columns:repeat(3,minmax(0,1fr))] md:[grid-template-rows:auto_auto_1fr]">
      {regulatoryItems.map((item, index) => (
        <div
          key={item.index}
          className={[
            index === 0 ? "border-b md:border-b-0" : "",
            index === 1 ? "border-b md:border-b-0 md:border-l md:border-[#E2E6F0]" : "",
            index === 2 ? "md:border-l md:border-[#E2E6F0]" : "",
            "md:px-8 lg:px-10 flex flex-col gap-8 py-12 md:gap-0 md:py-0 md:[display:subgrid] md:[grid-row:span_3]",
          ].join(" ")}
        >
          <div className="flex items-center justify-between md:pt-12 md:pb-6">
            <span className="font-sans font-extralight text-xs text-foreground/30 tracking-widest tabular-nums">
              {item.index}
            </span>
          </div>
          <h3 className="font-alternates font-bold text-2xl text-foreground leading-snug md:pb-6">
            {item.title}
          </h3>
          <div className="flex min-h-0 flex-col gap-6 md:h-full md:self-stretch md:justify-between md:pb-12">
            <p className="font-sans font-light text-sm text-muted-foreground leading-relaxed">
              {item.body}
            </p>
          </div>
        </div>
      ))}
    </div>

    <hr className="border-t border-[#E2E6F0]" />
  </Section>
);

// ─── Proof · Case studies ────────────────────────────────────────────────────

const caseStudies = [
  {
    index: "01",
    title: "Sales intelligence platform",
    situation:
      "A sales firm discovering opportunities after the competition got there first needed earlier signal.",
    built:
      "RAG platform with LLM scrapers for job intelligence, monitoring thousands of companies for buying signals.",
    result: "First-mover advantage on intent signals. Thousands of accounts monitored continuously.",
    link: "/case-studies",
  },
  {
    index: "02",
    title: "Legal Intelligence Platform",
    situation:
      "A law firm with large volumes of unstructured case data needed instant access for their lawyers.",
    built:
      "End-to-end system for organising unstructured information with a dedicated chatbot for their legal team.",
    result: "<1 second response time. 75% storage reduction. Delivered in 3 weeks.",
    link: "/case-studies",
  },
];

const ProofSection = () => (
  <Section id="proof" scrollMargin>
    <SectionHeader
      title="Proof · Case studies"
      subtitle="Production systems. Real outcomes."
      action={
        <Link to="/case-studies">
          <SiteButton variant="primary" arrow="up-right" className="whitespace-nowrap">
            All case studies
          </SiteButton>
        </Link>
      }
      titleClassName="text-3xl md:text-4xl"
      subtitleClassName="max-w-xl"
      className="mb-12"
    />

    <hr className="border-t border-[#E2E6F0]" />

    <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
      {caseStudies.map((cs, index) => (
        <Link
          key={cs.index}
          to={cs.link}
          className={[
            index === 0 ? "border-b md:border-b-0" : "md:border-l md:border-[#E2E6F0]",
            "group md:px-8 lg:px-10 flex flex-col gap-6 py-12 transition-opacity duration-200 hover:opacity-75",
          ].join(" ")}
        >
          <div className="flex items-center justify-between">
            <span className="font-sans font-extralight text-xs text-foreground/30 tracking-widest tabular-nums">
              {cs.index}
            </span>
          </div>
          <h3 className="font-alternates font-bold text-2xl text-foreground leading-snug">
            {cs.title}
          </h3>
          <p className="font-sans font-light text-sm text-muted-foreground leading-relaxed">
            {cs.situation}
          </p>
          <div className="space-y-2">
            <p className="font-sans text-sm leading-relaxed">
              <span className="font-semibold">What we built</span>: {cs.built}
            </p>
            <p className="font-sans text-sm leading-relaxed text-success">
              <span className="font-semibold">Result</span>: {cs.result}
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-sm font-medium text-foreground/40 group-hover:text-foreground transition-colors duration-200 mt-auto">
            Read more
            <ArrowUpRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </div>
        </Link>
      ))}
    </div>

    <hr className="border-t border-[#E2E6F0]" />
  </Section>
);

// ─── Start here CTA ──────────────────────────────────────────────────────────

const StartHereSection = () => (
  <Section id="start-here" scrollMargin>
    <div className="bg-[#0E1015] rounded-xl px-8 md:px-16 py-14 md:py-20">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-success mb-3">
            Start here
          </p>
          <h2
            className="font-alternates font-bold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            Compliance Diagnostic
            <br />
            <span className="font-extralight text-white/50">
              Fixed scope · Fixed price · 1–2 weeks
            </span>
          </h2>
          <p className="font-sans font-light text-sm text-white/60 leading-relaxed mb-2">
            We map your compliance workflows, data sources, and regulatory obligations. You receive
            a prioritised automation roadmap and a clear picture of where the first pipeline should
            go. This is the gate before any further commitment.
          </p>
          <p className="font-sans text-sm text-white/40">
            Low commitment. High signal. No obligation to continue.
          </p>
        </div>
        <div className="shrink-0">
          <Link to="/contact">
            <SiteButton variant="primary" arrow="up-right">
              Book a call
            </SiteButton>
          </Link>
        </div>
      </div>
    </div>
  </Section>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

const Info = () => {
  useEffect(() => {
    document.title = "AI Flow | Company Overview";
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground page-shell">
      <Navigation />

      {/* Intro */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-20 bg-background overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10 w-full">
          <p className="text-sm font-light text-muted-foreground tracking-widest uppercase mb-6 font-sans">
            Company overview · AI Flow Software
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold font-alternates my-10 leading-[1.1] text-foreground">
            Compliance solutions for
            <br />
            <span className="font-extralight">regulated financial services.</span>
          </h1>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <SiteButton variant="primary" arrow="up-right">
                Book a diagnostic call
              </SiteButton>
            </Link>
            <Link to="#how-we-work">
              <SiteButton variant="secondary" arrow={false}>
                See how we work →
              </SiteButton>
            </Link>
          </div>
        </div>
      </section>

      <ClientsCarousel />

      <WhoWeServeSection />
      <TheProblemSection />

      {/* What we build — ServicesSection */}
      <ServicesSection />

      {/* What clients achieve */}
      <HomeProofStatsSection />

      <RegulatoryEnvironmentSection />

      {/* How we work */}
      <HowWeWorkSection />

      <ProofSection />

      {/* By the numbers */}
      <TeamSection />

      <VideoSection
        src="/videos/aiflow-demo1.mp4"
        title="Does this look like you?"
        subtitle="The data handoff problem shows up differently depending on where your team is. The fix is the same."
        ctaText="Contact us"
        ctaHref="/contact"
      />

      <StartHereSection />

      {/* Book a call */}
      <ContactFormSection />

      <Footer />
    </div>
  );
};

export default Info;
