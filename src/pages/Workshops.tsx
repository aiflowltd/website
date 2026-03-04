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
import { Button } from "@/components/ui/button";
import { colors } from "@/constants/colors";
import { teamArray } from "@/data/team";


type ActivityType = "aiflow" | "client" | "joint";

const activityTypeColor: Record<ActivityType, string> = {
  aiflow: colors.primary,
  client: colors.secondary,
  joint: colors.success,
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
    periods: { day1am: true, day1pm: false, day2am: false, day2pm: false, post: false },
  },
  {
    activity: "Introduction & AI landscape overview",
    time: "~2h",
    type: "joint",
    periods: { day1am: true, day1pm: false, day2am: false, day2pm: false, post: false },
  },
  {
    activity: "Process walkthrough & opportunity mapping",
    time: "~3h",
    type: "joint",
    periods: { day1am: false, day1pm: true, day2am: false, day2pm: false, post: false },
  },
  {
    activity: "Use case deep-dives",
    time: "~3h",
    type: "joint",
    periods: { day1am: false, day1pm: false, day2am: true, day2pm: false, post: false },
  },
  {
    activity: "Prioritisation & roadmap session",
    time: "~2h",
    type: "joint",
    periods: { day1am: false, day1pm: false, day2am: false, day2pm: true, post: false },
  },
  {
    activity: "Feedback & wrap-up",
    time: "30 min",
    type: "client",
    periods: { day1am: false, day1pm: false, day2am: false, day2pm: true, post: false },
  },
  {
    activity: "Deliverable write-up",
    time: "—",
    type: "aiflow",
    periods: { day1am: false, day1pm: false, day2am: false, day2pm: false, post: true },
  },
  {
    activity: "Follow-up call",
    time: "30 min",
    type: "joint",
    periods: { day1am: false, day1pm: false, day2am: false, day2pm: false, post: true },
  },
];

// ── Track 2 timeline: 2-week workshop ──
type Track2Period = "wk1mon" | "wk1wed" | "wk1fri" | "wk2mon" | "wk2wed" | "wk2fri" | "post";
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
    periods: { wk1mon: true, wk1wed: false, wk1fri: false, wk2mon: false, wk2wed: false, wk2fri: false, post: false },
  },
  {
    activity: "Kick-off & current state review",
    time: "~3h",
    type: "joint",
    periods: { wk1mon: true, wk1wed: false, wk1fri: false, wk2mon: false, wk2wed: false, wk2fri: false, post: false },
  },
  {
    activity: "Process mapping sessions",
    time: "~3h",
    type: "joint",
    periods: { wk1mon: false, wk1wed: true, wk1fri: false, wk2mon: false, wk2wed: false, wk2fri: false, post: false },
  },
  {
    activity: "Data & tooling assessment",
    time: "—",
    type: "aiflow",
    periods: { wk1mon: false, wk1wed: true, wk1fri: false, wk2mon: false, wk2wed: false, wk2fri: false, post: false },
  },
  {
    activity: "Use case identification & scoring",
    time: "~3h",
    type: "joint",
    periods: { wk1mon: false, wk1wed: false, wk1fri: true, wk2mon: false, wk2wed: false, wk2fri: false, post: false },
  },
  {
    activity: "Mid-point input & validation",
    time: "~1h",
    type: "client",
    periods: { wk1mon: false, wk1wed: false, wk1fri: true, wk2mon: false, wk2wed: false, wk2fri: false, post: false },
  },
  {
    activity: "Architecture & deployment planning",
    time: "~3h",
    type: "joint",
    periods: { wk1mon: false, wk1wed: false, wk1fri: false, wk2mon: true, wk2wed: false, wk2fri: false, post: false },
  },
  {
    activity: "Governance & integration review",
    time: "~3h",
    type: "joint",
    periods: { wk1mon: false, wk1wed: false, wk1fri: false, wk2mon: false, wk2wed: true, wk2fri: false, post: false },
  },
  {
    activity: "Roadmap finalisation & sign-off",
    time: "~2h",
    type: "joint",
    periods: { wk1mon: false, wk1wed: false, wk1fri: false, wk2mon: false, wk2wed: false, wk2fri: true, post: false },
  },
  {
    activity: "Final review & feedback",
    time: "~1h",
    type: "client",
    periods: { wk1mon: false, wk1wed: false, wk1fri: false, wk2mon: false, wk2wed: false, wk2fri: true, post: false },
  },
  {
    activity: "Deliverable compilation",
    time: "—",
    type: "aiflow",
    periods: { wk1mon: false, wk1wed: false, wk1fri: false, wk2mon: false, wk2wed: false, wk2fri: false, post: true },
  },
  {
    activity: "Follow-up call",
    time: "30 min",
    type: "joint",
    periods: { wk1mon: false, wk1wed: false, wk1fri: false, wk2mon: false, wk2wed: false, wk2fri: false, post: true },
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
      iconColor: colors.primary,
      iconBg: colors.primary + "20",
      iconBorder: colors.primary + "40",
    },
    {
      icon: ClipboardList,
      title: "Prioritised Roadmap",
      description:
        "A shortlist of AI initiatives scored against business impact, implementation complexity, and available resources.",
      iconColor: colors.success,
      iconBg: colors.success + "20",
      iconBorder: colors.success + "40",
    },
    {
      icon: Users,
      title: "Shared Reference",
      description:
        "A working document that gives all participants — technical and non-technical — a common basis for decisions going forward.",
      iconColor: colors.secondary,
      iconBg: colors.secondary + "20",
      iconBorder: colors.secondary + "40",
    },
    {
      icon: TrendingUp,
      title: "Business Case Draft",
      description:
        "Initial estimates of effort, resource requirements, and expected impact for the top-ranked initiatives.",
      iconColor: colors.secondary,
      iconBg: colors.secondary + "20",
      iconBorder: colors.secondary + "40",
    },
  ];

  const processSteps = [
    {
      title: "Preparation",
      description:
        "We spend time with your context before the session — processes, tools, organisational structure. Participants receive a brief in advance.",
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
      iconColor: colors.primary,
      iconBg: colors.primary + "20",
      iconBorder: colors.primary + "40",
    },
    {
      icon: Sparkles,
      title: "Run by practitioners",
      description:
        "Our facilitators build and deploy AI systems professionally. They can engage with technical and operational questions in equal depth.",
      iconColor: colors.secondary,
      iconBg: colors.secondary + "20",
      iconBorder: colors.secondary + "40",
    },
    {
      icon: Target,
      title: "Documented output",
      description:
        "The session produces a written record — opportunity map, prioritised roadmap, business case draft — that participants can use after the day.",
      iconColor: colors.secondary,
      iconBg: colors.secondary + "20",
      iconBorder: colors.secondary + "40",
    },
    {
      icon: Globe,
      title: "English & German",
      description:
        "Workshops delivered in English or German, in-person or remotely, across Europe, the Gulf, and North Africa.",
      iconColor: colors.success,
      iconBg: colors.success + "20",
      iconBorder: colors.success + "40",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="relative">
        {/* ── Hero ── */}
        <section className="relative pt-40 pb-32 px-6 overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-16 items-center">
              <div className="space-y-8">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium"
                  style={{
                    borderColor: colors.secondary + "40",
                    backgroundColor: colors.secondary + "15",
                    color: colors.secondary,
                  }}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Available in English &amp; German · In-person or remote
                </div>
                <div className="space-y-6">
                  <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                    style={{
                      letterSpacing: "-0.02em",
                      color: colors.lightGrey,
                    }}
                  >
                    AI workshops grounded
                    <br />
                    <span
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      in your operations.
                    </span>
                  </h1>
                  <p
                    className="text-lg md:text-xl max-w-3xl"
                    style={{ color: colors.lightGrey, lineHeight: "1.6" }}
                  >
                    We work through your actual processes with your team,
                    identify where AI has a realistic role, and document what
                    should be built — and in what order.
                  </p>
                  <p
                    className="text-lg md:text-xl max-w-3xl"
                    style={{ color: colors.lightGrey, lineHeight: "1.6" }}
                  >
                    Whether your organisation is evaluating AI for the first
                    time or looking to scale existing initiatives, the format
                    adapts to where you are.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact#calendly" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="text-base px-6 py-6 h-auto w-full sm:w-auto font-semibold hover:opacity-90 transition-opacity inline-flex"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                        color: "#FAFAFA",
                        border: "none",
                      }}
                    >
                      Book a Scoping Call
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <a href="#formats" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-base px-6 py-6 h-auto w-full sm:w-auto font-semibold transition-all"
                      style={{
                        borderColor: colors.grey + "50",
                        color: colors.lightGrey,
                      }}
                    >
                      See Workshop Formats
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Recognition ── */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center space-y-6">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ letterSpacing: "-0.02em", color: colors.lightGrey }}
              >
                Who this is for
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: colors.lightGrey }}
              >
                These workshops are designed for teams in situations like:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-8 text-left">
                {recognitionStatements.map((point) => (
                  <div
                    key={point}
                    className="group relative p-4 rounded-lg border overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundColor: colors.darkGrey + "60",
                      borderColor: colors.grey + "30",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = colors.secondary + "60";
                      e.currentTarget.style.boxShadow = `0 8px 24px ${colors.secondary}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = colors.grey + "30";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${colors.secondary}10, transparent)`,
                      }}
                    />
                    <p className="text-m relative" style={{ color: colors.lightGrey }}>
                      "{point}"
                    </p>
                  </div>
                ))}
              </div>
              <p
                className="text-lg font-semibold mt-6"
                style={{ color: colors.lightGrey }}
              >
                If several of these apply, a workshop is likely a useful first step.
              </p>
            </div>
          </div>
        </section>

        {/* ── Two Workshop Tracks ── */}
        <section id="formats" className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ letterSpacing: "-0.02em", color: colors.lightGrey }}
              >
                Two workshop{" "}
                <span style={{ color: colors.primary }}>formats.</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.lightGrey }}>
                The right format depends on where your organisation is with AI
                today. Both can be run in English or German.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Track 1 */}
              <div
                className="relative rounded-2xl p-8 border flex flex-col"
                style={{
                  backgroundColor: colors.mediumGrey + "30",
                  borderColor: colors.secondary + "40",
                  boxShadow: `0 4px 32px ${colors.secondary}15`,
                }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border"
                    style={{
                      backgroundColor: colors.secondary + "20",
                      borderColor: colors.secondary + "40",
                    }}
                  >
                    <BookOpen className="w-6 h-6" style={{ color: colors.secondary }} />
                  </div>
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-widest mb-1"
                      style={{ color: colors.secondary }}
                    >
                      Track 1
                    </div>
                    <h3
                      className="text-xl font-bold"
                      style={{ color: colors.lightGrey }}
                    >
                      AI Awareness &amp; Quick Wins
                    </h3>
                  </div>
                </div>

                <p className="text-m mb-6" style={{ color: colors.lightGrey, lineHeight: "1.6" }}>
                  For teams that are informed about AI in general terms but
                  haven't yet connected it to their own work. We go through your
                  operations together, identify where AI applies, and document
                  the opportunities worth pursuing — in order of priority.
                </p>

                <div
                  className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl"
                  style={{ backgroundColor: colors.darkGrey + "80" }}
                >
                  <div>
                    <div className="text-xs font-medium mb-1" style={{ color: colors.grey }}>
                      Duration
                    </div>
                    <div className="text-sm font-semibold" style={{ color: colors.lightGrey }}>
                      2 days
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium mb-1" style={{ color: colors.grey }}>
                      Group size
                    </div>
                    <div className="text-sm font-semibold" style={{ color: colors.lightGrey }}>
                      5–25 participants
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium mb-1" style={{ color: colors.grey }}>
                      Format
                    </div>
                    <div className="text-sm font-semibold" style={{ color: colors.lightGrey }}>
                      In-person or remote
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium mb-1" style={{ color: colors.grey }}>
                      Technical level
                    </div>
                    <div className="text-sm font-semibold" style={{ color: colors.lightGrey }}>
                      No coding required
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div
                    className="text-xs font-semibold uppercase tracking-widest mb-3"
                    style={{ color: colors.grey }}
                  >
                    Who it is for
                  </div>
                  <ul className="space-y-2">
                    {[
                      "C-suite and department heads exploring AI strategy",
                      "Operational teams encountering AI tools for the first time",
                      "Companies building internal AI literacy before investing",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: colors.secondary, boxShadow: `0 0 6px ${colors.secondary}60` }}
                        />
                        <span className="text-m" style={{ color: colors.lightGrey }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <div
                    className="text-xs font-semibold uppercase tracking-widest mb-3"
                    style={{ color: colors.grey }}
                  >
                    You walk away with
                  </div>
                  <ul className="space-y-2">
                    {[
                      "A prioritised shortlist of 5–10 AI use cases specific to your operations",
                      "A quick-win roadmap: what to automate first, and what to leave for later",
                      "A shared AI vocabulary so your team can evaluate vendors with confidence",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ color: colors.success }}
                        />
                        <span className="text-m" style={{ color: colors.lightGrey }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Link to="/contact#calendly">
                    <Button
                      size="lg"
                      className="w-full text-base py-5 h-auto font-semibold hover:opacity-90 transition-opacity"
                      style={{
                        background: `linear-gradient(135deg, ${colors.secondary}, ${colors.secondary}CC)`,
                        color: "#0a0a0a",
                        border: "none",
                      }}
                    >
                      Book Track 1
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Track 2 */}
              <div
                className="relative rounded-2xl p-8 border flex flex-col"
                style={{
                  backgroundColor: colors.mediumGrey + "30",
                  borderColor: colors.primary + "40",
                  boxShadow: `0 4px 32px ${colors.primary}15`,
                }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border"
                    style={{
                      backgroundColor: colors.primary + "20",
                      borderColor: colors.primary + "40",
                    }}
                  >
                    <Rocket className="w-6 h-6" style={{ color: colors.primary }} />
                  </div>
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-widest mb-1"
                      style={{ color: colors.primary }}
                    >
                      Track 2
                    </div>
                    <h3
                      className="text-xl font-bold"
                      style={{ color: colors.lightGrey }}
                    >
                      AI Transformation &amp; Scale
                    </h3>
                  </div>
                </div>

                <p className="text-m mb-6" style={{ color: colors.lightGrey, lineHeight: "1.6" }}>
                  For teams that have validated AI use cases and are working out
                  how to move them into production. We focus on architecture,
                  data pipelines, deployment approach, and governance — working
                  from your existing stack to produce a plan your engineering
                  team can implement.
                </p>

                <div
                  className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl"
                  style={{ backgroundColor: colors.darkGrey + "80" }}
                >
                  <div>
                    <div className="text-xs font-medium mb-1" style={{ color: colors.grey }}>
                      Duration
                    </div>
                    <div className="text-sm font-semibold" style={{ color: colors.lightGrey }}>
                      2 weeks
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium mb-1" style={{ color: colors.grey }}>
                      Group size
                    </div>
                    <div className="text-sm font-semibold" style={{ color: colors.lightGrey }}>
                      5–15 participants
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium mb-1" style={{ color: colors.grey }}>
                      Format
                    </div>
                    <div className="text-sm font-semibold" style={{ color: colors.lightGrey }}>
                      In-person preferred
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium mb-1" style={{ color: colors.grey }}>
                      Technical level
                    </div>
                    <div className="text-sm font-semibold" style={{ color: colors.lightGrey }}>
                      Engineering + ops
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div
                    className="text-xs font-semibold uppercase tracking-widest mb-3"
                    style={{ color: colors.grey }}
                  >
                    Who it is for
                  </div>
                  <ul className="space-y-2">
                    {[
                      "CTOs and engineering leads with existing AI proofs-of-concept",
                      "Companies that ran pilots but struggle to reach production",
                      "Teams building internal AI infrastructure for the first time",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: colors.primary, boxShadow: `0 0 6px ${colors.primary}60` }}
                        />
                        <span className="text-m" style={{ color: colors.lightGrey }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <div
                    className="text-xs font-semibold uppercase tracking-widest mb-3"
                    style={{ color: colors.grey }}
                  >
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
                        <CheckCircle
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ color: colors.success }}
                        />
                        <span className="text-m" style={{ color: colors.lightGrey }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Link to="/contact#calendly">
                    <Button
                      size="lg"
                      className="w-full text-base py-5 h-auto font-semibold hover:opacity-90 transition-opacity"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                        color: "#FAFAFA",
                        border: "none",
                      }}
                    >
                      Book Track 2
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Not sure which track */}
            <div
              className="mt-6 p-5 rounded-xl border text-center"
              style={{
                backgroundColor: colors.darkGrey + "60",
                borderColor: colors.grey + "30",
              }}
            >
              <p className="text-m" style={{ color: colors.lightGrey }}>
                <span style={{ color: colors.lightGrey, fontWeight: 600 }}>
                  Unsure which format applies to your situation?
                </span>{" "}
                Book a scoping call. We'll ask a few questions and give you a
                clear recommendation.{" "}
                <Link
                  to="/contact#calendly"
                  className="font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
                  style={{ color: colors.primary }}
                >
                  Help me choose →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ── Deliverables ── */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ letterSpacing: "-0.02em", color: colors.lightGrey }}
              >
                What you{" "}
                <span style={{ color: colors.primary }}>walk away with</span>
              </h2>
              <p className="text-lg" style={{ color: colors.lightGrey }}>
                Each session produces a written record your team can reference,
                share internally, and use as the basis for decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliverables.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-xl p-6 border"
                    style={{
                      backgroundColor: colors.mediumGrey + "30",
                      borderColor: colors.grey + "20",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 border"
                      style={{
                        backgroundColor: item.iconBg,
                        borderColor: item.iconBorder,
                      }}
                    >
                      <IconComponent className="w-5 h-5" style={{ color: item.iconColor }} />
                    </div>
                    <h3 className="text-lg font-semibold mb-3" style={{ color: colors.lightGrey }}>
                      {item.title}
                    </h3>
                    <p className="text-m leading-relaxed" style={{ color: colors.lightGrey }}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── How We Run It ── */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ letterSpacing: "-0.02em", color: colors.lightGrey }}
              >
                How we{" "}
                <span style={{ color: colors.primary }}>work</span>
              </h2>
              <p className="text-lg" style={{ color: colors.lightGrey }}>
                The session is structured around your operations, not a
                standard agenda. Preparation matters as much as the day itself.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="group relative rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    backgroundColor: colors.mediumGrey + "50",
                    borderColor: colors.grey + "30",
                    boxShadow: `0 4px 20px rgba(0,0,0,0.3), 0 0 0 1px ${colors.grey}20`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.primary + "60";
                    e.currentTarget.style.boxShadow = `0 12px 40px rgba(26,136,255,0.25), 0 0 0 1px ${colors.primary}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.grey + "30";
                    e.currentTarget.style.boxShadow = `0 4px 20px rgba(0,0,0,0.3), 0 0 0 1px ${colors.grey}20`;
                  }}
                >
                  <div
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: colors.primary }}
                  >
                    Step {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: colors.lightGrey }}>
                    {step.title}
                  </h3>
                  <p className="text-m mb-4" style={{ color: colors.primary }}>
                    {step.description}
                  </p>
                  <div
                    className="space-y-3 pt-4 border-t"
                    style={{ borderColor: colors.grey + "20" }}
                  >
                    {step.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{
                            backgroundColor: colors.success,
                            boxShadow: `0 0 6px ${colors.success}60`,
                          }}
                        />
                        <span className="text-m leading-relaxed" style={{ color: colors.lightGrey }}>
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-10">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ letterSpacing: "-0.02em", color: colors.lightGrey }}
              >
                Activities &{" "}
                <span style={{ color: colors.primary }}>time commitment</span>
              </h2>
              <p className="text-lg" style={{ color: colors.lightGrey }}>
                What each track looks like in practice — and how much time it
                requires from your side.
              </p>
            </div>

            {/* Shared legend */}
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { color: colors.primary, label: "AI Flow preparation & analysis" },
                { color: colors.secondary, label: "Your contribution" },
                { color: colors.success, label: "Joint sessions" },
              ].map(({ color, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded"
                    style={{
                      backgroundColor: color + "CC",
                      boxShadow: `0 0 6px ${color}40`,
                    }}
                  />
                  <span className="text-sm" style={{ color: colors.lightGrey }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Track 1 table */}
            <div className="mb-4">
              <button
                onClick={() => setTrack1Open((o) => !o)}
                className="w-full flex items-center justify-between gap-3 mb-3 group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: colors.secondary }}
                  />
                  <span
                    className="text-sm font-semibold uppercase tracking-widest"
                    style={{ color: colors.secondary }}
                  >
                    Track 1 — AI Awareness & Quick Wins · 2-day workshop
                  </span>
                </div>
                <ChevronDown
                  className="w-4 h-4 transition-transform duration-300 flex-shrink-0"
                  style={{
                    color: colors.secondary,
                    transform: track1Open ? "rotate(0deg)" : "rotate(-90deg)",
                  }}
                />
              </button>
              {track1Open && (
              <div
                className="overflow-x-auto rounded-xl border"
                style={{ borderColor: colors.grey + "20" }}
              >
                <table style={{ borderCollapse: "collapse", width: "100%", minWidth: "680px" }}>
                  <thead>
                    <tr style={{ backgroundColor: colors.mediumGrey + "40" }}>
                      <th
                        className="text-left px-5 py-3 text-sm font-semibold"
                        style={{ color: colors.lightGrey, width: "34%", borderBottom: `1px solid ${colors.grey}30`, borderRight: `1px solid ${colors.grey}25` }}
                      >
                        Activity
                      </th>
                      <th
                        className="text-left px-4 py-3 text-sm font-medium"
                        style={{ color: colors.grey, width: "16%", borderBottom: `1px solid ${colors.grey}30`, borderRight: `1px solid ${colors.grey}25` }}
                      >
                        Your time
                      </th>
                      {track1Periods.map((p, i) => (
                        <th
                          key={p.key}
                          className="text-center px-3 py-3 text-xs font-semibold uppercase tracking-wider"
                          style={{ color: colors.grey, width: "10%", borderBottom: `1px solid ${colors.grey}30`, borderRight: i < track1Periods.length - 1 ? `1px solid ${colors.grey}25` : "none" }}
                        >
                          {p.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {track1Activities.map((row, rowIdx) => (
                      <tr key={row.activity} style={{ backgroundColor: rowIdx % 2 === 0 ? colors.darkGrey + "50" : "transparent" }}>
                        <td className="px-5 py-3 text-sm" style={{ color: colors.lightGrey, borderBottom: `1px solid ${colors.grey}15`, borderRight: `1px solid ${colors.grey}20` }}>
                          {row.activity}
                        </td>
                        <td className="px-4 py-3 text-sm" style={{ color: colors.grey, borderBottom: `1px solid ${colors.grey}15`, borderRight: `1px solid ${colors.grey}20` }}>
                          {row.time}
                        </td>
                        {track1Periods.map((p, i) => (
                          <td key={p.key} className="px-2 py-3 text-center" style={{ borderBottom: `1px solid ${colors.grey}15`, borderRight: i < track1Periods.length - 1 ? `1px solid ${colors.grey}15` : "none" }}>
                            {row.periods[p.key] && (
                              <div
                                className="h-5 rounded mx-auto"
                                style={{ backgroundColor: activityTypeColor[row.type] + "CC", boxShadow: `0 0 8px ${activityTypeColor[row.type]}40`, maxWidth: "80px" }}
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
                className="w-full flex items-center justify-between gap-3 mb-3 group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: colors.primary }}
                  />
                  <span
                    className="text-sm font-semibold uppercase tracking-widest"
                    style={{ color: colors.primary }}
                  >
                    Track 2 — AI Transformation & Scale · 2-week workshop
                  </span>
                </div>
                <ChevronDown
                  className="w-4 h-4 transition-transform duration-300 flex-shrink-0"
                  style={{
                    color: colors.primary,
                    transform: track2Open ? "rotate(0deg)" : "rotate(-90deg)",
                  }}
                />
              </button>
              {track2Open && (
              <div
                className="overflow-x-auto rounded-xl border"
                style={{ borderColor: colors.grey + "20" }}
              >
                <table style={{ borderCollapse: "collapse", width: "100%", minWidth: "680px" }}>
                  <thead>
                    <tr style={{ backgroundColor: colors.mediumGrey + "40" }}>
                      <th
                        className="text-left px-5 py-3 text-sm font-semibold"
                        style={{ color: colors.lightGrey, width: "34%", borderBottom: `1px solid ${colors.grey}30`, borderRight: `1px solid ${colors.grey}25` }}
                      >
                        Activity
                      </th>
                      <th
                        className="text-left px-4 py-3 text-sm font-medium"
                        style={{ color: colors.grey, width: "16%", borderBottom: `1px solid ${colors.grey}30`, borderRight: `1px solid ${colors.grey}25` }}
                      >
                        Your time
                      </th>
                      {track2Periods.map((p, i) => (
                        <th
                          key={p.key}
                          className="text-center px-3 py-3 text-xs font-semibold uppercase tracking-wider"
                          style={{ color: colors.grey, width: "10%", borderBottom: `1px solid ${colors.grey}30`, borderRight: i < track2Periods.length - 1 ? `1px solid ${colors.grey}25` : "none" }}
                        >
                          {p.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {track2Activities.map((row, rowIdx) => (
                      <tr key={row.activity} style={{ backgroundColor: rowIdx % 2 === 0 ? colors.darkGrey + "50" : "transparent" }}>
                        <td className="px-5 py-3 text-sm" style={{ color: colors.lightGrey, borderBottom: `1px solid ${colors.grey}15`, borderRight: `1px solid ${colors.grey}20` }}>
                          {row.activity}
                        </td>
                        <td className="px-4 py-3 text-sm" style={{ color: colors.grey, borderBottom: `1px solid ${colors.grey}15`, borderRight: `1px solid ${colors.grey}20` }}>
                          {row.time}
                        </td>
                        {track2Periods.map((p, i) => (
                          <td key={p.key} className="px-2 py-3 text-center" style={{ borderBottom: `1px solid ${colors.grey}15`, borderRight: i < track2Periods.length - 1 ? `1px solid ${colors.grey}15` : "none" }}>
                            {row.periods[p.key] && (
                              <div
                                className="h-5 rounded mx-auto"
                                style={{ backgroundColor: activityTypeColor[row.type] + "CC", boxShadow: `0 0 8px ${activityTypeColor[row.type]}40`, maxWidth: "80px" }}
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
          </div>
        </section>

        {/* ── Facilitators ── */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ letterSpacing: "-0.02em", color: colors.lightGrey }}
              >
                Who{" "}
                <span style={{ color: colors.primary }}>facilitates</span>
              </h2>
              <p className="text-lg max-w-2xl" style={{ color: colors.lightGrey }}>
                Both of us have built and deployed AI systems professionally.
                We can engage with your operational questions and technical
                questions in equal depth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {teamArray.map((member) => (
                <div
                  key={member.id}
                  className="rounded-2xl p-8 border flex flex-col sm:flex-row gap-6"
                  style={{
                    backgroundColor: colors.mediumGrey + "30",
                    borderColor: colors.grey + "20",
                    boxShadow: `0 4px 20px rgba(0,0,0,0.2)`,
                  }}
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0 border-2"
                    style={{ borderColor: colors.primary + "40" }}
                  />
                  <div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: colors.lightGrey }}>
                      {member.name}
                    </h3>
                    <p
                      className="text-sm font-medium mb-3"
                      style={{ color: colors.primary }}
                    >
                      {member.role}
                    </p>
                    <p className="text-m leading-relaxed" style={{ color: colors.lightGrey }}>
                      {member.bio}
                    </p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium hover:opacity-80 transition-opacity"
                      style={{ color: colors.primary }}
                    >
                      LinkedIn profile →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Differentiators ── */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ letterSpacing: "-0.02em", color: colors.lightGrey }}
              >
                What to{" "}
                <span style={{ color: colors.primary }}>expect</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-xl p-6 border"
                    style={{
                      backgroundColor: colors.mediumGrey + "30",
                      borderColor: colors.grey + "20",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 border"
                      style={{
                        backgroundColor: item.iconBg,
                        borderColor: item.iconBorder,
                      }}
                    >
                      <IconComponent className="w-5 h-5" style={{ color: item.iconColor }} />
                    </div>
                    <h3 className="text-lg font-semibold mb-3" style={{ color: colors.lightGrey }}>
                      {item.title}
                    </h3>
                    <p className="text-m leading-relaxed" style={{ color: colors.lightGrey }}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* ── Final CTA ── */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-7xl text-center">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ letterSpacing: "-0.02em", color: colors.lightGrey }}
            >
              Start with a{" "}
              <span
                style={{
                  backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                conversation.
              </span>
            </h2>
            <p
              className="text-lg mb-10 max-w-xl mx-auto"
              style={{ color: colors.lightGrey }}
            >
              We'll spend 30 minutes understanding your situation and let you
              know whether a workshop is the right next step — and which format
              fits. Delivered in English or German, in-person or remotely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact#calendly">
                <Button
                  size="lg"
                  className="text-base px-8 py-6 h-auto font-semibold hover:opacity-90 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                    color: "#FAFAFA",
                    border: "none",
                  }}
                >
                  Book a Scoping Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-6 h-auto font-semibold transition-all"
                  style={{
                    borderColor: colors.grey + "50",
                    color: colors.lightGrey,
                  }}
                >
                  Get in touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Workshops;
