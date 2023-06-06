interface Author {
  name: string,
  picture: string,
}

export type Post = {
  author: Author,
  category: string,
  cover: string,
  date: string,
  excerpt: string,
  readTime: string,
  slug: string,
  tags?: string[],
  title: string,
}

export type Posts = {
  [key: string]: Post[]
}