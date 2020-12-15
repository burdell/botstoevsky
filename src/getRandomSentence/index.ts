import * as fs from 'fs'
import * as path from 'path'
import * as tokenizer from 'sbd'

const directoryPath = path.resolve(__dirname, '../../texts')

export async function getRandomSentence() {
  const filename = await getRandomFile()
  const lines = await getRandomLinesFromFile(`${directoryPath}/${filename}`)
  const line = getRandomItem(lines)
  const sentence = getSentencesWithLength(
    tokenizer.sentences(line, { sanitize: true })
  )

  return sentence.toLowerCase()
}

function getSentencesWithLength(sentences: string[], length: number = 280) {
  let sentence = ''

  const randomSentences = sentences.slice(getRandomInt(sentences.length - 1))
  randomSentences.forEach((s) => {
    const newLength = sentence.length + s.length
    if (!sentence.length) {
      sentence = s
    } else if (sentence.length < length && newLength < length) {
      sentence = `${sentence} ${s}`
    }
  })

  return sentence
}

async function getRandomFile() {
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
  lineCount = 20
): Promise<string[]> {
  const p = new Promise<string[]>((res, rej) => {
    fs.readFile(filePath, function (err, data) {
      if (err) throw rej(err)

      const array = data
        .toString()
        .split('\n')
        .filter((line) => !!line)

      const lines = new Array(lineCount)
        .fill(undefined)
        .map(() => getRandomItem(array))

      res(lines)
    })
  })

  return p
}
