import type { MDXRemoteSerializeResult } from "next-mdx-remote"

export type MDXMetaType = {
  title: string,
  date: string,
  slug: string,
  readTime: string,
  category: string,
  tags: string[],
  cover: string,
  link?: string,
  repository?: string
}

export type MDXType = {
  meta: MDXMetaType,
  source: MDXRemoteSerializeResult
}