import { Link } from "react-router-dom";
import { SiteButton } from "@/components/SiteButton";
import { LabelBadge } from "@/components/LabelBadge";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-6xl">
        <LabelBadge className="mb-8">AI Native. Outcome Driven.</LabelBadge>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold font-alternates mb-12 leading-[1.1]">
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

        <div className="relative mb-0 mt-20 rounded-2xl border border-border bg-gradient-to-br from-medium-grey/50 to-dark-grey/50 p-6 md:p-8 overflow-hidden">
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
