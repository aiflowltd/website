import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "tertiary" | "nav";
type ArrowType = "right" | "up-right" | false;

const buttonTypography =
  "font-sans font-normal text-sm leading-[21px] tracking-[0.25px]";

const primaryGradient =
  "linear-gradient(105.61deg, #0DD9B7 9.01%, #13C9DA 27.5%, #18BDF5 44.3%, #112e63 54.38%, #748DFC 92.18%)";

interface SiteButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  arrow?: ArrowType;
}

const ArrowIcon = ({
  type,
  className,
}: {
  type: Exclude<ArrowType, false>;
  className?: string;
}) => {
  const iconClass = cn("w-6 h-6 shrink-0", className);
  return type === "up-right" ? (
    <ArrowUpRight className={iconClass} strokeWidth={1.5} />
  ) : (
    <ArrowRight className={iconClass} strokeWidth={1.5} />
  );
};

const SiteButton = forwardRef<HTMLButtonElement, SiteButtonProps>(
  (
    { variant = "primary", arrow = "right", className, children, ...props },
    ref,
  ) => {
    if (variant === "primary") {
      return (
        <button
          ref={ref}
          className={cn(
            "group flex flex-row items-center rounded-[72px] transition-opacity min-w-0",
            "h-12 py-1",
            arrow ? "pl-5 pr-1" : "px-6",
            // Black background, white text
            "bg-foreground text-background",
            "hover:opacity-90",
            buttonTypography,
            className,
          )}
          {...props}
        >
          <span className="flex-1 flex justify-center min-w-0">{children}</span>
          {arrow && (
            <span className="relative flex flex-none items-center justify-center w-10 h-10 rounded-[56px] shrink-0 overflow-hidden ml-2">
              {/* White circle — default state */}
              <span
                className="absolute inset-0 rounded-[56px] bg-background transition-opacity duration-200 group-hover:opacity-0"
                aria-hidden
              />
              {/* Gradient circle — on hover */}
              <span
                className="absolute inset-0 rounded-[56px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                style={{ background: primaryGradient }}
                aria-hidden
              />
              {/* Arrow: black on white circle, white on gradient */}
              <ArrowIcon
                type={arrow}
                className="relative z-[1] text-foreground group-hover:text-white transition-colors duration-200"
              />
            </span>
          )}
        </button>
      );
    }

    if (variant === "secondary") {
      return (
        <button
          ref={ref}
          className={cn(
            "inline-flex flex-row items-center justify-center gap-3 rounded-[72px] transition-all duration-200",
            "h-12 py-1 px-6",
            // Light gray inactive state
            "bg-muted text-foreground",
            // On hover: goes black with white text
            "hover:bg-foreground hover:text-background",
            buttonTypography,
            className,
          )}
          {...props}
        >
          {children}
        </button>
      );
    }

    if (variant === "tertiary") {
      return (
        <button
          ref={ref}
          className={cn(
            "group flex flex-row items-center gap-2 py-0.5 px-0 rounded-none transition-colors min-w-0",
            "h-7 min-h-7",
            "text-primary hover:opacity-90",
            buttonTypography,
            className,
          )}
          {...props}
        >
          <span className="flex-1 flex justify-center min-w-0">{children}</span>
          {arrow && (
            <span className="flex-none shrink-0 [&_svg]:transition-opacity [&_svg]:duration-200 group-hover:[&_svg]:opacity-90">
              <ArrowIcon type={arrow} className="text-primary" />
            </span>
          )}
        </button>
      );
    }

    // nav variant: black default → gradient on hover
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex flex-row items-center justify-center gap-3 overflow-hidden rounded-[72px] transition-colors duration-200",
          "h-10 py-1 px-6",
          "bg-foreground text-background",
          buttonTypography,
          className,
        )}
        {...props}
      >
        {/* Gradient overlay on hover */}
        <span
          className="absolute inset-0 rounded-[72px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          style={{ background: primaryGradient }}
          aria-hidden
        />
        <span className="relative z-[1]">{children}</span>
      </button>
    );
  },
);

SiteButton.displayName = "SiteButton";

export { SiteButton };
