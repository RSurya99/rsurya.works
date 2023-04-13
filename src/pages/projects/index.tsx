import DefaultLayout from '~/layouts/default'
import { IconBrandGithub } from '@tabler/icons-react'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import { IconLink } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const projects = () => {
  return (
    <section className='w-full max-w-screen-xl mx-auto py-12 space-y-8'>
      <div className="space-y-1.5">
        <h1 className="text-5xl font-semibold leading-tight">Projects</h1>
        <p className="text-lg tracking-wide leading-relaxed text-primary/75 dark:text-slate-50/75">List of projects that I am proud of.</p>
      </div>
      <div className="space-y-6">
        <h2 className="text-4xl font-semibold leading-tight">Latest</h2>
        <div className="grid grid-cols-3 gap-8">
          {[1, 2, 3].map(el => (
            <Link href={`/projects/${el}`} key={el} className="mb-2 bg-primary dark:bg-slate-50/90 p-6 space-y-2 rounded-xl hover:-translate-y-2.5 transition duration-500 cursor-pointer">
              <div className="inline-block p-2 rounded-full bg-zinc-300 dark:bg-zinc-700">
                <Image src="/static/images/project/tereby/logo.png" width={32} height={32} alt="Tereby Project" />
              </div>
              <h4 className="text-2xl font-semibold text-white dark:text-primary leading-tight">Tereby</h4>
              <p className="text-white/75 dark:text-primary/75 tracking-wide leading-relaxed">Platform to watch 100+ Television Channel worldwide for free.</p>
              <div className="pt-6 flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="px-2 py-1 rounded-full bg-white dark:bg-primary text-primary/75 dark:text-slate-50/75">VueJS</div>
                  <div className="px-2 py-1 rounded-full bg-white dark:bg-primary text-primary/75 dark:text-slate-50/75">TailwindCSS</div>
                </div>
                <div className="flex space-x-2 text-white dark:text-primary">
                  <div><IconLink /></div>
                  <div><IconBrandGithub /></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="text-4xl font-semibold leading-tight">Website</h2>
        <div className="grid grid-cols-3 gap-8">
          {[1, 2, 3].map(el => (
            <Link href={`/projects/${el}`} key={el} className="mb-2 bg-primary dark:bg-slate-50/90 p-6 space-y-2 rounded-xl hover:-translate-y-2.5 transition duration-500 cursor-pointer">
              <div className="inline-block p-2 rounded-full bg-zinc-300 dark:bg-zinc-700">
                <Image src="/static/images/project/tereby/logo.png" width={32} height={32} alt="Tereby Project" />
              </div>
              <h4 className="text-2xl font-semibold text-white dark:text-primary leading-tight">Tereby</h4>
              <p className="text-white/75 dark:text-primary/75 tracking-wide leading-relaxed">Platform to watch 100+ Television Channel worldwide for free.</p>
              <div className="pt-6 flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="px-2 py-1 rounded-full bg-white dark:bg-primary text-primary/75 dark:text-slate-50/75">VueJS</div>
                  <div className="px-2 py-1 rounded-full bg-white dark:bg-primary text-primary/75 dark:text-slate-50/75">TailwindCSS</div>
                </div>
                <div className="flex space-x-2 text-white dark:text-primary">
                  <div><IconLink /></div>
                  <div><IconBrandGithub /></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full flex justify-end">
          <button className="p-3 flex items-center font-medium hover:bg-zinc-100 hover:dark:bg-zinc-700 rounded-lg transition-colors duration-300">
            View all website projects
            <IconArrowNarrowRight className="ml-2" />
          </button>
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="text-4xl font-semibold leading-tight">Starter Template</h2>
        <div className="grid grid-cols-3 gap-8">
          {[1, 2, 3].map(el => (
            <Link href={`/projects/${el}`} key={el} className="mb-2 bg-primary dark:bg-slate-50/90 p-6 space-y-2 rounded-xl hover:-translate-y-2.5 transition duration-500 cursor-pointer">
              <div className="inline-block p-2 rounded-full bg-zinc-300 dark:bg-zinc-700">
                <Image src="/static/images/project/tereby/logo.png" width={32} height={32} alt="Tereby Project" />
              </div>
              <h4 className="text-2xl font-semibold text-white dark:text-primary leading-tight">Tereby</h4>
              <p className="text-white/75 dark:text-primary/75 tracking-wide leading-relaxed">Platform to watch 100+ Television Channel worldwide for free.</p>
              <div className="pt-6 flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="px-2 py-1 rounded-full bg-white dark:bg-primary text-primary/75 dark:text-slate-50/75">VueJS</div>
                  <div className="px-2 py-1 rounded-full bg-white dark:bg-primary text-primary/75 dark:text-slate-50/75">TailwindCSS</div>
                </div>
                <div className="flex space-x-2 text-white dark:text-primary">
                  <div><IconLink /></div>
                  <div><IconBrandGithub /></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full flex justify-end">
          <button className="p-3 flex items-center font-medium hover:bg-zinc-100 hover:dark:bg-zinc-700 rounded-lg transition-colors duration-300">
            View all starter template projects
            <IconArrowNarrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  )
}


projects.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)
export default projects