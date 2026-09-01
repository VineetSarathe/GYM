/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      "ink-950": "#0a0a0a",
      "ink-700": "#262626",
      "chalk-100": "#f5f5f5",
      "brass-400": "#d4a574",
      "brass-500": "#c9915f",
      transparent: "transparent",
    },
    extend: {
      fontFamily: {
        display: ["Big Shoulders Display", "sans-serif"],
        body: ["Manrope", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
