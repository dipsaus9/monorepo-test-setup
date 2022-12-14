/* eslint-disable import/no-unresolved */
const {
  GammaTheme: { colors },
} = require("@dipsaus9/tailwind-theme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors,
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
}
