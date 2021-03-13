export type BackgroundConfig = {
  fontFile: string
  textPlacement: {
    x: number
    y: number
  }
  maxWidth: number
}

const fonts = {
  white: 'font_white.fnt',
  black: 'font_black.fnt',
}

export const defaultConfig: BackgroundConfig = {
  textPlacement: {
    x: 100,
    y: 200,
  },
  fontFile: fonts.white,
  maxWidth: 500,
}

export const backgroundConfig: Record<string, BackgroundConfig> = {
  'field.jpg': {
    fontFile: fonts.black,
    textPlacement: {
      x: 100,
      y: 75,
    },
    maxWidth: 500,
  },
}
