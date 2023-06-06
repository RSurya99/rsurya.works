import React from 'react'
import { useTheme } from "next-themes";

type Props = {
  className: string
}

const Logo = ({ className }: Props) => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <svg className={`${currentTheme === 'dark' ? 'text-zinc-700' : 'text-primary'} ${className}`} width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="350" height="350" rx="10" fill="currentColor" fillOpacity="0.9"/>
      <path d="M255.159 90.8182V115.193H88.0795V90.8182H255.159ZM139.489 90.8182V261H113.341V90.8182H139.489ZM204.636 90.8182H230.784V218.898C230.784 224.216 231.744 228.205 233.665 230.864C235.659 233.523 238.097 235.295 240.977 236.182C243.932 237.068 246.886 237.511 249.841 237.511C252.278 237.511 254.753 237.253 257.264 236.736C259.849 236.219 261.807 235.739 263.136 235.295V259.67C260.92 260.335 257.929 261.074 254.162 261.886C250.395 262.773 245.852 263.216 240.534 263.216C230.119 263.216 221.514 259.929 214.719 253.355C207.997 246.781 204.636 235.295 204.636 218.898V90.8182Z" fill="white"/>
    </svg>
  )
}

export default Logo