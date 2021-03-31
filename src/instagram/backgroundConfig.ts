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
  black_large: 'font_black_large.fnt',
  white_large: 'font_white_large.fnt',
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
      x: 150,
      y: 45,
    },
    maxWidth: 350,
  },
  'meadow.jpg': {
    fontFile: fonts.black_large,
    textPlacement: {
      x: 320,
      y: 180,
    },
    maxWidth: 400,
  },
  'path.jpg': {
    fontFile: fonts.white_large,
    textPlacement: {
      x: 310,
      y: 280,
    },
    maxWidth: 400,
  },
  'pumpkins.jpg': {
    fontFile: fonts.black_large,
    textPlacement: {
      x: 175,
      y: 200,
    },
    maxWidth: 400,
  },
  'stream.jpg': {
    fontFile: fonts.black_large,
    textPlacement: {
      x: 100,
      y: 100,
    },
    maxWidth: 550,
  },
  'trees2.jpg': {
    fontFile: fonts.black,
    textPlacement: {
      x: 310,
      y: 200,
    },
    maxWidth: 300,
  },
  'wood.jpg': {
    fontFile: fonts.white_large,
    textPlacement: {
      x: 400,
      y: 250,
    },
    maxWidth: 450,
  },
}
