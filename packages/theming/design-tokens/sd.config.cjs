const StyleDictionary = require("style-dictionary")

const baseConfig = require("./baseTransform.cjs")

StyleDictionary.registerFileHeader({
  name: "ignoreEslintAndPrettier",
  fileHeader: (defaultMessage) => [
    ...defaultMessage,
    `*/
/* eslint-disable semi */
/*`,
    `*/
/* eslint-disable prettier/prettier */
/*`,
  ],
})

StyleDictionary.registerTransform({
  name: "spacing/pxToRem",
  type: "value",
  matcher(token) {
    return token.attributes.category === "spacing"
  },
  // transitive: true,
  transformer(token) {
    console.log(token)

    return token.value
    // if (token.name.includes("Base")) {
    //   return "8"
    // }

    // console.log(token.original.value.replace(/{spacing.base}/, "8"))

    // return `${parseInt(
    //   token.original.value.replace(/{spacing.base}/, "8"),
    //   10
    // )}`
    // return `${(parseInt(token.original.value, 10) / 16).toString()}rem`
  },
})

StyleDictionary.extend({
  source: ["src/tokens/Gamma/**/*.json"],
  platforms: {
    js: {
      ...baseConfig,
      buildPath: "./src/gamma/",
    },
  },
}).buildAllPlatforms()

StyleDictionary.extend({
  source: ["src/tokens/Karwei/**/*.json"],
  platforms: {
    js: {
      ...baseConfig,
      buildPath: "./src/karwei/",
    },
  },
}).buildAllPlatforms()
