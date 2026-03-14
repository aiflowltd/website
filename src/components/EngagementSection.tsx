import { Link } from "react-router-dom";
import { SiteButton } from "@/components/SiteButton";
import {
  ArrowUpRight,
  Search,
  CheckCircle,
  User,
  Box,
  Briefcase,
} from "lucide-react";
import { AI_FLOW_LOGO_SYMBOL } from "@/constants/images";

const AdvisoryIllustration = () => (
  <div className="relative h-48 overflow-hidden">
    {/* Abstract horizontal lines */}
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 500 200"
      fill="none"
    >
      <path
        d="M80 80 Q160 80 200 60 Q240 40 320 50 Q380 56 440 50"
        stroke="white"
        strokeOpacity="0.06"
        strokeWidth="1.5"
      />
      <path
        d="M80 100 Q160 100 220 85 Q280 70 340 78 Q400 84 460 78"
        stroke="white"
        strokeOpacity="0.06"
        strokeWidth="1.5"
      />
      <path
        d="M80 120 Q160 120 230 108 Q300 96 360 104 Q420 112 480 106"
        stroke="white"
        strokeOpacity="0.06"
        strokeWidth="1.5"
      />
    </svg>
    {/* Glow */}
    <div
      className="absolute w-40 h-20 rounded-full blur-3xl opacity-30 "
      style={{ top: "30%", left: "20%" }}
    />
    {/* Magnifying glass icon */}
    <div className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
      <Search className="w-5 h-5 text-white/40" />
    </div>
    {/* Checkmark circle */}
    <div className="absolute right-16 top-8 w-11 h-11 rounded-full bg-success/20 border border-success/30 flex items-center justify-center">
      <CheckCircle className="w-5 h-5 text-success" />
    </div>
  </div>
);

const TeamAugIllustration = () => (
  <div className="relative h-48 overflow-hidden">
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 500 200"
      fill="none"
    >
      <path
        d="M60 90 Q150 90 200 75 Q250 60 320 70 Q380 78 450 72"
        stroke="white"
        strokeOpacity="0.06"
        strokeWidth="1.5"
      />
      <path
        d="M60 110 Q150 110 220 98 Q290 86 360 94 Q430 102 480 96"
        stroke="white"
        strokeOpacity="0.06"
        strokeWidth="1.5"
      />
      <path
        d="M60 130 Q150 130 240 118 Q330 106 400 114 Q460 120 500 116"
        stroke="white"
        strokeOpacity="0.06"
        strokeWidth="1.5"
      />
    </svg>
    <div
      className="absolute w-32 h-16 rounded-full blur-3xl opacity-20"
      style={{ top: "30%", right: "20%" }}
    />
    {/* Person icon */}
    <div className="absolute right-28 top-1/2 -translate-y-1/2 w-11 h-11 rounded-lgborder border-primary/20 flex items-center justify-center">
      <User className="w-5 h-5 text-primary/70" />
    </div>
    {/* Cube/box icon */}
    <div className="absolute right-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-lg border border-secondary/20 flex items-center justify-center">
      <Box className="w-5 h-5 text-secondary/70" />
    </div>
  </div>
);

const SmallTeamIllustration = () => {
  const rows = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6],
  ];

  return (
    <div className="relative h-48 overflow-hidden flex items-center justify-center">
      <div className="absolute w-24 h-24 rounded-full blur-3xl opacity-40 " />
      <div className="flex flex-col gap-2 items-center">
        {rows.map((row, ri) => (
          <div key={ri} className="flex gap-2">
            {row.map((_, ci) => {
              const isCenter = ri === 0 && (ci === 3 || ci === 4);
              return (
                <div
                  key={ci}
                  className={`w-7 h-7 rounded-full flex items-center justify-center ${
                    isCenter
                      ? "bg-primary/20 border border-primary/30"
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  <User
                    className={`w-3.5 h-3.5 ${isCenter ? "text-primary/60" : "text-white/25"}`}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

const PartnerTeamIllustration = () => (
  <div className="relative h-48 overflow-hidden flex items-center justify-center">
    {/* Dashed circle — using a div to guarantee roundness */}
    <div className="absolute w-[120px] h-[120px] rounded-full border border-dashed border-white/10" />
    {/* Abstract rays */}
    <div className="absolute w-48 h-1 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent rotate-12" />
    <div className="absolute w-48 h-1 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -rotate-12" />
    <div className="absolute w-36 h-16 rounded-full blur-3xl opacity-20 " />
    {/* Icons */}
    <div className="relative flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
        <img
          src={AI_FLOW_LOGO_SYMBOL}
          alt="AI Flow"
          className="w-7 h-auto object-contain brightness-200"
        />
      </div>
      <div className="w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
        <Briefcase className="w-5 h-5 text-white/50" />
      </div>
    </div>
  </div>
);

const illustrations = [
  AdvisoryIllustration,
  TeamAugIllustration,
  SmallTeamIllustration,
  PartnerTeamIllustration,
];

const engagementModels = [
  {
    tagline: "You need direction & decisions",
    title: "Advisory",
    description:
      "Senior guidance to validate strategy, architecture, and critical AI decisions before and during delivery.",
    highlight: "success" as const,
  },
  {
    tagline: "You need delivery acceleration",
    title: "Team augmentation",
    description: "A senior engineer embedded in your team to drive delivery.",
    highlight: "primary" as const,
  },
  {
    tagline: "You need focused builds",
    title: "Small delivery team",
    description:
      "A compact team owning end-to-end delivery of a defined system.",
    highlight: "primary" as const,
  },
  {
    tagline: "You need production-level ownership",
    title: "Partner team",
    description:
      "Full ownership of delivery for production systems, with clear accountability from build to long-term operation.",
    highlight: "primary" as const,
  },
];

export const EngagementSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-alternates mb-2">
              Where are you in your AI journey?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              We meet you at your current stage, through flexible engagement
              models.
            </p>
          </div>
          <Link to="/contact">
            <SiteButton variant="secondary">Discuss your project</SiteButton>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {engagementModels.map((model, index) => {
            const Illustration = illustrations[index];
            const highlightHoverClass =
              model.highlight === "primary"
                ? "group-hover:bg-primary group-hover:blur-[218px]"
                : "group-hover:bg-success group-hover:blur-[270px]";
            return (
              <Link
                key={model.title}
                to="/contact"
                className="group relative flex flex-col p-6 rounded-xl bg-card border border-border isolate overflow-hidden transition-all duration-300 hover:bg-dark-grey hover:border-primary/50 hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.1)]"
              >
                {/* Highlight glow – only on hover */}
                <div
                  className={`absolute w-[498px] h-[129px] -left-6 -top-16 blur-[270px] z-0 pointer-events-none opacity-0 transition-opacity duration-200 group-hover:opacity-80 ${highlightHoverClass}`}
                  aria-hidden
                />

                {/* Card-specific illustration */}
                <div className="relative z-10 w-full h-[129px] shrink-0">
                  <Illustration />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-4 pt-2">
                  <p className="font-sans font-light text-sm leading-[1.4] tracking-[0.09em] uppercase text-grey opacity-60">
                    {model.tagline}
                  </p>
                  <h3 className="font-sans font-medium text-2xl leading-[1.36] text-white">
                    {model.title}
                  </h3>
                  <hr className="border-0 border-t border-dark-grey m-0" />
                  <p className="font-sans font-light text-base leading-[1.5] text-grey">
                    {model.description}
                  </p>
                </div>

                {/* Arrow icon */}
                <div className="absolute w-7 h-7 right-4 top-4 z-20 flex items-center justify-center rounded-full border border-dark-grey transition-colors group-hover:border-white">
                  <ArrowUpRight className="w-5 h-5 text-dark-grey transition-colors group-hover:text-white" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
