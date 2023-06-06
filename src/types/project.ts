interface Author {
  name: string,
  picture: string,
}

export type Project = {
  author: Author,
  category: string,
  logo: string,
  date: string,
  excerpt: string,
  readTime: string,
  slug: string,
  repository?: string,
  link?: string,
  tags?: string[],
  title: string,
}

export type Projects = {
  [key: string]: Project[]
}