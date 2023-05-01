import '@/styles/globals.css';
import Head from 'next/head';
import {NextSeo} from 'next-seo';
import {ThemeProvider} from 'next-themes';

export default function App({Component, pageProps}) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-title" content="Fontlay" />
        <meta name="theme-color" content="#2a5bce" />
        <link rel="shortcut icon" type="image/x-icon" href={`/favicon.ico`} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icon/favicon-16x16.png"
        />
        <link rel="manifest" href="/icon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icon/safari-pinned-tab.svg"
          color="#333333"
        />
      </Head>

      <NextSeo
        title="Fontlay - A simple Google Fonts proxy"
        description="A simple Google Fonts proxy. Prevent your users from being tracked and privacy-friendly. The CDN for Open Source Fonts."
        canonical="https://fontlay.com"
        themeColor="#2a5bce"
        openGraph={{
          type: 'website',
          url: 'https://fontlay.com',
          title: 'Fontlay - A simple Google Fonts proxy',
          description:
            'A simple Google Fonts proxy. Prevent your users from being tracked and privacy-friendly. The CDN for Open Source Fonts.',
          images: [
            {
              url: `/og-fotnlay.png`,
              width: 666,
              height: 666,
              alt: 'Fontlay',
            },
          ],
        }}
        twitter={{
          handle: '@faridhnzz',
          site: '@faridhnzz',
          cardType: 'summary',
        }}
        robotsProps={{
          notranslate: true,
        }}
      />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
