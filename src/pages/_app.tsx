import '~/assets/css/app.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from "next-themes"
import DefaultLayout from '~/layouts/default'
import { useEffect } from 'react'
import { analytics } from '~/utils/firebase'
import { useRouter } from 'next/router'
import { SidebarProvider } from '~/contexts/SidebarContext'

type Page = {
  getLayout?: (page: React.ReactElement) => React.ReactNode,
  layout?: React.ComponentType
}

type Props = AppProps & {
  Component: Page
}

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: any) => page)
  const router = useRouter()

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

  return (
    <>
      <Head>
        <title>Home | RSurya99</title>
        <meta name="description" content="Rafli Surya Pratama Personal Site" />
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
