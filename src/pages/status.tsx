import { useEffect, useRef } from 'react';
import Layout from '~components/layout';
import Hero from '~components/layout/Hero';

export default function StatusPages() {
  let iframeRef = useRef(null);
  useEffect(() => {
    const iframecurrent = iframeRef.current;
    console.log(iframecurrent);
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
        <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
      </div>

      <Layout>
        {/**
         * TODO: Create metrics
         */}
        {/* <Hero>
          <div className="container">
            <div className="flex flex-col">
              <hgroup>
                <h1 className="text-3xl font-bold tracking-tighter">
                  System Stats
                </h1>
                <h3 className="pt-2">
                  This page is intended to share our metrics, like traffic and
                  uptime.
                </h3>
              </hgroup>
            </div>

            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                  <div className="p-4 md:p-5">
                    <div className="flex items-center gap-x-2">
                      <p className="text-xs tracking-wide text-gray-500">
                        Bandwidth Used
                      </p>
                    </div>

                    <div className="mt-1 flex items-center">
                      <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                        20.79 MB
                      </h3>
                      <span className="flex items-center text-green-600">
                        <svg
                          className="inline-block w-7 h-7 self-center"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16">
                          <path
                            fill-rule="evenodd"
                            d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                          />
                        </svg>
                        <span className="inline-block text-sm">1.7%</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                  <div className="p-4 md:p-5">
                    <div className="flex items-center gap-x-2">
                      <p className="text-xs uppercase tracking-wide text-gray-500">
                        Sessions
                      </p>
                    </div>

                    <div className="mt-1 flex items-center">
                      <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                        29.4%
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                  <div className="p-4 md:p-5">
                    <div className="flex items-center gap-x-2">
                      <p className="text-xs uppercase tracking-wide text-gray-500">
                        Avg. Click Rate
                      </p>
                    </div>

                    <div className="mt-1 flex items-center">
                      <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                        56.8%
                      </h3>
                      <span className="flex items-center text-red-600">
                        <svg
                          className="inline-block w-7 h-7 self-center"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16">
                          <path
                            fill-rule="evenodd"
                            d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                          />
                        </svg>
                        <span className="inline-block text-sm">1.7%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Hero> */}

        <Hero>
          <div className="container">
            <div className="mb-6">
              <h1 className="gradient mx-auto mt-1 w-[11rem] pb-3 text-center text-2xl font-bold tracking-tight">
                System Uptime
              </h1>
            </div>
            <article className="my-4 border-spacing-8 rounded-lg border-4 p-8 dark:border-gray-800 sm:p-0">
              <iframe
                ref={iframeRef}
                style={{ border: 0 }}
                src="https://status.puredns.org/"
                width={'100%'}
                height={680}
                aria-hidden="false"
                tabIndex={0}
                referrerPolicy="origin"></iframe>
            </article>
          </div>
        </Hero>
      </Layout>
    </>
  );
}
