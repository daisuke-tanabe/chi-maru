import React from 'react';
import { AppProps } from 'next/app';
import Head from './_head';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import Container from '@mui/material/Container';
import createEmotionCache from '../src/createEmotionCache';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import ProgressBar from '../components/organisms/ProgressBar';
import { red } from "@mui/material/colors";

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head/>
      <ThemeProvider
        theme={createTheme({
          palette: {
            primary: {
              main: '#556cd6',
            },
            secondary: {
              main: '#19857b',
            },
            error: {
              main: red.A400,
            },
          },
        })}
      >
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline/>
        <ProgressBar />
        <Header/>
        <main>
          <div css={{paddingBottom: '144px'}}>
            <Container maxWidth="md">
              <Component {...pageProps} />
            </Container>
          </div>
        </main>
        <Footer/>
      </ThemeProvider>
    </CacheProvider>
  );
}
export default MyApp;
