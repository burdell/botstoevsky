import * as fs from 'fs'
import * as path from 'path'
import * as tokenizer from 'sbd'
import dedent from 'ts-dedent'
import { config } from 'dotenv'

import { getRandomFilename, getRandomInt, getRandomItem } from './random'

export async function getRandomSentence() {
  const pathToTexts = path.resolve(__dirname, './texts')

  const filename = await getRandomFilename(pathToTexts)
  const lines = await getRandomLinesFromFile(`${pathToTexts}/${filename}`)
  const line = getRandomItem(lines)
  const sentence = getSentencesWithLength(
    tokenizer.sentences(line, { sanitize: true })
  )

  return sentence
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
      if (err) throw rej(err)

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

async function dev() {
  const sentence = await getRandomSentence()
  console.log(sentence)
}
if (process.env.ENV === 'local') {
  dev()
}
