import "@/styles/globals.css";
import Head from "next/head";
import { NextSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <NextSeo
        title="Fontlay - A simple Google Fonts proxy"
        description="A simple Google Fonts proxy. Prevent your users from being tracked and privacy friendly. The CDN for Open Source Fonts"
        canonical="https://fontlay.com/"
        themeColor="#faae2b"
        openGraph={{
          type: "website",
          url: "https://fontlay.com/",
          title: "Fontlay - A simple Google Fonts proxy",
          description:
            "A simple Google Fonts proxy. Prevent your users from being tracked and privacy friendly. The CDN for Open Source Fonts",
          images: [
            {
              url: "/og-fotnlay.png",
              width: 666,
              height: 666,
              alt: "Fontlay",
            },
          ],
        }}
        twitter={{
          handle: "@faridhnzz",
          site: "@faridhnzz",
          cardType: "summary",
        }}
        robotsProps={{
          notranslate: true,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}
