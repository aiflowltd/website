import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteLink } from "@/components/SiteLink";

const services = [
  {
    icon: "/images/icons/services-ai-strategy.svg",
    title: "AI Strategy Consulting",
    subtitle: "Explore",
    description:
      "4-hour session to understand your processes, identify AI opportunities, and answer your questions.",
    link: "/services#ai-strategy",
    linkText: "View AI strategy consulting",
  },
  {
    icon: "/images/icons/services-discovery.svg",
    title: "Discovery Workshop",
    subtitle: "Understand",
    description:
      "2-week audit of your system and AI proof of value. We map your data, processes, and deliver a clear roadmap.",
    link: "/services#ai-engineering",
    linkText: "Explore discovery workshops",
  },
  {
    icon: "/images/icons/services-custom-agents.svg",
    title: "Custom AI Agents",
    subtitle: "Build",
    description:
      "We deliver AI-native results, measure impact, and iterate on feedback until the system brings real impact.",
    link: "/services#data-systems",
    linkText: "Learn more about the service",
  },
];

export const ServicesSection = () => {
  return (
    <Section id="services" scrollMargin>
      <SectionHeader
        title="Services built for real delivery"
        subtitle="We help teams move from AI ideas to systems that run reliably over time"
        variant="centered"
      />

      <div className="grid md:grid-cols-3 gap-6 rounded-2xl border border-dashed border-border p-6">
        {services.map((service, index) => {
          const hoverGradientClasses =
            index === 0
              ? "hover:bg-gradient-to-br hover:from-primary/50 hover:via-sky-500/40 hover:to-secondary/50"
              : index === 1
                ? "hover:bg-gradient-to-tr hover:from-secondary/40 hover:via-secondary/20 hover:to-primary/40"
                : "hover:bg-gradient-to-tl hover:from-success/50 hover:via-success/30 hover:to-secondary/50";

          return (
            <div
              key={index}
              className={`group flex flex-col p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 ${hoverGradientClasses}`}
            >
              {/* Icon: 56×56, radial gradient, inset ring, icon 24×24 centered, opacity 0.6 */}
              <div
                className="relative w-14 h-14 flex-none shrink-0 order-0 grow-0 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0)_30%,rgba(255,255,255,0.15)_100%)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] mb-4"
                style={{ mixBlendMode: "normal" }}
              >
                <img
                  src={service.icon}
                  alt=""
                  className="absolute left-1/2 top-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 opacity-90"
                  aria-hidden
                />
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                {service.subtitle}
              </p>
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              <SiteLink
                to={service.link}
                arrow="right"
                className="text-sm mt-auto hover:underline"
              >
                {service.linkText}
              </SiteLink>
            </div>
          );
        })}
      </div>

      <p className="text-center text-muted-foreground mt-8">
        Have questions about our services or how we work?{" "}
        <span className="text-foreground font-semibold">
          Ask our AI on the right.
        </span>
      </p>
    </Section>
  );
};
