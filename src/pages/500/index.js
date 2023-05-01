import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function Page404() {
  return (
    <Layout navbarHide={true} footerHide={true}>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md font-Saira">
            <div className="bg-red-200 stroke-red-200 rounded-full p-1 px-6 my-2"></div>
            <h1 className="font-black text-9xl text-slate-200">404</h1>
            <p className="text-gray-400 pt-3 pb-2 tracking-tight capitalize text-xl font-semibold">
              Internal Server Error
            </p>
            <div className="bg-red-200 stroke-red-200 rounded-full p-1 px-6 my-2"></div>
            <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
              Oops something went wrong.
            </p>
            <div className="py-6">
              <Link
                role="button"
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring font-Jakarta"
                href="/">
                Go Back!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
