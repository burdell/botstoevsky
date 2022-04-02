import * as path from 'path'
import Jimp from 'jimp'

import { getRandomFilename, getRandomObjectKey } from '../random'
import * as fonts from '../fonts'

export type BackgroundConfig = {
  fontFile: string
  textPlacement: {
    x: number
    y: number
  }
  maxWidth: number
}

export const defaultConfig: BackgroundConfig = {
  textPlacement: {
    x: 100,
    y: 200,
  },
  fontFile: fonts.nawabiat.white,
  maxWidth: 500,
}

export async function getBackground({
  backgroundToUse,
  pathToBackgrounds,
  backgroundConfig,
}: {
  backgroundToUse?: string
  pathToBackgrounds: string
  backgroundConfig: Record<string, BackgroundConfig>
}) {
  const filename =
    backgroundToUse || (await getRandomObjectKey(backgroundConfig))

  const config = backgroundConfig[filename] || defaultConfig
  const image = await Jimp.read(`${pathToBackgrounds}/${filename}`)

  return { image, config }
}

export async function writeTextOnImage(
  imageOptions: { image: Jimp; config: BackgroundConfig },
  text: string
) {
  const { image, config } = imageOptions
  return Jimp.loadFont(
    path.resolve(__dirname, `../fonts/${config.fontFile}`)
  ).then((font) => {
    image.print(
      font,
      config.textPlacement.x,
      config.textPlacement.y,
      text,
      config.maxWidth
    )
  })
}

export async function getImageBuffer(image: Jimp): Promise<Buffer> {
  return new Promise((res, rej) => {
    image.getBuffer(Jimp.MIME_JPEG, (err, buffer) => {
      if (err) rej('Image buffer FAILED')
      res(buffer)
    })
  })
}
