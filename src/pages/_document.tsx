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

          {/* <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          /> */}
          {/* <link rel="manifest" href="/site.webmanifest" /> */}
          {/* <link
            href="http://fonts.cdnfonts.com/css/sf-pro-display"
            rel="stylesheet"
          /> */}
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
