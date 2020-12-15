import { APIGatewayEvent, Context } from 'aws-lambda'

import { getRandomSentence } from './getRandomSentence'

export default async function handler(
  event: APIGatewayEvent,
  context: Context
) {
  const sentence = await getRandomSentence()

  return {
    status: 200,
    body: JSON.stringify({
      msg: sentence,
    }),
  }
}
