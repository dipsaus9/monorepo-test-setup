/* eslint-disable no-restricted-syntax */
import kebabCase from "lodash.kebabcase"

import { Gamma, Karwei } from "@dipsaus9/design-tokens"

function mapColors(colors: [key: string, value: string][]) {
  return colors.reduce<Record<string, string>>((acc, [key, value]) => {
    acc[kebabCase(key)] = value

    return acc
  }, {})
}

export const GammaColors = {
  ...mapColors(Object.entries(Gamma.Colors)),
}

export const KarweiColors = {
  ...mapColors(Object.entries(Karwei.Colors)),
}
