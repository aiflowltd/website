import { Service } from "@/data/services";
import { Link } from "react-router-dom";
import { SiteButton } from "@/components/SiteButton";
import { cn } from "@/lib/utils";

const tierLabels = [
  "Foundation",
  "Planning & proof",
  "Build & operate",
] as const;

const editorialLine = "border-[#E2E6F0]";

const labelClass =
  "font-sans text-xs font-bold uppercase tracking-[0.16em] text-foreground/90";

/** Ink + muted body (matches editorial text); single accent blue per block. */
const RING_INK = "#0E1015";
const RING_MUTED = "#555A66";
const RING_ACCENT = "#0DD9B7";

/** Figma paths, inner → outer (index 0 = smallest ring). */
const SERVICE_RING_PATHS: readonly string[] = [
  "M395.709 347.859C431.216 347.859 460.009 376.914 460.009 412.766C460.009 448.618 431.217 477.674 395.709 477.674C360.202 477.674 331.409 448.618 331.409 412.766C331.409 376.914 360.202 347.859 395.709 347.859Z",
  "M429.587 326.426C488.025 326.426 535.187 363.772 535.187 409.609C535.186 455.445 488.025 492.791 429.587 492.791C371.149 492.791 323.988 455.445 323.988 409.609C323.988 363.772 371.149 326.426 429.587 326.426Z",
  "M451.631 312.326C488.134 312.326 521.159 322.244 545.044 338.253C568.932 354.264 583.631 376.328 583.631 400.634C583.631 424.94 568.932 447.005 545.044 463.016C521.159 479.024 488.134 488.943 451.631 488.943C415.128 488.942 382.103 479.024 358.218 463.016C334.33 447.005 319.631 424.94 319.631 400.634C319.631 376.328 334.33 354.264 358.218 338.253C382.103 322.244 415.128 312.326 451.631 312.326Z",
  "M454.14 300.645C490.315 300.645 523.044 310.374 546.714 326.077C570.387 341.783 584.949 363.424 584.949 387.26C584.949 411.096 570.387 432.738 546.714 448.444C523.044 464.147 490.315 473.876 454.14 473.876C417.964 473.876 385.236 464.147 361.566 448.444C337.893 432.738 323.33 411.096 323.33 387.26C323.33 363.424 337.893 341.783 361.566 326.077C385.236 310.374 417.964 300.645 454.14 300.645Z",
  "M436.236 278.634C470.945 278.634 502.347 289.066 525.062 305.91C547.776 322.754 561.775 345.984 561.775 371.599C561.775 397.213 547.776 420.442 525.062 437.286C502.347 454.13 470.945 464.562 436.236 464.562C401.528 464.562 370.125 454.13 347.411 437.286C324.697 420.442 310.697 397.213 310.697 371.599C310.697 345.984 324.697 322.754 347.411 305.91C370.125 289.066 401.528 278.634 436.236 278.634Z",
  "M404.176 235.816C489.524 235.816 558.49 289.787 558.49 356.121C558.49 422.454 489.523 476.424 404.176 476.424C318.828 476.424 249.863 422.454 249.862 356.121C249.862 289.787 318.828 235.816 404.176 235.816Z",
  "M369.157 174.675C430.283 174.675 485.603 193.572 525.631 224.1C565.658 254.627 590.373 296.765 590.373 343.271C590.373 389.776 565.658 431.914 525.631 462.441C485.603 492.969 430.283 511.866 369.157 511.866C308.032 511.866 252.712 492.969 212.684 462.441C172.656 431.914 147.941 389.776 147.941 343.271C147.941 296.765 172.656 254.627 212.684 224.1C252.712 193.572 308.032 174.675 369.157 174.675Z",
  "M343.414 113.313C498.929 113.313 624.787 212.704 624.787 335.077C624.787 457.449 498.929 556.841 343.414 556.841C187.899 556.841 62.042 457.449 62.042 335.077C62.0423 212.704 187.899 113.313 343.414 113.313Z",
  "M335.939 76.4338C494.782 76.4339 623.449 191.28 623.449 332.834C623.449 474.388 494.782 589.235 335.939 589.235C177.097 589.235 48.4297 474.388 48.4297 332.834C48.4297 191.28 177.097 76.4338 335.939 76.4338Z",
  "M349.343 79.3335C487.294 79.3336 599.152 194.634 599.152 336.896C599.152 479.158 487.294 594.458 349.343 594.458C211.391 594.458 99.5333 479.158 99.5332 336.896C99.5332 194.634 211.391 79.3335 349.343 79.3335Z",
  "M378.943 115.495C508.572 115.495 613.644 218.98 613.645 346.62C613.645 474.26 508.572 577.745 378.943 577.745C249.315 577.745 144.243 474.26 144.243 346.62C144.243 218.981 249.315 115.495 378.943 115.495Z",
  "M414.401 157.28C495.379 157.28 568.669 180.055 621.701 216.851C674.735 253.649 707.471 304.434 707.471 360.472C707.471 416.511 674.735 467.297 621.701 504.095C568.669 540.891 495.379 563.666 414.401 563.666C333.424 563.666 260.134 540.891 207.102 504.095C154.068 467.297 121.332 416.511 121.332 360.472C121.332 304.434 154.068 253.649 207.102 216.851C260.134 180.055 333.424 157.28 414.401 157.28Z",
  "M443.329 171.143C552.607 171.143 651.514 194.146 723.084 231.312C794.679 268.491 838.788 319.766 838.788 376.266C838.788 432.766 794.679 484.041 723.084 521.22C651.514 558.386 552.607 581.389 443.329 581.389C334.051 581.389 235.143 558.387 163.573 521.22C91.9786 484.041 47.8691 432.766 47.8691 376.266C47.8692 319.766 91.9786 268.491 163.573 231.312C235.143 194.145 334.051 171.143 443.329 171.143Z",
  "M455.621 138.777C581.369 138.777 695.188 167.106 777.552 212.883C859.933 258.67 910.743 321.843 910.743 391.507C910.743 461.171 859.932 524.344 777.552 570.13C695.188 615.907 581.369 644.237 455.621 644.237C329.874 644.237 216.055 615.907 133.691 570.13C51.3108 524.344 0.500141 461.171 0.5 391.507C0.5 321.843 51.3106 258.67 133.691 212.883C216.055 167.106 329.874 138.777 455.621 138.777Z",
  "M446.985 70.4337C681.113 70.4339 870.696 219.787 870.696 403.789C870.696 587.791 681.113 737.143 446.985 737.144C212.858 737.144 23.2738 587.791 23.2734 403.789C23.2734 219.787 212.858 70.4337 446.985 70.4337Z",
  "M420.437 0.5C615.921 0.500153 774.514 184.293 774.514 411.173C774.514 638.053 615.921 821.846 420.437 821.846C224.952 821.846 66.3594 638.053 66.3594 411.173C66.3594 184.292 224.952 0.5 420.437 0.5Z",
];

const VIEWBOX_CX = 675 / 2;
const VIEWBOX_CY = 823 / 2;

/** Deterministic 0–1 from an integer seed (stable across renders). */
function seeded01(seed: number) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h << 5) - h + slug.charCodeAt(i);
    h |= 0;
  }
  return h;
}

/** Per-service “random” layout: which ring is blue, mild transform, slight per-ring opacity noise. */
function graphicVariant(serviceIndex: number, slug: string) {
  const base = serviceIndex * 10007 + hashSlug(slug);
  const blueRingIndex = Math.floor(seeded01(base) * SERVICE_RING_PATHS.length);
  const rotateDeg = (seeded01(base + 1) - 0.5) * 8;
  const tx = (seeded01(base + 3) - 0.5) * 20;
  const ty = (seeded01(base + 4) - 0.5) * 16;
  /** Subtle skew (deg) — different character per block without breaking the art. */
  const skewX = (seeded01(base + 5) - 0.5) * 2.5;
  return { blueRingIndex, rotateDeg, skewX, tx, ty, base };
}

function ringStroke(
  ringIndex: number,
  blueRingIndex: number,
  opacityJitterSeed: number,
) {
  if (ringIndex === blueRingIndex) {
    const jitter = 0.92 + seeded01(opacityJitterSeed) * 0.08;
    return { stroke: RING_ACCENT, strokeOpacity: Math.min(1, 0.48 * jitter) };
  }
  const useInk = ringIndex % 2 === 0;
  const base = useInk ? 0.08 : 0.2;
  const jitter = 0.94 + seeded01(opacityJitterSeed + ringIndex * 17) * 0.12;
  return {
    stroke: useInk ? RING_INK : RING_MUTED,
    strokeOpacity: Math.min(1, base * jitter),
  };
}

/** Concentric rings — Figma export; anchored top-right of the section column. */
function ServiceSectionGraphic({
  serviceIndex,
  slug,
}: {
  serviceIndex: number;
  slug: string;
}) {
  const { blueRingIndex, rotateDeg, skewX, tx, ty, base } = graphicVariant(
    serviceIndex,
    slug,
  );
  const groupTransform = `translate(${tx} ${ty}) skewX(${skewX}) rotate(${rotateDeg} ${VIEWBOX_CX} ${VIEWBOX_CY})`;

  return (
    <svg
      width="675"
      height="823"
      viewBox="0 0 675 823"
      className="h-full w-full overflow-visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMaxYMin meet"
      aria-hidden
    >
      <g transform={groupTransform}>
        {SERVICE_RING_PATHS.map((d, ringIndex) => {
          const { stroke, strokeOpacity } = ringStroke(
            ringIndex,
            blueRingIndex,
            base + ringIndex,
          );
          return (
            <path
              key={ringIndex}
              d={d}
              stroke={stroke}
              strokeOpacity={strokeOpacity}
            />
          );
        })}
      </g>
    </svg>
  );
}

interface ServiceBlockProps {
  service: Service;
  index: number;
  className?: string;
}

export const ServiceBlock = ({
  service,
  index,
  className = "",
}: ServiceBlockProps) => {
  const step = String(index + 1).padStart(2, "0");
  const tier = tierLabels[index] ?? `Tier ${index + 1}`;

  return (
    <article
      id={service.slug}
      className={cn("relative scroll-mt-24 overflow-visible", className)}
    >
      <div
        className="pointer-events-none absolute right-0 top-0 z-0 hidden h-[40%] w-auto max-w-[min(45%,22rem)] aspect-[675/823] overflow-visible opacity-100 md:block"
        aria-hidden
      >
        <ServiceSectionGraphic serviceIndex={index} slug={service.slug} />
      </div>
      <div className="relative z-10">
        <div className="px-6 pb-6 md:px-8 md:pb-8 lg:px-10">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {tier}
            </span>
          </div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-5">
            <span
              className="shrink-0 font-extralight leading-none tracking-[-0.05em] text-success sm:self-end sm:translate-y-[2px]"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
              aria-hidden
            >
              {step}
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="font-alternates text-3xl font-bold leading-[1.15] tracking-tight text-foreground md:text-4xl">
                {service.title}
              </h2>
              {service.tagline ? (
                <p className="mt-3 text-base font-semibold text-foreground/85 md:text-lg">
                  {service.tagline}
                </p>
              ) : null}
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-sm font-light leading-relaxed text-muted-foreground md:text-[15px] md:leading-[1.65]">
            {service.description}
          </p>
        </div>

        <div className={cn("border-b", editorialLine)}>
          <div className="grid gap-0 md:grid-cols-2">
            <div
              className={cn(
                "space-y-10 px-6 py-10 md:px-8 md:py-12 lg:px-10",
                "md:border-r",
                editorialLine,
              )}
            >
              {service.features && service.features.length > 0 ? (
                <div>
                  <h3 className={labelClass}>What&apos;s included</h3>
                  <ul className="mt-4 space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={cn(
                          "border-l-2 pl-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]",
                          editorialLine,
                        )}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {service.idealFor && service.idealFor.length > 0 ? (
                <div>
                  <h3 className={labelClass}>Best for</h3>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                    {service.idealFor.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {service.outcomes && service.outcomes.length > 0 ? (
                <div>
                  <h3 className={labelClass}>Typical outcomes</h3>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                    {service.outcomes.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <div
              className={cn(
                "space-y-10 border-t px-6 py-10 md:border-t-0 md:px-8 md:py-12 lg:px-10",
                editorialLine,
              )}
            >
              {service.typicalTimeline ? (
                <div>
                  <h3 className={labelClass}>Typical timeline</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                    {service.typicalTimeline}
                  </p>
                </div>
              ) : null}

              {service.industries && service.industries.length > 0 ? (
                <div>
                  <h3 className={labelClass}>Industries we serve</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                    {service.industries.join(", ")}
                  </p>
                </div>
              ) : null}

              {service.relatedCaseStudyIds &&
              service.relatedCaseStudyIds.length > 0 ? (
                <div>
                  <Link to="/case-studies">
                    <SiteButton variant="secondary" arrow="right">
                      View related case studies
                    </SiteButton>
                  </Link>
                </div>
              ) : null}
            </div>
          </div>

          <div
            className={cn(
              "flex flex-col gap-4 border-t px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10",
              editorialLine,
            )}
          >
            <p className="text-sm leading-relaxed text-muted-foreground md:max-w-md">
              Fixed scope, senior-led delivery, and a documented handoff—whether
              you continue with us or use the outputs internally.
            </p>
            <Link to="/contact" className="shrink-0">
              <SiteButton variant="primary" arrow="up-right">
                Discuss this engagement
              </SiteButton>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
