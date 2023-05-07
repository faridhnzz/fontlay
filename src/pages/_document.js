import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preconnect"
          href={
            process.env.NODE_ENV === 'production'
              ? 'https://fontlay.com'
              : process.env.NEXT_PUBLIC_FONTLAY_DEV
          }
        />
        <link
          rel="stylesheet"
          href={`${
            process.env.NODE_ENV === 'production'
              ? 'https://fontlay.com'
              : process.env.NEXT_PUBLIC_FONTLAY_DEV
          }/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
