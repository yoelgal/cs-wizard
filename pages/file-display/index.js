import {Document} from 'react-pdf'
import {useRouter} from 'next/router';
import React, {useState, useLayoutEffect} from 'react';
import {paths} from "../../utils/utils"


const MyComponent = () => {
    const router = useRouter();
    const [iframeHeight, setIframeHeight] = useState(0);

    useLayoutEffect(() => {
        setIframeHeight(window.innerHeight);
    }, []);

    // the URL of the PDF file
    // const pdfUrl = 'https://www.mathsgenie.co.uk/resources/as-pure-algebraic-expressions.pdf'

    const id = router.query.id
    console.log(typeof id)
    if (id.includes('p3')) {
        return (
            <>
                <p>Sorry, this file is currently unavailable</p>
            </>
        )
    } else {
        return (
            <>
                {/*<p>The current file num is: {paths[id]}</p>*/}
                <iframe src={`${paths[id]}`} width="100%" height={iframeHeight}
                        style={{maxHeight: `${iframeHeight}px`}}></iframe>

                {/*<iframe src={`https://drive.google.com/file/d/1n5dD1zhhZUrRoZJXmAvj4a4YjSDmv85v/preview`} width="640" height="480"*/}
                {/*        style={{maxHeight: `${iframeHeight}px`}}></iframe>*/}
            </>
        )
    }

}

export default MyComponent
