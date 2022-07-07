import 'commons/styles/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {RecoilRoot} from 'recoil';
import {Reset} from 'styled-reset';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Cloth Color Pattern</title>
      </Head>
      <Reset />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
