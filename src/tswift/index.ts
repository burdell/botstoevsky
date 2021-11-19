import * as path from 'path'

import { getBackground, writeTextOnImage } from '../imageUtils'
import { getRandomItem } from '../random'
import { getRandomLinesFromFile, cleanSentence } from '../sentenceUtils'
import { backgroundConfig } from './backgroundConfig'

async function getRandomSentence() {
  const filePath = path.resolve(__dirname, './quotes.txt')
  const { lineStarts } = await getRandomLinesFromFile(filePath, 100)
  return `"${cleanSentence(getRandomItem(lineStarts).line)}"`
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
