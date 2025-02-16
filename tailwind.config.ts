import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        sm: "480px", // ~480px
        md: "768px", // ~768px
        lg: "992px", // ~992px
        xl: "1280px", // ~1280px
        "2xl": "1536px", // ~1536px
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
