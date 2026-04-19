import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * Fractal noise tuned for rough paper: mid frequency + 4 octaves = visible tooth and uneven surface.
 */
export const PAPER_NOISE_DATA_URL =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.12' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export const INTERCOM_NOISE_DATA_URL = PAPER_NOISE_DATA_URL;

function svgDataUrl(svg: string): string {
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

/** Displaced linear gradients read as soft rolling light across the sheet. */
const WAVE_LIGHT_PRIMARY = svgDataUrl(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" preserveAspectRatio="none"><defs><linearGradient id="g" x1="6%" y1="-8%" x2="88%" y2="92%"><stop offset="0%" stop-color="#fff" stop-opacity=".14"/><stop offset="38%" stop-color="#fff" stop-opacity=".055"/><stop offset="72%" stop-color="#fff" stop-opacity=".02"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="f" x="-40%" y="-40%" width="180%" height="180%"><feTurbulence type="fractalNoise" baseFrequency="0.0065 0.0105" numOctaves="2" seed="13" result="t"/><feDisplacementMap in="SourceGraphic" in2="t" scale="22"/></filter></defs><rect width="100%" height="100%" fill="url(#g)" filter="url(#f)"/></svg>`,
);

const WAVE_LIGHT_SECONDARY = svgDataUrl(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" preserveAspectRatio="none"><defs><linearGradient id="g" x1="95%" y1="12%" x2="5%" y2="78%"><stop offset="0%" stop-color="#fff" stop-opacity=".08"/><stop offset="50%" stop-color="#fff" stop-opacity=".035"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="f" x="-40%" y="-40%" width="180%" height="180%"><feTurbulence type="fractalNoise" baseFrequency="0.009 0.006" numOctaves="2" seed="41" result="t"/><feDisplacementMap in="SourceGraphic" in2="t" scale="16"/></filter></defs><rect width="100%" height="100%" fill="url(#g)" filter="url(#f)"/></svg>`,
);

const WAVE_SHADE_BOTTOM = svgDataUrl(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" preserveAspectRatio="none"><defs><linearGradient id="g" x1="50%" y1="100%" x2="50%" y2="35%"><stop offset="0%" stop-color="#000" stop-opacity=".22"/><stop offset="45%" stop-color="#000" stop-opacity=".07"/><stop offset="100%" stop-color="#000" stop-opacity="0"/></linearGradient><filter id="f" x="-30%" y="-30%" width="160%" height="160%"><feTurbulence type="fractalNoise" baseFrequency="0.005 0.014" numOctaves="2" seed="29" result="t"/><feDisplacementMap in="SourceGraphic" in2="t" scale="14"/></filter></defs><rect width="100%" height="100%" fill="url(#g)" filter="url(#f)"/></svg>`,
);

/** Neutral dark stock - grey-white paper, not kraft / yellow. */
const PAPER_BASE = "#2c2c2c";

function shellStyle(fitContent: boolean): CSSProperties {
  return {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    backgroundColor: PAPER_BASE,
    backdropFilter: "blur(2px) saturate(100%)",
    WebkitBackdropFilter: "blur(2px) saturate(100%)",
    boxShadow:
      "inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 0 0 1px rgba(0, 0, 0, 0.12), 0 3px 10px rgba(0, 0, 0, 0.14)",
    ...(fitContent
      ? { height: "auto", minHeight: "auto" }
      : { height: "100%", minHeight: 0 }),
  };
}

function layer(radius: string, style: CSSProperties) {
  return {
    position: "absolute" as const,
    inset: 0,
    pointerEvents: "none" as const,
    borderRadius: radius,
    ...style,
  };
}

type DatacardsEmbedPanelProps = {
  children: React.ReactNode;
  className?: string;
  radiusPx?: number;
  fitContent?: boolean;
};

/**
 * Cool white-on-grey paper: wavy displaced light (SVG), shade, stacked PAPER_NOISE.
 */
export function DatacardsEmbedPanel({
  children,
  className,
  radiusPx = 12,
  fitContent = false,
}: DatacardsEmbedPanelProps) {
  const r = `${radiusPx}px`;

  return (
    <div
      className={cn("overflow-hidden", className)}
      style={shellStyle(fitContent)}
    >
      {/* Subtle neutral lift - white mist, not cream */}
      <div
        style={layer(r, {
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 42%, transparent 100%)",
        })}
        aria-hidden
      />
      {/* Heavier bottom curl - paper weight on a surface */}
      <div
        style={layer(r, {
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.06) 34%, transparent 60%)",
        })}
        aria-hidden
      />
      {/* Bright white skim from above */}
      <div
        style={layer(r, {
          background:
            "linear-gradient(168deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.06) 28%, transparent 54%)",
        })}
        aria-hidden
      />
      {/* Crown - pure white highlight */}
      <div
        style={layer(r, {
          background:
            "radial-gradient(ellipse 88% 58% at 50% 16%, rgba(255, 255, 255, 0.09) 0%, transparent 64%)",
        })}
        aria-hidden
      />
      {/* Deckled lip */}
      <div
        style={layer(r, {
          border: "1px solid rgba(0, 0, 0, 0.14)",
          boxShadow:
            "inset 0 1px 0 rgba(255, 255, 255, 0.09), 0 0 0 1px rgba(255, 255, 255, 0.04)",
        })}
        aria-hidden
      />
      {/* Coarse grain - same PAPER_NOISE_DATA_URL, zoomed out reads as uneven stock */}
      <div
        style={layer(r, {
          backgroundImage: PAPER_NOISE_DATA_URL,
          backgroundRepeat: "repeat",
          backgroundSize: "72px 72px",
          backgroundPosition: "0 0",
          mixBlendMode: "multiply",
          opacity: 0.14,
        })}
        aria-hidden
      />
      {/* Medium pass - breaks tiling regularity */}
      <div
        style={layer(r, {
          backgroundImage: PAPER_NOISE_DATA_URL,
          backgroundRepeat: "repeat",
          backgroundSize: "118px 118px",
          backgroundPosition: "41px 23px",
          mixBlendMode: "soft-light",
          opacity: 0.115,
        })}
        aria-hidden
      />
      {/* Fine tooth on top */}
      <div
        style={layer(r, {
          backgroundImage: PAPER_NOISE_DATA_URL,
          backgroundRepeat: "repeat",
          backgroundSize: "44px 44px",
          backgroundPosition: "17px 61px",
          mixBlendMode: "overlay",
          opacity: 0.095,
        })}
        aria-hidden
      />
      <div
        className={cn(
          "relative z-10 flex flex-col",
          fitContent ? "min-h-0" : "min-h-0 flex-1",
        )}
      >
        {children}
      </div>
    </div>
  );
}
