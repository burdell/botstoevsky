export type TextMetadata =
  | {
      title: string
    }
  | undefined

export const textMetadata: { [filename: string]: TextMetadata } = {
  'brothers_k.txt': {
    title: 'The Brothers Karamazov',
  },
  'crime_and_punishment.txt': {
    title: 'Crime & Punishment',
  },
  'demons.txt': {
    title: 'Demons',
  },
  'eternal_husband.txt': {
    title: 'The Eternal Husband',
  },
  'grand_inquisitor.txt': {
    title: 'The Brothers Karamazov',
  },
  'honest_thief.txt': {
    title: 'The Honest Thief',
  },
  'notes_from_a_dead_house.txt': {
    title: 'Notes from a Dead House',
  },
  'notes_from_under.txt': {
    title: 'Notes from Underground',
  },
  'poor_folk.txt': {
    title: 'Poor Folk',
  },
  'the_gambler.txt': {
    title: 'The Gambler',
  },
  'the_idiot.txt': {
    title: 'The Idiot',
  },
  'uncles_dream.txt': {
    title: `Uncle's Dream`,
  },
  'white_nights.txt': {
    title: 'White Nights',
  },
}
