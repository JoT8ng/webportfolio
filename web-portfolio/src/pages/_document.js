import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main className="flex min-h-screen flex-col items-center justify-between p-24" />
        <NextScript />
      </body>
    </Html>
  )
}