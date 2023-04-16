import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fontlay.com" crossOrigin="true" />
        <link
          rel="stylesheet"
          href="https://fontlay.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Saira:wght@200&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
