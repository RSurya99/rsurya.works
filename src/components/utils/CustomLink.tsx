import Link from 'next/link'

const CustomLink = (props: any) => {
  const link = props.href
  const isInternalLink = link && (link.startsWith('/') || link.startsWith('#'))

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
