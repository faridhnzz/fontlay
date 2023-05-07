import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function Page500() {
  return (
    <Layout navbarHide={true} footerHide={true}>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="flex flex-col justify-center items-center">
              <div className="relative">
                <h1 className="relative text-9xl tracking-tighter-less text-white text-shadow font-extrabold">
                  500
                </h1>
                <span className="absolute top-0 -ml-12 text-gray-300 font-semibold">
                  Oops!
                </span>
              </div>
              <p className="bg-red-600 px-3 text-md font-semibold rounded rotate-12 absolute">
                Internal Server Error
              </p>
            </div>
            <h2 className="mt-4 text-gray-500 dark:text-gray-300/80 text-lg">
              Something went wrong.
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}
