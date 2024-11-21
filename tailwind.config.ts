import type { Config } from "tailwindcss";

export default {
  darkMode:"selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#212121",
        lightBackground: "#F9FAFB",
        background: "#EDF2F7",
        activeBackground: "#E5E5E6",
        muted: "#6c737f",
        mutedLight: "#A5A5A9",
        primary: "#21C55D",
        darkLight: "#2F2F2F",
        darkMutedText: "#474747",
      },
    },
  },
  plugins: [],
} satisfies Config;
