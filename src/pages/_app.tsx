import '~/styles/globals.css';
import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { DefaultSeo, DefaultSeoProps } from 'next-seo';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const router = useRouter();
  const meta = {
    title: 'Fontlay | A simple Google Fonts proxy',
    description:
      'A simple Google Fonts proxy. Prevent your users from being tracked and privacy-friendly. The Fonts CDN for developer.',
    url: 'https://fontlay.com',
  };
  const noRobots: DefaultSeoProps =
    process.env.NEXT_PUBLIC_NO_ROBOTS === 'y'
      ? {
          dangerouslySetAllPagesToNoFollow: true,
          dangerouslySetAllPagesToNoIndex: true,
        }
      : {};

  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <DefaultSeo
        titleTemplate="Fontlay | %s"
        defaultTitle={meta.title}
        description={meta.description}
        canonical={meta.url + router.asPath}
        themeColor="#2a5bce"
        openGraph={{
          type: 'website',
          siteName: 'Fontlay',
          url: meta.url,
          title: meta.title,
          description: meta.description,
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
        additionalMetaTags={[
          {
            property: 'keywords',
            content:
              'fonts, font, free fonts, fonts cdn, fonts proxy, google fonts proxy, google fonts, developer, github, cdn, seo, open source, fonts optimization',
          },
        ]}
        {...noRobots}
      />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
