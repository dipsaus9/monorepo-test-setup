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
  stories: ["../packages/**/*.stories.@(js|jsx|ts|tsx)"],
}
