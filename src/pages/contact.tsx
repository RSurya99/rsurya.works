import { IconBrandLinkedin } from '@tabler/icons-react'
import { IconBrandGithub } from '@tabler/icons-react'
import { IconBrandInstagram } from '@tabler/icons-react'
import { IconBrandTwitter } from '@tabler/icons-react'
import { IconMail } from '@tabler/icons-react'
import React from 'react'
import DefaultLayout from '~/layouts/default'
import Head from 'next/head'

const about = () => {
  return (
    <>
      <Head>
        <title>Contact | RSurya99 - Rafli Surya Pratama Portfolio</title>
        <meta name="description" content="Rafli Surya Pratama (@RSurya99) Personal Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='w-full h-[65vh] max-w-screen-xl mx-auto px-4 py-12 space-y-8'>
        <div className='max-w-5xl space-y-6'>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">Reach me!</h1>
          <ul className="space-y-3">
            <li>
              <a href="mailto:rafli.rfsp@gmail.com" target='_blank' className="flex items-center space-x-2 text-base sm:text-lg underline text-primary dark:text-zinc-200">
                <IconMail className='text-rose-600' />
                <span>rafli.rfsp@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/rsurya99" target='_blank' className="flex items-center space-x-2 text-base sm:text-lg underline text-primary dark:text-zinc-200">
                <IconBrandLinkedin className='text-sky-600' />
                <span>Rafli Surya Pratama</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/rsurya99" target='_blank' className="flex items-center space-x-2 text-base sm:text-lg underline text-primary dark:text-zinc-200">
                <IconBrandGithub />
                <span>RSurya99</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/rsurya99" target='_blank' className="flex items-center space-x-2 text-base sm:text-lg underline text-primary dark:text-zinc-200">
                <IconBrandTwitter className='text-blue-500' />
                <span>RSurya99</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/rsurya99" target='_blank' className="flex items-center space-x-2 text-base sm:text-lg underline text-primary dark:text-zinc-200">
                <IconBrandInstagram className='text-pink-600' />
                <span>RSurya99</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

about.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)

export default about