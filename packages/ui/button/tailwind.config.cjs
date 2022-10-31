const { Theme } = require("@dipsaus9/tailwind-theme/src/Theme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: Theme,
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
}
