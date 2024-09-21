import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ieGreen: {
          10: "var(--green-light)",
          20: "var(--green-medium)",
          40: "var(--green-lightdark)",
          60: "var(--green-mediumDark)",
        },
        ieBlue: {
          10: "var(--blue-light)",
          20: "var(--blue-medium)",
          40: "var(--blue-lightdark)",
          60: "var(--blue-mediumDark)",
          80: "var(--blue-fullDark)",
        },
        ieGrey: {
          10: "var(--grey-light)",
          20: "var(--grey-medium)",
          40: "var(--grey-lightdark)",
          60: "var(--grey-mediumDark)",
        },
        iePurple: {
          10: "var(--purple-light)",
          20: "var(--purple-medium)",
        },
        ieText: {
          10: "var(--text-light)",
          20: "var(--text-medium)",
          40: "var(--text-lightdark)",
        },
        iePrimary: "var(--primary)",
        ieBlack: "var(--black)",
        ieWhite: "var(--white)",
        ieBackground: "var(--backGround)",
      },
      fontSize: {
        /* --------------------------------- display, same fontSize and lineHeight -------------------------------- */
        "display-2xs": ["var(--text-2xs)", "var(--text-2xs)"] /* 10px */,
        "display-xs": ["var(--text-xs)", "var(--text-xs)"] /* 12px */,
        "display-sm": ["var(--text-sm)", "var(--text-sm)"] /* 14px */,
        "display-md": ["var(--text-md)", "var(--text-md)"] /* 16px */,
        "display-lg": ["var(--text-lg)", "var(--text-lg)"] /* 18px */,
        "display-xl": ["var(--text-xl)", "var(--text-xl)"] /* 20px */,
        "display-2xl": ["var(--text-2xl)", "var(--text-2xl)"] /* 24px */,
        "display-3xl": [
          /* 32px */ "var(--text-3xl)",
          {
            lineHeight: "var(--text-3xl)",
            letterSpacing: "-0.031rem",
          },
        ],
        "display-4xl": [
          /* 48px */ "var(--text-4xl)",
          {
            lineHeight: "var(--text-4xl)",
            letterSpacing: "-0.063rem",
          },
        ],
        "display-5xl": [
          /* 56px */ "var(--text-5xl)",
          {
            lineHeight: "var(--text-5xl)",
            letterSpacing: "-0.094rem",
          },
        ],
        "display-6xl": [
          /* 64px */ "var(--text-6xl)",
          {
            lineHeight: "var(--text-6xl)",
            letterSpacing: "-0.125rem",
          },
        ],
        "display-7xl": [
          /* 72px */ "var(--text-7xl)",
          {
            lineHeight: "var(--text-7xl)",
            letterSpacing: "-0.156rem",
          },
        ],
        /* -------------------------------- paragraph, different fontSize and lineHeight ------------------------------- */
        "paragraph-xs": ["var(--text-xs)", "1rem"] /* 12px */,
        "paragraph-sm": ["var(--text-sm)", "1.25rem"] /* 14px */,
        "paragraph-md": ["var(--text-md)", "1.5rem"] /* 16px */,
        "paragraph-lg": ["var(--text-lg)", "1.75rem"] /* 18px */,
        "paragraph-xl": ["var(--text-xl)", "1.75rem"] /* 20px */,
      },
      opacity: {
        2: ".2",
        5: ".5",
        7: ".7",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("children", "&>*");
      addVariant("svg", "&svg");
    }),
  ],
};
export default config;
