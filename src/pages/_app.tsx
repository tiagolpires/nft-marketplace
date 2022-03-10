import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from '../components'
import { NFTProvider } from '../contexts/nfts'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <NFTProvider>
        <Head>
          <title>NFTs Market</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NFTProvider>
    </>
  )
}

export default MyApp
