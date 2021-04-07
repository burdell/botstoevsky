import { nawabiat, playfair, ruluko } from './font'

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
  fontFile: nawabiat.white,
  maxWidth: 500,
}

export const backgroundConfig: Record<string, BackgroundConfig> = {
  'beach.jpg': {
    fontFile: nawabiat.black,
    textPlacement: {
      x: 50,
      y: 50,
    },
    maxWidth: 400,
  },
  'books.jpg': {
    fontFile: playfair.white,
    textPlacement: {
      x: 145,
      y: 145,
    },
    maxWidth: 375,
  },
  'books2.jpg': {
    fontFile: playfair.white,
    textPlacement: {
      x: 185,
      y: 20,
    },
    maxWidth: 425,
  },
  'camera.jpg': {
    fontFile: playfair.black,
    textPlacement: {
      x: 145,
      y: 20,
    },
    maxWidth: 620,
  },
  'dart.jpg': {
    fontFile: ruluko.white,
    textPlacement: {
      x: 300,
      y: 20,
    },
    maxWidth: 425,
  },
  'film.jpg': {
    fontFile: nawabiat.black,
    textPlacement: {
      x: 650,
      y: 20,
    },
    maxWidth: 270,
  },
  'girl_coffee.jpg': {
    fontFile: ruluko.white,
    textPlacement: {
      x: 20,
      y: 75,
    },
    maxWidth: 370,
  },
  'meadow.jpg': {
    fontFile: nawabiat.black_large,
    textPlacement: {
      x: 250,
      y: 180,
    },
    maxWidth: 400,
  },
  'television.jpg': {
    fontFile: playfair.black,
    textPlacement: {
      x: 60,
      y: 220,
    },
    maxWidth: 350,
  },
  'waterfall.jpg': {
    fontFile: ruluko.white,
    textPlacement: {
      x: 20,
      y: 135,
    },
    maxWidth: 300,
  },
}
