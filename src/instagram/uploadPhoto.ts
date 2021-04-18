import { IgApiClient } from 'instagram-private-api'

import { TextMetadata } from '../getRandomSentence/meta'

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
