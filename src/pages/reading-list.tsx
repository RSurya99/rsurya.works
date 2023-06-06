import DefaultLayout from '~/layouts/default'
import { getAllReadingLists } from '~/lib/readingLists'
import ReadingListCard from '~/components/base/ReadingList/Card'
import Head from 'next/head'
import { Reading } from '~/types/reading'

export async function getStaticProps() {
  const readingLists = getAllReadingLists()

  return {
    props: {
      readingLists
    }
  }
}

type Props = {
  readingLists: Reading[]
}

export default function Home({ readingLists }: Props) {
  return (
    <>
      <Head>
        <title>Reading List | RSurya99 - Rafli Surya Pratama Portfolio</title>
        <meta name="description" content="Rafli Surya Pratama (@RSurya99) Personal Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="space-y-12">
        <section className='w-full max-w-screen-xl mx-auto px-4 py-12 space-y-8'>
          <div className="space-y-1.5">
            <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">Reading List</h2>
            <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">My curated collection of bookmarks for useful resources.</p>
          </div>
          <div className="space-y-6">
            {readingLists.map((reading: Reading) => (
              <ReadingListCard key={reading.link} reading={reading} />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}


Home.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)