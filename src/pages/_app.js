import "@/styles/globals.css";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} forcedTheme="dark">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/x-icon"
          href={`${process.env.DOMAIN || "http://localhost:3000"}/favicon.ico`}
        />
        <link
          rel="apple-touch-icon"
          href={`${
            process.env.DOMAIN || "http://localhost:3000"
          }/apple-touch-icon.png`}
        />
        <link
          rel="manifest"
          href={`${
            process.env.DOMAIN || "http://localhost:3000"
          }/site.webmanifest`}
        />
      </Head>

      <NextSeo
        title="Fontlay - A simple Google Fonts proxy"
        description="A simple Google Fonts proxy. Prevent your users from being tracked and privacy-friendly. The CDN for Open Source Fonts."
        canonical={process.env.DOMAIN || "http://localhost:3000"}
        themeColor="#2a5bce"
        openGraph={{
          type: "website",
          url: process.env.DOMAIN || "http://localhost:3000",
          title: "Fontlay - A simple Google Fonts proxy",
          description:
            "A simple Google Fonts proxy. Prevent your users from being tracked and privacy-friendly. The CDN for Open Source Fonts.",
          images: [
            {
              url: `${
                process.env.DOMAIN || "http://localhost:3000"
              }/og-fotnlay.png`,
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
    </ThemeProvider>
  );
}
