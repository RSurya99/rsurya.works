const readingLists = [
  {
    title: 'The Art of Computer Programming',
    link: 'https://www.amazon.com/Art-Computer-Programming-Volume-1/dp/0321751043',
    description: 'The bible of computer science.',
    domain: 'amazon.com',
  }
]

export const getAllReadingLists = () => readingLists

export const getLatestReadingLists = (length: number) => readingLists.slice(0, length)