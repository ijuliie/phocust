import Head from 'next/head'
// import Nav from '@/components/Nav'
import type { AppProps } from 'next/app'
import "../styles/globals.css"
import Nav from '@/components/Nav'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Phocust Official Website</title>
                {/* <meta name="description" content="A salon management app built with Next.js and Square APIs" /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Nav />
            <Component {...pageProps} />
        </>
    )
}