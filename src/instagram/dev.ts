import { resolve } from 'path'

import { generateRandomImage } from './index'

async function main() {
  const imageResult = await generateRandomImage()

  // console.log('=== text', imageResult.text)
  imageResult.imageOptions.image.write(resolve(__dirname, './result.jpg'))
}

main()
