import '~/assets/css/app.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from "next-themes"
import DefaultLayout from '~/layouts/default'

type Page = {
  getLayout?: (page: React.ReactElement) => React.ReactNode,
  layout?: React.ComponentType
}

type Props = AppProps & {
  Component: Page
}

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: any) => page)
  return (
    <>
      <Head>
        <title>Home | RSurya99</title>
        <meta name="description" content="Rafli Surya Pratama Personal Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider attribute="class">
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </>
  )
}

App.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)
