import Jimp from 'jimp'
import path from 'path'
import { getRussianLitSentence } from '../getRussianLitSentence'
import { backgroundConfig } from '../images/backgroundConfig'
import { getBackground, writeTextOnImage } from '../imageUtils'
import { SentenceResponse } from '../sentenceUtils'

export async function getRussianLitImage(
  {
    sentenceToUse,
    backgroundToUse,
  }: {
    sentenceToUse?: SentenceResponse
    backgroundToUse?: string
  } = { sentenceToUse: undefined, backgroundToUse: undefined }
) {
  const imageOptionsPromise = getBackground({
    backgroundConfig,
    backgroundToUse,
    pathToBackgrounds: path.resolve(__dirname, '../images/backgrounds'),
  })
  const textPromise = sentenceToUse
    ? Promise.resolve(sentenceToUse)
    : getRussianLitSentence()
  const [imageOptions, text] = await Promise.all([
    imageOptionsPromise,
    textPromise,
  ])

  const { sentence } = text
  await writeTextOnImage(imageOptions, sentence)

  return { imageOptions, text }
}
