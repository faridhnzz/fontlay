import Anchor from '~components/other/Anchor';
import Layout from '~components/layout';

export default function Page404() {
  return (
    <Layout navbar={false} footer={false}>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="flex flex-col justify-center items-center">
              <div className="relative">
                <h1 className="relative text-9xl tracking-tighter-less font-black">
                  404
                </h1>
                <span className="absolute top-0 -ml-12 dark:text-gray-300 text-gray-600 font-semibold">
                  Oops!
                </span>
              </div>
              <p className="bg-indigo-600 text-white px-3 text-md font-semibold rounded rotate-12 absolute">
                Page Not Found
              </p>
            </div>
            <h2 className="mt-4 text-gray-700 dark:text-gray-300/80 text-lg">
              The stuff you were looking for doesn&apos;t exist.
            </h2>
            <button className="mt-5">
              <Anchor
                href="/"
                className="relative inline-block text-sm font-medium text-indigo-300 group active:text-indigo-400 focus:outline-none focus:ring">
                <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-indigo-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>
                <span className="relative block px-8 py-3 bg-[#1A2238] border border-current text-sm text-white">
                  Go Home
                </span>
              </Anchor>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
