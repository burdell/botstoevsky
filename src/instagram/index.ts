import { IgApiClient } from 'instagram-private-api'

import { getRussianLitImage } from '../getRussianLitImage'
import { getImageBuffer } from '../imageUtils'
import { TextMetadata } from '../sentenceUtils'

export async function handler() {
  try {
    const imageResult = await getRussianLitImage()
    const imageBuffer = await getImageBuffer(imageResult.imageOptions.image)
    await uploadPhoto(imageBuffer, imageResult.text.meta)
  } catch (e) {
    console.log('=== error', e)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: (e as any).message }),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({}),
  }
}

function getCredentials() {
  const username = process.env.IG_USERNAME
  const password = process.env.IG_PASSWORD

  if (!username || !password) {
    throw new Error('Credentials not set for Instagram')
  }

  return { username, password }
}

async function login() {
  const ig = new IgApiClient()
  const { username, password } = getCredentials()

  ig.state.generateDevice(username)
  await ig.account.login(username, password)

  return ig
}

export async function uploadPhoto(file: Buffer, metadata: TextMetadata) {
  const client = await login()
  const publishResult = await client.publish.photo({
    file,
    caption: generateCaption(metadata),
  })

  return publishResult
}

function generateCaption(metadata: TextMetadata) {
  if (!metadata) return undefined

  return `[${metadata.title}]`
}
