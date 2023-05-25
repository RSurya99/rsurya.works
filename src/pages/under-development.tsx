import DefaultLayout from '~/layouts/default'
import React from 'react'
import Head from 'next/head'

function Home() {
  return (
    <>
      <Head>
        <title>Under Development | RSurya99 - Rafli Surya Pratama Portfolio</title>
        <meta name="description" content="Rafli Surya Pratama (@RSurya99) Personal Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='w-full min-h-[75vh] flex flex-col items-center justify-center'>
        <h1 className="text-5xl font-semibold mb-1.5">
          This page is under development
        </h1>
        <p className='text-lg text-primary-300 dark:text-zinc-200'>Soon I promise</p>
      </section>
    </>
  )
}

Home.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)

export default Home