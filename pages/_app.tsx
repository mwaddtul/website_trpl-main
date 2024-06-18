import type { AppProps } from 'next/app'

import { AuthProvider, SaasProvider } from '@saas-ui/react'
import { Layout } from 'components/layout'
import 'style/terminal.css'
import 'style/Home.module.css'

import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  const { announcement, header, footer } = pageProps

  return (
    <SaasProvider theme={theme}>
      <AuthProvider>
        <Layout
          announcementProps={announcement}
          headerProps={header}
          footerProps={footer}
        >
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </SaasProvider>
  )
}

export default MyApp
