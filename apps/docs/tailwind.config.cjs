
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ["../../packages/**/src/**/*.{js,jsx,ts,tsx}"],
  },
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
