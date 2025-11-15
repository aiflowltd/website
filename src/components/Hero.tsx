import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center max-w-6xl">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          We build AI powered
          <br />
          <span className="text-primary">products.</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto">
          In AI & ML before the wave. Building products, not hype.
        </p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-4">
            <div className="h-px w-full bg-border" />
            <h3 className="text-xl font-semibold">End-to-end products</h3>
            <p className="text-muted-foreground">Build the future</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="h-px w-full bg-border" />
            <h3 className="text-xl font-semibold">AI consulting</h3>
            <p className="text-muted-foreground">Keep up with the AI wave</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="h-px w-full bg-border" />
            <h3 className="text-xl font-semibold">ML pipelines</h3>
            <p className="text-muted-foreground">Monetize your data</p>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          size="lg"
          className="bg-foreground text-background hover:bg-foreground/90 text-lg px-12 py-6 h-auto font-semibold"
        >
          Book a call with us
        </Button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
