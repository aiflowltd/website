import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SiteButton } from "@/components/SiteButton";
import { SectionHeader } from "@/components/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Diagnostic",
    description:
      "Map your compliance workflows, data sources, and regulatory obligations. Define the highest-value automation opportunity and scope the pipeline build.",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Scope the data integrations, regulatory mappings, and output formats. Align on audit trail requirements and acceptance criteria before a line of code is written.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Implement the full pipeline: data connections, regulatory mapping engine, scheduled execution, and output generation. Senior engineers from start to finish.",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "Ship to production with monitoring, validation checks, and full audit trail active from day one. The first automated filing cycle runs before handover.",
  },
  {
    number: "05",
    title: "Expand",
    description:
      "Add obligations, jurisdictions, and reporting workflows on top of the existing infrastructure. Each expansion is a new automated output — not a new build from scratch.",
  },
];

const stepIconPaths = [
  "/images/icons/how-we-work-discover.svg",
  "/images/icons/how-we-work-design.svg",
  "/images/icons/how-we-work-build.svg",
  "/images/icons/how-we-work-deploy.svg",
  "/images/icons/how-we-work-improve.svg",
];

const stepAccentColors = [
  "hsl(var(--primary) / 0.12)",
  "hsl(var(--secondary) / 0.12)",
  "hsl(var(--primary) / 0.1)",
  "hsl(var(--secondary) / 0.1)",
  "hsl(var(--primary) / 0.12)",
];

const FADE_DURATION_MS = 220;

export const HowWeWorkSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsWrapperRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [bubbleIndex, setBubbleIndex] = useState<number | null>(null);
  const [bubbleOpacity, setBubbleOpacity] = useState(0);
  const [bubbleX, setBubbleX] = useState(0);
  const [bubbleY, setBubbleY] = useState(0);
  const [bubbleSize, setBubbleSize] = useState(0);
  const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [sidePad, setSidePad] = useState(0);
  const [itemW, setItemW] = useState(0);

  useEffect(() => {
    const measure = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const containerW = rect.width;
      const halfContainer = containerW / 2;
      const pad = (window.innerWidth - containerW) / 2;
      setSidePad(Math.max(0, pad));
      setItemW(halfContainer);
    };
    measure();
    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
  }, []);

  const bubbleColor = useMemo(() => {
    if (bubbleIndex !== null) {
      return stepAccentColors[bubbleIndex] ?? stepAccentColors[0];
    }
    return null;
  }, [bubbleIndex]);

  const updateBubblePosition = (index: number | null) => {
    const wrapper = stepsWrapperRef.current;
    if (!wrapper || index === null) return;
    const el = itemRefs.current[index];
    if (!el) return;

    const wrapperRect = wrapper.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    const size = Math.max(elRect.width, elRect.height) * 2;
    const centerX = elRect.left - wrapperRect.left + elRect.width * 0.25;
    const centerY = elRect.top - wrapperRect.top + elRect.height * 0.35;

    setBubbleX(centerX);
    setBubbleY(centerY);
    setBubbleSize(size);
  };

  // When hovered item changes: fade out, then update bubble to new card and fade in
  useEffect(() => {
    if (hoveredIndex === bubbleIndex) return;

    if (fadeTimeoutRef.current) {
      clearTimeout(fadeTimeoutRef.current);
      fadeTimeoutRef.current = null;
    }

    setBubbleOpacity(0);

    fadeTimeoutRef.current = setTimeout(() => {
      fadeTimeoutRef.current = null;
      setBubbleIndex(hoveredIndex);
      setBubbleOpacity(0);
      if (hoveredIndex !== null) {
        requestAnimationFrame(() => setBubbleOpacity(0.8));
      }
    }, FADE_DURATION_MS);

    return () => {
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    };
  }, [hoveredIndex, bubbleIndex]);

  useEffect(() => {
    updateBubblePosition(bubbleIndex);
  }, [bubbleIndex]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onScroll = () => updateBubblePosition(bubbleIndex);
    const onResize = () => updateBubblePosition(bubbleIndex);

    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [bubbleIndex]);

  return (
    <section
      id="how-we-work"
      className="relative scroll-mt-24 py-24 px-6 bg-background"
    >
      <div ref={containerRef} className="container mx-auto max-w-6xl">
        <SectionHeader
          title="How we work"
          subtitle="A structured delivery flow. Fixed scope at every stage."
          action={
            <Link to="/services">
              <SiteButton
                variant="primary"
                arrow="up-right"
                className="whitespace-nowrap"
              >
                Explore our services in depth
              </SiteButton>
            </Link>
          }
          className="mb-10"
        />

        {/* Divider line */}
        <div className="h-px bg-border mb-0" />
      </div>

      {/* Sliding window: full viewport width, cards centered within the container bounds */}
      <div ref={stepsWrapperRef} className="relative">
        {/* Hover bubble */}
        {bubbleIndex !== null && bubbleSize > 0 && bubbleColor && (
          <div
            className="pointer-events-none absolute z-10 ease-out"
            aria-hidden="true"
            style={{
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              minHeight: "100%",
              opacity: bubbleOpacity,
              transition: `opacity ${FADE_DURATION_MS}ms ease-out`,
            }}
          >
            <div
              className="absolute rounded-full blur-2xl"
              style={{
                width: `${bubbleSize}px`,
                height: `${bubbleSize}px`,
                left: `${bubbleX}px`,
                top: `${bubbleY}px`,
                transform: "translate(-50%, -50%)",
                background: `radial-gradient(circle at center, ${bubbleColor}, transparent 55%)`,
              }}
            />
          </div>
        )}

        <div
          ref={scrollerRef}
          className="relative flex overflow-x-auto scroll-smooth pb-6 pt-6"
          style={{
            scrollSnapType: "x mandatory",
            scrollPaddingLeft: sidePad,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            paddingLeft: sidePad,
            paddingRight: itemW ? sidePad - itemW : sidePad,
          }}
        >
          {steps.map((step, index) => {
            const iconPath = stepIconPaths[index];
            return (
              <div
                key={step.number}
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative z-20 flex flex-col items-end py-12 gap-12 shrink-0 rounded-xl min-h-[418px] px-6"
                style={{
                  width: itemW || "50%",
                  minWidth: 470,
                  scrollSnapAlign: "start",
                }}
              >
                {/* search-status icon: 166×166 */}
                <div className="relative w-[166px] h-[166px] flex-none shrink-0">
                  <img
                    src={iconPath}
                    alt=""
                    className="w-full h-full object-contain"
                    aria-hidden
                  />
                </div>

                {/* Content: flex column, items-start, gap 16px */}
                <div className="relative flex flex-col items-start gap-4 w-full self-stretch flex-none">
                  {/* Title row: flex row, items center, gap 12px */}
                  <div className="flex flex-row items-center gap-3 w-full">
                    {/* Subheading number: Montserrat 250, 32px, line-height 136% */}
                    <span className="font-sans font-extralight text-[32px] leading-[1.36] text-foreground/30 flex items-center shrink-0">
                      {step.number}
                    </span>
                    {/* Title: Montserrat Alternates 500, 28px, line-height 136% */}
                    <h3 className="font-alternates font-medium text-[28px] leading-[1.36] text-foreground flex items-center">
                      {step.title}
                    </h3>
                  </div>
                  {/* Body: Montserrat 300, 16px, line-height 150% */}
                  <p className="font-sans font-light text-base leading-[1.5] text-muted-foreground w-full">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
