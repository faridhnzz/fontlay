import Layout from '~components/layout';
import Hero from '~components/layout/Hero';
import BgGradient from '~components/layout/BgGradient';
import { FaCheckCircle, FaCheckSquare } from 'react-icons/fa';

export default function StatusPages() {
  return (
    <>
      <BgGradient />
      <Layout title="Status Pages">
        <Hero>
          <div className="status-container">
            <div className="mb-8">
              <h1 className="title-border">System Status</h1>
            </div>

            <div className="flex items-center p-4 md:p-6 bg-[#10A37F] text-white rounded-xl mb-12 justify-center">
              <h3 className="font-semibold text-md md:text-xl">
                All Systems Operational
              </h3>
            </div>

            <div className="container">
              <hgroup className="flex justify-between">
                <h4 className="tracking-wide text-gray-500 dark:text-gray-300 uppercase font-bold mb-4 text-sm md:text-base">
                  Monitors
                </h4>
                <span className="tracking-wide text-gray-500 dark:text-gray-300 text-xs md:text-base">
                  Updated 1 minutes ago
                </span>
              </hgroup>
            </div>

            <div className="space-y-6 mb-2">
              <div className="py-5 bg-neutral-100 dark:bg-slate-600/80 rounded">
                <div className="container flex items-center justify-between cursor-default">
                  <div
                    className="flex justify-between items-center font-medium text-neutral-800 dark:text-white -my-1 tooltip tooltip-left"
                    data-tip="Operational">
                    <div className="mr-2.5 shrink-0 relative text-green-600 ml-2">
                      <FaCheckCircle className="w-5 h-5" />
                    </div>
                    <h6 className="text-neutral-800 dark:text-white shrink truncate capitalize">
                      website
                    </h6>
                  </div>
                  <span className="text-green-600 dark:text-green-400 font-semibold mr-2 capitalize">
                    Operational
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-2">
              <div className="py-5 bg-neutral-100 dark:bg-slate-600/80 rounded">
                <div className="container flex items-center justify-between cursor-default">
                  <div
                    className="flex justify-between items-center font-medium text-neutral-800 dark:text-white -my-1 tooltip tooltip-left"
                    data-tip="Operational">
                    <div className="mr-2.5 shrink-0 relative text-green-600 ml-2">
                      <FaCheckCircle className="w-5 h-5" />
                    </div>
                    <h6 className="text-neutral-800 dark:text-white shrink truncate uppercase">
                      api
                    </h6>
                  </div>
                  <span className="text-green-600 dark:text-green-400 font-semibold mr-2 capitalize">
                    Operational
                  </span>
                </div>
              </div>
            </div>

            {/*  */}
          </div>
        </Hero>
      </Layout>
    </>
  );
}
