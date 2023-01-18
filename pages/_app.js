import '../styles/globals.css'
import Layout from "../layout/layout";
import {Analytics} from '@vercel/analytics/react';
import Head from "next/head";



function MyApp({Component, pageProps}) {


    return (
        <>
            <Head>
                <link rel="shortcut icon" href="../public/favicon.ico"/>
                <meta name="google-site-verification" content="EAce2thRJHwplmT0hGDyRx2WNan_yezs7cTbbCUtrjQ" />
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="author" content="Yoel Gal"/>
                <title>CS Wizard</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
                <Analytics></Analytics>
            </Layout>
        </>
)


}

export default MyApp
