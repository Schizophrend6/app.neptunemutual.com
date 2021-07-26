import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import PageWrapper from '../layouts/PageWrapper'
import { getLibrary } from '../utils/web3-react'
import warning from '../utils/console-warning'
import ErrorBoundary from '../components/ErrorBoundary'
import { LanguageProvider } from '../config/i18n'
import { getMetadata } from '../utils/metadata'

import '../styles/globals.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/perspective.css'

const MyApp = ({ Component, pageProps }) => {
  useEffect(warning, [])
  const router = useRouter()

  const { title, ogImg, description } = getMetadata(router.pathname)
  return (
    <>
      <ErrorBoundary>
        <Head>
          <title>{title}</title>

          <meta name='description' content={description} />

          <meta property='og:title' content={title} />
          <meta property='og:description' content={description} />
          <meta property='og:image' content={ogImg} />

          <meta name='twitter:title' content={title} />
          <meta name='twitter:description' content={description} />
          <meta name='twitter:image' content={ogImg} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@neptunemutual' />
        </Head>
        <Web3ReactProvider getLibrary={getLibrary}>
          <LanguageProvider>
            <PageWrapper>
              <Component {...pageProps} />
            </PageWrapper>
          </LanguageProvider>
        </Web3ReactProvider>
      </ErrorBoundary>
    </>
  )
}

export default MyApp
