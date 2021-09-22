/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import userServices from '../services/user';
import '../styles/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/reset.css';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const path = router.asPath.split('?')[0];
  const publicPath = ['/login', '/register'];
  useEffect(() => {
    const user = userServices.getUser();
    if (!user && !publicPath.includes(path)) {
      router.replace('/login');
    } else {
      router.replace('/information/form');
    }
  }, []);
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
