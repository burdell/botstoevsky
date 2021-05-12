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
  'balloon.jpg': {
    fontFile: fonts.jost.black24,
    textPlacement: {
      x: 80,
      y: 300,
    },
    maxWidth: 400,
  },
  'banner.jpg': {
    fontFile: fonts.ruluko.black,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 475,
  },
  'bass.jpg': {
    fontFile: fonts.jost.white22,
    textPlacement: {
      x: 630,
      y: 20,
    },
    maxWidth: 300,
  },
  'beach_hoodie.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 400,
  },
  'beach.jpg': {
    fontFile: fonts.jost.black24,
    textPlacement: {
      x: 575,
      y: 30,
    },
    maxWidth: 300,
  },
  'beanie.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 280,
  },
  'beer.jpg': {
    fontFile: fonts.playfair.black,
    textPlacement: {
      x: 650,
      y: 330,
    },
    maxWidth: 400,
  },
  'bench.jpg': {
    fontFile: fonts.playfair.black20,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 650,
  },
  'bike.jpg': {
    fontFile: fonts.ruluko.black,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 600,
  },
  'cab.jpg': {
    fontFile: fonts.jost.white,
    textPlacement: {
      x: 400,
      y: 300,
    },
    maxWidth: 400,
  },
  'camera_closeup.jpg': {
    fontFile: fonts.ruluko.black,
    textPlacement: {
      x: 600,
      y: 20,
    },
    maxWidth: 300,
  },
  'camera_outside.jpg': {
    fontFile: fonts.jost.white24,
    textPlacement: {
      x: 550,
      y: 20,
    },
    maxWidth: 350,
  },
  'campfire.jpg': {
    fontFile: fonts.montserrat.black24,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 470,
  },
  'couple.jpg': {
    fontFile: fonts.jost.white24,
    textPlacement: {
      x: 200,
      y: 425,
    },
    maxWidth: 450,
  },
  'camping.jpg': {
    fontFile: fonts.montserrat.white24,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 430,
  },
  'crosswalk.jpg': {
    fontFile: fonts.jost.black,
    textPlacement: {
      x: 50,
      y: 50,
    },
    maxWidth: 400,
  },
  'dj.jpg': {
    fontFile: fonts.ruluko.black,
    textPlacement: {
      x: 20,
      y: 175,
    },
    maxWidth: 300,
  },
  'field.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 600,
  },
  'flower.jpg': {
    fontFile: fonts.jost.black24,
    textPlacement: {
      x: 20,
      y: 320,
    },
    maxWidth: 400,
  },
  'frozen_drank.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 400,
      y: 50,
    },
    maxWidth: 350,
  },
  'girl_camera.jpg': {
    fontFile: fonts.ruluko.white,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 300,
  },
  'girl_coffee.jpg': {
    fontFile: fonts.jost.white24,
    textPlacement: {
      x: 20,
      y: 100,
    },
    maxWidth: 380,
  },
  'hiking_boots.jpg': {
    fontFile: fonts.ruluko.black,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 300,
  },
  'hitchhiking.jpg': {
    fontFile: fonts.jost.white24,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 300,
  },
  'holding_flowers.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 630,
      y: 20,
    },
    maxWidth: 260,
  },
  'horizon.jpg': {
    fontFile: fonts.playfair.black20,
    textPlacement: {
      x: 30,
      y: 335,
    },
    maxWidth: 300,
  },
  'jump.jpg': {
    fontFile: fonts.jost.white24,
    textPlacement: {
      x: 30,
      y: 450,
    },
    maxWidth: 600,
  },
  'lake.jpg': {
    fontFile: fonts.jost.black24,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 500,
  },
  'lake2.jpg': {
    fontFile: fonts.ruluko.black,
    textPlacement: {
      x: 130,
      y: 200,
    },
    maxWidth: 380,
  },
  'nature.jpg': {
    fontFile: fonts.montserrat.white24,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 450,
  },
  'overlook.jpg': {
    fontFile: fonts.montserrat.black24,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 325,
  },
  'pier.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 350,
  },
  'ponder_trees.jpg': {
    fontFile: fonts.montserrat.black24,
    textPlacement: {
      x: 40,
      y: 20,
    },
    maxWidth: 350,
  },
  'railing.jpg': {
    fontFile: fonts.jost.black24,
    textPlacement: {
      x: 300,
      y: 20,
    },
    maxWidth: 500,
  },
  'river.jpg': {
    fontFile: fonts.jost.white24,
    textPlacement: {
      x: 20,
      y: 480,
    },
    maxWidth: 600,
  },
  'running_field.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 50,
      y: 50,
    },
    maxWidth: 650,
  },
  'ski.jpg': {
    fontFile: fonts.jost.white24,
    textPlacement: {
      x: 350,
      y: 550,
    },
    maxWidth: 500,
  },
  'stairwell.jpg': {
    fontFile: fonts.playfair.white24,
    textPlacement: {
      x: 100,
      y: 100,
    },
    maxWidth: 300,
  },
  'stump.jpg': {
    fontFile: fonts.jost.white24,
    textPlacement: {
      x: 375,
      y: 175,
    },
    maxWidth: 400,
  },
  'sunset_field.jpg': {
    fontFile: fonts.montserrat.black24,
    textPlacement: {
      x: 50,
      y: 50,
    },
    maxWidth: 650,
  },
  'swing.jpg': {
    fontFile: fonts.montserrat.black24,
    textPlacement: {
      x: 600,
      y: 30,
    },
    maxWidth: 300,
  },
  'tablet.jpg': {
    fontFile: fonts.jost.black24,
    textPlacement: {
      x: 250,
      y: 20,
    },
    maxWidth: 375,
  },
  'toes.jpg': {
    fontFile: fonts.jost.black24,
    textPlacement: {
      x: 300,
      y: 20,
    },
    maxWidth: 400,
  },
  'windy.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 50,
      y: 50,
    },
    maxWidth: 350,
  },
}
