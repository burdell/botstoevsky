import * as fonts from './font'

export type BackgroundConfig = {
  fontFile: string
  textPlacement: {
    x: number
    y: number
  }
  maxWidth: number
}

export const defaultConfig: BackgroundConfig = {
  textPlacement: {
    x: 100,
    y: 200,
  },
  fontFile: fonts.nawabiat.white,
  maxWidth: 500,
}

export const backgroundConfig: Record<string, BackgroundConfig> = {
  'beach.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 50,
      y: 50,
    },
    maxWidth: 400,
  },
  'bonfire.jpg': {
    fontFile: fonts.ruluko.white,
    textPlacement: {
      x: 450,
      y: 150,
    },
    maxWidth: 425,
  },
  'books.jpg': {
    fontFile: fonts.playfair.white28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 475,
  },
  'bulb.jpg': {
    fontFile: fonts.ruluko.white,
    textPlacement: {
      x: 30,
      y: 500,
    },
    maxWidth: 700,
  },
  'cocktail.jpg': {
    fontFile: fonts.jost.white,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 425,
  },

  'camera.jpg': {
    fontFile: fonts.jost.black,
    textPlacement: {
      x: 145,
      y: 20,
    },
    maxWidth: 620,
  },
  'dart.jpg': {
    fontFile: fonts.ruluko.white,
    textPlacement: {
      x: 300,
      y: 20,
    },
    maxWidth: 425,
  },
  'film.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 650,
      y: 20,
    },
    maxWidth: 270,
  },
  'girl_coffee.jpg': {
    fontFile: fonts.ruluko.white,
    textPlacement: {
      x: 20,
      y: 75,
    },
    maxWidth: 370,
  },
  'lake.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 50,
      y: 50,
    },
    maxWidth: 500,
  },
  'meadow.jpg': {
    fontFile: fonts.nawabiat.black_large,
    textPlacement: {
      x: 250,
      y: 180,
    },
    maxWidth: 400,
  },
  'rain.jpg': {
    fontFile: fonts.jost.black,
    textPlacement: {
      x: 370,
      y: 80,
    },
    maxWidth: 400,
  },
  'television.jpg': {
    fontFile: fonts.playfair.black,
    textPlacement: {
      x: 60,
      y: 220,
    },
    maxWidth: 350,
  },
  'typewriter.jpg': {
    fontFile: fonts.jost.white18,
    textPlacement: {
      x: 20,
      y: 300,
    },
    maxWidth: 350,
  },
  'waterfall.jpg': {
    fontFile: fonts.ruluko.white,
    textPlacement: {
      x: 20,
      y: 135,
    },
    maxWidth: 300,
  },
}
