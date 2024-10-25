import type { Config } from "tailwindcss";

const config: Config = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

  content: [
    "./math-problem-add/**/*.{js,ts,jsx,tsx,mdx}",
    "./math-problem-sub/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/page.tsx",
    "./page.tsx",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
