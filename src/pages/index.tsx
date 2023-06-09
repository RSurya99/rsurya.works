import DefaultLayout from '~/layouts/default'
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import Character from "~/components/utils/Character";
import { getLatestCheatsheetsMeta } from '~/lib/cheatsheets'
import { getLatestProjectsMeta } from '~/lib/projects'
import { getLatestReadingLists } from '~/lib/readingLists'
import { getLatestPostsMeta } from '~/lib/posts'
import { format } from 'date-fns'
import CheatsheetCard from '~/components/base/CheatsheetCard'
import ProjectCard from '~/components/base/ProjectCard';
import ReadingListCard from '~/components/base/ReadingList/Card';
import { Post } from '~/types/post';
import { Project } from '~/types/project';
import { Reading } from '~/types/reading';
import { Cheatsheet } from '~/types/cheatsheet';

export async function getStaticProps() {
  const latestCheatsheets = getLatestCheatsheetsMeta(6)
  const latestProjects = getLatestProjectsMeta(6)
  const latestReadingLists = getLatestReadingLists(5)
  const latestPosts = getLatestPostsMeta(2)

  return {
    props: {
      latestProjects,
      latestCheatsheets,
      latestReadingLists,
      latestPosts
    }
  }
}

type Props = {
  latestProjects: Project[]
  latestCheatsheets: Cheatsheet[]
  latestReadingLists: Reading[]
  latestPosts: Post[]
}
export default function Home({ latestProjects, latestCheatsheets, latestReadingLists, latestPosts }: Props) {

  return (
    <div className="space-y-12">
      {/* Landing Section */}
      <section className='w-full max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 py-12 px-4 overflow-hidden'>
        <div className="flex flex-col justify-center text-center lg:text-left">
          <span className="text-xl font-medium mb-4">Hi, I’m Rafli ✋</span>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight mb-4 text-primary dark:text-zinc-50">Front End Engineer based in West Java, Indonesia</h1>
          <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200 mb-7">I’m a self taught engineer with high enthusiast of open-source. Here you can find all of my writing, projects, and even a cheatsheet.</p>
          <div>
            <Link href='/contact' className="px-12 py-4 inline-block w-full lg:w-fit bg-primary dark:bg-white hover:bg-zinc-700 hover:dark:bg-zinc-200 text-white dark:text-primary font-medium rounded-lg transition-colors duration-300">Contact Me</Link>
          </div>
        </div>
        <div className="hidden lg:block relative ml-36">
          <Character />
          <div className="absolute top-16 -left-8">
            <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary dark:text-zinc-200">
              <path d="M16.599 29.7576L46.2315 20.895L39.0904 50.9888L16.599 29.7576Z" stroke="currentColor" strokeWidth="5"/>
              <path d="M49.3499 17.5915L46.6905 15.0811L5.80536 27.0928L36.0562 55.6488L40.4136 55.3615" stroke="currentColor" strokeWidth="2"/>
              <path d="M44.4208 20.4823L37.3566 50.2755" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="absolute -bottom-4 -left-4">
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary dark:text-zinc-200">
              <rect y="7" width="32" height="32" fill="currentColor"/>
              <rect x="13" width="26" height="26" fill="currentColor" fillOpacity="0.5"/>
            </svg>
          </div>
          <div className="absolute bottom-36 right-4">
            <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary dark:text-zinc-200">
              <line x1="17.0345" y1="39.6964" x2="31.4466" y2="5.655" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
              <line x1="5" y1="-5" x2="41.9665" y2="-5" transform="matrix(-0.920871 -0.389868 -0.389868 0.920871 43.3965 37.0668)" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>
      {/* Blog Section */}
      <section className='w-full max-w-screen-xl mx-auto px-4 py-12 space-y-8'>
        <div className="space-y-1.5">
          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">Blog</h2>
          <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">Mostly about web development, technology, and everything in between.</p>
        </div>
        <div className="space-y-6">
          {latestPosts.map((post: Post) => (
          <div key={post.slug} className="flex flex-col-reverse lg:flex-row bg-zinc-200 dark:bg-zinc-700 transition-colors duration-300 p-1 sm:px-2 sm:py-3 lg:px-6 lg:py-6 rounded-lg">
            <div className="space-y-2">
              <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">{format(new Date(post.date), 'MMM dd, yyyy')} - {post.readTime}</p>
              <h3 className="text-3xl sm:text-4xl font-semibold">{post.title}</h3>
              <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200 mr-20">{post.excerpt} ...</p>
              <Link href={`/posts/${post.slug}`} className="py-2 flex items-center w-fit underline">
                Read more
              </Link>
            </div>
            <Image src={post.cover} width={400} height={235} className="w-full lg:w-[400px] rounded-lg aspect-[16/10] object-cover object-center" alt={post.title + ' image'} />
          </div>
          ))}
        </div>
        <Link href='/posts' className="w-fit p-3 flex items-center font-medium hover:bg-zinc-200 hover:dark:bg-zinc-700 rounded-lg transition-colors duration-300">
          See all my posts
          <IconArrowNarrowRight className="ml-2" />
        </Link>
      </section>
      {/* Projects Section */}
      <section className='w-full max-w-screen-xl mx-auto px-4 py-12 space-y-8'>
        <div className="space-y-1.5">
          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">Projects</h2>
          <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">List of projects that I am proud of.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
          {latestProjects.map((project: Project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link href='/projects' className="w-fit p-3 flex items-center font-medium hover:bg-zinc-200 hover:dark:bg-zinc-700 rounded-lg transition-colors duration-300">
          See all my projects
          <IconArrowNarrowRight className="ml-2" />
        </Link>
      </section>
      {/* Reading List Section */}
      <section className='w-full max-w-screen-xl mx-auto px-4 py-12 space-y-8'>
        <div className="space-y-1.5">
          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">Reading List</h2>
          <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">My curated collection of bookmarks for useful resources.</p>
        </div>
        <div className="space-y-6">
          {latestReadingLists.map((reading: Reading) => (
            <ReadingListCard key={reading.link} reading={reading} />
          ))}
        </div>
        <Link href='reading-list' className="w-fit p-3 flex items-center font-medium hover:bg-zinc-200 hover:dark:bg-zinc-700 rounded-lg transition-colors duration-300">
          View all bookmarks
          <IconArrowNarrowRight className="ml-2" />
        </Link>
      </section>
      {/* Cheatsheet Section */}
      <section className='w-full max-w-screen-xl mx-auto px-4 py-12 space-y-8'>
        <div className="space-y-1.5">
          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">Cheatsheet</h2>
          <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">I’ve learned a lot of things, but I have forgotten a lot.</p>
        </div>
        <CheatsheetCard title='Latests' cheatsheets={latestCheatsheets} />
        <Link href='/cheatsheet' className="w-fit p-3 flex items-center font-medium hover:bg-zinc-200 hover:dark:bg-zinc-700 rounded-lg transition-colors duration-300">
          View all cheatsheet
          <IconArrowNarrowRight className="ml-2" />
        </Link>
      </section>
    </div>
  )
}


Home.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)