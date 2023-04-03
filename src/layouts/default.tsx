import React from "react"
import Navbar from "~/components/Page/Navbar"
import Footer from "~/components/Page/Footer"

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="relative font-rubik antialiased w-full min-h-screen duration-300 transition text-primary dark:text-slate-50 bg-white dark:bg-primary">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}