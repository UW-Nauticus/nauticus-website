import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';

import Base from '../components/layout/Base';

import theme from '../assets/theme';
import '../utils/icons/font-awesome';
import '../styles/globals.css';
import CenteredFooter from '../components/layout/Footer';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Base Child={Component} {...pageProps} />
      <CenteredFooter />
    </ThemeProvider>
  );
}

export default MyApp;
