import Jimp from 'jimp'
import * as path from 'path'
import { config } from 'dotenv'

import { getRandomBackground, getRandomSentence } from '../random'
import type { BackgroundConfig } from './backgroundConfig'
import { uploadPhoto } from './uploadPhoto'

export async function handler() {
  const imageResult = await generateRandomImage()

  const imageBuffer = await getImageBuffer(imageResult.imageOptions.image)
  await uploadPhoto(imageBuffer)
}

export async function generateRandomImage() {
  const imageOptionsPromise = getRandomBackground()
  const textPromise = getRandomSentence()
  const [imageOptions, text] = await Promise.all([
    imageOptionsPromise,
    textPromise,
  ])

  await writeTextOnFile(imageOptions, text)

  return { imageOptions, text }
}

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

async function getImageBuffer(image: Jimp): Promise<Buffer> {
  return new Promise((res, rej) => {
    image.getBuffer(Jimp.MIME_JPEG, (err, buffer) => {
      if (err) rej('Image buffer FAILED')
      res(buffer)
    })
  })
}

if (process.env.ENV === 'local') {
  config()
  handler()
}
