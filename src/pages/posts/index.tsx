import React, { useEffect } from 'react'
import DefaultLayout from '~/layouts/default'
import Link from 'next/link'
import Image from 'next/image'
import { IconPointFilled } from '@tabler/icons-react'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import { getLatestPostsMeta, getMapPostsMeta, getPostCategories } from '~/lib/posts'
import { format } from 'date-fns'

export async function getStaticProps() {
  const posts = getMapPostsMeta()
  const categories = getPostCategories()
  const latestPosts = getLatestPostsMeta(4)
  
  return {
    props: {
      posts,
      categories,
      latestPosts
    }
  }
}

const BlogIndex = ({ posts, categories, latestPosts }: any) => {
  const firstLatestPost = latestPosts.length && latestPosts[0]
  const restLatestPosts = latestPosts.length && latestPosts.slice(1)

  return (
    <div className="w-full max-w-screen-xl mx-auto py-12 space-y-16">
      <section id="latest" className='grid grid-cols-2 gap-x-8'>
        <div className='w-full'>
          <Link href={`/posts/${firstLatestPost.slug}`} className="flex flex-col gap-y-5">
            <Image src={firstLatestPost.cover} width={700} height={411} alt='Post Image' className='rounded-lg shadow' />
            <div className="flex items-center gap-x-3">
              <span>{format(new Date(firstLatestPost.date), 'MMM dd, yyyy')}</span>
              <IconPointFilled className='w-4 h-4' />
              <span>{firstLatestPost.readTime}</span>
            </div>
            <h2 className='text-4xl font-semibold'>{firstLatestPost.title}</h2>
            <p className="text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">{firstLatestPost.excerpt}</p>
          </Link>
        </div>
        <div className='space-y-6'>
          <h3 className='text-2xl font-semibold'>Recent Posts</h3>
          {restLatestPosts.length ? restLatestPosts.map((post: any) => (
            <Link href={`/posts/${post.slug}`} key={post.slug} className="flex gap-x-5">
              <Image src={post.cover} width={250} height={146} alt='Post Image' className='rounded-lg shadow' />
              <div className="space-y-1.5">
                <h3 className='text-2xl font-semibold'>{post.title}</h3>
                <span className='text-sm'>IN {post.category.toUpperCase()}</span>
                <div className="flex items-center gap-x-3 text-sm text-primary-300 dark:text-zinc-200">
                  <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
                  <IconPointFilled className='w-4 h-4' />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          )) : (
            <p className='text-lg text-primary-300 dark:text-zinc-200'>No posts yet.</p>
          )}
        </div>
      </section>
      {categories.map((category: any) => (
      <section key={category} id="self-development" className='space-y-6'>
        <h2 className='text-4xl font-semibold'>{category}</h2>
        <hr className='border border-primary/25' />
        <div className="grid grid-cols-3 gap-x-10">
          {posts[category].map((post: any) => (
          <Link href={`/posts/${post.slug}`} key={post.slug} className="space-y-3">
            <Image src={post.cover} width={400} height={235} alt='Post Image' className='rounded-lg shadow' />
            <div className="space-y-2">
              <h3 className='text-3xl font-semibold'>{post.title}</h3>
              <div className="flex items-center gap-x-3 text-primary-300 dark:text-zinc-200">
                <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
                <IconPointFilled className='w-4 h-4' />
                <span>{post.readTime}</span>
              </div>
            </div>
          </Link>
          ))}
        </div>
        <div className="w-full flex justify-end">
          <Link href={`/posts/categories/${category}`} className="w-fit p-3 flex items-center font-medium hover:bg-zinc-100 hover:dark:bg-zinc-700 rounded-lg transition-colors duration-300">
            More posts
            <IconArrowNarrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      ))}
    </div>
  )
}


BlogIndex.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)
export default BlogIndex