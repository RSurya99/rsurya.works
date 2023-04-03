import React from 'react'
import Link from 'next/link'
import Logo from '~/components/Logo'
import NavMenu from './NavMenu'
import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin, IconMoon } from '@tabler/icons-react'
import { useTheme } from "next-themes";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  
  return (
    <header className='sticky top-0 py-6 backdrop-filter backdrop-blur-md bg-white/80 dark:bg-primary/80 transition duration-300'>
      <nav className='max-w-screen-xl mx-auto flex items-center justify-between'>
        <div className="flex items-center space-x-12">
          <Link href="/" className='flex items-center space-x-2'>
            <Logo className='w-10 h-10 rounded' />
            <span className='text-2xl font-medium'>RSURYA99.</span>
          </Link>
          <NavMenu></NavMenu>
        </div>
        <ul className="flex items-center space-x-8">
          <li>
            <a href="https://github.com/rsurya99" target='_blank'><IconBrandGithub /></a>
          </li>
          <li>
            <a href="https://twitter.com/rsurya99" target='_blank'><IconBrandTwitter /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rsurya99" target='_blank'><IconBrandLinkedin /></a>
          </li>
          <li>
            <button onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}>
              <IconMoon />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar