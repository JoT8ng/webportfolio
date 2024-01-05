import '../styles/main.css'
import Head from 'next/head'
import { ThemeProvider } from '../context/ThemeProvider'


export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Jocelyn Tang Web Development Portfolio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta property="og:type" content="web application"/>
                <meta property="og:title" content="Jocelyn Tang Web Development Portfolio" />
                <meta 
                property="og:description"
                content="I create beautiful and robust web applications with a profound understanding of the importance of client and user requirements at the core of every successful project." 
                />
                <meta
                name="description"
                content="I create beautiful and robust web applications with a profound understanding of the importance of client and user requirements at the core of every successful project."
                />
                <meta property="og:image" content="%PUBLIC_URL%/Preview.png"/>
            </Head>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
  }