import Image from 'next/image'
// import { useTheme } from 'next-themes'

const ResponsiveImage = (props: any) => {
  // const { resolvedTheme, setTheme } = useTheme()
  const src = props.src + (false ? '-dark.png' : '.png')

  return (
    <span className="my-12 block">
      <Image
        src={src}
        alt={props.alt}
        title={props.title}
        width={600}
        height={350}
        layout="responsive"
        objectFit="contain"
        objectPosition="center"
        className="rounded-md"
      />
    </span>
  )
}

export default ResponsiveImage
