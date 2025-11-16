import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { ClientsCarousel } from "@/components/ClientsCarousel";
import { TeamSection } from "@/components/TeamSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { GlobalPresenceSection } from "@/components/GlobalPresenceSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "AI Flow | We build AI products";
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground ">
      <ParallaxBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <ServicesSection />
        <ClientsCarousel />
        <TeamSection />
        <GlobalPresenceSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
