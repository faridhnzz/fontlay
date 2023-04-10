import Link from "next/link";
import Layout from "@/components/layout/Layout";
import Card from "@/components/common/Card";
import Grid2Cols from "@/components/common/Grid2Cols";
import { FaGlobeAsia } from "react-icons/fa";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { FaCompress } from "react-icons/fa";
import { GiLogging } from "react-icons/gi";

const CardDest = [
  {
    icon: <FaGlobeAsia className="w-10 h-10" />,
    title: "Globally",
    desc: "CSS and Fonts files cached in CDN and it's superfast.",
    color: "from-[#10ac84] to-[#55efc4]",
  },
  {
    icon: <FaCompress className="w-10 h-10" />,
    title: "Compression",
    desc: "Using gzip for file compression and CSS files are optimized and minified.",
    color: "from-[#f0932b] to-[#f9ca24]",
  },
  {
    icon: <GiLogging className="w-10 h-10" />,
    title: "Zero Logging",
    desc: "We are not logging your traffic to push your privacy to the next level.",
    color: "from-pink-400 to-pink-500",
  },
  {
    icon: <RiGitRepositoryPrivateFill className="w-10 h-10" />,
    title: "Private and Secure",
    desc: "All traffic on this site is encrypted.",
    color: "from-red-400 via-red-500 to-red-500",
  },
];

export default function Home() {
  return (
    <Layout>
      <section className="hero mx-auto pt-12 sm:pt-24 min-h-[76vh] lg:min-h-[42rem]">
        <div className="hero-content mx-auto w-full">
          <div className="flex flex-col max-w-6xl">
            <div className="mx-auto flex w-full max-w-xl justify-center">
              <h1 className="text-6xl font-black tracking-tighter uppercase cursor-default text-transparent bg-clip-text bg-gradient-to-r from-[#3aa9f8] to-[#2a5bce]">
                fontlay
              </h1>
            </div>
            <div className="mx-auto flex w-full max-w-xl cursor-default text-center">
              <h2 className="py-6 text-xl ">
                A simple Google Fonts proxy. <br className="hidden md:inline" />{" "}
                Prevent your users from being tracked and privacy friendly.
              </h2>
            </div>
            <div className="pt-8 text-center cursor-default max-w-3xl">
              <div className="mockup-code bg-neutral text-primary-content">
                <p className="text-lg md:text-xl font-bold">
                  Change Google Font
                </p>
                <pre className="bg-[#001f26] text-white max-w-sm lg:max-w-lg mx-auto mt-5 py-4 rounded">
                  <code className="text-sm sm:text-lg md:text-xl cursor-text">
                    https://fonts.googleapis.com
                  </code>
                </pre>
                <p className="text-lg md:text-xl font-bold my-5">With</p>
                <pre className="bg-[#001f26] text-white max-w-sm lg:max-w-lg mx-auto mt-5 py-4 rounded">
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
                className="link text-blue-600 pl-1"
              >
                https://fontlay.com/css2?family=Roboto&display=swap
              </Link>
            </h3>
          </div>
        </div>
      </section>

      <section className="hero mx-auto pt-32 sm:pt-24 lg:pt-40">
        <div className="hero-content mx-auto w-full">
          <div className="cursor-default text-center max-w-2xl">
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
                    bgColor={item.color}
                  />
                );
              })}
            </Grid2Cols>
          </div>
        </div>
      </section>
    </Layout>
  );
}
