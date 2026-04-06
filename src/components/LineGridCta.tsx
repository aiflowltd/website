import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LineGridCtaProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

/** CTA band: horizontal rules + light gradient fill (used on Workshops and similar pages). */
export function LineGridCta({
  children,
  className,
  innerClassName,
}: LineGridCtaProps) {
  return (
    <div className={className}>
      <hr className="border-t border-border" />
      <div
        className={cn(
          "px-4 py-10 text-center bg-gradient-to-br from-background via-background to-primary/5 md:px-10 md:py-16",
          innerClassName,
        )}
      >
        {children}
      </div>
      <hr className="border-t border-border" />
    </div>
  );
}
