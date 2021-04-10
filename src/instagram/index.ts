import Jimp from 'jimp'
import * as path from 'path'
import { config } from 'dotenv'

import { getRandomSentence } from '../getRandomSentence'
import { getRandomFilename } from '../random'
import type { BackgroundConfig } from './backgroundConfig'
import { uploadPhoto } from './uploadPhoto'
import { backgroundConfig, defaultConfig } from '../instagram/backgroundConfig'

export async function handler() {
  try {
    await createImageAndPost()
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({}),
  }
}

async function createImageAndPost() {
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

async function getRandomBackground() {
  const pathToBackgrounds = path.resolve(__dirname, '../instagram/backgrounds')
  const filename = await getRandomFilename(pathToBackgrounds)

  const config = backgroundConfig[filename] || defaultConfig
  const image = await Jimp.read(`${pathToBackgrounds}/${filename}`)

  return { image, config }
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
