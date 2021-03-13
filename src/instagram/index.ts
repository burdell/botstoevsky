import Jimp from 'jimp'
import * as path from 'path'

import { getRandomBackground, getRandomSentence } from '../random'
import type { BackgroundConfig } from './backgroundConfig'

async function writeTextOnFile(
  imageOptions: { image: Jimp; config: BackgroundConfig },
  text: string
) {
  const { image, config } = imageOptions
  return Jimp.loadFont(
    path.resolve(__dirname, `./font/${config.fontFile}`)
  ).then((font) => {
    image.print(
      font,
      config.textPlacement.x,
      config.textPlacement.y,
      text,
      config.maxWidth
    )
  })
}

async function main() {
  const text = await getRandomSentence()
  const imageOptions = await getRandomBackground()

  await writeTextOnFile(imageOptions, text)

  imageOptions.image.write('./test.jpg')
}

main()
