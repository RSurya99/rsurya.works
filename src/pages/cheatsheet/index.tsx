import DefaultLayout from '~/layouts/default'
import { IconBrandGithub, IconFile } from '@tabler/icons-react'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import { IconSearch } from '@tabler/icons-react'
import { IconLink } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getMapCheatsheetsMeta, getCheatsheetCategories } from '~/lib/cheatsheets'
import { flatten } from 'lodash'
import useOutsideClick from '~/hooks/useClickOutside'

export async function getStaticProps() {
  const cheatsheets = getMapCheatsheetsMeta()
  const categories = getCheatsheetCategories()

  return {
    props: {
      cheatsheets,
      categories
    }
  }
}

const CheatsheetIndex = ({ cheatsheets, categories }: any) => {
  const [search, setSearch] = useState('')
  const [searchModal, setSearchModal] = useState(false)
  const [searchResult, setSearchResult] = useState<any[]>([])

  const handleClickOutside = () => {
    setSearchModal(false)
  }
  
  const ref = useOutsideClick(handleClickOutside)

  useEffect(() => {
    if(search) {
      setSearchModal(true)
    } else {
      setSearchModal(false)
    }

    const mappedCheatsheets = flatten(Object.keys(cheatsheets).map((key) => cheatsheets[key]))
    const result = mappedCheatsheets.filter((cheatsheet: any) => cheatsheet.slug.toLowerCase().includes(search.toLowerCase()))
    setSearchResult(result)
  }, [search])

  const handleSearchFocus = () => {
    if(search) {
      setSearchModal(true)
    }
  }

  return (
    <section className='w-full min-h-[65vh] max-w-screen-xl mx-auto py-12 space-y-8'>
      <div className="flex items-center justify-between">
        <div className="space-y-1.5">
          <h1 className="text-5xl font-semibold leading-tight">Cheatsheet</h1>
          <p className="text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">I&apos;ve learned a lot of things, but I have forgotten a lot.</p>
        </div>
        <div className="relative w-full max-w-lg">
          <div className='relative w-full'>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
              <IconSearch />
            </div>
            <input type="text" ref={ref} onFocus={handleSearchFocus} value={search} onChange={(e) => setSearch(e.target.value)} className='w-full pl-14 pr-5 py-3 text-lg border border-primary rounded-lg focus:outline-none' placeholder='Find Cheatsheet' />
          </div>
          {searchModal && (
          <div className="absolute top-14 left-0 bg-white border border-primary w-full rounded-lg overflow-hidden divide-y divide-zinc-300">
            {searchResult.length > 0 ? 
            searchResult.map((cheatsheet: any) => (
            <Link key={cheatsheet.slug} href={`/cheatsheet/${cheatsheet.slug}`} className="p-2 flex flex-col space-y-1 hover:bg-zinc-300">
              <span className='px-2 py-1 bg-primary text-zinc-50 w-fit text-sm rounded-md'>{cheatsheet.category}</span>
              <div className='text-base'>{cheatsheet.slug}</div>
            </Link>
            ))
            :
            <div className="p-2 flex flex-col space-y-1 hover:bg-zinc-300">
              <div className='text-base'>no cheatsheet available with that name</div>
            </div>
            }
          </div>
          )}
        </div>
      </div>
      <div className="space-y-6">
        {categories.map((el: string) => (
        <div key={el}>
          <a href={`#${el}`} className="inline-block p-2.5 bg-primary dark:bg-zinc-200 text-white dark:text-primary rounded-tr-lg rounded-tl-lg">~/{el}</a>
          <div className="border border-primary dark:border-zinc-200 grid grid-cols-3 gap-x-6 gap-y-1 p-2">
            {cheatsheets[el].map((cheatsheet: any) => (
              <Link key={cheatsheet.slug} href={`/cheatsheet/${cheatsheet.slug}`} className="px-3 py-2 flex items-center hover:bg-zinc-100 hover:dark:bg-zinc-700 cursor-pointer">
                <IconFile className="mr-2" />
                {cheatsheet.slug}
              </Link>
            ))}
          </div>
        </div>
        ))}
      </div>
    </section>
  )
}


CheatsheetIndex.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)
export default CheatsheetIndex