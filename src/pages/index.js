import Link from 'next/link';
import Layout from '@/components/layout';
import Card from '@/components/card/card';
import { IoLink } from 'react-icons/io5';
import { RiGlobalLine } from 'react-icons/ri';
import { FaCompress } from 'react-icons/fa';
import { GiLogging } from 'react-icons/gi';
import { MdOutlinePrivateConnectivity } from 'react-icons/md';

export default function Home() {
  return (
    <Layout>
      <section className="hero min-h-[70vh] my-12 flex flex-col items-center">
        <div className="hero-content text-center mx-auto w-full">
          <div className="cursor-default">
            <div className="mx-auto flex w-full max-w-xl justify-center">
              {/* <div className="mask mask-circle p-20 bg-warning"></div> */}
              <h1 className="text-5xl text-emerald-500 font-black leading-tighter tracking-tighter uppercase">fontlay</h1>
            </div>
            <div className="mx-auto flex w-full max-w-xl cursor-default justify-center">
              <h2 className="py-6 text-xl">
                A simple Google Fonts proxy and privacy-friendly. <br className="hidden md:inline" /> Prevent your users from being tracked and push your privacy.
              </h2>
            </div>
            <div className="pt-8 text-center">
              <div className="mockup-code">
                <p className="text-lg md:text-xl font-bold">Change Google Font</p>
                <pre className="bg-gray-900 text-gray-50 max-w-[20rem] md:max-w-lg mx-auto mt-5 py-4 rounded text-base sm:text-lg md:text-xl">
                  <code>https://fonts.googleapis.com</code>
                </pre>
                <p className="text-lg md:text-xl font-bold my-5">With</p>
                <pre className="bg-gray-900 text-gray-50 max-w-[20rem] md:max-w-lg mx-auto mt-5 py-4 rounded text-base sm:text-lg md:text-xl">
                  <code>https://fontlay.com</code>
                </pre>
              </div>
            </div>
            <h3 className="pt-3 pl-3 justify-center items-center">
              {/* <IoLink className="md:-rotate-45 md:text-rose-700 md:text-xl md:m-auto md:inline-block hidden" /> */}
              Try it now:
              <a href="#" className="link text-blue-600 pl-1">
                https://fontlay.com/css2?family=Roboto&display=swap
              </a>
            </h3>
          </div>
        </div>
      </section>

      <section className="hero min-h-[74vh]">
        <div className="hero-content text-center mx-auto w-full">
          <div className="cursor-default max-w-2xl">
            <h1 className="text-4xl font-bold">Control of your fonts</h1>
            <h2 className="py-6 text-xl">Raise your privacy.</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-1 break-words">
              <Card Icon={<RiGlobalLine className="w-10 h-10" />} title="Globally" desc="CSS and Fonts files cached in CDN and it's superfast. Use same endpoint fontlay.com" />
              <Card Icon={<FaCompress className="w-10 h-10" />} title="Compression" desc="Using brotli and gzip for file compression and CSS files are optimized and minified." />
              <Card Icon={<GiLogging className="w-10 h-10" />} title="Zero Logging " desc="We are not logging your traffic to push your privacy to the next level." />
              <Card Icon={<MdOutlinePrivateConnectivity className="w-10 h-10" />} title="Private and Secure" desc="All traffic on this site is encrypted. (https & ssl)" />
              {/* <Card title="Endpoint" desc="CSS and Fonts use same endpoit (fontlay.com)" /> */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
