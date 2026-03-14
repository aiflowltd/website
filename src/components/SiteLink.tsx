import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ArrowType = "right" | "up-right" | false;

interface SiteLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  /** Arrow style: "right" (→), "up-right" (icon), or false */
  arrow?: ArrowType;
}

const linkClass =
  "inline-flex items-center gap-1 font-semibold text-foreground transition-colors text-primary/80 hover:text-primary";

export function SiteLink({
  to,
  children,
  className,
  arrow = "up-right",
}: SiteLinkProps) {
  const isExternal =
    to.startsWith("http://") ||
    to.startsWith("https://") ||
    to.startsWith("mailto:");

  const content = (
    <>
      {children}
      {arrow === "up-right" && (
        <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
      )}
      {arrow === "right" && (
        <span className="text-primary/80 hover:text-primary" aria-hidden>
          →
        </span>
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(linkClass, className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={cn(linkClass, className)}>
      {content}
    </Link>
  );
}
