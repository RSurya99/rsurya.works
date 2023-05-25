import '~/assets/css/app.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from "next-themes"
import DefaultLayout from '~/layouts/default'
import { useEffect, useState } from 'react'
import { analytics } from '~/utils/firebase'
import { useRouter } from 'next/router'
import { SidebarProvider } from '~/contexts/SidebarContext'
import { capitalize } from 'lodash'

type Page = {
  getLayout?: () => React.ReactNode,
  layout?: React.ComponentType
}

type Props = AppProps & {
  Component: Page
}

export default function App({ Component, pageProps }: Props) {
  const router = useRouter()
  const [routeName, setRouteName] = useState<string>('Home')

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      analytics();
    }
  }, [])

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const logEvent = (url: any) => {
        analytics().setCurrentScreen(url);
        analytics().logEvent('screen_view');
      };

      router.events.on('routeChangeComplete', logEvent);
      //For First Page
      logEvent(window.location.pathname);

      //Remvove Event Listener after un-mount
      return () => {
        router.events.off('routeChangeComplete', logEvent);
      };
    }
  }, []);

  useEffect(() => {
    console.log('router', router)
    if(router.pathname !== '/') {
      setRouteName(capitalize(router.pathname.split('/')[1]))
    }else{
      setRouteName('Home')
    }
  }, [router])

  return (
    <>
      <Head>
        <title>{routeName} | RSurya99 - Rafli Surya Pratama Portfolio</title>
        <meta name="description" content="Rafli Surya Pratama (@RSurya99) Personal Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider attribute="class">
        <SidebarProvider>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </SidebarProvider>
      </ThemeProvider>
    </>
  )
}

App.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)
