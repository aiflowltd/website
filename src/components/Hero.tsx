import { Link } from "react-router-dom";
import { SiteButton } from "@/components/SiteButton";
import { colors } from "@/constants/colors";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-6xl">
        {/* Label badge */}
        <div className="relative inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full overflow-hidden">
          {/* Black base */}
          {/* Left gradient glow — covers left ~70%, fades to transparent */}
          <div
            className="absolute inset-y-[3px] left-0 rounded-full"
            style={{
              width: "70%",
              background:
                "linear-gradient(140deg, rgba(255,255,255,0.35) 0%, rgba(200,210,230,0.18) 10%, rgba(116,141,252,0.08) 22%, transparent 35%)",
            }}
          />
          <span className="relative z-10 flex h-[7px] w-[7px] shrink-0">
            <span className="relative inline-flex rounded-full h-full w-full bg-grey animate-dot-flash" />
          </span>
          <span
            className="relative z-10 text-lg font-light tracking-wide"
            style={{
              background: "linear-gradient(135deg, #fff 0%, #6E6F81 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AI Native, Outcome Driven
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold  font-alternates mb-12 leading-[1.1]">
          We design and build
          <br />
          AI systems that scale
        </h1>

        <div className="flex flex-wrap gap-4">
          <Link to="/contact#calendly">
            <SiteButton variant="primary" arrow="up-right">
              Book a discovery call
            </SiteButton>
          </Link>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("services")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <SiteButton variant="secondary">Explore our services</SiteButton>
          </a>
        </div>

        {/* Data Cards Embed */}
        <div className="mb-16 mt-24 w-full flex justify-center">
          <iframe
            title="Datacards"
            style={{
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
              border: "none",
              display: "block",
              width: "min(100%, 900px)",
            }}
            src="https://app.datacards.ai/a/aiflow/company-questions?theme=dark&scale=0"
            height="200px"
          />
        </div>
      </div>
    </section>
  );
};
