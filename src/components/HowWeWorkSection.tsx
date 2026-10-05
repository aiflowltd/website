import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SiteButton } from "@/components/SiteButton";
import { SectionHeader } from "@/components/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Discovery call",
    description:
      "One conversation about your obligation stack, your systems, and the workflow your team still does by hand. We agree the first workflow to deploy and what correct looks like for it.",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Our forward deployed engineers connect AI Flow Core to the systems you already use - core banking, transaction platforms, CRM, email, spreadsheets. Nothing to migrate. Nothing ripped out.",
  },
  {
    number: "03",
    title: "Fit it to you",
    description:
      "Your sign-off chain, your exceptions, your definitions. The engineers configure Core around how your company actually works - and build what is unique to you on top of it.",
  },
  {
    number: "04",
    title: "Go live - open book",
    description:
      "The first workflow runs on schedule and lands review-ready. Weekly updates, decisions documented, nothing moves without your sign-off. No black box. No surprises at handover.",
  },
  {
    number: "05",
    title: "Expand",
    description:
      "Each new report, control, or register is a new module on the same platform - not a new build. The engineers who deployed it stay accountable for it.",
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

export const HowWeWorkSection = ({ showAction = true }: { showAction?: boolean }) => {
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
          subtitle="Our platform. Our engineers. You in the room at every stage."
          action={
            showAction ? (
              <Link to="/how-we-work">
                <SiteButton
                  variant="primary"
                  arrow="up-right"
                  className="whitespace-nowrap"
                >
                  How we deploy AI Flow Core
                </SiteButton>
              </Link>
            ) : undefined
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
