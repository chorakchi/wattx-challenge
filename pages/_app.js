import { createGlobalStyle, ThemeProvider } from "styled-components";
import "../src/styles/global.css";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => {
        NProgress.start();
    };
    const handleStop = () => {
        NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
        router.events.off('routeChangeStart', handleStart);
        router.events.off('routeChangeComplete', handleStop);
        router.events.off('routeChangeError', handleStop);
    };
}, [router]);

  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;