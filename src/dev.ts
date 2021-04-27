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
    let fileName = argv[3] || undefined
    if (fileName) {
      fileName = `${fileName}.txt`
    }

    const sentence = await getRandomSentence(fileName)
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
  profile: async () => {
    const results: { [filename: string]: number } = {}

    const promises = new Array(1000).fill(undefined).map(async () => {
      const { meta } = await getRandomSentence()
      if (!meta) return

      if (!results[meta.title]) {
        results[meta.title] = 1
        return
      }

      results[meta.title] = results[meta.title] + 1
    })

    await Promise.all(promises)

    var sortable = []
    for (var title in results) {
      sortable.push([title, results[title]])
    }

    const sorted = sortable.sort(function (a, b) {
      return (b[1] as number) - (a[1] as number)
    })

    console.log(sorted)
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
