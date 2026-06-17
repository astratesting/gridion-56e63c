import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          DEFAULT: "#7CB9E8",
          light: "#B8D9F0",
          dark: "#5A9FCF",
        },
        mint: {
          DEFAULT: "#B2D8D8",
          light: "#D4ECEC",
          dark: "#8FBFBF",
        },
        sand: {
          DEFAULT: "#E8D5B7",
          light: "#F2E8D6",
          dark: "#D4BC96",
        },
        soft: {
          white: "#F8F6F0",
          gray: "#EAE6DE",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        accent: ["var(--font-lora)", "Georgia", "serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
