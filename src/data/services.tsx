import { Code2, Brain, GraduationCap } from "lucide-react";
import { ReactElement } from "react";

export interface Service {
  /** Unique slug for anchor links (e.g. /services#custom-ai-agents) */
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
    slug: "ai-strategy",
    iconPath: "/images/icons/services-ai-strategy.svg",
    icon: <Brain className="w-12 h-12" />,
    title: "AI Clarity Session",
    tagline: "A clear answer on where AI creates measurable value.",
    description:
      "A focused session with your operational or investment team. You leave with a clear answer on where AI creates measurable value, and what it would cost to capture it.",
    features: [
      "Process and opportunity mapping",
      "Realistic cost and return view",
      "No obligation to continue",
    ],
    idealFor: [
      "Leadership teams that know AI matters but aren't sure where to start",
      "Teams that want a concrete answer before committing to a full audit or build",
    ],
    outcomes: [
      "Clarity on where AI creates measurable value in your business",
      "Realistic cost and return so you can decide next steps",
    ],
    typicalTimeline: "One session; results within the week.",
    industries: ["All sectors we serve"],
    relatedCaseStudyIds: [
      "oil-gas-invoice-automation",
      "legal-intelligence-platform",
    ],
  },
  {
    slug: "ai-workshops",
    iconPath: "/images/icons/services-discovery.svg",
    icon: <GraduationCap className="w-12 h-12" />,
    title: "AI Opportunity Audit",
    tagline: "A scoped roadmap and business case ready for leadership.",
    description:
      "A structured two-week engagement. We map your data, workflows, and decision points. You leave with a scoped roadmap and a business case ready for leadership sign-off.",
    features: [
      "Data, workflow, and decision-point mapping",
      "Scoped implementation roadmap",
      "Business case for investment committee or board",
    ],
    idealFor: [
      "Teams ready to commit to a build but need a clear scope and business case",
      "Organisations that need internal sign-off before engaging a delivery partner",
    ],
    outcomes: [
      "A prioritised roadmap you can execute",
      "Business case ready for leadership sign-off",
    ],
    typicalTimeline: "Two weeks; roadmap and business case delivered at the end.",
    industries: ["All sectors we serve"],
  },
  {
    slug: "custom-ai-agents",
    iconPath: "/images/icons/services-custom-agents.svg",
    icon: <Code2 className="w-12 h-12" />,
    title: "Custom AI Systems",
    tagline: "End-to-end delivery. Senior level, client in the loop.",
    description:
      "End-to-end delivery. Senior level delivery, with the client in the loop at all times. We build, deploy, and iterate until the system delivers what we scoped it to deliver.",
    features: [
      "End-to-end AI product development",
      "Integration with your existing systems and tools",
      "Scalable, production-ready architecture",
      "Ongoing monitoring and iteration",
    ],
    idealFor: [
      "Startups and mid-sized companies without an in-house AI team",
      "CTOs and PMs who want a sharp build partner",
    ],
    outcomes: [
      "Faster handling of requests, leads, or back-office work",
      "Consistent execution without scaling headcount",
      "Clear ROI through measured impact and iteration",
    ],
    typicalTimeline:
      "Usually 8–16 weeks from kickoff to first production release; ongoing support as needed.",
    industries: [
      "Real estate",
      "Legal",
      "Construction",
      "PropTech",
      "Marketing",
      "Consulting",
    ],
    relatedCaseStudyIds: [
      "construction-materials-retailer",
      "automated-customer-intake",
      "material-validation-and-dependencies",
    ],
  },
];
