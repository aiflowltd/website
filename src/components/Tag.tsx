import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type TagProps = HTMLAttributes<HTMLSpanElement>;

export const Tag = ({ className, ...props }: TagProps) => (
  <span
    className={cn(
      "text-xs px-3 py-1.5 rounded-md border border-border text-muted-foreground",
      className
    )}
    {...props}
  />
);
