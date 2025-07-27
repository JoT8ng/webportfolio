import '../styles/main.css'
import Head from 'next/head'
import { ThemeProvider } from '../context/ThemeProvider'


export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Jocelyn Tang Geospatial Analysis and Web Development Portfolio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta property="og:type" content="web application"/>
                <meta property="og:title" content="Jocelyn Tang GIS Analysis and Web Development Portfolio" />
                <meta 
                property="og:description"
                content="GIS Data Analyst and Web Developer bridging spatial and digital worlds. Passionate about software development for AEC & climate solutions." 
                />
                <meta
                name="description"
                content="GIS Data Analyst and Web Developer bridging spatial and digital worlds. Passionate about software development for AEC & climate solutions."
                />
                <meta property="og:image" content="%PUBLIC_URL%/Preview.png"/>
            </Head>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
  }