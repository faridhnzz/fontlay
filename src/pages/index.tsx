import Layout from '~components/layout';
import Anchor from '~components/other/Anchor';
import Hero from '@layout/Hero';
import { Card } from '@other/Card';
import { Grid2Cols } from '@other/Grid';
import { RiGitRepositoryPrivateFill } from 'react-icons/ri';
import {
  FaCompress,
  FaGlobeAsia,
  FaLink,
  FaCode,
  FaServer,
} from 'react-icons/fa';
import { BiHide } from 'react-icons/bi';
import { isProd } from '~/utils';

const Features = [
  // {
  //   icon: <FaServer />,
  //   title: 'Hosted on Hybrid Server',
  //   desc: 'Fontlay is hosted on hybrid servers and not on a shared cloud.',
  // },
  {
    icon: <FaGlobeAsia />,
    title: 'Globally',
    desc: "Fonts and API requests cache at CDN with logging turned off and it's superfast.",
  },
  {
    icon: <FaCompress />,
    title: 'Compression',
    desc: 'Using gzip & brotli for file compression.',
  },
  {
    icon: <FaCode />,
    title: 'CSS Minified',
    desc: 'CSS files are optimized and minified.',
  },
  // {
  //   icon: <FaLink />,
  //   title: 'Enpoint',
  //   desc: 'CSS & Font files are in the same endpoint.',
  // },
  {
    icon: <RiGitRepositoryPrivateFill />,
    title: 'Private and Secure',
    desc: 'All traffic on this site is encrypted and hide your IP from Google.',
  },
];

export default function HomePage() {
  const nav = isProd ? false : true;
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
        <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
      </div>
      <Layout navbar={nav}>
        <Hero>
          <div className="flex flex-col">
            <hgroup className="text-center cursor-default">
              <h1 className="flex justify-center bg-gradient-to-r from-[#3aa9f8] to-[#2a5bce] bg-clip-text text-5xl font-extrabold uppercase tracking-tighter text-transparent md:text-5xl lg:text-7xl">
                fontlay
              </h1>
              <h3 className="flex py-6 text-xl text-gray-600 dark:text-gray-300">
                A simple Google Fonts proxy. <br className="hidden md:inline" />{' '}
                Prevent your users from being tracked and privacy-friendly.
              </h3>
            </hgroup>

            <div className="pt-8 text-center cursor-default">
              <div className="mockup-code">
                <p className="text-lg font-bold md:text-xl">
                  Change Google Font
                </p>
                <div className="mx-auto mt-5 max-w-sm rounded bg-[#001f26] py-4 text-white md:mx-auto lg:mx-8 lg:max-w-lg">
                  <code className="text-sm cursor-text sm:text-lg md:text-xl">
                    https://fonts.googleapis.com
                  </code>
                </div>
                <p className="my-5 text-lg font-bold md:text-xl">With</p>
                <div className="mx-auto mt-5 max-w-sm rounded bg-[#001f26] py-4 text-white md:mx-auto lg:mx-8 lg:max-w-lg">
                  <code className="text-sm cursor-text sm:text-lg md:text-xl">
                    https://fontlay.com
                  </code>
                </div>
              </div>
            </div>
            <h3 className="is-center justify-center pt-3 pl-3 text-center">
              <span className="font-sans cursor-default">Try it now:</span>
              <Anchor
                href="/css2?family=Roboto&display=swap"
                className="pl-1 text-blue-600 link"
                newWindow>
                https://fontlay.com/css2?family=Roboto&display=swap
              </Anchor>
            </h3>
          </div>
        </Hero>

        <Hero>
          <div className="max-w-4xl cursor-default">
            <div className="my-6 text-center">
              <h2 className="gradient mx-auto mt-1 w-[11rem] pb-3 text-4xl tracking-tight font-bold">
                Features
              </h2>
            </div>
            <Grid2Cols>
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
            </Grid2Cols>
          </div>
        </Hero>
      </Layout>
    </>
  );
}
