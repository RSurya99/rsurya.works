import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'

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

const rootDirectory = path.join(process.cwd(), 'src/content', 'projects')

export const getProjectBySlug = async (slug: any) => {
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
      ],
      remarkPlugins: [remarkGfm]
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

export const getProjectMeta = (slug: any) => {
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

export const getLatestProjectsMeta = (length?: number) => {
  const projects = getAllProjectsMeta()
  if(length){
    return projects.slice(0, length)
  }
  return projects
}

export const getAllProjectsMeta = () => {
  const files = fs.readdirSync(rootDirectory)
  const projects = files
    .map(file => getProjectMeta(file))
    .sort((a: any, b: any) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
  return projects
}

export const getMapProjectsMeta = () => {
  const projects = getAllProjectsMeta()
  const mapProjects = projects
    .reduce((acc: any, curr: any) => {
      if(acc[curr.category]){
        acc[curr.category].push(curr)
      }else{
        acc[curr.category] = [curr]
      }
      return acc
    }, {})
  return mapProjects
}

export const getProjectCategories = () => {
  const projects = getAllProjectsMeta()
  const categories = projects
    .map((el: any) => el.category)
    .filter((el: any, i: any, arr: any) => arr.indexOf(el) === i)
  return categories
}

export const getProjectsSlug = () => {
  const files = fs.readdirSync(rootDirectory)
  const slugs = files.map(file => file.replace(/\.mdx$/, ''))
  return slugs
}