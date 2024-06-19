import Layout from '@/components/layout'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DeskPro</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
