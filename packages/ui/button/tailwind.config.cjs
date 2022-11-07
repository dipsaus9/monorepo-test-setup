/* eslint-disable import/no-unresolved */
const {
  GammaTheme: { Colors },
} = require("@dipsaus9/tailwind-theme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: Colors,
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
}
