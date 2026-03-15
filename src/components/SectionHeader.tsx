import { cn } from "@/lib/utils";

const titleClass =
  "text-4xl md:text-5xl font-bold font-alternates mb-2";
const subtitleClass = "text-lg text-muted-foreground";

interface SectionHeaderProps {
  /** Main heading */
  title: React.ReactNode;
  /** Optional subtitle below title */
  subtitle?: React.ReactNode;
  /** Optional CTA (button/link) - right-aligned on md+ for default variant */
  action?: React.ReactNode;
  /** Layout: default = title left, action right; centered = title+subtitle centered */
  variant?: "default" | "centered";
  /** Extra class for the wrapper */
  className?: string;
  /** Extra class for title */
  titleClassName?: string;
  /** Extra class for subtitle */
  subtitleClassName?: string;
}

export function SectionHeader({
  title,
  subtitle,
  action,
  variant = "default",
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  if (variant === "centered") {
    return (
      <div className={cn("text-center mb-16", className)}>
        <h2 className={cn(titleClass, "mb-4", titleClassName)}>{title}</h2>
        {subtitle && (
          <p
            className={cn(
              subtitleClass,
              "max-w-2xl mx-auto",
              subtitleClassName,
            )}
          >
            {subtitle}
          </p>
        )}
        {action && <div className="mt-6 flex justify-center">{action}</div>}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-start md:justify-between gap-6",
        className,
      )}
    >
      <div>
        <h2 className={cn(titleClass, titleClassName)}>{title}</h2>
        {subtitle && (
          <p className={cn(subtitleClass, subtitleClassName)}>{subtitle}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
