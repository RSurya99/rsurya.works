import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  name: string
  path: string
}

const MenuItem = ({ name, path }: Props) => {
  const router = useRouter()
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (router.pathname === path) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [router.pathname])
  
  const activeClass = active ? 'text-primary' : 'text-primary-300'
  return (
    <li>
      <Link 
        className={`relative text-lg font-medium ${activeClass}`}
        href={path}
      >
        {name}
      </Link>
    </li>
  )
}

export default MenuItem