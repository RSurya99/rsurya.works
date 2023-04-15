import React from 'react'
import MenuItem from './MenuItem'

const Menu = () => {
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
      path: '/blog'
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
    <ul className='flex items-center space-x-8'>
      {menuItems.map((item) => (
        <MenuItem name={item.name} path={item.path} key={item.path} />
      ))}
    </ul>
  )
}

export default Menu