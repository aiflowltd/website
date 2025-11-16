import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { Button } from "./ui/button";

export const ServicesSection = () => {
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
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} variant="compact" />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 text-lg px-12 py-6 h-auto font-semibold"
          >
            How does it work?
          </Button>
        </div>
      </div>
    </section>
  );
};
