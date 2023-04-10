import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.bunny.net"
          crossOrigin="true"
        />
        <link
          rel="stylesheet"
          href="https://fonts.bunny.net/css?family=plus-jakarta-sans:200,300,400,500,600,700|saira:100,200,300,400,500,600,700"
        />
        {/* <link
          crossOrigin="true"
          rel="stylesheet"
          href="http://localhost/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Saira:wght@200&display=swap"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
