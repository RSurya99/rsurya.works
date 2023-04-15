import React, { useEffect } from 'react'
import DefaultLayout from '~/layouts/default'
import Link from 'next/link'

const BlogIndex = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <div>Blog page</div>
      <Link href="/blog/1">go to blog detail</Link>
    </section>
  )
}


BlogIndex.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)
export default BlogIndex