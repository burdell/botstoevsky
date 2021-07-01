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
  'apple.jpg': {
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 450,
  },
  'beach.jpg': {
    fontFile: fonts.miniStory.black28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 700,
  },
  'beach2.jpg': {
    fontFile: fonts.miniStory.black28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 500,
  },
  'beach3.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 30,
      y: 10,
    },
    maxWidth: 700,
  },
  'beach4.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 350,
  },
  'beach5.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 400,
  },
  'beer.jpg': {
    fontFile: fonts.gabriela.black28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 430,
  },
  'bench2.jpg': {
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 500,
  },
  'boat.jpg': {
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 300,
  },
  'bonfire.jpg': {
    fontFile: fonts.patrickHand.white28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 350,
  },
  'bubbles.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 400,
      y: 350,
    },
    maxWidth: 400,
  },
  'cafe.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 10,
      y: 350,
    },
    maxWidth: 400,
  },
  'campfire.jpg': {
    fontFile: fonts.jost.white28,
    textPlacement: {
      x: 60,
      y: 40,
    },
    maxWidth: 450,
  },
  'campfire2.jpg': {
    fontFile: fonts.nawabiat.white,
    textPlacement: {
      x: 200,
      y: 40,
    },
    maxWidth: 450,
  },
  'canoe2.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 400,
      y: 80,
    },
    maxWidth: 430,
  },
  'coffee.jpg': {
    fontFile: fonts.jost.white28,
    textPlacement: {
      x: 370,
      y: 350,
    },
    maxWidth: 470,
  },
  'coffee2.jpg': {
    fontFile: fonts.jost.white28,
    textPlacement: {
      x: 30,
      y: 350,
    },
    maxWidth: 470,
  },
  'coffee3.jpg': {
    fontFile: fonts.merriweather.white28,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 470,
  },
  'couple.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 480,
  },
  'couple2.jpg': {
    fontFile: fonts.miniStory.black28,
    textPlacement: {
      x: 30,
      y: 300,
    },
    maxWidth: 400,
  },
  'crowd.jpg': {
    fontFile: fonts.miniStory.black28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 600,
  },
  'drink.jpg': {
    fontFile: fonts.jost.white28,
    textPlacement: {
      x: 10,
      y: 10,
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
  'follow.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 25,
      y: 25,
    },
    maxWidth: 600,
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
    fontFile: fonts.patrickHand.white28,
    textPlacement: {
      x: 10,
      y: 130,
    },
    maxWidth: 350,
  },
  'glasses.jpg': {
    fontFile: fonts.merriweather.white28,
    textPlacement: {
      x: 20,
      y: 130,
    },
    maxWidth: 310,
  },
  'hair.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 280,
  },
  'hike.jpg': {
    fontFile: fonts.patrickHand.white28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 330,
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
    fontFile: fonts.merriweather.white28,
    textPlacement: {
      x: 30,
      y: 450,
    },
    maxWidth: 670,
  },
  'jump2.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 30,
      y: 480,
    },
    maxWidth: 600,
  },
  'jump3.jpg': {
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 380,
  },
  'jump4.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 350,
      y: 10,
    },
    maxWidth: 500,
  },
  'karate.jpg': {
    fontFile: fonts.gabriela.black28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 350,
  },
  'lake.jpg': {
    fontFile: fonts.patrickHand.white28,
    textPlacement: {
      x: 30,
      y: 450,
    },
    maxWidth: 600,
  },
  'lantern.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 500,
  },
  'laugh.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 570,
      y: 80,
    },
    maxWidth: 300,
  },
  'lookout.jpg': {
    fontFile: fonts.jost.white28,
    textPlacement: {
      x: 550,
      y: 20,
    },
    maxWidth: 330,
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
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 500,
  },
  'rain.jpg': {
    fontFile: fonts.patrickHand.white28,
    textPlacement: {
      x: 470,
      y: 270,
    },
    maxWidth: 400,
  },
  'river.jpg': {
    fontFile: fonts.jost.white28,
    textPlacement: {
      x: 20,
      y: 480,
    },
    maxWidth: 700,
  },
  'sand.jpg': {
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 350,
      y: 150,
    },
    maxWidth: 400,
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
    fontFile: fonts.jost.white28,
    textPlacement: {
      x: 20,
      y: 90,
    },
    maxWidth: 330,
  },
  'sky.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 50,
      y: 50,
    },
    maxWidth: 400,
  },
  'smoke_field.jpg': {
    fontFile: fonts.gabriela.black28,
    textPlacement: {
      x: 20,
      y: 10,
    },
    maxWidth: 700,
  },
  'sparklers.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 400,
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
    fontFile: fonts.jost.white28,
    textPlacement: {
      x: 375,
      y: 175,
    },
    maxWidth: 400,
  },
  'sunflowers.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 500,
  },
  'sunset.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 400,
  },
  'sunset2.jpg': {
    fontFile: fonts.jost.white28,
    textPlacement: {
      x: 500,
      y: 280,
    },
    maxWidth: 380,
  },
  'surf.jpg': {
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 550,
      y: 10,
    },
    maxWidth: 300,
  },
  'sweater.jpg': {
    fontFile: fonts.miniStory.white28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 350,
  },
  'swim.jpg': {
    fontFile: fonts.patrickHand.white28,
    textPlacement: {
      x: 200,
      y: 30,
    },
    maxWidth: 475,
  },
  'swimming.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 20,
      y: 380,
    },
    maxWidth: 400,
  },
  'swimming2.jpg': {
    fontFile: fonts.jost.white28,
    textPlacement: {
      x: 500,
      y: 200,
    },
    maxWidth: 350,
  },
  'swing.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 50,
      y: 50,
    },
    maxWidth: 450,
  },
  'walk.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 50,
      y: 500,
    },
    maxWidth: 700,
  },
  'wind.jpg': {
    fontFile: fonts.gabriela.black28,
    textPlacement: {
      x: 450,
      y: 100,
    },
    maxWidth: 400,
  },
  'windy2.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 80,
      y: 80,
    },
    maxWidth: 350,
  },
}
