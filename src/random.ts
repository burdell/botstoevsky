import * as fs from 'fs'
import random from 'random'
import seedrandom, { xor128 } from 'seedrandom'
import { Random, nodeCrypto } from 'random-js'

// function makeid(length: number) {
//   var result = []
//   var characters =
//     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//   var charactersLength = characters.length
//   for (var i = 0; i < length; i++) {
//     result.push(characters.charAt(Math.floor(Math.random() * charactersLength)))
//   }
//   return result.join('')
// }

// const rng = xor128(makeid(6400))
// random.use(rng)

const r = new Random(nodeCrypto)

export async function getRandomFilename(directoryPath: string) {
  const textFilenames = await getFilenames(directoryPath)
  return getRandomItem(textFilenames)
}

export function getRandomItem<T>(items: T[]) {
  return items[getRandomInt(items.length)]
}

export function getRandomInt(theNumber: number) {
  // return random.int(0, theNumber - 1)
  // const r = new Random(nodeCrypto)
  return r.integer(0, theNumber - 1)
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
