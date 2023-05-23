import React from "react"
import Navbar from "~/components/page/Navbar"
import Footer from "~/components/page/Footer"
import Sidebar from "~/components/page/Sidebar"

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="relative font-rubik antialiased w-full min-h-screen duration-300 transition text-primary dark:text-zinc-50 bg-white dark:bg-primary">
      <Navbar />
      <Sidebar />
      <main className="max-w-screen-xl mx-auto">{children}</main>
      <Footer />
    </div>
  )
}