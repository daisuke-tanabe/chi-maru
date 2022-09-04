import React from 'react';
import { AppProps } from 'next/app';
import Meta from '../src/Meta';
import theme from '../src/theme'
import {createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import ProgressBar from '../components/organisms/ProgressBar'

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, router } = props;

  const title = pageProps.post ? pageProps.post.title : '';
  const summary = pageProps.post ? pageProps.post.summary : '';

  return (
    <CacheProvider value={emotionCache}>
      <Meta
        title={title}
        summary={summary}
        asPath={router.asPath}
      />
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline/>
        <ProgressBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
export default MyApp;
