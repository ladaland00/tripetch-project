import type { Config } from "tailwindcss";
import { Open_Sans } from "next/font/google";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-color": "var(--grey-color)",
        "bg-grey": "var(--bg-grey)",
        "dark-grey-color": "var(--dark-grey-color)",
        "purple-color": "var(--purple-color)",
        "blue-color": "var(--blue-color)",
        "secondary-color": "var(--secondary-color)",
      },
    },
  },
  plugins: [],
};
export default config;
