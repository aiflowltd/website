/**
 * TONE OF VOICE — AI FLOW
 * ─────────────────────────────────────────────────────────────────────────────
 * TAGLINE (hero, solution sections, footer)
 *   "Nothing lost between teams."
 *
 * THE VOICE IN ONE SENTENCE
 *   A warm, clear-eyed expert who has sat in the room with this problem,
 *   understands exactly what it costs — in hours, in fines, in missed
 *   priorities — and is here to fix the infrastructure, not lecture about
 *   compliance.
 *
 * FOUR DEFINING QUALITIES
 *   1. Human before technical — lead with the person's experience (the late
 *      night, the cancelled meeting, the avoidable fine) before explaining how
 *      the system works. The reader should feel recognised before they feel
 *      sold to.
 *   2. Specific over broad — never "saves time and money." Always "15 hours
 *      per person per week" and "up to $2M in avoided losses." Always name
 *      the departments: operations, finance, risk, technology.
 *   3. Confident without announcing it — don't say "we are experts." Say
 *      something only an expert would say. Never use: "leading,"
 *      "best-in-class," "powerful," "cutting-edge," "seamless."
 *   4. Warm through recognition — warmth comes from making the reader feel
 *      understood, not from exclamation marks. Name their reality plainly.
 *
 * KEY PHRASES — USE CONSISTENTLY ACROSS ALL PAGES
 *   "Nothing lost between teams"           → anchor line; hero, solution, footer
 *   "Data handoff problem"                 → precise name for the cross-team issue
 *   "Operations, finance, risk, technology"→ always name the departments
 *   "The work before the work"             → hidden burden of the compliance team
 *   "The client meeting stays on the calendar" → close the loop on human cost
 *   "Infrastructure problem, not a compliance problem" → core reframe
 *
 * THE THREE MOMENTS THAT DEFINE THE PROBLEM (never abstract these)
 *   THE DISPLACED PRIORITY — a client meeting cancelled because a filing
 *     deadline moved and the data wasn't ready. The expertise was there.
 *     The hours weren't.
 *   THE AVOIDABLE FINE — the penalty arrived. The data had been sitting in
 *     another system the whole time. A data handoff failure — not a
 *     compliance failure.
 *   THE NEW REGULATION — another obligation lands on an already full team.
 *     The question isn't whether they understand it — it's where the hours
 *     are going to come from.
 *
 * DO WRITE LIKE THIS
 *   "You cancelled a client meeting to finish a filing. That's not a
 *    compliance problem — it's an infrastructure problem."
 *   "The data exists. It's sitting in operations, finance, risk, technology.
 *    Nobody connected it in time."
 *   "15 hours saved per person, per week. Up to $2M in avoided losses."
 *   Short sentences. One idea per sentence. Fragments are fine.
 *
 * NEVER WRITE LIKE THIS
 *   "Our powerful AI platform streamlines your compliance workflows end-to-end."
 *   "We leverage cutting-edge technology to deliver best-in-class outcomes."
 *   "We'd love to help you on your compliance journey."
 *   No buzzwords. No journey. No ecosystem. No synergy. No leverage.
 *
 * FORMATTING RULES
 *   Numbers as numerals: 15 hours, $2M, 1–2 weeks, 4–8 weeks.
 *   CTAs are plain and direct: "Book a diagnostic call" not "Start your journey."
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { Code2, Brain, GraduationCap } from "lucide-react";
import { ReactElement } from "react";

export interface Service {
  /** Unique slug for anchor links (e.g. /services#compliance-diagnostic) */
  slug: string;
  /** SVG path for icon (used on main and Services page). Takes precedence over icon. */
  iconPath?: string;
  /** Lucide icon fallback when iconPath is not set */
  icon: ReactElement;
  title: string;
  /** Short one-liner for cards and meta */
  tagline?: string;
  description: string;
  /** What we deliver / what's included */
  features: string[];
  /** Who this service is best for (ICP) */
  idealFor?: string[];
  /** Typical client outcomes or results */
  outcomes?: string[];
  /** Typical engagement length or format */
  typicalTimeline?: string;
  /** Industries where we often deliver this */
  industries?: string[];
  /** Case study IDs for "See how we've done this" */
  relatedCaseStudyIds?: string[];
}

export const services: Service[] = [
  {
    slug: "compliance-diagnostic",
    iconPath: "/images/icons/services-ai-strategy.svg",
    icon: <Brain className="w-12 h-12" />,
    title: "Compliance Diagnostic",
    tagline: "Where is the data handoff problem, and what will it cost to fix?",
    description:
      "1–2 weeks. We map your compliance workflows, data sources, and regulatory obligations across all active jurisdictions. We identify where the data handoff failures are, what manual steps are happening, and what it would cost to automate them. Deliverable: a prioritised automation roadmap, ready for leadership sign-off.",
    features: [
      "Workflow and data source mapping across all active jurisdictions",
      "Regulatory obligation audit",
      "Prioritised automation roadmap",
      "Scope and cost estimate for the Pipeline Build",
    ],
    idealFor: [
      "Heads of compliance who know there is a data handoff problem but have not yet mapped where it is",
      "Teams preparing for an audit or a new regulatory obligation landing on an already full schedule",
    ],
    outcomes: [
      "A clear answer on where the data handoff failures are",
      "A prioritised roadmap ready for leadership sign-off",
    ],
    typicalTimeline: "1–2 weeks. Roadmap delivered at the end.",
    industries: [
      "Banks and payment institutions",
      "Growth-stage fintechs",
      "Regulated firms under PSD2, MiFID II, DORA, AML, FinCEN, CFPB",
    ],
  },
  {
    slug: "pipeline-build",
    iconPath: "/images/icons/services-discovery.svg",
    icon: <GraduationCap className="w-12 h-12" />,
    title: "Pipeline Build",
    tagline: "Connect the data. Automate the output. Free the team.",
    description:
      "4–8 weeks. We build the first automated compliance pipeline for one regulatory obligation or reporting workflow. Data sources are connected, mapped to the regulatory template, and validated. The pipeline runs on schedule, produces the report, and maintains a full audit trail. The system is built to OWASP security standards, encrypted in transit and at rest, and operates within your existing infrastructure — no data leaves your environment. Acceptance criteria are agreed before build begins.",
    features: [
      "Data integrations across existing sources",
      "Regulatory mapping engine for one obligation or workflow",
      "Automated report generation and scheduling",
      "Audit trail active from day one",
      "Built to OWASP security standards — encrypted in transit and at rest",
      "Operates within your existing infrastructure — no data leaves your environment",
      "Acceptance criteria agreed before build begins",
    ],
    idealFor: [
      "Teams who have completed the Compliance Diagnostic and are ready to build",
      "Compliance functions spending more than 10 hours per person per week on manual data assembly",
    ],
    outcomes: [
      "15 hours saved per person, per week",
      "100% of recurring filings automated post-deployment",
      "The client meeting stays on the calendar",
    ],
    typicalTimeline: "4–8 weeks from kickoff to first automated filing cycle.",
    industries: [
      "Banks and payment institutions",
      "Growth-stage fintechs",
      "Regulated firms across EU and US jurisdictions",
    ],
  },
  {
    slug: "long-term-partnership",
    iconPath: "/images/icons/services-custom-agents.svg",
    icon: <Code2 className="w-12 h-12" />,
    title: "Long-term Partnership",
    tagline: "Each new obligation adds an automated output. Not a manual process.",
    description:
      "Ongoing, we maintain, expand, and optimise the compliance infrastructure as the regulatory environment evolves, or as your company enters new states, countries, or product lines. Each new obligation adds an automated output on top of the existing pipeline — not a new build from scratch.",
    features: [
      "New obligations automated on the existing pipeline as coverage expands",
      "Monitoring and validation for all active automated filings",
      "Quarterly performance review against the obligation stack",
      "A runbook for any obligation the team needs to own internally",
    ],
    idealFor: [
      "Teams post-Pipeline Build expanding into new jurisdictions, states, or product lines",
      "Compliance functions where the obligation stack grows faster than headcount",
    ],
    outcomes: [
      "Each new obligation takes hours to automate — not weeks of new process",
      "Up to $2M in avoided losses from data handoff failures",
    ],
    typicalTimeline: "Ongoing. Priced per quarter, scoped by coverage.",
    industries: [
      "Banks and payment institutions",
      "Growth-stage fintechs",
      "Multi-jurisdiction regulated firms",
    ],
  },
];
