import DefaultLayout from '~/layouts/default'
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconFile } from "@tabler/icons-react";
import { IconLink } from "@tabler/icons-react";
import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import Character from "~/components/utils/Character";
import { getAllReadingLists } from '~/lib/readingLists'

export async function getStaticProps() {
  const readingLists = getAllReadingLists()

  return {
    props: {
      readingLists
    }
  }
}

export default function Home({ readingLists }: any) {
  return (
    <div className="space-y-12">
      <section className='w-full max-w-screen-xl mx-auto px-4 py-12 space-y-8'>
        <div className="space-y-1.5">
          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">Reading List</h2>
          <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">My curated collection of bookmarks for useful resources.</p>
        </div>
        <div className="space-y-6">
          {readingLists.map((reading: any) => (
            <a href={reading.link} target='_blank' key={reading.link} className="w-full inline-block group rounded-lg bg-zinc-300 dark:bg-zinc-700 overflow-hidden cursor-pointer">
              <div className="px-4 py-3 flex items-center justify-between sm:justify-normal">
                <div className="text-xl sm:text-2xl font-semibold group-hover:underline">{reading.title}</div>
                <IconArrowNarrowRight className="ml-3" />
              </div>
              <div className="px-4 py-3 bg-primary dark:bg-white text-sm sm:text-base text-zinc-200 dark:text-primary-300">
                {reading.domain}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}


Home.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)