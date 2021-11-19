import * as path from 'path'
import * as tokenizer from 'sbd'

import { getRandomFilename, getRandomInt, getRandomItem } from '../random'
import {
  getRandomLinesFromFile,
  LineStart,
  cleanSentence,
} from '../sentenceUtils'
import { textMetadata } from './meta'

export async function getRussianLitSentence(desiredFilename?: string) {
  const pathToTexts = path.resolve(__dirname, '../texts')

  const filename = desiredFilename || (await getRandomFilename(pathToTexts))
  const { lineStarts, allLines } = await getRandomLinesFromFile(
    `${pathToTexts}/${filename}`
  )
  const line = getRandomItem(lineStarts)
  const sentence = getSentenceWithLength(line, allLines)

  return { sentence, meta: textMetadata[filename] }
}

function getLineSentences(line: string) {
  return tokenizer.sentences(line, { sanitize: true })
}

function getSentenceWithLength(
  lineStart: LineStart,
  allLines: string[],
  length = { max: 280, min: 150 }
) {
  let finalSentence = ''
  const { sentence, hasMoreLength } = buildSentenceFromLine({
    sentence: finalSentence,
    line: lineStart.line,
    length,
    chooseRandomStart: true,
  })
  finalSentence = sentence

  let lineIndex = lineStart.index
  let shouldRunAgain = hasMoreLength
  while (shouldRunAgain) {
    lineIndex = lineIndex + 1
    const nextLine = allLines[lineIndex]
    if (!nextLine) {
      shouldRunAgain = false
      break
    }

    const result = buildSentenceFromLine({
      sentence: finalSentence,
      line: nextLine,
      length,
    })
    finalSentence = result.sentence
    shouldRunAgain = result.hasMoreLength
  }

  return finalSentence
}

function buildSentenceFromLine({
  sentence,
  line,
  length,
  chooseRandomStart = false,
}: {
  sentence: string
  line: string
  length: { max: number; min: number }
  chooseRandomStart?: boolean
}) {
  const sentences = getLineSentences(line)
  const startIndex = chooseRandomStart ? getRandomInt(sentences.length - 1) : 0
  const randomSentences = sentences.slice(startIndex)
  let hasMoreLength = true

  for (let s of randomSentences) {
    const cleanedSentence = cleanSentence(s)
    const newLength = sentence.length + cleanedSentence.length + 1
    if (!sentence.length) {
      sentence = cleanedSentence
      hasMoreLength = sentence.length < length.min
    } else if (sentence.length < length.max && newLength < length.max) {
      sentence = `${sentence} ${cleanedSentence}`
      hasMoreLength = sentence.length < length.min
    } else {
      hasMoreLength = false
      break
    }
  }

  return { sentence, hasMoreLength }
}
