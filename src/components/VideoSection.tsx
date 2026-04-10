import { Link } from "react-router-dom";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteButton } from "@/components/SiteButton";
import { useEffect, useRef, useState } from "react";

interface VideoSectionProps {
  src: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export const VideoSection = ({
  src,
  title,
  subtitle,
  ctaText,
  ctaHref,
}: VideoSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [ended, setEnded] = useState(false);
  const hasPlayed = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed.current) {
          hasPlayed.current = true;
          video.play().catch(() => {});
        }
      },
      { threshold: 0.85 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const handlePlayAgain = () => {
    const video = videoRef.current;
    if (!video) return;
    setEnded(false);
    video.currentTime = 0;
    video.play().catch(() => {});
  };

  const hasHeader = title || subtitle;

  return (
    <Section padding="default">
      {hasHeader && (
        <SectionHeader
          title={title}
          subtitle={subtitle}
          action={
            ctaText && ctaHref ? (
              <Link to={ctaHref}>
                <SiteButton
                  variant="primary"
                  arrow="up-right"
                  className="whitespace-nowrap"
                >
                  {ctaText}
                </SiteButton>
              </Link>
            ) : undefined
          }
          titleClassName="text-3xl md:text-4xl"
          subtitleClassName="max-w-xl"
          className="mb-12"
        />
      )}

      <div ref={containerRef} className="max-md:-mx-6">
        <div className="overflow-hidden rounded-none md:rounded-xl border-y md:border border-[#E2E6F0] aspect-video w-full">
          <video
            ref={videoRef}
            src={src}
            className="w-full h-full object-cover"
            playsInline
            muted
            controls
            onEnded={() => setEnded(true)}
          />
        </div>
        <div className="flex justify-end mt-3 h-5 max-md:pr-6">
          {ended && (
            <button
              onClick={handlePlayAgain}
              className="text-[13px] text-[#555A66] hover:text-[#0E1015] transition-colors duration-200 pr-2"
            >
              Play again
            </button>
          )}
        </div>
      </div>
    </Section>
  );
};
