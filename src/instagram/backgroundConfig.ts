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
  'books.jpg': {
    fontFile: fonts.white,
    textPlacement: {
      x: 145,
      y: 345,
    },
    maxWidth: 375,
  },
  'camera.jpg': {
    fontFile: fonts.black,
    textPlacement: {
      x: 145,
      y: 60,
    },
    maxWidth: 425,
  },
  'film.jpg': {
    fontFile: fonts.black,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 250,
  },
  'handles.jpg': {
    fontFile: fonts.white,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 250,
  },
  'meadow.jpg': {
    fontFile: fonts.black_large,
    textPlacement: {
      x: 300,
      y: 180,
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
  'television.jpg': {
    fontFile: fonts.black,
    textPlacement: {
      x: 60,
      y: 240,
    },
    maxWidth: 350,
  },
  'trees2.jpg': {
    fontFile: fonts.black,
    textPlacement: {
      x: 310,
      y: 200,
    },
    maxWidth: 300,
  },
}
