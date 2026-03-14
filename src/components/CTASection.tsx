import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-10 md:p-16 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Ready to build something real?
          </p>
          <h2 className="text-4xl md:text-5xl font-alternates text-muted-foreground  mb-4">
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
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 font-semibold px-8 py-6 h-auto text-base"
              >
                Let's talk
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:border-primary hover:text-primary font-semibold px-8 py-6 h-auto text-base"
              >
                See our work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
