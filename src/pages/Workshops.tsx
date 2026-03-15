import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Rocket,
  Map,
  Users,
  Target,
  ClipboardList,
  TrendingUp,
  Globe,
  CheckCircle,
  Calendar,
  Layers,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SiteButton } from "@/components/SiteButton";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { teamArray } from "@/data/team";

type ActivityType = "aiflow" | "client" | "joint";

const activityTypeClass: Record<ActivityType, string> = {
  aiflow: "bg-muted",
  client: "bg-muted/80",
  joint: "bg-card border border-border",
};

// ── Track 1 timeline: 2-day workshop ──
type Track1Period = "day1am" | "day1pm" | "day2am" | "day2pm" | "post";
const track1Periods: { key: Track1Period; label: string }[] = [
  { key: "day1am", label: "Day 1 – Morning" },
  { key: "day1pm", label: "Day 1 – Afternoon" },
  { key: "day2am", label: "Day 2 – Morning" },
  { key: "day2pm", label: "Day 2 – Afternoon" },
  { key: "post", label: "Post-session" },
];
const track1Activities: {
  activity: string;
  time: string;
  type: ActivityType;
  periods: Record<Track1Period, boolean>;
}[] = [
  {
    activity: "Pre-session questionnaire",
    time: "~1h written",
    type: "client",
    periods: {
      day1am: true,
      day1pm: false,
      day2am: false,
      day2pm: false,
      post: false,
    },
  },
  {
    activity: "Introduction & AI landscape overview",
    time: "~2h",
    type: "joint",
    periods: {
      day1am: true,
      day1pm: false,
      day2am: false,
      day2pm: false,
      post: false,
    },
  },
  {
    activity: "Process walkthrough & opportunity mapping",
    time: "~3h",
    type: "joint",
    periods: {
      day1am: false,
      day1pm: true,
      day2am: false,
      day2pm: false,
      post: false,
    },
  },
  {
    activity: "Use case deep-dives",
    time: "~3h",
    type: "joint",
    periods: {
      day1am: false,
      day1pm: false,
      day2am: true,
      day2pm: false,
      post: false,
    },
  },
  {
    activity: "Prioritisation & roadmap session",
    time: "~2h",
    type: "joint",
    periods: {
      day1am: false,
      day1pm: false,
      day2am: false,
      day2pm: true,
      post: false,
    },
  },
  {
    activity: "Feedback & wrap-up",
    time: "30 min",
    type: "client",
    periods: {
      day1am: false,
      day1pm: false,
      day2am: false,
      day2pm: true,
      post: false,
    },
  },
  {
    activity: "Deliverable write-up",
    time: "-",
    type: "aiflow",
    periods: {
      day1am: false,
      day1pm: false,
      day2am: false,
      day2pm: false,
      post: true,
    },
  },
  {
    activity: "Follow-up call",
    time: "30 min",
    type: "joint",
    periods: {
      day1am: false,
      day1pm: false,
      day2am: false,
      day2pm: false,
      post: true,
    },
  },
];

// ── Track 2 timeline: 2-week workshop ──
type Track2Period =
  | "wk1mon"
  | "wk1wed"
  | "wk1fri"
  | "wk2mon"
  | "wk2wed"
  | "wk2fri"
  | "post";
const track2Periods: { key: Track2Period; label: string }[] = [
  { key: "wk1mon", label: "Week 1 – Mon" },
  { key: "wk1wed", label: "Week 1 – Wed" },
  { key: "wk1fri", label: "Week 1 – Fri" },
  { key: "wk2mon", label: "Week 2 – Mon" },
  { key: "wk2wed", label: "Week 2 – Wed" },
  { key: "wk2fri", label: "Week 2 – Fri" },
  { key: "post", label: "Post-session" },
];
const track2Activities: {
  activity: string;
  time: string;
  type: ActivityType;
  periods: Record<Track2Period, boolean>;
}[] = [
  {
    activity: "Pre-session questionnaire & data access",
    time: "~2h written",
    type: "client",
    periods: {
      wk1mon: true,
      wk1wed: false,
      wk1fri: false,
      wk2mon: false,
      wk2wed: false,
      wk2fri: false,
      post: false,
    },
  },
  {
    activity: "Kick-off & current state review",
    time: "~3h",
    type: "joint",
    periods: {
      wk1mon: true,
      wk1wed: false,
      wk1fri: false,
      wk2mon: false,
      wk2wed: false,
      wk2fri: false,
      post: false,
    },
  },
  {
    activity: "Process mapping sessions",
    time: "~3h",
    type: "joint",
    periods: {
      wk1mon: false,
      wk1wed: true,
      wk1fri: false,
      wk2mon: false,
      wk2wed: false,
      wk2fri: false,
      post: false,
    },
  },
  {
    activity: "Data & tooling assessment",
    time: "-",
    type: "aiflow",
    periods: {
      wk1mon: false,
      wk1wed: true,
      wk1fri: false,
      wk2mon: false,
      wk2wed: false,
      wk2fri: false,
      post: false,
    },
  },
  {
    activity: "Use case identification & scoring",
    time: "~3h",
    type: "joint",
    periods: {
      wk1mon: false,
      wk1wed: false,
      wk1fri: true,
      wk2mon: false,
      wk2wed: false,
      wk2fri: false,
      post: false,
    },
  },
  {
    activity: "Mid-point input & validation",
    time: "~1h",
    type: "client",
    periods: {
      wk1mon: false,
      wk1wed: false,
      wk1fri: true,
      wk2mon: false,
      wk2wed: false,
      wk2fri: false,
      post: false,
    },
  },
  {
    activity: "Architecture & deployment planning",
    time: "~3h",
    type: "joint",
    periods: {
      wk1mon: false,
      wk1wed: false,
      wk1fri: false,
      wk2mon: true,
      wk2wed: false,
      wk2fri: false,
      post: false,
    },
  },
  {
    activity: "Governance & integration review",
    time: "~3h",
    type: "joint",
    periods: {
      wk1mon: false,
      wk1wed: false,
      wk1fri: false,
      wk2mon: false,
      wk2wed: true,
      wk2fri: false,
      post: false,
    },
  },
  {
    activity: "Roadmap finalisation & sign-off",
    time: "~2h",
    type: "joint",
    periods: {
      wk1mon: false,
      wk1wed: false,
      wk1fri: false,
      wk2mon: false,
      wk2wed: false,
      wk2fri: true,
      post: false,
    },
  },
  {
    activity: "Final review & feedback",
    time: "~1h",
    type: "client",
    periods: {
      wk1mon: false,
      wk1wed: false,
      wk1fri: false,
      wk2mon: false,
      wk2wed: false,
      wk2fri: true,
      post: false,
    },
  },
  {
    activity: "Deliverable compilation",
    time: "-",
    type: "aiflow",
    periods: {
      wk1mon: false,
      wk1wed: false,
      wk1fri: false,
      wk2mon: false,
      wk2wed: false,
      wk2fri: false,
      post: true,
    },
  },
  {
    activity: "Follow-up call",
    time: "30 min",
    type: "joint",
    periods: {
      wk1mon: false,
      wk1wed: false,
      wk1fri: false,
      wk2mon: false,
      wk2wed: false,
      wk2fri: false,
      post: true,
    },
  },
];

const Workshops = () => {
  useEffect(() => {
    document.title = "AI Flow | AI Workshops";
  }, []);

  const [track1Open, setTrack1Open] = useState(true);
  const [track2Open, setTrack2Open] = useState(true);

  const recognitionStatements = [
    "We know AI is relevant, but we're not sure what it means for our operations specifically.",
    "We've looked at tools and attended demos, but nothing has connected to our actual workflows.",
    "There's pressure to have an AI strategy. We don't have one yet.",
    "We're concerned about falling behind organisations that are already moving on this.",
    "We rolled out a few tools, but adoption was inconsistent and the impact unclear.",
    "We're finding it difficult to separate genuine opportunities from vendor noise.",
  ];

  const deliverables = [
    {
      icon: Map,
      title: "AI Opportunity Map",
      description:
        "A documented view of your processes with AI integration points identified, described, and ranked by relevance.",
    },
    {
      icon: ClipboardList,
      title: "Prioritised Roadmap",
      description:
        "A shortlist of AI initiatives scored against business impact, implementation complexity, and available resources.",
    },
    {
      icon: Users,
      title: "Shared Reference",
      description:
        "A working document that gives all participants - technical and non-technical - a common basis for decisions going forward.",
    },
    {
      icon: TrendingUp,
      title: "Business Case Draft",
      description:
        "Initial estimates of effort, resource requirements, and expected impact for the top-ranked initiatives.",
    },
  ];

  const processSteps = [
    {
      title: "Preparation",
      description:
        "We spend time with your context before the session - processes, tools, organisational structure. Participants receive a brief in advance.",
      bullets: [
        "Scoping call with key stakeholders",
        "Review of current workflows and tooling",
        "Pre-session brief distributed to attendees",
      ],
    },
    {
      title: "Facilitation",
      description:
        "We use structured exercises to work through AI concepts using examples from your industry and your actual operations.",
      bullets: [
        "AI concepts explained in operational terms",
        "Industry-relevant examples and reference cases",
        "Group exercises run throughout the session",
      ],
    },
    {
      title: "Process mapping",
      description:
        "Your team walks through their operations step by step. We identify where AI has a realistic role and document it.",
      bullets: [
        "Walkthrough of key workflows with all participants",
        "Opportunity identification at each stage",
        "Documentation of findings in real time",
      ],
    },
    {
      title: "Prioritisation",
      description:
        "We work through an impact-effort assessment together, so the session ends with a ranked list your team has bought into.",
      bullets: [
        "Scoring of each opportunity against defined criteria",
        "Separation of near-term and longer-horizon initiatives",
        "Agreement on priorities before the session closes",
      ],
    },
  ];

  const differentiators = [
    {
      icon: Layers,
      title: "Built around your operations",
      description:
        "The agenda, examples, and exercises are prepared around your specific processes and industry context.",
    },
    {
      icon: Sparkles,
      title: "Run by practitioners",
      description:
        "Our facilitators build and deploy AI systems professionally. They can engage with technical and operational questions in equal depth.",
    },
    {
      icon: Target,
      title: "Documented output",
      description:
        "The session produces a written record - opportunity map, prioritised roadmap, business case draft - that participants can use after the day.",
    },
    {
      icon: Globe,
      title: "English & German",
      description:
        "Workshops delivered in English or German, in-person or remotely, across Europe, the Gulf, and North Africa.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="relative">
        <Section padding="hero">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/50 text-sm font-medium text-grey mb-8">
            <Calendar className="w-3.5 h-3.5" />
            Available in English &amp; German · In-person or remote
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-alternates leading-tight text-foreground">
              AI workshops grounded in your operations
            </h1>
            <p className="text-lg md:text-xl max-w-3xl text-grey leading-relaxed">
              We work through your actual processes with your team, identify
              where AI has a realistic role, and document what should be built -
              and in what order.
            </p>
            <p className="text-lg md:text-xl max-w-3xl text-grey leading-relaxed">
              Whether your organisation is evaluating AI for the first time or
              looking to scale existing initiatives, the format adapts to where
              you are.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link to="/contact#calendly" className="w-full sm:w-auto">
              <SiteButton
                variant="primary"
                arrow="up-right"
                className="w-full sm:w-auto"
              >
                Book a scoping call
              </SiteButton>
            </Link>
            <SiteButton
              type="button"
              variant="secondary"
              arrow={false}
              className="w-full sm:w-auto"
              onClick={() =>
                document
                  .getElementById("formats")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See workshop formats
            </SiteButton>
          </div>
        </Section>

        <Section maxWidth="narrow">
          <SectionHeader
            title="Who this is for"
            subtitle="If several of these apply, a workshop is likely a useful first step."
            variant="centered"
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
            subtitleClassName="text-grey max-w-2xl mx-auto mt-6"
          />
          <p className="text-lg max-w-2xl mx-auto text-center text-grey mb-8">
            These workshops are designed for teams in situations like:
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            {recognitionStatements.map((point) => (
              <div
                key={point}
                className="group relative p-4 rounded-lg border border-border bg-card overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-primary/40 hover:shadow-lg"
              >
                <p className="text-m relative text-grey">"{point}"</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="formats">
          <SectionHeader
            title="Two workshop formats"
            subtitle="The right format depends on where your organisation is with AI today. Both can be run in English or German."
            variant="centered"
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
            subtitleClassName="text-grey max-w-2xl mx-auto mb-12"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {/* Track 1 */}
            <div className="group relative rounded-2xl p-8 border border-border bg-card flex flex-col hover:border-primary/40 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-muted border border-border group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors">
                  <BookOpen className="w-6 h-6 text-grey group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest mb-1 text-grey">
                    Track 1
                  </div>
                  <h3 className="text-xl font-bold font-alternates text-foreground">
                    AI Awareness &amp; Quick Wins
                  </h3>
                </div>
              </div>

              <p className="text-m mb-6 text-grey leading-relaxed">
                For teams that are informed about AI in general terms but
                haven't yet connected it to their own work. We go through your
                operations together, identify where AI applies, and document the
                opportunities worth pursuing - in order of priority.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-muted/50">
                <div>
                  <div className="text-xs font-medium mb-1 text-grey">
                    Duration
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    2 days
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium mb-1 text-grey">
                    Group size
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    5–25 participants
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium mb-1 text-grey">
                    Format
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    In-person or remote
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium mb-1 text-grey">
                    Technical level
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    No coding required
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-xs font-semibold uppercase tracking-widest mb-3 text-grey">
                  Who it is for
                </div>
                <ul className="space-y-2">
                  {[
                    "C-suite and department heads exploring AI strategy",
                    "Operational teams encountering AI tools for the first time",
                    "Companies building internal AI literacy before investing",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-grey" />
                      <span className="text-m text-grey">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <div className="text-xs font-semibold uppercase tracking-widest mb-3 text-grey">
                  You walk away with
                </div>
                <ul className="space-y-2">
                  {[
                    "A prioritised shortlist of 5–10 AI use cases specific to your operations",
                    "A quick-win roadmap: what to automate first, and what to leave for later",
                    "A shared AI vocabulary so your team can evaluate vendors with confidence",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-grey" />
                      <span className="text-m text-grey">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Link to="/contact#calendly">
                  <SiteButton
                    variant="primary"
                    arrow="right"
                    className="w-full"
                  >
                    Book Track 1
                  </SiteButton>
                </Link>
              </div>
            </div>

            {/* Track 2 */}
            <div className="group relative rounded-2xl p-8 border border-border bg-card flex flex-col hover:border-primary/40 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-muted border border-border group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors">
                  <Rocket className="w-6 h-6 text-grey group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest mb-1 text-grey">
                    Track 2
                  </div>
                  <h3 className="text-xl font-bold font-alternates text-foreground">
                    AI Transformation &amp; Scale
                  </h3>
                </div>
              </div>

              <p className="text-m mb-6 text-grey leading-relaxed">
                For teams that have validated AI use cases and are working out
                how to move them into production. We focus on architecture, data
                pipelines, deployment approach, and governance - working from
                your existing stack to produce a plan your engineering team can
                implement.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-muted/50 border border-border">
                <div>
                  <div className="text-xs font-medium mb-1 text-grey">
                    Duration
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    2 weeks
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium mb-1 text-grey">
                    Group size
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    5–15 participants
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium mb-1 text-grey">
                    Format
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    In-person preferred
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium mb-1 text-grey">
                    Technical level
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    Engineering + ops
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-xs font-semibold uppercase tracking-widest mb-3 text-grey">
                  Who it is for
                </div>
                <ul className="space-y-2">
                  {[
                    "CTOs and engineering leads with existing AI proofs-of-concept",
                    "Companies that ran pilots but struggle to reach production",
                    "Teams building internal AI infrastructure for the first time",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-grey" />
                      <span className="text-m text-grey">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <div className="text-xs font-semibold uppercase tracking-widest mb-3 text-grey">
                  You walk away with
                </div>
                <ul className="space-y-2">
                  {[
                    "An AI deployment architecture blueprint tailored to your tech stack",
                    "A data readiness and pipeline assessment",
                    "A governance and monitoring framework for production AI systems",
                    "A phased scaling plan with clear milestones and cost estimates",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-grey" />
                      <span className="text-m text-grey">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Link to="/contact#calendly">
                  <SiteButton
                    variant="primary"
                    arrow="right"
                    className="w-full"
                  >
                    Book Track 2
                  </SiteButton>
                </Link>
              </div>
            </div>
          </div>

          {/* Not sure which track */}
          <div className="mt-6 p-5 rounded-xl border border-border bg-card text-center">
            <p className="text-m text-grey">
              <span className="font-semibold text-foreground">
                Unsure which format applies to your situation?
              </span>{" "}
              Book a scoping call. We'll ask a few questions and give you a
              clear recommendation.{" "}
              <Link
                to="/contact#calendly"
                className="font-semibold underline underline-offset-2 text-grey hover:text-foreground transition-colors"
              >
                Help me choose →
              </Link>
            </p>
          </div>
        </Section>

        {/* ── Deliverables ── */}
        <Section>
          <SectionHeader
            title={
              <>
                What you <span className="text-primary">walk away with</span>
              </>
            }
            subtitle="Each session produces a written record your team can reference, share internally, and use as the basis for decisions."
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
            subtitleClassName="text-grey max-w-2xl"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {deliverables.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-xl p-6 border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-muted border border-border group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors">
                    <IconComponent className="w-5 h-5 text-grey group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold font-alternates mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-m leading-relaxed text-grey">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>

        {/* ── How We Run It ── */}
        <Section>
          <SectionHeader
            title={
              <>
                How we <span className="text-primary">work</span>
              </>
            }
            subtitle="The session is structured around your operations, not a standard agenda. Preparation matters as much as the day itself."
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
            subtitleClassName="text-grey max-w-2xl"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="group rounded-2xl p-8 border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="text-xs font-bold uppercase tracking-widest mb-3 text-primary/80">
                  Step {index + 1}
                </div>
                <h3 className="text-xl font-bold font-alternates mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-m mb-4 text-grey">{step.description}</p>
                <div className="space-y-3 pt-4 border-t border-border">
                  {step.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-grey" />
                      <span className="text-m leading-relaxed text-grey">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Timeline ── */}
        <Section>
          <SectionHeader
            title="Activities & time commitment"
            subtitle="What each track looks like in practice - and how much time it requires from your side."
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
            subtitleClassName="text-grey max-w-2xl"
          />

          {/* Shared legend */}
          <div className="flex flex-wrap gap-6 mb-8 mt-12">
            {[
              {
                className: "bg-muted",
                label: "AI Flow preparation & analysis",
              },
              { className: "bg-muted/80", label: "Your contribution" },
              {
                className: "bg-card border border-border",
                label: "Joint sessions",
              },
            ].map(({ className, label }) => (
              <div key={label} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded ${className}`} />
                <span className="text-sm text-grey">{label}</span>
              </div>
            ))}
          </div>

          {/* Track 1 table */}
          <div className="mb-4">
            <button
              onClick={() => setTrack1Open((o) => !o)}
              className="w-full flex items-center justify-between gap-3 mb-3 group text-grey hover:text-foreground transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full flex-shrink-0 bg-grey" />
                <span className="text-sm font-semibold uppercase tracking-widest">
                  Track 1 - AI Awareness & Quick Wins · 2-day workshop
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ${track1Open ? "" : "-rotate-90"}`}
              />
            </button>
            {track1Open && (
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full min-w-[680px] border-collapse">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left px-5 py-3 text-sm font-semibold text-foreground w-[34%] border-b border-r border-border">
                        Activity
                      </th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-grey w-[16%] border-b border-r border-border">
                        Your time
                      </th>
                      {track1Periods.map((p, i) => (
                        <th
                          key={p.key}
                          className="text-center px-3 py-3 text-xs font-semibold uppercase tracking-wider text-grey w-[10%] border-b border-border border-r last:border-r-0"
                        >
                          {p.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {track1Activities.map((row, rowIdx) => (
                      <tr
                        key={row.activity}
                        className={rowIdx % 2 === 0 ? "bg-muted/20" : ""}
                      >
                        <td className="px-5 py-3 text-sm text-foreground border-b border-r border-border">
                          {row.activity}
                        </td>
                        <td className="px-4 py-3 text-sm text-grey border-b border-r border-border">
                          {row.time}
                        </td>
                        {track1Periods.map((p, i) => (
                          <td
                            key={p.key}
                            className="px-2 py-3 text-center border-b border-r border-border last:border-r-0"
                          >
                            {row.periods[p.key] && (
                              <div
                                className={`h-5 rounded mx-auto max-w-[80px] ${activityTypeClass[row.type]}`}
                              />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Track 2 table */}
          <div>
            <button
              onClick={() => setTrack2Open((o) => !o)}
              className="w-full flex items-center justify-between gap-3 mb-3 group text-grey hover:text-foreground transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full flex-shrink-0 bg-grey" />
                <span className="text-sm font-semibold uppercase tracking-widest">
                  Track 2 - AI Transformation & Scale · 2-week workshop
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ${track2Open ? "" : "-rotate-90"}`}
              />
            </button>
            {track2Open && (
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full min-w-[680px] border-collapse">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left px-5 py-3 text-sm font-semibold text-foreground w-[34%] border-b border-r border-border">
                        Activity
                      </th>
                      <th className="text-left px-4 py-3 text-sm font-medium text-grey w-[16%] border-b border-r border-border">
                        Your time
                      </th>
                      {track2Periods.map((p, i) => (
                        <th
                          key={p.key}
                          className="text-center px-3 py-3 text-xs font-semibold uppercase tracking-wider text-grey w-[10%] border-b border-border border-r last:border-r-0"
                        >
                          {p.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {track2Activities.map((row, rowIdx) => (
                      <tr
                        key={row.activity}
                        className={rowIdx % 2 === 0 ? "bg-muted/20" : ""}
                      >
                        <td className="px-5 py-3 text-sm text-foreground border-b border-r border-border">
                          {row.activity}
                        </td>
                        <td className="px-4 py-3 text-sm text-grey border-b border-r border-border">
                          {row.time}
                        </td>
                        {track2Periods.map((p, i) => (
                          <td
                            key={p.key}
                            className="px-2 py-3 text-center border-b border-r border-border last:border-r-0"
                          >
                            {row.periods[p.key] && (
                              <div
                                className={`h-5 rounded mx-auto max-w-[80px] ${activityTypeClass[row.type]}`}
                              />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </Section>

        {/* ── Facilitators ── */}
        <Section>
          <SectionHeader
            title="Who facilitates"
            subtitle="Both of us have built and deployed AI systems professionally. We can engage with your operational questions and technical questions in equal depth."
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
            subtitleClassName="text-grey max-w-2xl"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {teamArray.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl p-8 border border-border bg-card flex flex-col sm:flex-row gap-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0 border-2 border-border"
                />
                <div>
                  <h3 className="text-lg font-bold font-alternates mb-1 text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium mb-3 text-grey">
                    {member.role}
                  </p>
                  <p className="text-m leading-relaxed text-grey">
                    {member.bio}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-grey hover:text-foreground transition-colors"
                  >
                    LinkedIn profile →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Differentiators ── */}
        <Section>
          <SectionHeader
            title="What to expect"
            titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {differentiators.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-xl p-6 border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-muted border border-border group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors">
                    <IconComponent className="w-5 h-5 text-grey group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold font-alternates mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-m leading-relaxed text-grey">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>

        <Section>
          <div className="rounded-2xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-12 md:p-16 text-center">
            <SectionHeader
              title="Start with a conversation"
              subtitle="We'll spend 30 minutes understanding your situation and let you know whether a workshop is the right next step - and which format fits. Delivered in English or German, in-person or remotely."
              variant="centered"
              titleClassName="text-3xl md:text-4xl font-alternates text-foreground"
              subtitleClassName="text-grey max-w-xl mx-auto mb-8"
              action={
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact#calendly">
                    <SiteButton variant="primary" arrow="up-right">
                      Book a scoping call
                    </SiteButton>
                  </Link>
                  <Link to="/contact">
                    <SiteButton variant="secondary">Get in touch</SiteButton>
                  </Link>
                </div>
              }
            />
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default Workshops;
