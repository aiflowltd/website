import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { SiteButton } from "@/components/SiteButton";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/data/services";
import { DatacardsEmbedPanel } from "@/components/DatacardsEmbedPanel";
import { LineGridCta } from "@/components/LineGridCta";
import { HowWeWorkSection } from "@/components/HowWeWorkSection";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

const editorialLine = "border-[#E2E6F0]";

const productVsEngineers = [
  {
    title: "What AI Flow Core brings",
    items: [
      "Connectors for core banking, transaction systems, CRM, email, Teams and spreadsheets",
      "Regulatory templates and mappings, reused across clients and jurisdictions",
      "Validation rules, control testing and anomaly checks",
      "Evidence packs and a full audit trail on every run",
    ],
    dark: true,
  },
  {
    title: "What our engineers bring",
    items: [
      "End-to-end integration with your systems - including the ones nobody documented",
      "Configuration around your sign-off chain, your exceptions, your definitions",
      "Anything unique to your company, built on top of Core rather than from scratch",
      "The same people from first call to go-live and beyond",
    ],
    dark: false,
  },
];

const HowWeWork = () => {
  useEffect(() => {
    document.title = "AI Flow | How we work";
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground page-shell">
      <Navigation />

      <main>
        {/* Hero */}
        <Section padding="hero">
          <p className="text-sm font-light text-muted-foreground tracking-widest uppercase mb-6 font-sans">
            How we work
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold font-alternates mb-10 leading-[1.1] text-foreground">
            Our platform.
            <br />
            <span className="font-extralight">Engineers who make it fit.</span>
          </h1>
          <p className="max-w-2xl text-base md:text-lg font-light leading-relaxed text-muted-foreground mb-10">
            Finance is different in every company. Different systems, different
            sign-off chains, different exceptions. So we don't hand you a login and
            leave. Our forward deployed engineers integrate AI Flow Core end to end
            and adapt it to whatever is unique about how your company works.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact#calendly">
              <SiteButton variant="primary" arrow="up-right">
                Book a discovery call
              </SiteButton>
            </Link>
            <Link to="/platform">
              <SiteButton variant="secondary" arrow={false}>
                See the platform →
              </SiteButton>
            </Link>
          </div>
        </Section>

        {/* Product + engineers */}
        <Section padding="compact">
          <SectionHeader
            title="Software that is already built. Fitted to you."
            subtitle="The platform covers what every compliance function needs. The engineers cover what only yours does."
            titleClassName="text-3xl md:text-4xl"
            subtitleClassName="max-w-2xl"
            className="mb-10"
          />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
            {productVsEngineers.map((col) => (
              <div
                key={col.title}
                className={cn(
                  "flex flex-col gap-5 rounded-xl px-8 py-10",
                  col.dark ? "bg-[#0E1015]" : "bg-foreground/[0.03]",
                )}
              >
                <h3
                  className={cn(
                    "font-alternates font-semibold text-lg md:text-xl leading-snug",
                    col.dark ? "text-white" : "text-foreground",
                  )}
                >
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className={cn(
                        "flex items-start gap-2.5 text-sm font-light leading-relaxed",
                        col.dark ? "text-white/70" : "text-muted-foreground",
                      )}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-success mt-[0.45em] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <HowWeWorkSection showAction={false} />

        <Section id="engagement" scrollMargin padding="default">
          <SectionHeader
            title="Start with one workflow. Expand on the same foundation."
            subtitle="A discovery call, then AI Flow Core goes live on one workflow your team still does by hand. Every obligation after that is a new module on the same platform."
            titleClassName="text-3xl md:text-4xl"
            subtitleClassName="max-w-2xl"
            className="mb-0"
          />

          <div
            className={cn(
              "mt-10 grid grid-cols-1 md:grid-cols-2 border-t",
              editorialLine,
            )}
          >
            {services.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className={cn(
                  "flex flex-col gap-6 py-10 px-0",
                  index > 0 && cn("border-t md:border-t-0 md:border-l md:pl-10", editorialLine),
                  index < services.length - 1 && cn("md:pr-10"),
                )}
              >
                {/* Number + title */}
                <div>
                  <span className="text-[10px] font-bold tabular-nums tracking-[0.2em] text-muted-foreground/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-alternates text-xl font-bold text-foreground mt-2 leading-snug">
                    {service.title}
                  </h3>
                  {service.tagline && (
                    <p className="mt-1 text-sm font-medium text-foreground/60 leading-snug">
                      {service.tagline}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Features */}
                {service.features && service.features.length > 0 && (
                  <ul className="space-y-2.5 flex-1">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-success mt-[0.4em] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Timeline */}
                {service.typicalTimeline && (
                  <p
                    className={cn(
                      "text-xs font-medium text-muted-foreground/50 border-t pt-5",
                      editorialLine,
                    )}
                  >
                    {service.typicalTimeline}
                  </p>
                )}

                {/* CTA */}
                <Link to="/contact#calendly" className="mt-auto">
                  <SiteButton variant="secondary" arrow="up-right">
                    Discuss your first workflow
                  </SiteButton>
                </Link>
              </div>
            ))}
          </div>
        </Section>

        <Section padding="default">
          <SectionHeader
            title="Have questions before we start?"
            subtitle="Ask about fit, typical timelines, or how we'd deploy AI Flow Core for your obligation stack. When you're ready, book a discovery call."
            titleClassName="text-2xl font-bold font-alternates text-foreground md:text-3xl"
            subtitleClassName="max-w-2xl text-muted-foreground"
            className="mb-8"
          />
          <DatacardsEmbedPanel fitContent className="rounded-xl p-6 md:p-8">
            <div className="flex w-full justify-center">
              <div className="h-[min(420px,70vh)] w-full max-w-[900px] min-h-[280px]">
                <iframe
                  title="Ask about AI Flow"
                  className="block h-full w-full rounded-lg border-0 bg-transparent"
                  src="https://app.datacards.ai/a/aiflow/services?theme=dark&scale=0"
                />
              </div>
            </div>
          </DatacardsEmbedPanel>
        </Section>

        <Section padding="compact">
          <LineGridCta>
            <SectionHeader
              title="Start with one workflow your team still does by hand."
              subtitle="Book a discovery call with no obligation - or review case studies from compliance teams with similar constraints."
              variant="centered"
              titleClassName="font-alternates text-2xl text-foreground md:text-3xl"
              subtitleClassName="mx-auto mb-8 max-w-xl text-muted-foreground"
              action={
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Link to="/contact#calendly">
                    <SiteButton variant="primary" arrow="up-right">
                      Book a discovery call
                    </SiteButton>
                  </Link>
                  <Link to="/case-studies">
                    <SiteButton variant="secondary">
                      View case studies
                    </SiteButton>
                  </Link>
                </div>
              }
            />
          </LineGridCta>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default HowWeWork;
