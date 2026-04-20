import { useEffect } from "react";
import { AI_FLOW_LOGO_SYMBOL } from "@/constants/images";
import { teamMembers } from "@/data/team";

const Meet = () => {
  const irina = teamMembers.irina;

  useEffect(() => {
    document.title = "Book a call - Irina Barbos | AI Flow";

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
        {/* Business card info */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <img
              src={irina.photo}
              alt={irina.name}
              className="w-20 h-20 rounded-full object-cover object-top flex-shrink-0"
            />
            <div className="flex-1">
              <h1 className="text-2xl font-bold font-alternates text-foreground">
                {irina.name}
              </h1>
              <p className="text-grey mt-1">Co-Founder</p>
              <p className="text-grey">AI Solutions Consultant</p>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-3 text-sm">
                <a
                  href="https://aiflow.ltd"
                  className="text-azure hover:underline"
                >
                  aiflow.ltd
                </a>
                <span className="text-grey">-</span>
                <a
                  href={`mailto:${irina.email}`}
                  className="text-azure hover:underline"
                >
                  {irina.email}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-foreground leading-relaxed">
              We <strong>automate compliance</strong> and{" "}
              <strong>streamline audit</strong> reporting.
            </p>
            <p className="text-meta text-sm mt-2">
              Compliance solutions for regulated financial services.
            </p>
          </div>
        </div>

        {/* Calendly booking */}
        <h2 className="text-xl font-bold font-alternates text-foreground mb-4">
          Book a call
        </h2>
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/irina-barbos/20min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=0e1015&primary_color=1ab8ff"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </main>
    </div>
  );
};

export default Meet;
