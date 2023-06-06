import DefaultLayout from '~/layouts/default'
import { IconClockHour3 } from '@tabler/icons-react'
import { IconCalendar } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '~/components/mdx/MDXComponents'
import { getPostBySlug, getPostsSlug } from '~/lib/posts'
import { format } from 'date-fns'
import Head from 'next/head'
import type { MDXType } from '~/types/mdx'
import { GetStaticPropsContext } from 'next'

const PostDetail = ({ meta, source }: MDXType) => {
  const headTitle = `${meta.title} - Post Detail | RSurya99 - Rafli Surya Pratama Portfolio`
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content="Rafli Surya Pratama (@RSurya99) Personal Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='w-full max-w-5xl mx-auto px-4 py-12 space-y-8'>
        <Image src={meta.cover} width={1024} height={728} alt={meta.title + ' Post'} className='rounded-xl aspect-[16/10] object-cover object-center' />
          <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-base sm:text-lg font-medium mb-4">
            <a href="#" className='underline'>#{meta.category}</a>
            <div className="flex items-center">
              <IconCalendar className='mr-1.5' />
              {format(new Date(meta.date), 'MMM dd, yyyy')}
            </div>
            <div className="flex items-center">
              <IconClockHour3 className='mr-1.5' />
              {meta.readTime}
            </div>
          </div>
          <div className="prose sm:prose-lg dark:prose-invert">
            <MDXRemote {...source} components={MDXComponents} />
          </div>
      </section>
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext<{ slug: string }>) {
  const { params } = context
  const { meta, source } = await getPostBySlug(params ? params.slug : '')

  return {
    props: {
      meta,
      source
    }
  }
}

export async function getStaticPaths() {
  const slugs = getPostsSlug()
  const paths = slugs.map((slug: string) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}


PostDetail.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)
export default PostDetail