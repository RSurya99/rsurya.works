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

export const getCheatsheetBySlug = async (slug: any) => {
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

export const getCheatsheetMeta = (slug: any) => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { data, content } = matter(fileContent)
  const readTime = readingTime(content).text

  const meta = {
    ...data,
    slug: realSlug,
    readTime
  }

  return meta
}

export const getAllCheatsheetsMeta = () => {
  const files = fs.readdirSync(rootDirectory)
  const cheatsheets = files
    .map(file => getCheatsheetMeta(file))
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
  return cheatsheets
}

export const getMapCheatsheetsMeta = () => {
  const files = fs.readdirSync(rootDirectory)
  const cheatsheets = files
    .map(file => getCheatsheetMeta(file))
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
    .reduce((acc: any, curr: any) => {
      if(acc[curr.category]){
        acc[curr.category].push(curr)
      }else{
        acc[curr.category] = [curr]
      }
      return acc
    }, {})
  return cheatsheets
}

export const getCheatsheetCategories = () => {
  const files = fs.readdirSync(rootDirectory)
  const categories = files
    .map(file => getCheatsheetMeta(file))
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
    .map((el: any) => el.category)
    .filter((el: any, i: any, arr: any) => arr.indexOf(el) === i)
  return categories
}

export const getAllSlugs = () => {
  const files = fs.readdirSync(rootDirectory)
  const slugs = files.map(file => file.replace(/\.mdx$/, ''))
  return slugs
}