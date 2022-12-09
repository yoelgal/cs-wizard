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


    return (
        <>
            {/*<h1>Hello</h1>*/}
            <p>The current file num is: {paths[id]}</p>
            <iframe src={`https://docdro.id/ImuNldF`} width="100%" height={iframeHeight}
                    style={{maxHeight: `${iframeHeight}px`}}></iframe>
        </>
    )
}

export default MyComponent
