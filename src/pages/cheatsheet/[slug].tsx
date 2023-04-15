import React, { useEffect } from 'react'
import { getCheatsheetBySlug, getAllSlugs } from '~/lib/cheatsheets'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '~/components/mdx/MDXComponents'
import { IconCalendar } from '@tabler/icons-react'
import { IconCalendarEvent } from '@tabler/icons-react'
import { IconCalendarDue } from '@tabler/icons-react'
import { IconClockHour3 } from '@tabler/icons-react'

const CheatsheetDetail = ({ meta, source }: any) => {
  return (
    <div className='max-w-5xl mx-auto py-12 space-y-8'>
      <div className="flex items-center space-x-8 text-lg font-medium">
        <a href="#">#{meta.category}</a>
        <span className="flex items-center">
          <IconCalendarDue className='mr-1.5' />
          {meta.date}
        </span>
        <span className="flex items-center">
          <IconClockHour3 className='mr-1.5' />
          {meta.readTime}
        </span>
      </div>
      <h1 className='text-5xl font-semibold leading-tight'>{meta.title}</h1>
      <div className="prose prose-lg dark:prose-invert">
        <MDXRemote {...source} components={MDXComponents} />
      </div>
    </div>
  )
}

export async function getStaticProps({ params }: any) {
  const { slug } = params
  const { meta, source } = await getCheatsheetBySlug(slug)

  return {
    props: {
      meta,
      source
    }
  }
}

export async function getStaticPaths() {
  const slugs = getAllSlugs()
  const paths = slugs.map((slug: any) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

export default CheatsheetDetail