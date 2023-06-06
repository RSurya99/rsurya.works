import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'

const prettyCodeOptions = {
  theme: 'material-theme-palenight',
  onVisitLine(node: any) {
    console.log('nodemua', node)
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push('highlighted')
  },
  onVisitHighlightedWord(node: any) {
    node.properties.className = ['highlighted', 'word']
  }
}

const rootDirectory = path.join(process.cwd(), 'src/content', 'cheatsheets')

export const getCheatsheetBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { data, content } = matter(fileContent)
  const readTime = readingTime(content).text
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        // [rehypeHighlight],
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        [rehypePrettyCode, prettyCodeOptions]
      ]
    }
  })

  const cheatsheet = {
    meta: {
      ...data,
      slug: realSlug,
      readTime
    },
    source: mdxSource
  }

  return cheatsheet
}

export const getCheatsheetMeta = (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { data, content } = matter(fileContent)
  const readTime = readingTime(content).text

  const meta = {
    ...data,
    date: data.date,
    category: data.category,
    slug: realSlug,
    readTime
  }

  return meta
}

export const getLatestCheatsheetsMeta = (length?: number) => {
  const cheatsheets = getAllCheatsheetsMeta()
  if(length){
    return cheatsheets.slice(0, length)
  }
  return cheatsheets
}

export const getAllCheatsheetsMeta = () => {
  const files = fs.readdirSync(rootDirectory)
  const cheatsheets = files
    .map(file => getCheatsheetMeta(file))
    .sort((a, b): number => new Date(b.date).valueOf() - new Date(a.date).valueOf())
  return cheatsheets
}

export const getMapCheatsheetsMeta = () => {
  const cheatsheets = getAllCheatsheetsMeta()
  const mapCheatsheets = cheatsheets
    .reduce((acc: any, curr) => {
      if(acc[curr.category]){
        acc[curr.category].push(curr)
      }else{
        acc[curr.category] = [curr]
      }
      return acc
    }, {})
  return mapCheatsheets
}

export const getCheatsheetCategories = () => {
  const cheatsheets = getAllCheatsheetsMeta()
  const categories = cheatsheets
    .map((el) => el.category)
    .filter((el, i: number, arr: string[]) => arr.indexOf(el) === i)
  return categories
}

export const getAllSlugs = () => {
  const files = fs.readdirSync(rootDirectory)
  const slugs = files.map(file => file.replace(/\.mdx$/, ''))
  return slugs
}