import { IconPointFilled } from '@tabler/icons-react'
import { format } from 'date-fns'
import { kebabCase, startCase, toLower } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DefaultLayout from '~/layouts/default'
import { getPostsByCategory, getPostCategories } from '~/lib/posts'

const PostCategoryDetail = ({ category, posts }: any) => {
  return (
    <section key={category} className='w-full max-w-screen-xl mx-auto py-12 space-y-6'>
      <h2 className='text-4xl font-semibold'>{category}</h2>
      <hr className='border border-primary/25' />
      <div className="grid grid-cols-3 gap-x-10">
        {posts.map((post: any) => (
        <Link href={`/posts/${post.slug}`} key={post.slug} className="space-y-3">
          <Image src={post.cover} width={400} height={235} alt='Post Image' className='rounded-lg aspect-[16/10] object-cover object-center' />
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
    </section>
  )
}

export async function getStaticProps({ params }: any) {
  const { category } = params
  const categoryPost = startCase(toLower(category.split('-').join(' ')))
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
  const paths = categories.map((category: any) => ({ params: { category: kebabCase(category) } }))
  return {
    paths,
    fallback: false
  }
}


PostCategoryDetail.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)

export default PostCategoryDetail