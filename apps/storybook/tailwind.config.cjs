/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./packages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#FF00FF",
      secondary: "green",
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
