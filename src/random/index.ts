import * as fs from 'fs'
import * as path from 'path'
import * as tokenizer from 'sbd'
import Jimp from 'jimp'
import dedent from 'ts-dedent'

import { backgroundConfig, defaultConfig } from '../instagram/backgroundConfig'

export async function getRandomSentence() {
  const pathToTexts = path.resolve(__dirname, '../texts')

  const filename = await getRandomFilename(pathToTexts)
  const lines = await getRandomLinesFromFile(`${pathToTexts}/${filename}`)
  const line = getRandomItem(lines)
  const sentence = getSentencesWithLength(
    tokenizer.sentences(line, { sanitize: true })
  )

  return dedent(sentence.toLowerCase().replace(/\n/g, '').replace(/\s\s/g, ' '))
}

export async function getRandomBackground() {
  const pathToBackgrounds = path.resolve(__dirname, '../instagram/backgrounds')
  const filename = 'field.jpg' //await getRandomFilename(pathToBackgrounds)

  const config = backgroundConfig[filename] || defaultConfig
  const image = await Jimp.read(`${pathToBackgrounds}/${filename}`)

  return { image, config }
}

function getSentencesWithLength(sentences: string[], length = 280) {
  let sentence = ''

  const randomSentences = sentences.slice(getRandomInt(sentences.length - 1))
  for (let s of randomSentences) {
    const cleanedSentence = s.trim()
    const newLength = sentence.length + cleanedSentence.length + 1
    if (!sentence.length) {
      sentence = s
    } else if (sentence.length < length && newLength < length) {
      sentence = `${sentence} ${s}`
    } else {
      break
    }
  }

  return sentence
}

export async function getRandomFilename(directoryPath: string) {
  const textFilenames = await getFilenames(directoryPath)
  return getRandomItem(textFilenames)
}

function getRandomItem<T>(items: T[]) {
  return items[getRandomInt(items.length)]
}

function getRandomInt(theNumber: number) {
  return Math.floor(Math.random() * theNumber)
}

async function getFilenames(directory: string): Promise<string[]> {
  return new Promise((res, rej) => {
    fs.readdir(directory, function (err, files) {
      if (err) {
        rej('Unable to scan directory: ' + err)
        console.log('=== err', err)
      }
      const fileNames: string[] = []
      files.forEach(function (file) {
        fileNames.push(file)
      })
      res(fileNames)
    })
  })
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
