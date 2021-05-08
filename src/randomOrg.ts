import RandomOrg from 'random-org'

export async function getRandomOrgInt(max: number): Promise<number> {
  const random = new RandomOrg({ apiKey: process.env.RANDOM_ORG_KEY })
  const ints = await random.generateIntegers({ min: 0, max: max - 1, n: 1 })
  return ints.random.data.pop()
}
