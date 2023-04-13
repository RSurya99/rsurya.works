import DefaultLayout from '~/layouts/default'
import Head from 'next/head'
import React from 'react'

function Home() {
  return (
    <>
      <section className='w-full min-h-[75vh] flex flex-col items-center justify-center'>
        <h1 className="text-5xl font-semibold mb-1.5">
          This page is under development
        </h1>
        <p className='text-lg text-primary/75 dark:text-slate-50/75'>Soon I promise</p>
      </section>
    </>
  )
}

Home.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)

export default Home