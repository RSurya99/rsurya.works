import Image from 'next/image'
import CustomLink from '../utils/CustomLink'
import ResponsiveImage from '../utils/ResponsiveImage'
import BackgroundReading from '../utils/BackgroundReading'

const MDXComponents = {
  a: CustomLink,
  img: ResponsiveImage,
  Image,
  BackgroundReading
}

export default MDXComponents
