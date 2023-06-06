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

export const getProjectBySlug = async (slug: string) => {
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

export const getProjectMeta = (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { data, content } = matter(fileContent)
  const readTime = readingTime(content).text

  const meta = {
    ...data,
    category: data.category,
    date: data.date,
    slug: realSlug,
    readTime
  }

  return meta
}

export const getLatestProjectsMeta = (length?: number) => {
  const projects = getAllProjectsMeta()
  const sortedProjects = projects.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
  if(length){
    return sortedProjects.slice(0, length)
  }
  return sortedProjects
}

export const getAllProjectsMeta = () => {
  const files = fs.readdirSync(rootDirectory)
  const projects = files
    .map(file => getProjectMeta(file))
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
  return projects
}

export const getMapProjectsMeta = () => {
  const projects = getAllProjectsMeta()
  const mapProjects = projects
    .reduce((acc: any, curr) => {
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
    .map((el) => el.category)
    .filter((el, i: number, arr) => arr.indexOf(el) === i)
  return categories
}

export const getProjectsSlug = () => {
  const files = fs.readdirSync(rootDirectory)
  const slugs = files.map(file => file.replace(/\.mdx$/, ''))
  return slugs
}