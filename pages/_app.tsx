import React from 'react';
import NextApp from 'next/app';
import Head from './_head';
import { AppProps } from 'next/app';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import Container from '@mui/material/Container';
import createEmotionCache from '../src/createEmotionCache';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import mediaQuery from 'css-mediaquery';
import parser from 'ua-parser-js';
import { red } from "@mui/material/colors";

type DeviceType = string | 'mobile' | 'desktop' | ''

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  deviceType: DeviceType;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, deviceType } = props;

  console.log(deviceType);

  const ssrMatchMedia = (query: string) => ({
    matches: mediaQuery.match(query, {
      // ブラウザを開いた時の想定値を入れる
      // 開いた瞬間はSSでは何も値を持っていないのでこういう処理が必要らしい
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
              // Change the default options of useMediaQuery
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

MyApp.getInitialProps = async (context: any) => {
  const initialProps = await NextApp.getInitialProps(context)

  const { req } = context.ctx;
  const deviceType: DeviceType = req ? parser(req.headers['user-agent']).device.type || 'desktop' : '';

  return {
    ...initialProps,
    deviceType
  };
};
