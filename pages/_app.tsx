import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>Next-auth Example app</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
