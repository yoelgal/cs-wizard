import '../styles/globals.css'
import Layout from "../layout/layout";
import {Analytics} from '@vercel/analytics/react';
import Head from "next/head";



function MyApp({Component, pageProps}) {


    return (
        <>
            <Layout>
                <Component {...pageProps} />
                <Analytics></Analytics>
            </Layout>
        </>
)


}

export default MyApp
