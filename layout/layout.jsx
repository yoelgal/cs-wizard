import React from 'react';
import Head from "next/head";
import Script from "next/script";
import {NextSeo} from "next-seo";

function Layout({children, title = "CS Wizard"}) {
    return (
        <div>
            {/*<Script async*/}
            {/*        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8232883373255094"*/}
            {/*        crossorigin="anonymous"></Script>*/}
            {/* Google Analytics */}
            <Head>
                <link rel="shortcut icon" href={"../../public/favicon.ico"}/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="author" content="Yoel Gal"/>
                <title>{title}</title>
            </Head>
            <NextSeo
                title="CS Wizard"
                description="This website is a revision tool to aid students who study A-level computer science"
                openGraph={{
                    title: 'CS Wizard',
                    description: "This website is a revision tool to aid students who study A-level computer science",
                    url: 'https://cs-wizard.vercel.app/',
                    type: 'website'
                }}
            />
            {children}
        </div>
    );
}

export default Layout;