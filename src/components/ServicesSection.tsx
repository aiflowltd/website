import { Compass, Search, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Compass,
    title: "AI Strategy Consulting",
    subtitle: "Explore",
    description:
      "4-hour session to understand your processes, identify AI opportunities, and answer your questions.",
    link: "/services#ai-strategy",
    linkText: "View AI strategy consulting",
  },
  {
    icon: Search,
    title: "Discovery Workshop",
    subtitle: "Understand",
    description:
      "2-week audit of your system and AI proof of value. We map your data, processes, and deliver a clear roadmap.",
    link: "/services#ai-engineering",
    linkText: "Explore discovery workshops",
  },
  {
    icon: Bot,
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
    <section id="services" className="relative py-24 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-alternates mb-4">
            Services built for real delivery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We help teams move from AI ideas to systems that run reliably over
            time
          </p>
        </div>

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
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-muted-foreground mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {service.subtitle}
                </p>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="text-sm text-primary font-semibold hover:underline mt-auto inline-flex items-center gap-1"
                >
                  {service.linkText}
                  <span className="text-primary">→</span>
                </Link>
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
      </div>
    </section>
  );
};
