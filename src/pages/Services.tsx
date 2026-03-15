import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { SiteButton } from "@/components/SiteButton";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceBlock } from "@/components/ServiceBlock";
import { services } from "@/data/services";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    document.title = "AI Flow | Services";
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        <Section padding="hero" className="!pb-8">
          <SectionHeader
            title="Our services"
            subtitle="Three entry points. One delivery standard. Each engagement is scoped for clarity, with defined deliverables and timelines. Below: what each service includes, who it’s for, and how to see proof."
            variant="centered"
            titleClassName="text-4xl md:text-6xl font-alternates text-foreground"
            subtitleClassName="text-lg text-grey max-w-3xl mx-auto leading-relaxed"
          />
        </Section>

        <Section padding="compact" className="pt-2">
          <div className="relative rounded-2xl border border-border bg-gradient-to-br from-medium-grey/50 to-dark-grey/50 p-6 md:p-8 overflow-hidden">
            <h2 className="text-xl md:text-2xl font-bold font-alternates text-foreground text-center mb-2">
              Ask our AI about our services
            </h2>
            <p className="text-grey text-center max-w-2xl mx-auto mb-6">
              Not sure which service fits your situation? Ask about what we
              offer, typical timelines, industries we work with, or how we'd
              approach your use case.
            </p>
            <div className="w-full flex justify-center">
              <iframe
                title="Ask about AI Flow services"
                className="rounded-xl border-0 w-full max-w-[900px] block"
                style={{
                  boxShadow: "0 20px 24px rgba(0, 0, 0, 0.24)",
                }}
                src="https://app.datacards.ai/a/aiflow/services?theme=dark&scale=0"
                height="300px"
              />
            </div>
          </div>
        </Section>

        <Section>
          <div className="space-y-12 md:space-y-16">
            {services.map((service) => (
              <ServiceBlock key={service.slug} service={service} />
            ))}
          </div>
        </Section>

        <Section>
          <div className="rounded-2xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-10 md:p-14 text-center">
            <SectionHeader
              title="Ready to get started?"
              subtitle="Book a scoping call or explore our case studies to see how we deliver."
              variant="centered"
              titleClassName="text-2xl md:text-3xl font-alternates text-foreground"
              subtitleClassName="text-grey max-w-xl mx-auto mb-8"
              action={
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact#calendly">
                    <SiteButton variant="primary" arrow="up-right">
                      Book a scoping call
                    </SiteButton>
                  </Link>
                  <Link to="/case-studies">
                    <SiteButton variant="secondary">View case studies</SiteButton>
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

export default Services;
