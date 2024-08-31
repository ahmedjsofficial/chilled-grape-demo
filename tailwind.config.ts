import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-linear': 'linear-gradient(to right, #73E0A9, #5B68DF)',
        "vg-1": "url('/assets/vg-1.svg')"
      },
    },
  },
  plugins: [],
};
export default config;
