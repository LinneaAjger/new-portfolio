import React from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import {ThemeProvider} from 'styled-components';

const theme = {
  colors: {
    header:'#4d4dec',
    body: '#000000',
    footer: '#b0636321'
  } 
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
  <>
  This is _app
  <Component {...pageProps} key={router.asPath} />
  </>
  </ThemeProvider>
  )
}

export default MyApp;
