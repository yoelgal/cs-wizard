import {Document} from 'react-pdf'
import {useRouter} from 'next/router';

const MyComponent = () => {
    const router = useRouter();

    // the URL of the PDF file
    // const pdfUrl = 'https://www.mathsgenie.co.uk/resources/as-pure-algebraic-expressions.pdf'

    const id = router.query.id
    return (
        <>
            {/*<h1>Hello</h1>*/}
            {/*<p>The current file id is: {router.query.id}</p>*/}
            <iframe src={`https://p1questions1.tiiny.site/`} width="100%" height="1000px"></iframe>
        </>
    )
}

export default MyComponent
