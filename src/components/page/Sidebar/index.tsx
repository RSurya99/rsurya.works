import React, { useContext, useState } from 'react'
import Link
 from 'next/link'
import Logo from '~/components/utils/Logo'
import { IconX } from '@tabler/icons-react'
import MenuItem from './MenuItem'
import { SidebarContext } from '~/contexts/SidebarContext'
import { Transition } from '@headlessui/react';

const Sidebar = () => {
  const { open, setOpen } = useContext(SidebarContext)

  const menuItems = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Blog',
      path: '/posts'
    },
    {
      name: 'Projects',
      path: '/projects'
    },
    {
      name: 'Reach me!',
      path: '/contact'
    }
  ]
  
  return (
    <Transition.Root show={open} as={React.Fragment}>
      <div>
        <div className="fixed h-full w-full z-50 left-0 top-0">
          <div onClick={() => setOpen(!open)} className="fixed h-full w-full left-0 top-0 bg-black bg-opacity-50 z-[-1]"></div>
          <Transition.Child
            as={React.Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="fixed h-full w-80 left-0 top-0 bg-white shadow-lg divide-y divide-y-zinc-300">
              <div className="flex items-center justify-between p-4">
                <Link href="/" className='flex items-center space-x-2'>
                  <Logo className='w-10 h-10 rounded' />
                  <span className='text-2xl font-medium'>RSURYA99.</span>
                </Link>
                <button onClick={() => setOpen(!open)} className="p-2 hover:bg-zinc-100 rounded-md ring-2 ring-transparent focus:ring-zinc-300 ring-offset-2">
                  <IconX size={24} />
                </button>
              </div>
              <div className='p-4'>
                <ul className='flex flex-col gap-y-4'>
                  {menuItems.map((item) => (
                    <MenuItem name={item.name} path={item.path} key={item.path} />
                  ))}
                </ul>
              </div>
            </div>
          </Transition.Child>
        </div>
      </div>
    </Transition.Root>
  )
}

export default Sidebar