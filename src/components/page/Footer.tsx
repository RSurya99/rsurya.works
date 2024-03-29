import React from 'react'
import Link from 'next/link'
import { IconChevronRight } from '@tabler/icons-react'
import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter()
  // function to go back to root 
  const goBack = () => {
    // const path = router.pathname.split('/')
    // path.pop()
    // router.push(path.join('/') || '/')
    router.back()
  }

  const smallWidthRoutes = ['/projects/[id]', '/posts/[id]', '/cheatsheet/[id]', '/wiki/[id]', '/reading-list/[id]']

  const isRoutesInclude = (path: string) => {
    const splittedPath = path.split('/')
    if(splittedPath.length >= 3 && ['cheatsheet'].includes(splittedPath[1])){
      return true
    }
    if(splittedPath.length >= 3 && ['projects'].includes(splittedPath[1])){
      return true
    }
    if(splittedPath.length >= 3 && ['posts'].includes(splittedPath[1])){
      if(router.query?.category){
        return false
      }
      return true
    }
    return smallWidthRoutes.includes(path)
  }

  return (
    <footer className="max-w-screen-xl mx-auto pb-4 sm:pb-6 space-y-4 sm:space-y-6 text-sm sm:text-base">
      {router.pathname !== '/' && (
        <div className={`w-full mx-auto${isRoutesInclude(router.pathname) ? ' max-w-5xl' : ''}`}>
          <button onClick={goBack} className='px-4 flex items-center font-medium text-primary-300 dark:text-zinc-200 hover:text-primary hover:dark:text-zinc-50 hover:underline transition-colors duration-300'>
            <IconChevronRight size={20} />
            <span>cd ..</span>
          </button>
        </div>
      )}
      <hr className="bg-primary-300" />
      <div className="px-4 flex flex-col sm:flex-row gap-y-2.5 sm:gap-y-0 items-center sm:items-start sm:justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/reading-list" className="font-medium text-primary-300 dark:text-zinc-200 hover:text-primary hover:dark:text-zinc-50 transition-colors duration-300">/reading-list</Link>
          <Link href="/cheatsheet" className="font-medium text-primary-300 dark:text-zinc-200 hover:text-primary hover:dark:text-zinc-50 transition-colors duration-300">/cheatsheet</Link>
          <Link href="/wiki" className="font-medium text-primary-300 dark:text-zinc-200 hover:text-primary hover:dark:text-zinc-50 transition-colors duration-300">/wiki</Link>
        </div>
        <div className="flex items-center space-x-8">
          <a href="https://github.com/rsurya99" target='_blank' className="font-medium border-b-2 border-transparent hover:border-primary transition-colors duration-300">Github</a>
          <a href="https://twitter.com/rsurya99" target='_blank' className="font-medium border-b-2 border-transparent hover:border-primary transition-colors duration-300">Twitter</a>
          <a href="https://www.linkedin.com/in/rsurya99" target='_blank' className="font-medium border-b-2 border-transparent hover:border-primary transition-colors duration-300">Linkedin</a>
        </div>
      </div>
      <hr className="block sm:hidden bg-primary-300" />
      <div className="px-4 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-y-2.5 sm:gap-y-0">
        <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/' target='_blank' className="font-medium border-b-2 border-transparent hover:border-primary transition-colors duration-300">CC BY-NC-SA 4.0</a>
        <span className="font-medium">&copy; 2024 - Present. Rafli Surya Pratama</span>
      </div>
    </footer>
  )
}

export default Footer