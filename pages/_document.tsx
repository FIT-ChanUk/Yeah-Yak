import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
    // static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx)

    //     console.log('getInitialProps', ctx);
    //     console.log('initialProps', initialProps);


    //     return { ...initialProps }
    // }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Nanum+Gothic:wght@700&family=Nanum+Myeongjo&family=Nanum+Myeongjo:wght@700&display=swap" rel="stylesheet" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document;