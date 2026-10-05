/**
 * TONE OF VOICE - AI FLOW
 * ─────────────────────────────────────────────────────────────────────────────
 * TAGLINE (hero, solution sections, footer)
 *   "Nothing lost between teams."
 *
 * THE VOICE IN ONE SENTENCE
 *   A warm, clear-eyed expert who has sat in the room with this problem,
 *   understands exactly what it costs - in hours, in fines, in missed
 *   priorities - and is here to fix the infrastructure, not lecture about
 *   compliance.
 *
 * FOUR DEFINING QUALITIES
 *   1. Human before technical - lead with the person's experience (the late
 *      night, the cancelled meeting, the avoidable fine) before explaining how
 *      the system works. The reader should feel recognised before they feel
 *      sold to.
 *   2. Specific over broad - never "saves time and money." Always "15 hours
 *      per person per week" and "up to $2M in avoided losses." Always name
 *      the departments: operations, finance, risk, technology.
 *   3. Confident without announcing it - don't say "we are experts." Say
 *      something only an expert would say. Never use: "leading,"
 *      "best-in-class," "powerful," "cutting-edge," "seamless."
 *   4. Warm through recognition - warmth comes from making the reader feel
 *      understood, not from exclamation marks. Name their reality plainly.
 *
 * KEY PHRASES - USE CONSISTENTLY ACROSS ALL PAGES
 *   "Nothing lost between teams"           → anchor line; hero, solution, footer
 *   "Data handoff problem"                 → precise name for the cross-team issue
 *   "Operations, finance, risk, technology"→ always name the departments
 *   "The work before the work"             → hidden burden of the compliance team
 *   "The client meeting stays on the calendar" → close the loop on human cost
 *   "Infrastructure problem, not a compliance problem" → core reframe
 *
 * THE THREE MOMENTS THAT DEFINE THE PROBLEM (never abstract these)
 *   THE DISPLACED PRIORITY - a client meeting cancelled because a filing
 *     deadline moved and the data wasn't ready. The expertise was there.
 *     The hours weren't.
 *   THE AVOIDABLE FINE - the penalty arrived. The data had been sitting in
 *     another system the whole time. A data handoff failure - not a
 *     compliance failure.
 *   THE NEW REGULATION - another obligation lands on an already full team.
 *     The question isn't whether they understand it - it's where the hours
 *     are going to come from.
 *
 * DO WRITE LIKE THIS
 *   "You cancelled a client meeting to finish a filing. That's not a
 *    compliance problem - it's an infrastructure problem."
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
 *   CTAs are plain and direct: "Book a discovery call" not "Start your journey."
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { Code2, Rocket } from "lucide-react";
import { ReactElement } from "react";

export interface Service {
  /** Unique slug for anchor links (e.g. /how-we-work#deploy) */
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
    slug: "deploy",
    iconPath: "/images/icons/services-discovery.svg",
    icon: <Rocket className="w-12 h-12" />,
    title: "Deploy one workflow",
    tagline: "AI Flow Core, connected to your systems and live on one real workflow.",
    description:
      "4–8 weeks. Our forward deployed engineers connect AI Flow Core to the systems you already use and configure it for one recurring workflow - a regulatory report, a control, an evidence pack. We take it through to a real, review-ready output. Built to security standards (OWASP and others); no data leaves your environment.",
    features: [
      "Connectors into core banking, transaction systems, CRM, email, Teams and spreadsheets",
      "Regulatory mapping configured for one obligation or workflow",
      "Validation rules and controls specific to your company",
      "Audit trail active from day one",
      "Acceptance criteria agreed before deployment begins",
    ],
    idealFor: [
      "Compliance functions spending more than 10 hours per person per week on manual data assembly",
      "Teams facing an audit or a new obligation on an already full schedule",
    ],
    outcomes: [
      "15 hours saved per person, per week",
      "100% of recurring filings automated post-deployment",
      "The client meeting stays on the calendar",
    ],
    typicalTimeline: "4–8 weeks from kickoff to first automated reporting cycle.",
    industries: [
      "Banks and payment institutions",
      "Regulated firms across EU and US jurisdictions",
    ],
  },
  {
    slug: "expand",
    iconPath: "/images/icons/services-custom-agents.svg",
    icon: <Code2 className="w-12 h-12" />,
    title: "Expand",
    tagline: "Each new obligation is a new module on the same foundation. Not a new build.",
    description:
      "Ongoing. Add more reports, controls, evidence packs, and registers on AI Flow Core instead of starting again. The same engineers stay with you as the regulatory environment changes, or as your company enters new states, countries, or product lines.",
    features: [
      "New obligations added as modules on the existing platform",
      "Monitoring and validation for every active automated output",
      "Template updates when regulators change the rules",
      "Quarterly review against your obligation stack",
      "A runbook for anything your team wants to own internally",
    ],
    idealFor: [
      "Teams expanding into new jurisdictions, states, or product lines",
      "Compliance functions where the obligation stack grows faster than headcount",
    ],
    outcomes: [
      "Each new obligation takes hours to automate - not weeks of new process",
      "Up to $2M in avoided losses from data handoff failures",
    ],
    typicalTimeline: "Ongoing. Scoped by coverage.",
    industries: ["Banks and payment institutions", "Multi-jurisdiction regulated firms"],
  },
];
