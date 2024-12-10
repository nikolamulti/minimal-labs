import { createPreset } from "fumadocs-ui/tailwind-plugin";
import plugin from "tailwindcss/plugin";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        handwritten: ["'Just Another Hand'", "cursive"],
      },
      backgroundColor: {
        base: "rgb(var(--color-neutral-1200))",
        muted: "var(--color-neutral-1100)",
        default: "var(--color-neutral-1000)",
        inverted: "var(--color-neutral-100)",
        input: "var(--color-neutral-black-22)",
        primary: "var(--color-blue-400)",
        "primary-hover": "var(--color-blue-300)",
        "primary-transparent": "var(--color-blue-alpha-25)",
        "primary-transparent-hover": "var(--color-blue-alpha-35)",
        success: "var(--color-green-400)",
        "success-hover": "var(--color-green-300)",
        "success-transparent": "var(--color-green-alpha-25)",
        "success-transparent-hover": "var(--color-green-alpha-35)",
        warning: "var(--color-yellow-200)",
        "warning-hover": "var(--color-yellow-100)",
        "warning-transparent": "var(--color-yellow-alpha-15)",
        "warning-transparent-hover": "var(--color-yellow-alpha-25)",
        critical: "var(--color-red-400)",
        "critical-hover": "var(--color-red-300)",
        "critical-transparent": "var(--color-red-alpha-25)",
        "critical-transparent-hover": "var(--color-red-alpha-35)",
        orange: "var(--color-orange-400)",
        "orange-hover": "var(--color-orange-300)",
        "orange-transparent": "var(--color-orange-alpha-20)",
        "orange-transparent-hover": "var(--color-orange-alpha-30)",
        pink: "var(--color-pink-400)",
        "pink-hover": "var(--color-pink-300)",
        "pink-transparent": "var(--color-pink-alpha-25)",
        "pink-transparent-hover": "var(--color-pink-alpha-35)",
        purple: "var(--color-purple-400)",
        "purple-hover": "var(--color-purple-300)",
        "purple-transparent": "var(--color-purple-alpha-25)",
        "purple-transparent-hover": "var(--color-purple-alpha-35)",
      },
      foregroundColor: {
        base: "var(--color-white)",
        critical: "var(--color-red-100)",
        inverted: "var(--color-black)",
        disabled: "var(--color-neutral-700)",
        muted: "var(--color-neutral-white-67)",
        orange: "var(--color-orange-100)",
        pink: "var(--color-pink-100)",
        primary: "var(--color-blue-100)",
        purple: "var(--color-purple-100)",
        subtle: "var(--color-neutral-white-50)",
        success: "var(--color-green-100)",
        warning: "var(--color-yellow-100)",
      },
      borderColor: {
        base: "var(--color-neutral-1200)",
        bold: "var(--color-neutral-white-22)",
        critical: "var(--color-red-200)",
        default: "var(--color-neutral-white-16)",
        inverted: "var(--color-white)",
        medium: "var(--color-neutral-white-19)",
        muted: "var(--color-neutral-white-13)",
        orange: "var(--color-orange-200)",
        pink: "var(--color-pink-200)",
        primary: "var(--color-blue-200)",
        purple: "var(--color-purple-200)",
        success: "var(--color-green-200)",
        warning: "var(--color-yellow-200)",
      },
      animation: {
        border: "border 4s linear infinite",
        marquee: "marquee 50s linear infinite",
        marquee2: "marquee2 50s linear infinite",
        "marquee-reverse": "marquee-reverse 50s linear infinite",
        "marquee2-reverse": "marquee2-reverse 50s linear infinite",
        "marquee-vertical": "marquee-vertical 20s linear infinite",
        "marquee2-vertical": "marquee2-vertical 20s linear infinite",
        slideDown: "slideDown 200ms ease-out",
        slideUp: "slideUp 200ms ease-out",
        moveAlongPath: "moveAlongPath 6s linear infinite",
        moveAlongPathDelayed: "moveAlongPath 6s linear 2.75s infinite",
      },
      keyframes: {
        border: {
          to: { "--border-angle": "360deg" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "marquee2-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "marquee-vertical": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "marquee2-vertical": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
        slideDown: {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        moveAlongPath: {
          "0%": { offsetDistance: "0%" },
          "100%": { offsetDistance: "100%" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          fg: (value) => ({
            color: value,
          }),
        },
        { values: theme("foregroundColor"), type: "color" }
      );
    }),
    typography,
    plugin(({ addUtilities }) => {
      addUtilities({
        ".animate-moveAlongPath": {
          animation: "moveAlongPath 6s linear infinite",
        },
        ".animate-moveAlongPathDelayed": {
          animation: "moveAlongPath 6s linear 2.75s infinite",
        },
      });
    }),
  ],
  presets: [createPreset({ layoutWidth: "90rem" })],
};
