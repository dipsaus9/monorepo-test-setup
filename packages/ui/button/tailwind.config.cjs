/* eslint-disable import/no-unresolved */
const {
  Theme: { Colors },
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
