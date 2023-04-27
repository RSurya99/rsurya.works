import DefaultLayout from '~/layouts/default'
import { IconClockHour3 } from '@tabler/icons-react'
import { IconBrandGithub } from '@tabler/icons-react'
import { IconExternalLink } from '@tabler/icons-react'
import { IconCalendar } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '~/components/mdx/MDXComponents'
import { getPostBySlug, getPostsSlug } from '~/lib/posts'
import { format } from 'date-fns'

const PostDetail = ({ meta, source }: any) => {
  return (
    <section className='w-full max-w-5xl mx-auto py-12 space-y-8'>
      <Image src={meta.cover} width={1024} height={728} alt={meta.title + ' Post'} className='rounded-xl aspect-[16/10] object-cover object-center' />
        <div className="flex items-center space-x-8 font-medium mb-4">
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
        <div className="prose prose-lg dark:prose-invert">
          <MDXRemote {...source} components={MDXComponents} />
        </div>
    </section>
  )
}

export async function getStaticProps({ params }: any) {
  const { slug } = params
  const { meta, source } = await getPostBySlug(slug)

  return {
    props: {
      meta,
      source
    }
  }
}

export async function getStaticPaths() {
  const slugs = getPostsSlug()
  const paths = slugs.map((slug: any) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}


PostDetail.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)
export default PostDetail