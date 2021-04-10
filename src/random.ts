import * as fs from 'fs'

export async function getRandomFilename(directoryPath: string) {
  const textFilenames = await getFilenames(directoryPath)
  return getRandomItem(textFilenames)
}

export function getRandomItem<T>(items: T[]) {
  return items[getRandomInt(items.length)]
}

export function getRandomInt(theNumber: number) {
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
