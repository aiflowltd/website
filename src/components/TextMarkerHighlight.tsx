import { cn } from "@/lib/utils";

const RADIUS_NAV_DENSE = [
  "[border-radius:15px_12px_17px_13px/13px_15px_14px_16px]",
  "[border-radius:13px_14px_15px_12px/14px_12px_16px_13px]",
  "[border-radius:14px_13px_16px_14px/12px_16px_13px_15px]",
  "[border-radius:16px_11px_15px_14px/15px_13px_12px_14px]",
] as const;

const RADIUS_NAV = [
  "[border-radius:16px_13px_18px_14px/14px_16px_15px_17px]",
  "[border-radius:14px_15px_16px_13px/15px_13px_17px_14px]",
  "[border-radius:15px_14px_17px_15px/13px_17px_14px_16px]",
  "[border-radius:17px_12px_16px_15px/16px_14px_13px_15px]",
] as const;

const RADIUS_HERO = [
  "[border-radius:24px_18px_28px_20px/20px_22px_21px_23px]",
  "[border-radius:20px_22px_24px_18px/22px_18px_26px_20px]",
  "[border-radius:22px_20px_26px_22px/18px_24px_20px_22px]",
  "[border-radius:26px_17px_24px_22px/24px_20px_18px_22px]",
] as const;

const PRESET = {
  "nav-dense": {
    root: "relative inline-flex items-center flex-none",
    pad: "-inset-x-2 -inset-y-[0.35em]",
    w: "w-[120%]",
    skewDeg: "-6.5deg",
    minH: "min-h-[1.2em]",
    radii: RADIUS_NAV_DENSE,
  },
  nav: {
    root: "relative inline-flex items-center flex-none",
    pad: "-inset-x-3 -inset-y-[0.4em]",
    w: "w-[120%]",
    skewDeg: "-6.5deg",
    minH: "min-h-[1.2em]",
    radii: RADIUS_NAV,
  },
  hero: {
    root: "relative inline-block",
    pad: "-inset-x-3 -inset-y-[0.22em]",
    w: "w-[118%]",
    skewDeg: "-5deg",
    minH: "min-h-[0.9em]",
    radii: RADIUS_HERO,
  },
} as const;

export type TextMarkerPreset = keyof typeof PRESET;

type Props = {
  children: React.ReactNode;
  preset: TextMarkerPreset;
  variant: number;
  className?: string;
  contentClassName?: string;
};

/**
 * Skewed marker behind label text. Hover / focus styles: `index.css` (`.text-marker__fill`).
 */
export function TextMarkerHighlight({
  children,
  preset,
  variant,
  className,
  contentClassName,
}: Props) {
  const p = PRESET[preset];
  const r = p.radii[variant % p.radii.length];

  return (
    <span
      className={cn("text-marker", p.root, className)}
      style={
        {
          "--text-marker-skew": p.skewDeg,
        } as React.CSSProperties
      }
    >
      <span
        className={cn(
          "pointer-events-none absolute inset-0 z-0 overflow-hidden",
          p.pad,
        )}
        aria-hidden
      >
        <span
          className={cn(
            "text-marker__fill nav-marker-texture pointer-events-none h-full max-w-none",
            p.minH,
            p.w,
            r,
          )}
          aria-hidden
        />
      </span>
      <span className={cn("relative z-10", contentClassName)}>{children}</span>
    </span>
  );
}
