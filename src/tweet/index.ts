import { getRandomSentence } from '../getRandomSentence'

export async function handler() {
  const sentence = await getRandomSentence()

  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: sentence,
    }),
  }
}
