import * as path from 'path'

import { getBackground, writeTextOnImage } from '../imageUtils'
import { getRandomItem } from '../random'
import {
  getRandomLinesFromFile,
  cleanSentence,
  getSentenceWithLength,
} from '../sentenceUtils'
import { backgroundConfig } from './backgroundConfig'

async function getRandomSentence() {
  const filePath = path.resolve(__dirname, './quotes.txt')
  const { lineStarts, allLines } = await getRandomLinesFromFile(filePath, 100)

  // return `"${cleanSentence(getRandomItem(lineStarts).line)}"`
  const sentence = await getSentenceWithLength(
    getRandomItem(lineStarts),
    allLines,
    {
      max: 100,
      min: 100,
    }
  )
  return sentence
}

export async function dangerTaylor(backgroundToUse?: string) {
  const [background, sentence] = await Promise.all([
    getBackground({
      backgroundConfig,
      backgroundToUse,
      pathToBackgrounds: path.resolve(__dirname, '../tswift-images'),
    }),
    getRandomSentence(),
  ])

  await writeTextOnImage(background, sentence)

  return { background, sentence }
}
