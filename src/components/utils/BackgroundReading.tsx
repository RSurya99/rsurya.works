import Link from 'next/link'

const BackgroundReading = ({ href, title, children }: any) => {
  const isInternalLink =
    href && (href.startsWith('/') || href.startsWith('#'))

  return (
    <div className="flex max-w-max flex-col gap-1 rounded-md bg-gray-200 bg-opacity-75 px-5 py-4 text-sm dark:bg-gray-600 dark:bg-opacity-20 sm:flex-row sm:gap-4">
      <span className="text-gray-500">{title}</span>
      {isInternalLink ? (
        <Link href={href}>
          {children}
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )}
    </div>
  )
}

export default BackgroundReading
