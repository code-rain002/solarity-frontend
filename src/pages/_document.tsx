import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Solarity" />
          <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
          <link href='https://fonts.googleapis.com/css?family=Outfit' rel='stylesheet'></link>  
          <link rel="shortcut icon" href="/favicon.png"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
