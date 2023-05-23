import React, { useContext } from 'react'
import Link from 'next/link'
import Logo from '~/components/utils/Logo'
import NavMenu from './NavMenu'
import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin, IconMoon } from '@tabler/icons-react'
import { useTheme } from "next-themes";
import { IconMenu2 } from '@tabler/icons-react'
import { SidebarContext } from '~/contexts/SidebarContext'

const Navbar = () => {
  const { setOpen } = useContext(SidebarContext)
  const { theme, setTheme } = useTheme();
  
  return (
    <header className='sticky top-0 px-4 py-6 backdrop-filter backdrop-blur-md bg-white/80 dark:bg-primary/80 z-50 transition duration-300'>
      <nav className='max-w-screen-xl mx-auto flex items-center justify-between'>
        <div className="flex items-center gap-x-4 lg:gap-x-12">
          <IconMenu2 onClick={() => setOpen((open) => !open)} className='block lg:hidden' />
          <Link href="/" className='flex items-center space-x-2'>
            <Logo className='w-10 h-10 rounded' />
            <span className='text-2xl font-medium'>RSURYA99.</span>
          </Link>
          <NavMenu></NavMenu>
        </div>
        <ul className="flex items-center space-x-8">
          <li className='hidden sm:block'>
            <a href="https://github.com/rsurya99" target='_blank'><IconBrandGithub /></a>
          </li>
          <li className='hidden sm:block'>
            <a href="https://twitter.com/rsurya99" target='_blank'><IconBrandTwitter /></a>
          </li>
          <li className='hidden sm:block'>
            <a href="https://www.linkedin.com/in/rsurya99" target='_blank'><IconBrandLinkedin /></a>
          </li>
          <li>
            <a onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")} className='cursor-pointer'>
              <IconMoon />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar