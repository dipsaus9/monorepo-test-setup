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
    ecmaVersion: 2020,
    sourceType: "module",
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  settings: {
    node: {
      tryExtensions: [".js", ".json", ".ts", ".jsx", ".tsx"],
    },
  },
  parser: "@typescript-eslint/parser",
  rules: {
    // Although explicit types are not enforced, they are expected to be defined by any functions exported in an index file
    "node/no-extraneous-import": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "react/function-component-definition": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-no-bind": "off",
    "import/no-absolute-path": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: true,
      },
    ],
    "sort-imports": "off",
    camelcase: "off",
    "import/extensions": "off",
    "no-confusing-arrow": "off",
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
            pattern: "@intergamma/**",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react", "builtin"],
      },
    ],
    "import/prefer-default-export": "off",
    "no-console": "error",
    "no-use-before-define": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "node/no-missing-import": "off",
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
    quotes: ["error", "double"],
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
    semi: ["error", "never"],
    "node/no-unsupported-features/es-syntax": "off",
    "node/no-unpublished-import": "off",
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
        "jest/expect-expect": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "jest/valid-expect": "off",
        "jest/valid-expect-in-promise": "off",
        "jest/valid-describe-callback": "off",
      },
    },
    {
      files: [
        "vite.config.ts",
        "viteBaseConfig.ts",
        "**/*/vite.config.ts",
        "postcss.config.cjs",
        "**/*/postcss.config.cjs",
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
