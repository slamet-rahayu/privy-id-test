/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import '../styles/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/reset.css';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Privy.id Test</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
