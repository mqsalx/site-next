import GlobalStyle from "../src/theme/GlobalStyle.js"
import Head from "next/head"


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={true.toString()}/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wdth,wght@0,75..100,300..800;1,75..100,300..800&display=swap" rel="stylesheet"/>
            </Head>
            <GlobalStyle/>
            <Component {...pageProps} />
        </>
    )
  }

export default MyApp