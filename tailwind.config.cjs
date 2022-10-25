/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "red",
      secondary: "green",
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
