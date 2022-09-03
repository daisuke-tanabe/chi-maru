import React from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import Head from './_head';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import Container from '@mui/material/Container';
import createEmotionCache from '../src/createEmotionCache';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import mediaQuery from 'css-mediaquery';
import { red } from "@mui/material/colors";
import environmentDetector, { DeviceType } from '../src/environmentDetector';

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
  deviceType: DeviceType;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, deviceType } = props;
  const ssrMatchMedia = (query: string) => ({
    matches: mediaQuery.match(query, {
      width: deviceType === 'mobile' ? '0px' : '600px',
    }),
  });

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
          components: {
            MuiUseMediaQuery: {
              defaultProps: { ssrMatchMedia },
            },
          },
        })}
      >
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline/>
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

MyApp.getInitialProps = async (context: AppContext) => {
  const { req } = context.ctx;
  const deviceType = req ? environmentDetector(req.headers['user-agent']) : undefined;

  return {
    ...await NextApp.getInitialProps(context),
    deviceType
  };
};
