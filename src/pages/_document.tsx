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
          <link rel="apple-touch-icon" sizes="180x180" href="/logos/apple-touch-icon.png"></link>
          <link rel="icon" type="image/png" sizes="32x32" href="/logos/favicon-32x32.png"></link>
          <link rel="icon" type="image/png" sizes="16x16" href="/logos/favicon-16x16.png"></link>
          <link rel="manifest" href="/logos/site.webmanifest"></link>
          <meta name="msapplication-TileColor" content="#da532c" />
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
