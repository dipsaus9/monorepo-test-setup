import "tailwindcss/tailwind.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    exclude: ["ref", "theme", "as", "forwardedAs"],
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
