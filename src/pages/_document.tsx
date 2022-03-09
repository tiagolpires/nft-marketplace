import { Html, Head, Main, NextScript } from 'next/document'

const Document: React.FC = () => {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="NFTs Marketplace" />
        <link rel="shortcut icon" href="favicon.ico" type="image/png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
