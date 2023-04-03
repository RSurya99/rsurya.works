import { useRouter } from 'next/router'
import React from 'react'

const PostDetail = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <section className="max-w-screen-xl mx-auto">
      <div>Post page {id}</div>
    </section>
  )
}

export default PostDetail