import Link from 'next/link'
import { useEffect } from 'react'

const CustomLink = (props: any) => {
  const link = props.href
  const isInternalLink = link && (link.startsWith('/') || link.startsWith('#'))

  useEffect(() => {
    console.log('link props', props)
  })

  if (isInternalLink) {
    return (
      <Link href={link} {...props} className='no-underline'>
        {props.children}
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export default CustomLink
