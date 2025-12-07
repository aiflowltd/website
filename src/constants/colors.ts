/**
 * Brand & Status Colors
 * These hex values correspond to the HSL values defined in src/index.css
 * Update both files when changing colors to keep them in sync.
 */

// Brand & Status Colors (Hex values matching CSS HSL variables)
export const colors = {
  // Brand & Status Colors
  primary: "#1A88FF", // Azure Blue - hsl(199, 100%, 55%)
  secondary: "#748DFC", // Space Violet - hsl(229, 96%, 72%)
  success: "#0DD9B7", // Alien Green - hsl(170, 89%, 45%)
  destructive: "#EA2849", // Laser Red - hsl(350, 82%, 54%)
  warning: "#FFC914", // Cosmic Yellow - hsl(46, 100%, 54%)

  // Neutral / Base Colors
  darkGrey: "#292C33", // hsl(222, 11%, 18%)
  mediumGrey: "#555A66", // hsl(222, 9%, 37%)
  grey: "#8B92A3", // hsl(222, 12%, 59%)
  lightGrey: "#C5CCE2", // hsl(226, 33%, 83%)
} as const;
