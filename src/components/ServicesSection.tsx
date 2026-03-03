import { useState } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const primaryServices = services.slice(0, 3);
  const moreServices = services.slice(3);

  return (
    <section id="services" className="relative py-24 px-6 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-alternates mb-4">
            Our <span className="text-primary font-alternates">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI solutions to transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {primaryServices.map((service, index) => {
            const isLastPrimary =
              !showAll && index === primaryServices.length - 1;

            const hoverGradientClasses =
              index === 0
                ? "hover:bg-gradient-to-br hover:from-primary/50 hover:via-sky-500/40 hover:to-secondary/50"
                : index === 1
                ? "hover:bg-gradient-to-tr hover:from-secondary/40 hover:via-secondary/20 hover:to-primary/40"
                : "hover:bg-gradient-to-tl hover:from-success/50 hover:via-success/30 hover:to-secondary/50";

            return (
              <div
                key={index}
                className={isLastPrimary ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <ServiceCard
                  service={service}
                  variant="compact"
                  className={hoverGradientClasses}
                />
              </div>
            );
          })}
          {showAll &&
            moreServices.map((service, index) => (
              <ServiceCard
                key={primaryServices.length + index}
                service={service}
                variant="compact"
              />
            ))}
        </div>

        <button
          type="button"
          className="mt-10 mx-auto block text-primary underline underline-offset-4 text-sm md:text-base"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show fewer services" : "More services"}
        </button>
      </div>
    </section>
  );
};
