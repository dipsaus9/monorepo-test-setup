import path from 'node:path';

const findStories = (includePattern, excludePattern) => async () => {
  const { globby } = await import('globby'); // globby is ESM only
  return await globby([includePattern, `!${excludePattern}`], {
    cwd: path.join(process.cwd(), '.storybook'),
  });
};

export default {
  /**
   * Prevent parsing node_modules when looking for stories. This also seems to solve the problem of not being able to include stories from the project root.
   * For more information see: https://github.com/storybookjs/storybook/issues/19446
   * TODO Once resolved we can remove the `findStories` util and the dependency to `globby`.
   */
  // "stories": [
  //   "../../../(!(node_modules)**)/src/**/*.stories.mdx",
  //   "../../../(!(node_modules)**)/src/**/*.stories.@(js|jsx|ts|tsx)"
  // ],
  "stories": findStories('../../../**/src/**/*.stories.{mdx,js,jsx,ts,tsx}', '../../../**/node_modules'),
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
};
