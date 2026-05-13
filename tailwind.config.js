/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#05070d",
        panel: "#0c111d",
        line: "rgba(148, 163, 184, 0.18)",
        cyanfire: "#22d3ee",
        violetfire: "#8b5cf6",
        mintfire: "#34d399",
      },
      boxShadow: {
        glow: "0 0 44px rgba(34, 211, 238, 0.18)",
      },
    },
  },
  plugins: [],
};
