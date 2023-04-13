import { useRouter } from 'next/router'
import React from 'react'
import DefaultLayout from '~/layouts/default'

const PostDetail = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <section className="max-w-screen-xl mx-auto">
      <div>Post page {id}</div>
    </section>
  )
}

PostDetail.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)

export default PostDetail