import React from 'react'
import ReactLogo from './ReactLogo'
import HTMLLogo from './HtmlLogo'
import FigmaLogo from './FigmaLogo'
import TailwindCSSLogo from './TailwindCSSLogo'
import GolangLogo from './GolangLogo'
import VueLogo from './VueLogo'
import NuxtLogo from './NuxtLogo'

const BaseLogo = ({ componentName, ...attributes }: any) => {
  const componentsMap: any = { 
    React: ReactLogo, 
    HTML: HTMLLogo, 
    Figma: FigmaLogo, 
    TailwindCSS: TailwindCSSLogo, 
    Golang: GolangLogo,
    VueJS: VueLogo,
    NuxtJS: NuxtLogo
  }
  const ComponentName: any = componentsMap[componentName] || ReactLogo
  return (
    <ComponentName {...attributes} />
  )
}

export default BaseLogo