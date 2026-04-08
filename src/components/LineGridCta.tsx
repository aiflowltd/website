import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LineGridCtaProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  /** When false, omit full-width `<hr />` rules (homepage-style section flow). Default true. */
  showRules?: boolean;
}

/** CTA band: optional horizontal rules + light gradient fill. */
export function LineGridCta({
  children,
  className,
  innerClassName,
  showRules = true,
}: LineGridCtaProps) {
  return (
    <div className={className}>
      {showRules ? <hr className="border-t border-border" /> : null}
      <div
        className={cn(
          "bg-gradient-to-br from-background via-background to-primary/5 px-4 py-10 text-center md:px-10 md:py-16",
          innerClassName,
        )}
      >
        {children}
      </div>
      {showRules ? <hr className="border-t border-border" /> : null}
    </div>
  );
}
