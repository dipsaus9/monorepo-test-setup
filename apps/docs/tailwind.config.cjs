/* eslint-disable import/no-unresolved */
const {
  Theme: { colors },
} = require("@dipsaus9/tailwind-theme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ["../../packages/**/src/**/*.{js,jsx,ts,tsx}"],
  },
  theme: {
    colors,
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
