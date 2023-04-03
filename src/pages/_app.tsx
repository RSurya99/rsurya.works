import '~/assets/css/app.css'
import type { AppProps } from 'next/app'
import Layout from '~/layouts/default'
import Head from 'next/head'
import { ThemeProvider } from "next-themes"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Home | RSurya99</title>
        <meta name="description" content="Rafli Surya Pratama Personal Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
