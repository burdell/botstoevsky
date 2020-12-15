import Twitter from 'twitter'

export async function sendTweet(status: string) {
  return new Promise((res, rej) => {
    const client = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '',
      access_token_key: process.env.TWITTER_ACCESS_KEY || '',
      access_token_secret: process.env.TWITTER_ACCESS_SECRET || '',
    })

    client.post('statuses/update', { status }, function (error) {
      if (error) throw rej(error)
      res({ status: 'OK' })
    })
  })
}
