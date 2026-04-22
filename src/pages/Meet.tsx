import { useEffect } from "react";
import { AI_FLOW_LOGO_SYMBOL } from "@/constants/images";

const Meet = () => {
  useEffect(() => {
    document.title = "Book a call | AI Flow";

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border py-4 px-6">
        <a href="https://aiflow.ltd" className="inline-block">
          <img src={AI_FLOW_LOGO_SYMBOL} alt="AI Flow" className="h-8 w-auto" />
        </a>
      </header>

      <main className="flex-1 container mx-auto px-6 py-12 max-w-3xl">
        <div className="bg-card border border-border rounded-2xl p-8 mb-6">
          <h1 className="text-2xl font-bold font-alternates text-foreground mb-3">
            Compliance solutions for regulated financial services.
          </h1>
          <p className="text-foreground leading-relaxed mb-6">
            We <strong>automate compliance</strong> and{" "}
            <strong>streamline audit</strong> reporting — so your team spends
            less time on manual processes and more time on what matters.
          </p>

          <a
            href="mailto:contact@aiflow.ltd"
            className="text-sm text-azure hover:underline"
          >
            contact@aiflow.ltd
          </a>
        </div>

        <h2 className="text-xl font-bold font-alternates text-foreground mb-4">
          Book a call
        </h2>
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/mihaianton/20min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=0e1015&primary_color=1ab8ff"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </main>
    </div>
  );
};

export default Meet;
