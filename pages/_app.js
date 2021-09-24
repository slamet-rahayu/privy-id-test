/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import 'font-awesome/css/font-awesome.min.css';
import userServices from '../services/user';
import alertContext from '../context/alert';
import '../styles/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/reset.css';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const path = router.asPath.split('?')[0];
  const publicPath = ['/login', '/register', '/otp-verify'];
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user && !publicPath.includes(path)) {
      router.replace('/login');
    } else if (user && publicPath.includes(path)) {
      router.replace('/information/form');
    }
  }, []);
  const { AlertProvider } = alertContext;
  return (
    <>
      <Head>
        <title>Privy.id Test</title>
      </Head>
      <AlertProvider>
        <Component {...pageProps} />
      </AlertProvider>
    </>
  );
}

export default MyApp;
