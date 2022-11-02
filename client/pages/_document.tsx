import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props: any) =>
            sheet.collectStyles(<App {...props} />), 
        });

        const initialProps = await Document.getInitialProps(ctx);
        return {
        ...initialProps,
        styles: (
            <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            </>
        ),
        };
    } finally {
        
    }
    }
  render() {
    return (
      <Html>
       <Head>
        <title>데일리 메모장</title>
        <meta name="description" content="매일 메모하세요!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
 