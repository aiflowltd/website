import { cn } from "@/lib/utils";

/** Horizontal rules that match section line grids (full-width top border only). */
export const lineHrClass = "w-full border-0 border-t border-border";

/** Hairline border class + `<hr>` matching ServicesSection / BlogSection. */
export const editorialLine = "border-[#E2E6F0]";
export const editorialHrClass = "w-full border-0 border-t border-[#E2E6F0]";

/** Horizontal padding for 3-up editorial rows on `md+` (desktop blog carousel / listing). */
export const colPad3 = ["md:pr-10", "md:px-10", "md:pl-10"] as const;

/**
 * Base grid: stacked rows on small screens with horizontal dividers; on `md+`,
 * horizontal dividers off and vertical dividers between columns (`divide-x`).
 */
export const lineGrid =
  "grid w-full divide-y divide-border md:divide-y-0 md:divide-x md:divide-border";

export const gridCols2 = "grid-cols-1 md:grid-cols-2";
export const gridCols3 = "grid-cols-1 md:grid-cols-3";
export const gridCols4 = "grid-cols-1 md:grid-cols-4";

/** Optional row sizing for stat blocks (equal visual weight on large screens). */
export const statsRowTemplateLg = "md:auto-rows-fr md:items-stretch";

/** Alias for older call sites. */
export const statsRowTemplate = statsRowTemplateLg;

const cellPad = "px-4 py-8 md:px-8 md:py-10";

/** Two-column editorial cells (e.g. leadership). */
export function cell2Col(_index: number) {
  return cn(cellPad);
}

/** Two-column split (e.g. technologies | industries). */
export function cell2Split(_index: 0 | 1) {
  return cn(cellPad);
}

/** Three-column cells (e.g. values). */
export function cell3Col(_index: number) {
  return cn(cellPad);
}

/** Four-column stat cells. */
export function cell4Stats(_index: number) {
  return cn(cellPad);
}
