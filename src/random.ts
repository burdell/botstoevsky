import * as fs from 'fs'
import random from 'random'
import { promisify } from 'util'
import { tychei } from 'seedrandom'
import { getRandomOrgInt } from './randomOrg'

function makeid(length: number) {
  var result = []
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)))
  }
  return result.join('')
}

export async function getRandomFilename(directoryPath: string) {
  const textFilenames = await getFilenames(directoryPath)

  if (process.env.USE_LOCAL_RANDOM) {
    return getRandomItem(textFilenames)
  } else {
    return getRandomOrgItem(textFilenames)
  }
}

export function getRandomItem<T>(items: T[]) {
  return items[getRandomInt(items.length)]
}

async function getRandomOrgItem<T>(items: T[]) {
  const int = await getRandomOrgInt(items.length)
  return items[int]
}

export function getRandomInt(theNumber: number) {
  const rng = tychei(makeid(200))
  random.use(rng)
  return random.int(0, theNumber - 1)
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
