import { cn } from "@/lib/utils";

interface LabelBadgeProps {
  children: React.ReactNode;
  className?: string;
}

/** Hero-style pill badge with gradient glow, animated dot, and gradient text */
export function LabelBadge({ children, className }: LabelBadgeProps) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-3 px-6 py-3 rounded-full overflow-hidden",
        className,
      )}
    >
      {/* Left gradient glow — covers left ~70%, fades to transparent */}
      <div
        className="absolute inset-y-[3px] left-0 rounded-full"
        style={{
          width: "70%",
          background:
            "linear-gradient(140deg, rgba(255,255,255,0.35) 0%, rgba(200,210,230,0.18) 10%, rgba(116,141,252,0.08) 22%, transparent 35%)",
        }}
      />
      <span className="relative z-10 flex h-[7px] w-[7px] shrink-0">
        <span className="relative inline-flex rounded-full h-full w-full bg-grey animate-dot-flash" />
      </span>
      <span
        className="relative z-10 text-lg font-light tracking-wide"
        style={{
          background: "linear-gradient(135deg, #fff 0%, #6E6F81 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {children}
      </span>
    </div>
  );
}
