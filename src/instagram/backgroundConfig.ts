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
  'bass.jpg': {
    fontFile: fonts.jost.white22,
    textPlacement: {
      x: 610,
      y: 20,
    },
    maxWidth: 320,
  },
  'bonfire.jpg': {
    fontFile: fonts.ruluko.white,
    textPlacement: {
      x: 450,
      y: 150,
    },
    maxWidth: 425,
  },
  'bike.jpg': {
    fontFile: fonts.ruluko.white,
    textPlacement: {
      x: 20,
      y: 370,
    },
    maxWidth: 375,
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
  'cab.jpg': {
    fontFile: fonts.jost.white,
    textPlacement: {
      x: 400,
      y: 300,
    },
    maxWidth: 400,
  },
  'camera.jpg': {
    fontFile: fonts.jost.black,
    textPlacement: {
      x: 145,
      y: 20,
    },
    maxWidth: 620,
  },
  'campfire.jpg': {
    fontFile: fonts.montserrat.black20,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 430,
  },
  'coffeeshop.jpg': {
    fontFile: fonts.jost.black24,
    textPlacement: {
      x: 500,
      y: 20,
    },
    maxWidth: 400,
  },
  'couple.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 500,
      y: 20,
    },
    maxWidth: 400,
  },
  'coffee.jpg': {
    fontFile: fonts.playfair.white,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 750,
  },
  'film.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 650,
      y: 20,
    },
    maxWidth: 270,
  },
  'fishing.jpg': {
    fontFile: fonts.ruluko.black,
    textPlacement: {
      x: 240,
      y: 20,
    },
    maxWidth: 550,
  },
  'frozen_drank.jpg': {
    fontFile: fonts.ruluko.black,
    textPlacement: {
      x: 600,
      y: 20,
    },
    maxWidth: 320,
  },
  'fruit.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 20,
      y: 250,
    },
    maxWidth: 300,
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
  'ocean.jpg': {
    fontFile: fonts.ruluko.black,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 600,
  },
  'pier.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 400,
  },
  'plane.jpg': {
    fontFile: fonts.montserrat.black24,
    textPlacement: {
      x: 550,
      y: 40,
    },
    maxWidth: 350,
  },
  'ponder_trees.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 40,
      y: 20,
    },
    maxWidth: 350,
  },
  'reststop.jpg': {
    fontFile: fonts.jost.black24,
    textPlacement: {
      x: 500,
      y: 20,
    },
    maxWidth: 370,
  },
  'river.jpg': {
    fontFile: fonts.montserrat.black24,
    textPlacement: {
      x: 550,
      y: 200,
    },
    maxWidth: 350,
  },
  'skateboard.jpg': {
    fontFile: fonts.montserrat.black24,
    textPlacement: {
      x: 20,
      y: 400,
    },
    maxWidth: 370,
  },
  'ski.jpg': {
    fontFile: fonts.ruluko.black,
    textPlacement: {
      x: 350,
      y: 520,
    },
    maxWidth: 500,
  },
  'trek.jpg': {
    fontFile: fonts.ruluko.black,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 600,
  },
  'wedding.jpg': {
    fontFile: fonts.playfair.black20,
    textPlacement: {
      x: 20,
      y: 90,
    },
    maxWidth: 450,
  },
  'windy.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 350,
  },
}
