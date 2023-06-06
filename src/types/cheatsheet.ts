interface Author {
  name: string,
  picture: string,
}

export type Cheatsheet = {
  author: Author,
  category: string,
  date: string,
  excerpt: string,
  readTime: string,
  slug: string,
  tags?: string[],
  title: string,
}

export type Cheatsheets = {
  [key: string]: Cheatsheet[]
}