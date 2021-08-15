import * as fs from 'fs'
import * as path from 'path'
import * as tokenizer from 'sbd'
import dedent from 'ts-dedent'

import { getRandomFilename, getRandomInt, getRandomItem } from '../random'
import { TextMetadata, textMetadata } from './meta'

export type SentenceResponse = {
  sentence: string
  meta: TextMetadata
}

type LineStart = {
  line: string
  index: number
}

export async function getRandomSentence(desiredFilename?: string) {
  const pathToTexts = path.resolve(__dirname, '../texts')

  const filename = desiredFilename || (await getRandomFilename(pathToTexts))
  const { lineStarts, allLines } = await getRandomLinesFromFile(
    `${pathToTexts}/${filename}`
  )
  const line = getRandomItem(lineStarts)
  const sentence = getSentenceWithLength(line, allLines)

  return { sentence, meta: textMetadata[filename] }
}

function cleanSentence(sentence: string) {
  return dedent(
    sentence
      .trim()
      .replace(/\n/g, '')
      .replace(/\s\s/g, ' ')
      .replace(/“|”/g, '"')
      .replace(/’|‘|’/g, "'")
      .replace(/…/g, '...')
      .replace(/—/g, ' - ')
      .replace(/ï/g, 'i')
      .replace(/ü/g, 'u')
      .replace(/â/g, 'a')
      .replace(/—|–/g, '-')
      .replace(/\. \. \./, '...')
  )
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

async function getRandomLinesFromFile(filePath: string, lineCount = 50) {
  const p = new Promise<{ lineStarts: LineStart[]; allLines: string[] }>(
    (res, rej) => {
      fs.readFile(filePath, function (err, data) {
        if (err) {
          rej(err)
          return
        }

        const allLines = data.toString().split('.\n')
        const lineStarts = new Array(lineCount).fill(undefined).map(() => {
          const index = getRandomInt(allLines.length)
          const line = allLines[index]
          return { line, index }
        })

        res({ lineStarts, allLines })
      })
    }
  )

  return p
}
