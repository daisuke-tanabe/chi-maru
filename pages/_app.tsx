import React from 'react';
import Head from './_head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/theme';
import Container from '@mui/material/Container';
import createEmotionCache from '../src/createEmotionCache';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head />
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header />
        <main>
          <div css={{ paddingBottom: '144px' }}>
            <Container maxWidth="md">
              <Component {...pageProps} />
            </Container>
          </div>
        </main>
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}
