import React from 'react'
import Link from 'next/link'

const Blog = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <div>Blog page</div>
      <Link href="/blog/1">go to blog detail</Link>
    </section>
  )
}

export default Blog