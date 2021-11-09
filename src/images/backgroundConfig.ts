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
  'balloons.jpg': {
    fontFile: fonts.gabriela.black28,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 650,
  },
  'beach.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 650,
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
      x: 280,
      y: 10,
    },
    maxWidth: 530,
  },
  'beach5.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 350,
  },
  'beach6.jpg': {
    fontFile: fonts.gabriela.black28,
    textPlacement: {
      x: 500,
      y: 40,
    },
    maxWidth: 380,
  },
  'beach7.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 500,
  },
  'beach8.jpg': {
    fontFile: fonts.gabriela.black28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 370,
  },
  'beach9.jpg': {
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 500,
  },
  'beard.jpg': {
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 450,
  },
  'beers.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 150,
      y: 10,
    },
    maxWidth: 400,
  },
  'bench.jpg': {
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 700,
  },
  'bench2.jpg': {
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 500,
  },
  'blue.jpg': {
    fontFile: fonts.merriweather.white28,
    textPlacement: {
      x: 600,
      y: 80,
    },
    maxWidth: 300,
  },
  'boat.jpg': {
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 300,
  },
  'boots.jpg': {
    fontFile: fonts.gabriela.black28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 400,
  },
  'bridge.jpg': {
    fontFile: fonts.patrickHand.white28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 430,
  },
  'bubbles.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 400,
      y: 350,
    },
    maxWidth: 430,
  },
  'camel.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 650,
  },
  'campfire2.jpg': {
    fontFile: fonts.nawabiat.white,
    textPlacement: {
      x: 200,
      y: 40,
    },
    maxWidth: 450,
  },
  'candle.jpg': {
    fontFile: fonts.patrickHand.white28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 350,
  },
  'canoe.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 450,
      y: 20,
    },
    maxWidth: 400,
  },
  'car.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 400,
      y: 30,
    },
    maxWidth: 400,
  },
  'car2.jpg': {
    fontFile: fonts.patrickHand.white28,
    textPlacement: {
      x: 600,
      y: 30,
    },
    maxWidth: 300,
  },
  'car3.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 300,
  },
  'champagne.jpg': {
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 580,
      y: 75,
    },
    maxWidth: 300,
  },
  'city.jpg': {
    fontFile: fonts.jost.white28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 350,
  },
  'climb.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 350,
  },
  'city2.jpg': {
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 600,
  },
  'city3.jpg': {
    fontFile: fonts.jost.white28,
    textPlacement: {
      x: 250,
      y: 10,
    },
    maxWidth: 580,
  },
  'corn.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 200,
      y: 30,
    },
    maxWidth: 580,
  },
  'deck.jpg': {
    fontFile: fonts.merriweather.white28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 600,
  },
  'dinner.jpg': {
    fontFile: fonts.patrickHand.white28,
    textPlacement: {
      x: 80,
      y: 80,
    },
    maxWidth: 600,
  },
  'dress.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 350,
  },
  'face.jpg': {
    fontFile: fonts.jost.white28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 400,
  },
  'field.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 650,
  },
  'field2.jpg': {
    fontFile: fonts.merriweather.black28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 650,
  },
  'flip.jpg': {
    fontFile: fonts.miniStory.white28,
    textPlacement: {
      x: 40,
      y: 40,
    },
    maxWidth: 450,
  },
  'flip2.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 40,
      y: 40,
    },
    maxWidth: 650,
  },
  'float.jpg': {
    fontFile: fonts.merriweather.white28,
    textPlacement: {
      x: 20,
      y: 250,
    },
    maxWidth: 450,
  },
  'flower.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 500,
      y: 20,
    },
    maxWidth: 350,
  },
  'flower2.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 50,
      y: 10,
    },
    maxWidth: 650,
  },
  'flower3.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 80,
      y: 30,
    },
    maxWidth: 650,
  },
  'flowers.jpg': {
    fontFile: fonts.gabriela.black28,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 500,
  },
  'friends.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 200,
      y: 30,
    },
    maxWidth: 430,
  },
  'hair.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 280,
  },
  'handstand.jpg': {
    fontFile: fonts.jost.white28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 325,
  },
  'hat.jpg': {
    fontFile: fonts.merriweather.white28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 350,
  },
  'headphones.jpg': {
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 50,
      y: 10,
    },
    maxWidth: 650,
  },
  'holding_hands.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 410,
  },
  'holding_hands2.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 410,
  },
  'hug.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 350,
  },
  'jack-daniels.jpg': {
    fontFile: fonts.gabriela.black28,
    textPlacement: {
      x: 50,
      y: 50,
    },
    maxWidth: 500,
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
  'jump5.jpg': {
    fontFile: fonts.patrickHand.white28,
    textPlacement: {
      x: 350,
      y: 200,
    },
    maxWidth: 400,
  },
  'jump8.jpg': {
    fontFile: fonts.patrickHand.white28,
    textPlacement: {
      x: 350,
      y: 20,
    },
    maxWidth: 450,
  },
  'lake.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 660,
  },
  'laugh.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 570,
      y: 80,
    },
    maxWidth: 300,
  },
  'laugh2.jpg': {
    fontFile: fonts.merriweather.black28,
    textPlacement: {
      x: 40,
      y: 130,
    },
    maxWidth: 400,
  },
  'laugh3.jpg': {
    fontFile: fonts.patrickHand.white28,
    textPlacement: {
      x: 500,
      y: 50,
    },
    maxWidth: 350,
  },
  'lights.jpg': {
    fontFile: fonts.nawabiat.white,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 300,
  },
  'look.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 650,
  },
  'look2.jpg': {
    fontFile: fonts.jost.white28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 480,
  },
  'moon.jpg': {
    fontFile: fonts.merriweather.white28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 410,
  },
  'mist.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 380,
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
      x: 450,
      y: 30,
    },
    maxWidth: 400,
  },
  'ocean.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 500,
  },
  'ocean2.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 250,
      y: 50,
    },
    maxWidth: 450,
  },
  'pink.jpg': {
    fontFile: fonts.jost.white28,
    textPlacement: {
      x: 540,
      y: 10,
    },
    maxWidth: 310,
  },
  'park.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 10,
      y: 400,
    },
    maxWidth: 500,
  },
  'polo.jpg': {
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 50,
      y: 50,
    },
    maxWidth: 300,
  },
  'pool.jpg': {
    fontFile: fonts.gabriela.black28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 450,
  },
  'rain.jpg': {
    fontFile: fonts.patrickHand.white28,
    textPlacement: {
      x: 470,
      y: 270,
    },
    maxWidth: 400,
  },
  'redhair.jpg': {
    fontFile: fonts.jost.white28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 350,
  },
  'sand.jpg': {
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 350,
      y: 150,
    },
    maxWidth: 400,
  },
  'saxophone.jpg': {
    fontFile: fonts.jost.white28,
    textPlacement: {
      x: 550,
      y: 40,
    },
    maxWidth: 330,
  },
  'sheets.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 330,
  },
  'sheets2.jpg': {
    fontFile: fonts.miniStory.black28,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 330,
  },
  'shop.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 550,
      y: 30,
    },
    maxWidth: 330,
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
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 480,
      y: 50,
    },
    maxWidth: 350,
  },
  'sky.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 50,
      y: 50,
    },
    maxWidth: 400,
  },
  'sky2.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 600,
  },
  'sky3.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 50,
      y: 50,
    },
    maxWidth: 600,
  },
  'smoke_field.jpg': {
    fontFile: fonts.gabriela.black28,
    textPlacement: {
      x: 20,
      y: 10,
    },
    maxWidth: 700,
  },
  'smoke.jpg': {
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 300,
  },
  'sparklers.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 400,
  },
  'sparklers2.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 380,
  },
  'stage.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 380,
  },
  'stars.jpg': {
    fontFile: fonts.patrickHand.white28,
    textPlacement: {
      x: 570,
      y: 10,
    },
    maxWidth: 300,
  },
  'stars2.jpg': {
    fontFile: fonts.jost.white28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 500,
  },
  'stars3.jpg': {
    fontFile: fonts.patrickHand.white28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 400,
  },
  'street2.jpg': {
    fontFile: fonts.jost.white28,
    textPlacement: {
      x: 10,
      y: 150,
    },
    maxWidth: 380,
  },
  'stereo.jpg': {
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 350,
      y: 10,
    },
    maxWidth: 500,
  },
  'sun.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 50,
      y: 100,
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
  'surf.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 600,
  },
  'swim.jpg': {
    fontFile: fonts.patrickHand.white28,
    textPlacement: {
      x: 200,
      y: 30,
    },
    maxWidth: 475,
  },
  'swim2.jpg': {
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 380,
  },
  'swimming.jpg': {
    fontFile: fonts.gabriela.white28,
    textPlacement: {
      x: 20,
      y: 380,
    },
    maxWidth: 400,
  },
  'swing.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 50,
      y: 50,
    },
    maxWidth: 450,
  },
  'trumpet.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 30,
      y: 30,
    },
    maxWidth: 550,
  },
  'umbrella.jpg': {
    fontFile: fonts.merriweather.black28,
    textPlacement: {
      x: 100,
      y: 80,
    },
    maxWidth: 450,
  },
  'van.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 475,
  },
  'wakeboard.jpg': {
    fontFile: fonts.patrickHand.black28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 650,
  },
  'waterfall.jpg': {
    fontFile: fonts.patrickHand.white28,
    textPlacement: {
      x: 460,
      y: 10,
    },
    maxWidth: 400,
  },
  'wedding2.jpg': {
    fontFile: fonts.patrickHand.white28,
    textPlacement: {
      x: 30,
      y: 250,
    },
    maxWidth: 300,
  },
  'white-dress.jpg': {
    fontFile: fonts.merriweather.white28,
    textPlacement: {
      x: 20,
      y: 20,
    },
    maxWidth: 350,
  },
  'wind.jpg': {
    fontFile: fonts.gabriela.black28,
    textPlacement: {
      x: 450,
      y: 100,
    },
    maxWidth: 400,
  },
  'window.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 500,
      y: 100,
    },
    maxWidth: 380,
  },
  'window2.jpg': {
    fontFile: fonts.nawabiat.black,
    textPlacement: {
      x: 580,
      y: 75,
    },
    maxWidth: 300,
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
