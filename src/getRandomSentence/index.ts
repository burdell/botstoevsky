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

export async function getRandomSentence(desiredFilename?: string) {
  const pathToTexts = path.resolve(__dirname, '../texts')

  const filename = desiredFilename || (await getRandomFilename(pathToTexts))
  const lines = await getRandomLinesFromFile(`${pathToTexts}/${filename}`)
  const line = getRandomItem(lines)
  const sentence = getSentencesWithLength(
    tokenizer.sentences(line, { sanitize: true })
  )

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
  )
}

function getSentencesWithLength(sentences: string[], length = 280) {
  let sentence = ''

  const randomSentences = sentences.slice(getRandomInt(sentences.length - 1))
  for (let s of randomSentences) {
    const cleanedSentence = cleanSentence(s)
    const newLength = sentence.length + cleanedSentence.length + 1
    if (!sentence.length) {
      sentence = cleanedSentence
    } else if (sentence.length < length && newLength < length) {
      sentence = `${sentence} ${cleanedSentence}`
    } else {
      break
    }
  }

  return sentence
}

async function getRandomLinesFromFile(
  filePath: string,
  lineCount = 50
): Promise<string[]> {
  const p = new Promise<string[]>((res, rej) => {
    fs.readFile(filePath, function (err, data) {
      if (err) {
        rej(err)
        return
      }

      const array = data
        .toString()
        .split('.\n')
        .filter((line) => !!line && line.length > 10)

      const lines = new Array(lineCount)
        .fill(undefined)
        .map(() => getRandomItem(array))

      res(lines)
    })
  })

  return p
}
