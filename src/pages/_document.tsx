import { Html, Head, Main, NextScript } from 'next/document';
import { isProd } from '~/utils';
import UmamiAnalytics from '~components/other/Umami';

export default function Document() {
  const fontsUrl = isProd
    ? 'https://fontlay.com'
    : process.env.NEXT_PUBLIC_FONTLAY_DEV || 'http://localhost:5500';

  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href={fontsUrl} />
        <link
          rel="stylesheet"
          href={`${fontsUrl}/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Figtree:wght@400;500;600;700;800&display=swap`}
        />
        {isProd && (
          <script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id="1ac81cd4-6b1f-4e12-9013-3ae2ca363e66"></script>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
