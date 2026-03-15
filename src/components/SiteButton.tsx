import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "tertiary" | "nav";
type ArrowType = "right" | "up-right" | false;

/** Shared button typography: Montserrat 400, 14px, 21px line-height, 0.25px letter-spacing */
const buttonTypography =
  "font-sans font-normal text-sm leading-[21px] tracking-[0.25px]";

/** Primary gradient for hover states (arrow circle, nav pill) */
const primaryGradient =
  "linear-gradient(105.61deg, #0DD9B7 9.01%, #13C9DA 27.5%, #18BDF5 44.3%, #1AB8FF 54.38%, #748DFC 92.18%)";

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
            "group flex flex-row items-center rounded-[72px] transition-all min-w-0",
            "h-12 py-1",
            arrow ? "pl-5 pr-1" : "px-6",
            "bg-white text-black",
            "hover:bg-grey/30 hover:text-white",
            buttonTypography,
            className,
          )}
          {...props}
        >
          <span className="flex-1 flex justify-center min-w-0">{children}</span>
          {arrow && (
            <span className="relative flex flex-none items-center justify-center w-10 h-10 rounded-[56px] shrink-0 overflow-hidden ml-2">
              <span
                className="absolute inset-0 rounded-[56px] bg-black transition-opacity duration-200 group-hover:opacity-0"
                aria-hidden
              />
              <span
                className="absolute inset-0 rounded-[56px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                style={{ background: primaryGradient }}
                aria-hidden
              />
              <ArrowIcon type={arrow} className="relative z-[1] text-white" />
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
            "inline-flex flex-row items-center justify-center gap-3 rounded-[72px] transition-colors",
            "h-12 py-1 px-6",
            "bg-grey/30 text-white",
            "hover:bg-white hover:text-black",
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
            "text-primary",
            "hover:opacity-90",
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

    // nav variant (menu/nav: same as secondary, height 40px) – hover: primary gradient pill, white text
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex flex-row items-center justify-center gap-3 overflow-hidden rounded-[72px] transition-colors duration-200",
          "h-10 py-1 px-6",
          "bg-grey/30 text-white",
          buttonTypography,
          className,
        )}
        {...props}
      >
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
