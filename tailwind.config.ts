import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Montserrat Alternates", "sans-serif"],
        alternates: ["Montserrat Alternates", "sans-serif"],
      },
      colors: {
        /* Theme palette - Primary, Status, Base (use only these, no random hex) */
        primary: {
          DEFAULT: "hsl(var(--primary))" /* #1AB8FF Azure Blue */,
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))" /* #748DFC Space Violet */,
          foreground: "hsl(var(--secondary-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))" /* #0DD9B7 Alien Green */,
          foreground: "hsl(var(--success-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))" /* #EA2849 Laser Red */,
          foreground: "hsl(var(--destructive-foreground))",
        },
        error: {
          DEFAULT: "hsl(var(--destructive))" /* alias */,
          foreground: "hsl(var(--destructive-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))" /* #FFC914 Cosmic Yellow */,
          foreground: "hsl(var(--warning-foreground))",
        },
        "dark-grey": "hsl(var(--dark-grey))" /* #292C33 */,
        "medium-grey": "hsl(var(--medium-grey))" /* #555A66 */,
        grey: "hsl(var(--grey))" /* #8B92A3 */,
        "light-grey": "hsl(var(--light-grey))" /* #C5CCE2 */,
        /* UI (derived from theme) */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "cyan-glow": "hsl(var(--cyan-glow))",
        "dark-surface": "hsl(var(--dark-surface))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "logo-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "logo-spin": "logo-spin 8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
