import * as fs from 'fs'
import dedent from 'ts-dedent'

import { getRandomFilename, getRandomInt, getRandomItem } from '../random'

export type SentenceResponse = {
  sentence: string
  meta: TextMetadata
}

export type TextMetadata =
  | {
      title: string
    }
  | undefined

export type LineStart = {
  line: string
  index: number
}

export async function getRandomLinesFromFile(filePath: string, lineCount = 50) {
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

export function cleanSentence(sentence: string) {
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
