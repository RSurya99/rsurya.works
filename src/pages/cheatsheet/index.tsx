import DefaultLayout from '~/layouts/default'
import { IconSearch } from '@tabler/icons-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getMapCheatsheetsMeta, getCheatsheetCategories } from '~/lib/cheatsheets'
import { flatten } from 'lodash'
import useOutsideClick from '~/hooks/useClickOutside'
import CheatsheetCard from '~/components/base/CheatsheetCard'

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
    <section className='w-full min-h-[65vh] max-w-screen-xl mx-auto px-4 py-12 space-y-8'>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-4 lg:gap-y-0">
        <div className="space-y-1.5">
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">Cheatsheet</h1>
          <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">I&apos;ve learned a lot of things, but I have forgotten a lot.</p>
        </div>
        <div className="relative w-full lg:max-w-md xl:max-w-lg">
          <div className='relative w-full'>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
              <IconSearch />
            </div>
            <input type="text" ref={ref} onFocus={handleSearchFocus} value={search} onChange={(e) => setSearch(e.target.value)} className='w-full pl-14 pr-5 py-3 text-base sm:text-lg border border-primary rounded-lg focus:outline-none' placeholder='Find Cheatsheet' />
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
          <CheatsheetCard key={el} title={el} cheatsheets={cheatsheets[el]}  />
        ))}
      </div>
    </section>
  )
}


CheatsheetIndex.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)
export default CheatsheetIndex