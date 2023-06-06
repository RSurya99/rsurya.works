import React from 'react'
import { getCheatsheetBySlug, getAllSlugs } from '~/lib/cheatsheets'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '~/components/mdx/MDXComponents'
import { IconCalendarDue } from '@tabler/icons-react'
import { IconClockHour3 } from '@tabler/icons-react'
import { format } from 'date-fns'
import Head from 'next/head'
import type { MDXType } from '~/types/mdx'
import { GetStaticPropsContext } from 'next'

const CheatsheetDetail = ({ meta, source }: MDXType) => {
  const headTitle = `${meta.title} - Cheatsheet Detail | RSurya99 - Rafli Surya Pratama Portfolio`
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content="Rafli Surya Pratama (@RSurya99) Personal Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='max-w-5xl mx-auto px-4 py-12 space-y-8'>
        <div className="flex items-center space-x-8 text-base sm:text-lg font-medium">
          <a href="#">#{meta.category}</a>
          <span className="flex items-center">
            <IconCalendarDue className='mr-1.5' />
            {format(new Date(meta.date), 'MMM dd, yyyy')}
          </span>
          <span className="flex items-center">
            <IconClockHour3 className='mr-1.5' />
            {meta.readTime}
          </span>
        </div>
        <h1 className='text-4xl sm:text-5xl font-semibold leading-tight'>{meta.title}</h1>
        <div className="prose sm:prose-lg dark:prose-invert">
          <MDXRemote {...source} components={MDXComponents} />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext<{ slug: string }>) {
  const { params } = context
  const { meta, source } = await getCheatsheetBySlug(params ? params.slug : '')

  return {
    props: {
      meta,
      source
    }
  }
}

export async function getStaticPaths() {
  const slugs = getAllSlugs()
  const paths = slugs.map((slug: string) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

export default CheatsheetDetail