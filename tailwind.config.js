/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "bg-header-footer": "var(--bg-header-footer)",
        "bg-page-color": "var(--bg-page-color)",
        "white-color": "var(--white-color)",
        "font-family-color": "var(--font-family-color)"
      },
      fontFamily: {
        "main-font": ["Chicle", "serif"],
        "general-font": ["Open Sans", "sans-serif"]
      },
    },
  },
  plugins: [
      // eslint-disable-next-line no-undef
      require('flowbite/plugin')
  ],
}

