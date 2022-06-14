import '../styles/globals.css';
import '../styles/app.css';
import '../styles/custom.css';

import Head from 'next/head';

import Layout from "../components/layout/Layout";
import "animate.css/animate.min.css";
import 'font-awesome/css/font-awesome.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" ></meta>
          <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
          <link href='https://fonts.googleapis.com/css?family=Outfit' rel='stylesheet'></link>
          <link rel="shortcut icon" href="/favicon.png"></link>
          <title>Solarity</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
