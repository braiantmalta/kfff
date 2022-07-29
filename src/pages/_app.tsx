import Head from 'next/head';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { CssBaseline, NoSsr } from '@mui/material';
import { useApollo } from '../graphql/client';
import { ContextApiProviders } from '../context/globalContext';
import { ThemeProvider } from '@components/common/themeProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApoloState);

  return (
    <NoSsr>
      <ApolloProvider client={client}>
        <ContextApiProviders>
          <Head>
            <title>Keff</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&amp;display=swap"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
            />

            {/* Global Site Tag (gtag.js) - Google Analytics */}
            {process.env.GOOGLE_ANALYTICS_ID && (
              <>
                <Script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
                />

                <Script
                  id="gtag-init"
                  strategy="afterInteractive"
                  dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());

                      gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}', {
                        page_title : document.title,
                        page_path: window.location.pathname,
                      });
                    `,
                  }}
                />
              </>
            )}
          </Head>
          <ThemeProvider>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </ContextApiProviders>
      </ApolloProvider>
    </NoSsr>
  );
}

export default MyApp;
