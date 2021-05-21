import Twitter from 'twitter'

import { getRandomSentence } from '../getRandomSentence'
import { TextMetadata } from '../getRandomSentence/meta'
import { generateRandomImage, getImageBuffer } from '../images'

export async function textHandler() {
  const { sentence } = await getRandomSentence()
  await sendTweet({ status: sentence })

  return {
    statusCode: 200,
    body: JSON.stringify({}),
  }
}

export async function imageHandler() {
  await sendMediaTweet()

  return {
    statusCode: 200,
    body: JSON.stringify({}),
  }
}

function getTwitterClient() {
  return new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '',
    access_token_key: process.env.TWITTER_ACCESS_KEY || '',
    access_token_secret: process.env.TWITTER_ACCESS_SECRET || '',
  })
}

export async function sendMediaTweet() {
  const sentence = await getRandomSentence()
  const imageResult = await generateRandomImage({ sentenceToUse: sentence })
  const imageBuffer = await getImageBuffer(imageResult.imageOptions.image)

  const client = getTwitterClient()
  const media = await postMedia(imageBuffer, client)
  await sendTweet({
    status: generateCaption(sentence.meta),
    media_ids: media.media_id_string,
  })
}

async function sendTweet(requestParams: Twitter.RequestParams) {
  return new Promise((res, rej) => {
    const client = getTwitterClient()

    client.post('statuses/update', requestParams, function (error) {
      if (error) {
        console.log('ERRROR: ', error.message)
      }
      res({ status: 'OK' })
    })
  })
}

async function postMedia(
  image: Buffer,
  client: Twitter
): Promise<Twitter.ResponseData> {
  return new Promise((res, rej) => {
    client.post('media/upload', { media: image }, function (
      error,
      media,
      response
    ) {
      if (error) {
        rej(error.message)
      }
      res(media)
    })
  })
}

function generateCaption(metadata: TextMetadata) {
  if (!metadata) return undefined

  return `[${metadata.title}]`
}
