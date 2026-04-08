import { Link } from "react-router-dom";
import { SiteButton } from "@/components/SiteButton";
import { Section } from "@/components/Section";

export const CTASection = () => {
  return (
    <Section maxWidth="narrow">
        <div className="rounded-2xl border border-border bg-card relative overflow-hidden p-10 md:p-16 text-center">
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-cta-color-fade pointer-events-none"
            aria-hidden
          />
          <div className="relative">
            <p className="text-sm text-muted-foreground mb-3">
              Ready to build something real?
            </p>
            <h2 className="text-4xl md:text-5xl font-alternates text-muted-foreground mb-4">
              Let's turn your{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI ambitions
              </span>
              <br />
              into reality
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Book a free consultation to discuss your project and see how we can
              help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact#calendly">
                <SiteButton variant="primary" arrow="up-right">
                  Let's talk
                </SiteButton>
              </Link>
              <Link to="/case-studies">
                <SiteButton variant="secondary">See our work</SiteButton>
              </Link>
            </div>
          </div>
        </div>
    </Section>
  );
};
