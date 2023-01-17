import '../styles/globals.css'
import Layout from "../layout/layout";
import {Analytics} from '@vercel/analytics/react';


function MyApp({Component, pageProps}) {


    return(
            <Layout>
                <Component {...pageProps} />
                <Analytics></Analytics>
            </Layout>
        )


}

export default MyApp
