import React from 'react'
import Link from "next/link";
import { IconFile } from "@tabler/icons-react";
import type { Cheatsheet } from '~/types/cheatsheet';

type Props = {
  cheatsheets: Cheatsheet[],
  title: string
}

const CheatsheetCard = ({ cheatsheets, title }: Props) => {
  return (
    <div>
      <div className="inline-block p-2.5 bg-primary dark:bg-zinc-200 text-white dark:text-primary rounded-tr-lg rounded-tl-lg">~/{title}</div>
      <div className="border border-primary dark:border-zinc-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1 p-2">
        {cheatsheets.map((cheatsheet: Cheatsheet) => (
          <Link key={cheatsheet.slug} href={`/cheatsheet/${cheatsheet.slug}`} className="px-3 py-2 flex items-center hover:bg-zinc-100 hover:dark:bg-zinc-700 cursor-pointer">
            <IconFile className="mr-2" />
            {cheatsheet.slug}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CheatsheetCard