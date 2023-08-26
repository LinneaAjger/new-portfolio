import React from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'

const theme: DefaultTheme = {
  colors: {
    primary: '#eea0a0',
    secondary: '#0070f3',
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <Component {...pageProps} key={router.asPath} />
    </ThemeProvider>
  )
}

export default MyApp;
