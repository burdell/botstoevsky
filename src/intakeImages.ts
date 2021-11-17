import Jimp from 'jimp'
import * as path from 'path'
import * as fs from 'fs'
import { getFilenames } from './getFilenames'

export async function intakeImages() {
  // const intakePath = path.resolve('./intake')
  // const resultPath = path.resolve('./src/images/backgrounds')
  const intakePath = path.resolve('./intake')
  const resultPath = path.resolve('./src/tswift/images')
  const images = await getFilenames(intakePath)

  let index = 0
  for (const fileIndex in images) {
    const image = await Jimp.read(`${intakePath}/${images[fileIndex]}`)
    image.resize(1000, Jimp.AUTO).write(`${resultPath}/new-image-${index}.jpg`)
    index++
  }

  fs.rmdirSync(intakePath, { recursive: true })
  fs.mkdirSync(intakePath)
}
