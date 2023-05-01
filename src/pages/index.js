import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/common/Hero';
import Card from '@/components/common/Card';
import Grid2Cols from '@/components/common/Grid2Cols';
import AnnouncementBanner from '@/components/common/AnnouncementBanner';
import {RiGitRepositoryPrivateFill} from 'react-icons/ri';
import {FaCompress, FaGlobeAsia} from 'react-icons/fa';
import {GiLogging} from 'react-icons/gi';

const CardDest = [
  {
    icon: <FaGlobeAsia size={40} />,
    title: 'Globally',
    desc: "CSS and Fonts files cached in CDN and it's superfast.",
  },
  {
    icon: <FaCompress size={40} />,
    title: 'Compression',
    desc: 'Using gzip for file compression and CSS files are optimized and minified.',
  },
  {
    icon: <GiLogging size={40} />,
    title: 'Zero Logging',
    desc: 'We are not logging your traffic to push your privacy to the next level.',
  },
  {
    icon: <RiGitRepositoryPrivateFill size={40} />,
    title: 'Private and Secure',
    desc: 'All traffic on this site is encrypted.',
  },
];

export default function Home() {
  return (
    <>
      <Layout navbarHide={true}>
        <Hero>
          <div className="flex flex-col max-w-6xl">
            {/* <AnnouncementBanner desc="New release" /> */}
            <div className="flex w-full max-w-xl justify-center">
              <h1 className="block font-bold text-5xl md:text-5xl lg:text-7xl tracking-tighter uppercase cursor-default text-transparent bg-clip-text bg-gradient-to-r from-[#3aa9f8] to-[#2a5bce]">
                fontlay
              </h1>
            </div>
            <div className="flex w-full max-w-xl cursor-default text-center">
              <h2 className="py-6 text-xl text-gray-600 dark:text-gray-300">
                A simple Google Fonts proxy. <br className="hidden md:inline" />{' '}
                Prevent your users from being tracked and privacy-friendly.
              </h2>
            </div>
            <div className="pt-8 text-center cursor-default">
              <div className="mockup-code">
                <p className="text-lg md:text-xl font-bold">
                  Change Google Font
                </p>
                <pre className="bg-[#001f26] text-white max-w-sm lg:max-w-lg mt-5 py-4 mx-6 md:mx-auto lg:mx-8 rounded">
                  <code className="text-sm sm:text-lg md:text-xl cursor-text">
                    https://fonts.googleapis.com
                  </code>
                </pre>
                <p className="text-lg md:text-xl font-bold my-5">With</p>
                <pre className="bg-[#001f26] text-white max-w-sm lg:max-w-lg mt-5 py-4 mx-6 md:mx-auto lg:mx-8 rounded">
                  <code className="text-sm sm:text-lg md:text-xl cursor-text">
                    https://fontlay.com
                  </code>
                </pre>
              </div>
            </div>
            <h3 className="pt-3 pl-3 justify-center items-center text-center">
              <span className="cursor-default">Try it now:</span>
              <Link
                href="/css2?family=Roboto&display=swap"
                className="link text-blue-600 pl-1">
                https://fontlay.com/css2?family=Roboto&display=swap
              </Link>
            </h3>
          </div>
        </Hero>

        <Hero>
          <div className="cursor-default text-center max-w-2xl dark:text-white">
            <h1 className="text-4xl font-bold">Control of your fonts</h1>
            <h2 className="py-6 text-xl">Raise your privacy.</h2>
            <Grid2Cols>
              {CardDest.map((item) => {
                return (
                  <Card
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
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
