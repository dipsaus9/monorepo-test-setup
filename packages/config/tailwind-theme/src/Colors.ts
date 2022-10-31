/* eslint-disable no-restricted-syntax */
import kebabCase from "lodash.kebabcase"

import * as colors from "@dipsaus9/design-tokens/dist/colors"

const formattedColors: Record<string, string> = {}

for (const [key, value] of Object.entries(colors)) {
  formattedColors[kebabCase(key)] = value
}

export const Colors = {
  ...formattedColors,
}
