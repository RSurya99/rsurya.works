import React from 'react'
import { IconArrowNarrowRight } from '@tabler/icons-react'

const ReadingListCard = ({ reading }: any) => {
  return (
    <a href={reading.link} target='_blank' key={reading.link} className="w-full inline-block group rounded-lg bg-zinc-200 dark:bg-zinc-700 overflow-hidden cursor-pointer">
      <div className="px-4 py-3 flex items-center justify-between sm:justify-normal">
        <div className="text-xl sm:text-2xl font-semibold group-hover:underline">{reading.title}</div>
        <IconArrowNarrowRight className="ml-3" />
      </div>
      <div className="px-4 py-3 bg-primary dark:bg-zinc-200 text-sm sm:text-base text-zinc-200 dark:text-primary-300">
        {reading.domain}
      </div>
    </a>
  )
}

export default ReadingListCard