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

const rootDirectory = path.join(process.cwd(), 'src/content', 'posts')

export const getPostBySlug = async (slug: any) => {
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

  const project = {
    meta: {
      ...data,
      slug: realSlug,
      readTime
    },
    source: mdxSource
  }

  return project
}

export const getPostMeta = (slug: any) => {
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

export const getLatestPostsMeta = (length?: number) => {
  const posts = getAllPostsMeta()
  if(length){
    return posts.slice(0, length)
  }
  return posts
}

export const getAllPostsMeta = () => {
  const files = fs.readdirSync(rootDirectory)
  const posts = files
    .map(file => getPostMeta(file))
    .sort((a: any, b: any) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
  return posts
}

export const getMapPostsMeta = () => {
  const posts = getAllPostsMeta()
  const mapPosts = posts
    .reduce((acc: any, curr: any) => {
      if(acc[curr.category]){
        acc[curr.category].push(curr)
      }else{
        acc[curr.category] = [curr]
      }
      return acc
    }, {})
  return mapPosts
}

export const getPostCategories = () => {
  const posts = getAllPostsMeta()
  const categories = posts
    .map((el: any) => el.category)
    .filter((el: any, i: any, arr: any) => arr.indexOf(el) === i)
  return categories
}

export const getPostsSlug = () => {
  const files = fs.readdirSync(rootDirectory)
  const slugs = files.map(file => file.replace(/\.mdx$/, ''))
  return slugs
}