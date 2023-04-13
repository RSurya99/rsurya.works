import DefaultLayout from '~/layouts/default'
import { IconBrandGithub, IconFile } from '@tabler/icons-react'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import { IconSearch } from '@tabler/icons-react'
import { IconLink } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CheatsheetIndex = () => {
  return (
    <section className='w-full max-w-screen-xl mx-auto py-12 space-y-8'>
      <div className="flex items-center justify-between">
        <div className="space-y-1.5">
          <h1 className="text-5xl font-semibold leading-tight">Cheatsheet</h1>
          <p className="text-lg tracking-wide leading-relaxed text-primary/75 dark:text-slate-50/75">I&apos;ve learned a lot of things, but I have forgotten a lot.</p>
        </div>
        <div className='relative w-full max-w-md'>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
            <IconSearch />
          </div>
          <input type="text" className='w-full pl-14 pr-5 py-3 text-lg border border-primary rounded-lg focus:outline-none' placeholder='Find Cheatsheet' />
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <div className="inline-block p-2.5 bg-primary dark:bg-slate-50/75 text-white dark:text-primary rounded-tr-lg rounded-tl-lg">~/Javascript</div>
          <div className="border border-primary dark:border-slate-50/75 grid grid-cols-6 gap-x-6 gap-y-1 p-2">
            {Array(24).fill('').map((el, i) => i).map(el => (
              <a key={el} className="px-3 py-2 flex items-center hover:bg-zinc-100 hover:dark:bg-zinc-700 cursor-pointer">
                <IconFile className="mr-2" />
                javascript-uuid
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="inline-block p-2.5 bg-primary dark:bg-slate-50/75 text-white dark:text-primary rounded-tr-lg rounded-tl-lg">~/Javascript</div>
          <div className="border border-primary dark:border-slate-50/75 grid grid-cols-6 gap-x-6 gap-y-1 p-2">
            {Array(24).fill('').map((el, i) => i).map(el => (
              <a key={el} className="px-3 py-2 flex items-center hover:bg-zinc-100 hover:dark:bg-zinc-700 cursor-pointer">
                <IconFile className="mr-2" />
                javascript-uuid
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="inline-block p-2.5 bg-primary dark:bg-slate-50/75 text-white dark:text-primary rounded-tr-lg rounded-tl-lg">~/Javascript</div>
          <div className="border border-primary dark:border-slate-50/75 grid grid-cols-6 gap-x-6 gap-y-1 p-2">
            {Array(24).fill('').map((el, i) => i).map(el => (
              <a key={el} className="px-3 py-2 flex items-center hover:bg-zinc-100 hover:dark:bg-zinc-700 cursor-pointer">
                <IconFile className="mr-2" />
                javascript-uuid
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


CheatsheetIndex.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)
export default CheatsheetIndex