import * as fonts from '../fonts'

import { BackgroundConfig } from '../imageUtils'

export const backgroundConfig: Record<string, BackgroundConfig> = {
  'taylor-0.jpg': {
    fontFile: fonts.jost.black28,
    textPlacement: {
      x: 30,
      y: 400,
    },
    maxWidth: 750,
  },
  'taylor-11.jpg': {
    fontFile: fonts.jost.white28,
    textPlacement: {
      x: 10,
      y: 10,
    },
    maxWidth: 280,
  },
}
