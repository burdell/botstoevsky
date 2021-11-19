import { argv } from 'process'
import { resolve } from 'path'
import { config } from 'dotenv'

config()

import { getRussianLitSentence } from './getRussianLitSentence'
import { getRussianLitImage } from './getRussianLitImage'
import {
  textHandler as twitterTextHandler,
  imageHandler as twitterImageHandler,
} from './twitter'
import { handler as instagramHandler } from './instagram'
import { intakeImages } from './intakeImages'
import { dangerTaylor } from './tswift'

const thingsToDo = {
  sentence: async function () {
    let fileName = argv[3] || undefined
    if (fileName) {
      fileName = `${fileName}.txt`
    }

    const sentence = await getRussianLitSentence(fileName)
    console.log('=== From: ', sentence.meta?.title)
    console.log(sentence.sentence)
  },
  genImage: async function () {
    let fileName = argv[3] || undefined
    if (fileName) {
      fileName = `${fileName}.jpg`
    }

    const imageResult = await getRussianLitImage({ backgroundToUse: fileName })
    imageResult.imageOptions.image.write(
      resolve(__dirname, './instagram/result.jpg')
    )
  },
  sendImageToTwitter: async () => {
    await twitterImageHandler()
  },
  sendToTwitter: async () => {
    await twitterTextHandler()
  },
  sendToInstagram: async () => {
    await instagramHandler()
  },
  intakeImages: async () => {
    await intakeImages()
  },
  tswift: async () => {
    let fileIndex = argv[3] || undefined
    let fileName: string | undefined
    if (fileIndex) {
      fileName = `taylor-${fileIndex}.jpg`
    }
    const imageResult = await dangerTaylor(fileName)
    imageResult.background.image.write(
      resolve(__dirname, './tswift/result.jpg')
    )
  },
}

async function main() {
  const functionName = argv[2] as keyof typeof thingsToDo
  if (!functionName) return

  const fn = thingsToDo[functionName]
  if (fn) {
    await fn()
  }
}

main()
