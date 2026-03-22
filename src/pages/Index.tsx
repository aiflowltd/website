import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { HowWeWorkSection } from "@/components/HowWeWorkSection";
import { EngagementSection } from "@/components/EngagementSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { TeamSection } from "@/components/TeamSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BlogSection } from "@/components/BlogSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactFormSection } from "@/components/ContactFormSection";
import { useEffect } from "react";

const WIDGET_SRC =
  "https://app.datacards.ai/a/aiflow/company-questions/intercom?theme=light";

const Index = () => {
  useEffect(() => {
    document.title = "AI Flow | We build AI products";
  }, []);

  useEffect(() => {
    let rafId = 0;
    let pending: { width: number; height: number } | null = null;

    function flush() {
      rafId = 0;
      const data = pending;
      pending = null;
      if (!data) return;
      const iframe = document.getElementById(
        "datacards-widget",
      ) as HTMLIFrameElement | null;
      if (!iframe) return;
      iframe.style.width = `min(${data.width}px, 90vw)`;
      iframe.style.height = `${data.height}px`;
    }

    function onMessage(e: MessageEvent) {
      if (e.data?.type !== "datacards-widget:resize") return;
      pending = { width: e.data.width, height: e.data.height };
      if (rafId) return;
      rafId = requestAnimationFrame(flush);
    }

    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <ServicesSection />
      <HowWeWorkSection />
      <EngagementSection />
      <IndustriesSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <ContactFormSection />
      <Footer />
      <iframe
        id="datacards-widget"
        src={WIDGET_SRC}
        allowTransparency
        style={{
          position: "fixed",
          bottom: 24,
          left: "50%",
          display: "block",
          // translate3d keeps this on its own compositor layer; avoids subpixel jitter
          // while width interpolates with translateX(-50%) centering.
          transform: "translate3d(-50%, 0, 0)",
          width: "min(580px, 95vw)",
          height: 82,
          border: "none",
          background: "transparent",
          zIndex: 2147483647,
          // Height is driven by postMessage; animating it fights the embed’s layout and
          // duplicate resize events, which reads as a vertical jump when opening.
          transition: "width 220ms cubic-bezier(.4,0,.2,1)",
        }}
        title="Datacards Widget"
      />
    </div>
  );
};

export default Index;
