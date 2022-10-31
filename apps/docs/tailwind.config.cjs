const { Theme } = require("@dipsaus9/tailwind-theme/src/Theme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ["../../packages/**/src/**/*.{js,jsx,ts,tsx}"],
  },
  theme: Theme,
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
