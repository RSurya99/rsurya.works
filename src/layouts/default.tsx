import React from "react"
import Navbar from "~/components/Page/Navbar"

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="font-rubik antialiased w-full min-h-screen duration-300 transition text-primary dark:text-slate-50 bg-white dark:bg-primary">
      <Navbar />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  )
}