import React, { useEffect } from 'react'
import DefaultLayout from '~/layouts/default'
import Link from 'next/link'
import Image from 'next/image'
import { IconPointFilled } from '@tabler/icons-react'
import { IconArrowNarrowRight } from '@tabler/icons-react'

const BlogIndex = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto py-12 space-y-16">
      <section id="latest" className='grid grid-cols-2 gap-x-8'>
        <div className='w-full'>
          <div className="flex flex-col gap-y-5">
            <Image src='/static/images/blog/post-1.jpg' width={700} height={411} alt='Post Image' className='rounded-lg' />
            <div className="flex items-center gap-x-3">
              <span>Feb 24, 2022</span>
              <IconPointFilled className='w-4 h-4' />
              <span>6 min read</span>
            </div>
            <h2 className='text-4xl font-semibold'>Why You Hate Small Talk?</h2>
            <p className="text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">Psychologist Laurie Helgoe says introverts hate small talk because it creates a barrier between people.</p>
          </div>
        </div>
        <div className='space-y-6'>
          <h3 className='text-2xl font-semibold'>Recent Posts</h3>
          {Array(3).fill('').map((_, i) => (
            <div key={i} className="flex gap-x-5">
              <Image src='/static/images/blog/post-1.jpg' width={250} height={146} alt='Post Image' className='rounded-lg' />
              <div className="space-y-1.5">
                <h3 className='text-2xl font-semibold'>Why You Hate Small Talk?</h3>
                <span className='text-sm'>IN SELF DEVELOPMENT</span>
                <div className="flex items-center gap-x-3 text-sm text-primary-300 dark:text-zinc-200">
                  <span>Feb 24, 2022</span>
                  <IconPointFilled className='w-4 h-4' />
                  <span>6 min read</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="self-development" className='space-y-6'>
        <h2 className='text-4xl font-semibold'>Self Development</h2>
        <hr className='border border-primary/25' />
        <div className="grid grid-cols-3 gap-x-10">
          {Array(3).fill('').map((_, i) => (
          <div key={i} className="space-y-3">
            <Image src='/static/images/blog/post-1.jpg' width={400} height={235} alt='Post Image' className='rounded-lg' />
            <div className="space-y-2">
              <h3 className='text-3xl font-semibold'>Why Do You Hate Small Talk?</h3>
              <div className="flex items-center gap-x-3 text-primary-300 dark:text-zinc-200">
                <span>Feb 24, 2022</span>
                <IconPointFilled className='w-4 h-4' />
                <span>6 min read</span>
              </div>
            </div>
          </div>
          ))}
        </div>
        <div className="w-full flex justify-end">
          <Link href='/blog/self-development' className="w-fit p-3 flex items-center font-medium hover:bg-zinc-100 hover:dark:bg-zinc-700 rounded-lg transition-colors duration-300">
            More posts
            <IconArrowNarrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section id="web-development" className='space-y-6'>
        <h2 className='text-4xl font-semibold'>Web Development</h2>
        <hr className='border border-primary/25' />
        <div className="grid grid-cols-3 gap-x-10">
          {Array(3).fill('').map((_, i) => (
          <div key={i} className="space-y-3">
            <Image src='/static/images/blog/post-1.jpg' width={400} height={235} alt='Post Image' className='rounded-lg' />
            <div className="space-y-2">
              <h3 className='text-3xl font-semibold'>Why Do You Hate Small Talk?</h3>
              <div className="flex items-center gap-x-3 text-primary-300 dark:text-zinc-200">
                <span>Feb 24, 2022</span>
                <IconPointFilled className='w-4 h-4' />
                <span>6 min read</span>
              </div>
            </div>
          </div>
          ))}
        </div>
        <div className="w-full flex justify-end">
          <Link href='/blog/self-development' className="w-fit p-3 flex items-center font-medium hover:bg-zinc-100 hover:dark:bg-zinc-700 rounded-lg transition-colors duration-300">
            More posts
            <IconArrowNarrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}


BlogIndex.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)
export default BlogIndex