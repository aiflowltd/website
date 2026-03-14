import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const paddingMap = {
  default: "py-24 px-6",
  tight: "py-20 px-6",
  compact: "py-12 px-6",
  hero: "pt-40 pb-32 px-6",
} as const;

const maxWidthMap = {
  default: "max-w-6xl",
  narrow: "max-w-4xl",
  wide: "max-w-7xl",
} as const;

export type SectionPadding = keyof typeof paddingMap;
export type SectionMaxWidth = keyof typeof maxWidthMap;

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Section id for anchor links */
  id?: string;
  /** Padding variant */
  padding?: SectionPadding;
  /** Container max-width variant */
  maxWidth?: SectionMaxWidth;
  /** Add scroll-mt-20 for fixed nav */
  scrollMargin?: boolean;
  /** Overflow hidden on section */
  overflowHidden?: boolean;
  /** Ref forwarded to inner container div */
  innerRef?: React.RefObject<HTMLDivElement | null>;
  /** Extra class for inner container */
  containerClassName?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      id,
      padding = "default",
      maxWidth = "default",
      scrollMargin = false,
      overflowHidden = false,
      innerRef,
      containerClassName,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "relative",
          paddingMap[padding],
          scrollMargin && "scroll-mt-20",
          overflowHidden && "overflow-hidden",
          className,
        )}
        {...props}
      >
        <div
          ref={innerRef}
          className={cn(
            "container mx-auto",
            maxWidthMap[maxWidth],
            containerClassName,
          )}
        >
          {children}
        </div>
      </section>
    );
  },
);

Section.displayName = "Section";

export { Section };
