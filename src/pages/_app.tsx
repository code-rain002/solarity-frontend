import 'styles/globals.css';
import 'styles/app.css';
import 'styles/custom.css';

import Head from 'next/head';

import "animate.css/animate.min.css";
import 'font-awesome/css/font-awesome.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Solarity</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
