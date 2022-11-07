module.exports = {
  transforms: [
    "attribute/cti",
    "name/cti/pascal",
    "size/rem",
    "color/hex",
    "spacing/pxToRem",
  ],
  files: [
    // {
    //   format: "javascript/es6",
    //   destination: "colors.js",
    //   options: {
    //     fileHeader: "ignoreEslintAndPrettier",
    //   },
    //   filter: {
    //     attributes: {
    //       category: "colors",
    //     },
    //   },
    // },
    // {
    //   format: "typescript/es6-declarations",
    //   destination: "colors.d.ts",
    //   options: {
    //     fileHeader: "ignoreEslintAndPrettier",
    //   },
    //   filter: {
    //     attributes: {
    //       category: "colors",
    //     },
    //   },
    // },
    {
      format: "javascript/es6",
      destination: "spacing.js",
      options: {
        fileHeader: "ignoreEslintAndPrettier",
      },
      filter: {
        attributes: {
          category: "spacing",
        },
      },
    },
    // {
    //   format: "typescript/es6-declarations",
    //   destination: "spacing.d.ts",
    //   options: {
    //     fileHeader: "ignoreEslintAndPrettier",
    //   },
    //   filter: {
    //     attributes: {
    //       category: "spacing",
    //     },
    //   },
    // },
  ],
}
