/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        bgcolor: "#0E2A47",
        primary: "#EDD5CA",
        secondary: "#2AB8BF",
        "blue-zodiac": {
          50: "#f1f8fe",
          100: "#e2effc",
          200: "#c0def7",
          300: "#87c3f2",
          400: "#48a6e8",
          500: "#208ad7",
          600: "#126db7",
          700: "#105794",
          800: "#114a7b",
          900: "#143f66",
          950: "#0e2a47",
        },
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
