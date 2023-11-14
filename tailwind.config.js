/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-header-footer": "var(--bg-header-footer)",
        "bg-page-color": "var(--bg-page-color)",
        "white-color": "var(--white-color)",
        "font-family-color": "var(--font-family-color)",
        "dark-gray": "rgb(60, 60, 60)",
      },
      fontFamily: {
        "main-font": ["Chicle", "serif"],
        "general-font": ["Open Sans", "sans-serif"],
      },
      // Extend screens for custom media query
      screens: {
        xs: { max: "350px" },
      },
    },
  },
  plugins: [],
};
