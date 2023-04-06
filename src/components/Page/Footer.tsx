import React from 'react'
import Link from 'next/link'
import { IconChevronRight } from '@tabler/icons-react'
import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter()
  // function to go back to root 
  const goBack = () => {
    const path = router.pathname.split('/')
    path.pop()
    router.push(path.join('/') || '/')
  }
  return (
    <footer className="max-w-screen-xl mx-auto pb-6 space-y-6">
      {router.pathname !== '/' && (
        <button onClick={goBack} className='flex items-center font-medium text-primary/75 dark:text-slate-50/75 hover:text-primary hover:dark:text-slate-50 transition-colors duration-300'>
          <IconChevronRight size={20} />
          <span>cd ..</span>
        </button>
      )}
      <hr className="bg-primary/50" />
      <div className="flex justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/reading-list" className="font-medium text-primary/75 dark:text-slate-50/75 hover:text-primary hover:dark:text-slate-50 transition-colors duration-300">/reading-list</Link>
          <Link href="/cheatsheet" className="font-medium text-primary/75 dark:text-slate-50/75 hover:text-primary hover:dark:text-slate-50 transition-colors duration-300">/cheatsheet</Link>
          <Link href="/wiki" className="font-medium text-primary/75 dark:text-slate-50/75 hover:text-primary hover:dark:text-slate-50 transition-colors duration-300">/wiki</Link>
        </div>
        <div className="flex items-center space-x-8">
          <a href="https://github.com/rsurya99" target='_blank' className="font-medium border-b-2 border-transparent hover:border-primary transition-colors duration-300">Github</a>
          <a href="https://twitter.com/rsurya99" target='_blank' className="font-medium border-b-2 border-transparent hover:border-primary transition-colors duration-300">Twitter</a>
          <a href="https://www.linkedin.com/in/rsurya99" target='_blank' className="font-medium border-b-2 border-transparent hover:border-primary transition-colors duration-300">Linkedin</a>
        </div>
      </div>
      <div className="flex justify-between">
        <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/' target='_blank' className="font-medium border-b-2 border-transparent hover:border-primary transition-colors duration-300">CC BY-NC-SA 4.0</a>
        <span className="font-medium">&copy; 2023 - Present. Rafli Surya Pratama</span>
      </div>
    </footer>
  )
}

export default Footer