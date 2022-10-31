/**
 * Do not edit directly
 * Generated on Mon, 31 Oct 2022 14:07:26 GMT
 */

export default tokens

declare interface DesignToken {
  value: any
  name?: string
  comment?: string
  themeable?: boolean
  attributes?: {
    category?: string
    type?: string
    item?: string
    subitem?: string
    state?: string
    [key: string]: any
  }
  [key: string]: any
}

declare const tokens: {
  color: {
    base: {
      gray: {
        light: DesignToken
        medium: DesignToken
        dark: DesignToken
      }
      red: DesignToken
      green: DesignToken
    }
    font: {
      base: DesignToken
      secondary: DesignToken
      tertiary: DesignToken
    }
  }
  size: {
    font: {
      small: DesignToken
      medium: DesignToken
      large: DesignToken
      base: DesignToken
    }
  }
}
