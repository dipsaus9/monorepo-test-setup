/** @type {import('tailwindcss').Config} */
module.exports = {
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
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
}
