import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { TheProblemSection } from "@/components/TheProblemSection";
import { WhatWeBuildSection } from "@/components/WhatWeBuildSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { MarketQuoteSection } from "@/components/MarketQuoteSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HowWeWorkSection } from "@/components/HowWeWorkSection";
import { EngagementSection } from "@/components/EngagementSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BlogSection } from "@/components/BlogSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactFormSection } from "@/components/ContactFormSection";
import { useEffect } from "react";
import { TeamSection } from "@/components/TeamSection";
import { VideoSection } from "@/components/VideoSection";
import { WhyNowSection } from "@/components/WhyNowSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  useEffect(() => {
    document.title = "AI Flow Software | Compliance infrastructure";
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground page-shell">
      <Navigation />
      <Hero />
      <TheProblemSection />
      <VideoSection
        src="/videos/aiflow-demo1.mp4"
        title="Does this look like you?"
        subtitle="The data handoff problem shows up differently depending on where your team is. The fix is the same."
        ctaText="Contact us"
        ctaHref="/contact"
      />
      <WhatWeBuildSection />
      <WhyUsSection />
      <MarketQuoteSection />
      <WhyNowSection />
      <ServicesSection />
      <HowWeWorkSection />
      <EngagementSection />
      {/* <TeamSection /> */}
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
      <ContactFormSection />
      <Footer />
    </div>
  );
};

export default Index;
