import * as path from 'path'
import * as tokenizer from 'sbd'

import { getRandomObjectKey, getRandomItem } from '../random'
import { getRandomLinesFromFile, getSentenceWithLength } from '../sentenceUtils'
import { textMetadata } from './meta'

export async function getRussianLitSentence(desiredFilename?: string) {
  const pathToTexts = path.resolve(__dirname, '../texts')

  const filename = desiredFilename || (await getRandomObjectKey(textMetadata))
  const { lineStarts, allLines } = await getRandomLinesFromFile(
    `${pathToTexts}/${filename}`
  )
  const line = getRandomItem(lineStarts)
  const sentence = getSentenceWithLength(line, allLines)

  return { sentence, meta: textMetadata[filename] }
}
