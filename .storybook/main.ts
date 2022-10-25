module.exports = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],
  features: {
    buildStoriesJson: true,
  },
  core: { builder: "@storybook/builder-vite" },
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],
}
