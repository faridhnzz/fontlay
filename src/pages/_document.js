import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#faae2b" />
        <link rel="preconnect" href="https://fonts.bunny.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.bunny.net/css?family=plus-jakarta-sans:200,300,400,500,600,700|saira:100,200,300,400,500,600,700" />
        {/* <link href="http://localhost:5500/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Saira:wght@200&display=swap" rel="stylesheet" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
