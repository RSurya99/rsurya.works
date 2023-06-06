import React from 'react'
import ReactLogo from './ReactLogo'
import HTMLLogo from './HTMLLogo'
import FigmaLogo from './FigmaLogo'
import TailwindCSSLogo from './TailwindCSSLogo'
import GolangLogo from './GolangLogo'
import VueLogo from './VueLogo'
import NuxtLogo from './NuxtLogo'
import JavascriptLogo from './JavascriptLogo'
import TypescriptLogo from './TypescriptLogo'
import SASSLogo from './SASSLogo'
import AlpineLogo from './AlpineLogo'
import PHPLogo from './PHPLogo'
import LaravelLogo from './LaravelLogo'
import NextLogo from './NextLogo'
import CSSLogo from './CSSLogo'
import MDXLogo from './MDXLogo'

type Props = {
  componentName: string
  [x: string]: any
}

type ComponentsMap = {
  [x: string]: React.FC
}

const BaseLogo = ({ componentName, ...attributes }: Props) => {
  const componentsMap: ComponentsMap = { 
    React: ReactLogo, 
    HTML: HTMLLogo, 
    Figma: FigmaLogo, 
    TailwindCSS: TailwindCSSLogo, 
    Golang: GolangLogo,
    VueJS: VueLogo,
    NuxtJS: NuxtLogo,
    NextJS: NextLogo,
    Javascript: JavascriptLogo,
    Typescript: TypescriptLogo,
    SASS: SASSLogo,
    Alpine: AlpineLogo,
    PHP: PHPLogo,
    Laravel: LaravelLogo,
    CSS: CSSLogo,
    MDX: MDXLogo
  }
  const ComponentName: React.FC = componentsMap[componentName] || ReactLogo
  return (
    <ComponentName {...attributes} />
  )
}

export default BaseLogo