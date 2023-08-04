import Layout from '~components/layout';
import Anchor from '~components/other/Anchor';
import BgGradient from '~components/layout/BgGradient';
import Hero from '@layout/Hero';
import { Card } from '@other/Card';
import { Grid1x2Cols } from '@other/Grid';

const Features = [
  {
    icon: '🌏',
    title: 'Globally',
    desc: "Fonts and API cache at CDN with logging turned off and it's superfast.",
  },
  {
    icon: '📦',
    title: 'Compression',
    desc: 'Using gzip & brotli for file compression.',
  },
  {
    icon: '📄',
    title: 'CSS Minified',
    desc: 'CSS files are optimized and minified.',
  },
  {
    icon: '🔐',
    title: 'Private and Secure',
    desc: 'All traffic on this site is encrypted and hide your IP from Google.',
  },
];

export default function HomePage() {
  return (
    <>
      <BgGradient />
      <Layout>
        <Hero id="landing">
          <div className="flex flex-col md:py-20">
            <hgroup className="text-center cursor-default">
              <h1 className="bg-gradient-to-r from-[#3aa9f8] to-[#2a5bce] bg-clip-text text-5xl font-black uppercase tracking-tighter text-transparent md:text-5xl lg:text-7xl">
                fontlay
              </h1>
              <h2 className="py-6 text-2xl font-Figtree text-gray-600/95 dark:text-gray-300 antialiased tracking-normal">
                A simple Google Fonts proxy. <br className="hidden md:inline" />
                Prevent your users from being tracked and privacy-friendly.
              </h2>
            </hgroup>

            <div className="py-8 text-center cursor-default">
              <article className="mockup-window">
                <p className="text-lg font-bold md:text-xl">
                  Change Google Font
                </p>
                <div className="mx-auto mt-5 max-w-sm rounded bg-gray-900 dark:bg-[#001f26] py-4 text-white lg:max-w-lg">
                  <code className="text-sm cursor-text sm:text-lg md:text-xl">
                    https://fonts.googleapis.com
                  </code>
                </div>
                <p className="my-5 text-lg font-bold md:text-xl">With</p>
                <div className="mx-auto mt-5 max-w-sm rounded bg-gray-900 dark:bg-[#001f26] py-4 text-white lg:max-w-lg">
                  <code className="text-sm cursor-text sm:text-lg md:text-xl">
                    https://fontlay.com
                  </code>
                </div>
                <p className="mt-5 ml-4 font-Figtree max-w-sm">
                  💡<span className="font-bold">Notes:</span> Also support with{' '}
                  <span className="text-cyan-500 font-semibold">
                    Material Icons
                  </span>
                  .
                </p>
              </article>
            </div>

            <div className="mx-auto">
              <div className="md:inline-flex">
                <p className="mr-1 font-medium cursor-default">Examples:</p>
                <div className="font-mono font-light normal-case">
                  <Anchor
                    href="/css2?family=Roboto&display=swap"
                    className="normal-case text-blue-600 link"
                    newWindow>
                    https://fontlay.com/css2?family=Roboto&display=swap
                  </Anchor>
                </div>
              </div>
            </div>
          </div>
        </Hero>

        <Hero id="features">
          <div className="max-w-4xl cursor-default py-28">
            <div className="my-6 text-center">
              <p className="text-4xl tracking-tight font-bold title-border w-[11rem] mx-auto">
                Features
              </p>
            </div>
            <Grid1x2Cols>
              {Features.map((i, index) => {
                return (
                  <Card
                    key={index}
                    icon={i.icon}
                    title={i.title}
                    desc={i.desc}
                  />
                );
              })}
            </Grid1x2Cols>
          </div>
        </Hero>
      </Layout>
    </>
  );
}
