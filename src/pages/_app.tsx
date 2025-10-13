import Head from 'next/head'
// import Nav from '@/components/Nav'
import type { AppProps } from 'next/app'
import "../styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>The Skin Center</title>
                <meta name="description" content="A salon management app built with Next.js and Square APIs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}