import { IconPointFilled } from '@tabler/icons-react'
import { format } from 'date-fns'
import { kebabCase, startCase, toLower } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DefaultLayout from '~/layouts/default'
import { getPostsByCategory, getPostCategories } from '~/lib/posts'
import Head from 'next/head'
import type { Post } from '~/types/post'
import { GetStaticPropsContext } from 'next'

type Props = {
  category: string,
  posts: Post[]
}

const PostCategoryDetail = ({ category, posts }: Props) => {
  const headTitle = `${category}  - Post Category | RSurya99 - Rafli Surya Pratama Portfolio`
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content="Rafli Surya Pratama (@RSurya99) Personal Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='w-full max-w-screen-xl mx-auto px-4 py-12 space-y-6'>
        <h2 className='text-3xl sm:text-4xl font-semibold'>{category}</h2>
        <hr className='border border-primary/25' />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10">
          {posts.map((post: Post) => (
          <Link href={`/posts/${post.slug}`} key={post.slug} className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <Image src={post.cover} width={400} height={235} alt='Post Image' className='w-full sm:w-[225px] lg:w-[400px] rounded-lg aspect-[16/10] object-cover object-center' />
            <div className="space-y-2">
              <h3 className='text-2xl lg:text-3xl font-semibold'>{post.title}</h3>
              <div className="flex items-center gap-x-3 text-sm lg:text-base text-primary-300 dark:text-zinc-200">
                <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
                <IconPointFilled className='w-4 h-4' />
                <span>{post.readTime}</span>
              </div>
            </div>
          </Link>
          ))}
        </div>
      </section>
    </>
  )
}
export async function getStaticProps(context: GetStaticPropsContext<{ category: string }>) {
  const { params } = context
  const categoryPost = params ? startCase(toLower(params.category.split('-').join(' '))) : ''
  const posts = await getPostsByCategory(categoryPost)
  return {
    props: {
      category: categoryPost,
      posts,
    }
  }
}

export async function getStaticPaths() {
  const categories = getPostCategories()
  const paths = categories.map((category: string) => ({ params: { category: kebabCase(category) } }))
  return {
    paths,
    fallback: false
  }
}


PostCategoryDetail.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)

export default PostCategoryDetail