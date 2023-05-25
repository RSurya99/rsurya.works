import DefaultLayout from '~/layouts/default'
import Head from 'next/head'

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 | RSurya99 - Rafli Surya Pratama Portfolio</title>
        <meta name="description" content="Rafli Surya Pratama (@RSurya99) Personal Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='w-full min-h-[70vh] flex flex-col items-center justify-center text-center'>
        <span className="text-[256px] font-semibold">
          404
        </span>
        <h2 className="text-5xl font-semibold mb-3">Oops!</h2>
        <p className='text-lg text-primary-300 dark:text-zinc-200 px-40'>The page you&apos;re looking for either doesn&apos;t exist or you have made a typo!</p>
      </section>
    </>
  )
}

Error404.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)
