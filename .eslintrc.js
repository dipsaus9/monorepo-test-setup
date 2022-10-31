const { off } = require("process")

module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "prettier",
    "plugin:import/typescript",
  ],
  plugins: ["import", "prettier", "@typescript-eslint"],
  ignorePatterns: ["dist/", "node_modules/", ".eslintrc.js"],
  env: {
    es6: true,
  },
  globals: {
    React: true,
    JSX: true,
  },
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-shadow": "error",
    "react/function-component-definition": "off",
    "react/destructuring-assignment": "off",
    "import/no-absolute-path": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: true,
      },
    ],
    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
        groups: ["builtin", "external", "parent", "sibling", "internal"],
        "newlines-between": "always",
        pathGroups: [
          {
            group: "external",
            pattern: "react",
            position: "before",
          },
          {
            group: "parent",
            pattern: "@dipsaus9/**",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react", "builtin"],
      },
    ],
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    camelcase: "off",
    "sort-imports": "off",
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "no-use-before-define": "off",
    "no-shadow": "off",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        next: "*",
        prev: ["const", "let", "var"],
      },
      {
        blankLine: "any",
        next: ["const", "let", "var"],
        prev: ["const", "let", "var"],
      },
      {
        blankLine: "always",
        next: "return",
        prev: "*",
      },
      {
        blankLine: "never",
        next: "*",
        prev: ["case", "default"],
      },
      {
        blankLine: "always",
        next: "*",
        prev: ["multiline-const"],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        semi: false,
      },
    ],
    "react/button-has-type": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-uses-react": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off", // Turned off for now as too many components don't use this correctly
    "react/static-property-placement": "off",
  },

  overrides: [
    {
      files: ["**/*.spec.{js,jsx,ts,tsx}"],
      plugins: ["cypress"],
      extends: ["plugin:cypress/recommended"],
      env: {
        "cypress/globals": true,
      },
      rules: {
        "@typescript-eslint/no-unused-expressions": "off",
      },
    },
    {
      files: [
        "**/*/vite.config.ts",
        "**/*/postcss.config.cjs",
        "**/*/tailwind.config.cjs",
        "tailwind.config.cjs",
        "test.js"
      ],
      parserOptions: {
        project: "tsconfig.node.json",
        tsconfigRootDir: __dirname,
      },
      env: {
        node: true,
      },
      rules: {
        "import/no-extraneous-dependencies": "off",
        "import/no-relative-packages": "off",
        "sort-imports": "off",
        "no-undef": "off",
      },
    },
  ],
}
