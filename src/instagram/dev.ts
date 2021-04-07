import { config } from 'dotenv'
import { resolve } from 'path'

import { generateRandomImage } from './index'

async function main() {
  const imageResult = await generateRandomImage()
  imageResult.image.write(resolve(__dirname, './result.jpg'))
}

main()
