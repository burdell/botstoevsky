import { config } from 'dotenv'
import Twitter from 'twitter'

import { getRandomSentence } from '../random'

export async function handler() {
  const sentence = await getRandomSentence()
  await sendTweet(sentence)

  return {
    statusCode: 200,
    body: JSON.stringify({}),
  }
}

export async function sendTweet(status: string) {
  return new Promise((res, rej) => {
    const client = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '',
      access_token_key: process.env.TWITTER_ACCESS_KEY || '',
      access_token_secret: process.env.TWITTER_ACCESS_SECRET || '',
    })

    client.post('statuses/update', { status }, function (error) {
      if (error) {
        console.log('ERRROR: ', error.message)
      }
      res({ status: 'OK' })
    })
  })
}

if (process.env.ENV === 'local') {
  config()
  handler()
}
