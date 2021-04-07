import { IgApiClient } from 'instagram-private-api'
import { readFile } from 'fs'
import { promisify } from 'util'
import { resolve } from 'path'
const readFileAsync = promisify(readFile)

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

export async function uploadPhoto(file: Buffer, caption: string) {
  const client = await login()

  const publishResult = await client.publish.photo({
    file,
    caption,
  })
  return publishResult
}
