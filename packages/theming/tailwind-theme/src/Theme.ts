import type { Config } from "tailwindcss"

import { GammaColors, KarweiColors } from "./Colors"

export const GammaTheme: Config["theme"] = {
  colors: GammaColors,
}

export const KarweiTheme: Config["theme"] = {
  colors: KarweiColors,
}
