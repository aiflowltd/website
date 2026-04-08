import { Link } from "react-router-dom";
import { SiteButton } from "@/components/SiteButton";
import { ClientsCarousel } from "@/components/ClientsCarousel";

const DotGrid = () => (
  <div
    className="absolute inset-0 pointer-events-none overflow-hidden"
    aria-hidden
  >
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="hero-dotgrid"
          x="0"
          y="0"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1" fill="#0E1015" fillOpacity="0.06" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-dotgrid)" />
    </svg>
  </div>
);

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 bg-background overflow-hidden">
      <DotGrid />

      <div className="container mx-auto max-w-6xl relative z-10 w-full">
        <p className="text-sm font-light text-muted-foreground tracking-widest uppercase mb-6 font-sans">
          Nothing lost between teams.
        </p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold font-alternates my-10 leading-[1.1] text-foreground">
          Compliance infrastructure for
          <br />
          <span className="font-extralight">regulated financial services.</span>
        </h1>

        <div className="flex flex-wrap gap-4 mb-12">
          <Link to="/contact">
            <SiteButton variant="primary" arrow="up-right">
              Book a diagnostic call
            </SiteButton>
          </Link>
          <Link to="/#how-we-work">
            <SiteButton variant="secondary" arrow={false}>
              See how it works →
            </SiteButton>
          </Link>
        </div>
      </div>

      <ClientsCarousel embedInHero />
    </section>
  );
};
