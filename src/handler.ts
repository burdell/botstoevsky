import { config } from 'dotenv'
import { getRandomSentence } from './getRandomSentence'
import { sendTweet } from './twitter'

export async function handler() {
  const sentence = await getRandomSentence()
  await sendTweet(sentence)

  return {
    statusCode: 200,
    body: JSON.stringify({}),
  }
}

if (process.env.ENV === 'local') {
  config()
  handler()
}
