import Jimp from 'jimp'
import path from 'path'
import { SentenceResponse, getRandomSentence } from '../getRandomSentence'
import {
  backgroundConfig,
  defaultConfig,
  BackgroundConfig,
} from './backgroundConfig'
import { getRandomFilename } from '../random'

export async function generateRandomImage(
  {
    sentenceToUse,
    backgroundToUse,
  }: {
    sentenceToUse?: SentenceResponse
    backgroundToUse?: string
  } = { sentenceToUse: undefined, backgroundToUse: undefined }
) {
  const imageOptionsPromise = getBackground(backgroundToUse)
  const textPromise = sentenceToUse
    ? Promise.resolve(sentenceToUse)
    : getRandomSentence()
  const [imageOptions, text] = await Promise.all([
    imageOptionsPromise,
    textPromise,
  ])

  const { sentence } = text
  await writeTextOnFile(imageOptions, sentence)

  return { imageOptions, text }
}

async function getBackground(backgroundToUse?: string) {
  const pathToBackgrounds = path.resolve(__dirname, './backgrounds')
  const filename =
    backgroundToUse || (await getRandomFilename(pathToBackgrounds))

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

export async function getImageBuffer(image: Jimp): Promise<Buffer> {
  return new Promise((res, rej) => {
    image.getBuffer(Jimp.MIME_JPEG, (err, buffer) => {
      if (err) rej('Image buffer FAILED')
      res(buffer)
    })
  })
}
