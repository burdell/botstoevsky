import { argv } from 'process'
import { resolve } from 'path'
import { config } from 'dotenv'

config()

import { getRandomSentence } from './getRandomSentence'
import { generateRandomImage } from './instagram'
import { handler as twitterHandler } from './twitter'
import { handler as instagramHandler } from './instagram'

const thingsToDo = {
  sentence: async function () {
    const sentence = await getRandomSentence()
    console.log('=== From: ', sentence.meta?.title)
    console.log(sentence.sentence)
  },
  genImage: async function () {
    let fileName = argv[3] || undefined
    if (fileName) {
      fileName = `${fileName}.jpg`
    }

    const imageResult = await generateRandomImage(fileName)
    imageResult.imageOptions.image.write(
      resolve(__dirname, './instagram/result.jpg')
    )
  },
  sendToTwitter: async () => {
    await twitterHandler()
  },
  sendToInstagram: async () => {
    await instagramHandler()
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
