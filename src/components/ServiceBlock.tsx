import { Card } from "@/components/ui/card";
import { Service } from "@/data/services";
import { Link } from "react-router-dom";
import { SiteButton } from "@/components/SiteButton";

const iconPaths: Record<string, string> = {
  "ai-strategy": "/images/icons/services-ai-strategy.svg",
  "ai-workshops": "/images/icons/services-discovery.svg",
  "custom-ai-agents": "/images/icons/services-custom-agents.svg",
};

interface ServiceBlockProps {
  service: Service;
  className?: string;
}

export const ServiceBlock = ({ service, className = "" }: ServiceBlockProps) => {
  const iconSrc = service.iconPath ?? iconPaths[service.slug];

  return (
    <Card
      id={service.slug}
      className={`scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/30 ${className}`}
    >
      {/* Header: icon + title + tagline + description */}
      <div className="border-b border-border p-8 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/30">
            {iconSrc ? (
              <img
                src={iconSrc}
                alt=""
                className="h-7 w-7 opacity-90"
                aria-hidden
              />
            ) : null}
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="font-alternates text-2xl font-semibold text-foreground md:text-3xl">
              {service.title}
            </h2>
            {service.tagline && (
              <p className="mt-1 text-base text-muted-foreground">
                {service.tagline}
              </p>
            )}
            <p className="mt-4 text-grey leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Details grid */}
      <div className="grid gap-8 p-8 md:grid-cols-2 md:p-10 lg:gap-12">
        <div className="space-y-8">
          {service.features && service.features.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                What&apos;s included
              </h3>
              <ul className="mt-3 space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-grey"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.idealFor && service.idealFor.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Best for
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-grey">
                {service.idealFor.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {service.outcomes && service.outcomes.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Typical outcomes
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-grey">
                {service.outcomes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="space-y-8">
          {service.typicalTimeline && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Typical timeline
              </h3>
              <p className="mt-3 text-sm text-grey leading-relaxed">
                {service.typicalTimeline}
              </p>
            </div>
          )}

          {service.industries && service.industries.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Industries we serve
              </h3>
              <p className="mt-3 text-sm text-grey">
                {service.industries.join(", ")}
              </p>
            </div>
          )}

          {service.relatedCaseStudyIds &&
            service.relatedCaseStudyIds.length > 0 && (
              <div className="pt-2">
                <Link to="/case-studies">
                  <SiteButton variant="secondary" arrow="right">
                    View related case studies
                  </SiteButton>
                </Link>
              </div>
            )}
        </div>
      </div>
    </Card>
  );
};
