import Jimp from 'jimp'
import path from 'path'
import { SentenceResponse, getRandomSentence } from '../getRandomSentence'
import {
  backgroundConfig,
  defaultConfig,
  BackgroundConfig,
} from '../images/backgroundConfig'
import { getRandomFilename } from '../random'

export async function getRandomImage(
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
  const pathToBackgrounds = path.resolve(__dirname, '../images/backgrounds')
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
    path.resolve(__dirname, `../fonts/${config.fontFile}`)
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
