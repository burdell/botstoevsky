import * as fonts from '../fonts'

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
    fontFile: fonts.miniStory.black28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 700,
  },
  'beach3.jpg': {
    fontFile: fonts.gabriela.black28,
    textPlacement: {
      x: 20,
      y: 300,
    },
    maxWidth: 450,
  },
  'beanie.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 280,
  },
  'bench2.jpg': {
    fontFile: fonts.jost.black24,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 500,
  },
  'campfire.jpg': {
    fontFile: fonts.jost.white24,
    textPlacement: {
      x: 60,
      y: 40,
    },
    maxWidth: 450,
  },
  'canoe.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 350,
      y: 300,
    },
    maxWidth: 470,
  },
  'canoe2.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 370,
      y: 80,
    },
    maxWidth: 430,
  },
  'coffee.jpg': {
    fontFile: fonts.jost.white24,
    textPlacement: {
      x: 370,
      y: 350,
    },
    maxWidth: 470,
  },
  'field.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 600,
  },
  'field2.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 10,
      y: 330,
    },
    maxWidth: 450,
  },
  'flare.jpg': {
    fontFile: fonts.stayWriter.white36,
    textPlacement: {
      x: 20,
      y: 380,
    },
    maxWidth: 450,
  },
  'flip.jpg': {
    fontFile: fonts.miniStory.white28,
    textPlacement: {
      x: 40,
      y: 40,
    },
    maxWidth: 450,
  },
  'flower_beach.jpg': {
    fontFile: fonts.miniStory.black28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 450,
  },
  'flower.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 300,
      y: 20,
    },
    maxWidth: 500,
  },
  'flowers.jpg': {
    fontFile: fonts.gabriela.black28,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 500,
  },
  'garage.jpg': {
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 500,
      y: 20,
    },
    maxWidth: 400,
  },
  'girl_coffee.jpg': {
    fontFile: fonts.stayWriter.white28,
    textPlacement: {
      x: 10,
      y: 140,
    },
    maxWidth: 450,
  },
  'hike.jpg': {
    fontFile: fonts.stayWriter.white28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 380,
  },
  'horizon.jpg': {
    fontFile: fonts.miniStory.black28,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 410,
  },
  'holding_hands.jpg': {
    fontFile: fonts.miniStory.black28,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 410,
  },
  'holding_hands2.jpg': {
    fontFile: fonts.miniStory.black28,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 410,
  },
  'jump.jpg': {
    fontFile: fonts.stayWriter.white28,
    textPlacement: {
      x: 30,
      y: 450,
    },
    maxWidth: 600,
  },
  'lake2.jpg': {
    fontFile: fonts.gabriela.black28,
    textPlacement: {
      x: 100,
      y: 200,
    },
    maxWidth: 380,
  },
  'lake4.jpg': {
    fontFile: fonts.miniStory.black28,
    textPlacement: {
      x: 70,
      y: 70,
    },
    maxWidth: 350,
  },
  'lantern.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 500,
  },
  'mountains.jpg': {
    fontFile: fonts.miniStory.black28,
    textPlacement: {
      x: 400,
      y: 30,
    },
    maxWidth: 400,
  },
  'mountains2.jpg': {
    fontFile: fonts.miniStory.black28,
    textPlacement: {
      x: 300,
      y: 30,
    },
    maxWidth: 500,
  },
  'ocean.jpg': {
    fontFile: fonts.stayWriter.black28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 500,
  },
  'ocean3.jpg': {
    fontFile: fonts.nawabiat.white,
    textPlacement: {
      x: 20,
      y: 250,
    },
    maxWidth: 360,
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
  'rain.jpg': {
    fontFile: fonts.stayWriter.white28,
    textPlacement: {
      x: 500,
      y: 300,
    },
    maxWidth: 400,
  },
  'river.jpg': {
    fontFile: fonts.jost.white24,
    textPlacement: {
      x: 20,
      y: 480,
    },
    maxWidth: 600,
  },
  'sheets.jpg': {
    fontFile: fonts.miniStory.black28,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 330,
  },
  'silouette.jpg': {
    fontFile: fonts.gabriela.black28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 700,
  },
  'silouette2.jpg': {
    fontFile: fonts.jost.white28,
    textPlacement: {
      x: 20,
      y: 450,
    },
    maxWidth: 700,
  },
  'skateboard.jpg': {
    fontFile: fonts.jost.white24,
    textPlacement: {
      x: 20,
      y: 90,
    },
    maxWidth: 330,
  },
  'skateboard2.jpg': {
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 550,
  },
  'snorkel.jpg': {
    fontFile: fonts.stayWriter.white36,
    textPlacement: {
      x: 150,
      y: 150,
    },
    maxWidth: 400,
  },
  'snow.jpg': {
    fontFile: fonts.gabriela.black28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 500,
  },
  'stairwell.jpg': {
    fontFile: fonts.gabriela.white28,
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
  'sunflowers.jpg': {
    fontFile: fonts.stayWriter.black28,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 500,
  },
  'sunset2.jpg': {
    fontFile: fonts.jost.white24,
    textPlacement: {
      x: 500,
      y: 280,
    },
    maxWidth: 380,
  },
  'swim.jpg': {
    fontFile: fonts.stayWriter.white28,
    textPlacement: {
      x: 200,
      y: 30,
    },
    maxWidth: 475,
  },
  'swimming.jpg': {
    fontFile: fonts.stayWriter.white28,
    textPlacement: {
      x: 20,
      y: 420,
    },
    maxWidth: 380,
  },
  'swimming2.jpg': {
    fontFile: fonts.stayWriter.black28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 330,
  },
  'window.jpg': {
    fontFile: fonts.stayWriter.white28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 350,
  },
  'windy.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 350,
  },
  'windy2.jpg': {
    fontFile: fonts.stayWriter.black28,
    textPlacement: {
      x: 80,
      y: 80,
    },
    maxWidth: 350,
  },
  'woods.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 350,
  },
}
