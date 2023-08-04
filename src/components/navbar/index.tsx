import { useRouter } from 'next/router';
import NavDarkMode from './DarkMode';
import Anchor from '~components/other/Anchor';
import { Fontlay } from '~/svg/fontlayLogo';
import { SiGithub } from 'react-icons/si';
import { useState } from 'react';
import clsx from 'clsx';

type NavLinkProps = {
  label: string;
  path: string;
  openWindows?: boolean;
};

const NavLink: NavLinkProps[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Docs',
    path: '#',
  },
  {
    label: 'Status',
    path: '#',
  },
];

export default function Navbar() {
  const pathname = useRouter().pathname;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="container sticky top-0 z-40 w-full bg-transparent border-b border-gray-400/90 backdrop-blur-md dark:border-gray-700">
        <div className="flex flex-wrap items-center mx-auto w-full px-4 py-3 md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8">
          <Anchor className="nav-icon">
            <span className="sr-only">Fontlay</span>
            <Fontlay />
          </Anchor>

          <div className="flex items-center gap-x-2 sm:gap-x-3 ml-auto md:pl-1 md:order-3">
            <div className="relative group transition mx-auto max-w-2xl"></div>
            <div className="flex items-center gap-1 relative z-10 before:w-px md:before:h-6 md:before:bg-gray-300 md:dark:before:bg-gray-700">
              <div className="pl-1 sm:pl-2 space-x-1">
                <div className="inline-flex flex-shrink-0 justify-center items-center h-10 w-10 font-medium rounded-full text-gray-800 hover:bg-gray-300 dark:text-gray-200 dark:hover:bg-gray-800">
                  <Anchor
                    href="https://go.fayln.com/github/fontlay"
                    newWindow
                    className="md:tooltip md:tooltip-bottom"
                    data-tip="Github">
                    <SiGithub className="w-5 h-5" />
                  </Anchor>
                </div>
              </div>
              <div className="inline-flex items-center justify-center flex-shrink-0 text-gray-800 rounded-full h-10 w-10 hover:bg-gray-300 dark:text-gray-200 dark:hover:bg-gray-800">
                <NavDarkMode
                  className="md:tooltip md:tooltip-bottom"
                  data-tip="Switch dark mode"
                />
              </div>
            </div>

            {/* Burger */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                aria-controls="docs-navbar"
                aria-label="Toggle navigation">
                <svg
                  className={clsx('w-4 h-4', isOpen ? 'hidden' : '')}
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                </svg>
                <svg
                  className={clsx('w-4 h-4', isOpen ? 'block' : 'hidden')}
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </button>
            </div>
            {/* End BUrger */}
          </div>

          <div
            className={clsx(
              'overflow-hidden transition-all duration-300 basis-full grow ml-auto md:block md:w-auto md:basis-auto md:order-2',
              isOpen ? 'collapse' : 'hidden'
            )}>
            <div className="flex flex-col mt-6 pb-2 gap-x-0 gap-y-4 md:pb-0 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-7 md:gap-y-0 md:pl-7">
              {NavLink.map((i, index) => {
                return (
                  <Anchor
                    key={index}
                    href={i.path}
                    newWindow={i.openWindows}
                    className={
                      pathname === i.path
                        ? 'font-semibold text-blue-600 dark:text-blue-500 md:py-6'
                        : 'font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 md:py-6'
                    }>
                    {i.label}
                  </Anchor>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>

    // container sticky top-0 z-40 w-full px-4 py-3 bg-transparent border-b border-gray-400/90 backdrop-blur-md dark:border-gray-700 md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto
    // <nav className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full backdrop-blur-md">
    //   <div className="nav">
    //     <Anchor className="rounded flex-none bg-[#181C1F] text-[#EAF2F7] transition duration-[230ms] hover:opacity-75 dark:bg-[#EAF2F7] dark:text-[#181C1F]">
    //       <span className="sr-only">Fontlay</span>
    //       <Fontlay />
    //     </Anchor>

    //     <div className="flex items-center gap-x-2 sm:gap-x-3 ml-auto md:pl-4 md:order-3">
    //       <div
    //         className="flex items-center gap-1 relative z-10 before:w-px before:h-4 before:bg-gray-300 dark:before:bg-gray-700"
    //         aria-label="border-left">
    //         <NavDarkMode />
    //       </div>
    //     </div>

    //     <div className="hidden overflow-hidden transition-all duration-300 grow basis-full md:block">
    //       <ul className="flex flex-col mt-5 gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-7 md:gap-y-0 md:pl-7">
    //         {Linking.map((i, index) => {
    //           return (
    //             <li
    //               key={index}
    //               className={
    //                 pathname === i.path
    //                   ? 'font-semibold text-blue-600 dark:text-blue-500 md:py-6'
    //                   : 'font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 md:py-6'
    //               }>
    //               <Anchor href={i.path}>{i.name}</Anchor>
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

/* <div className="flex items-center justify-between">
        <Anchor className="rounded flex-none bg-[#181C1F] text-[#EAF2F7] transition duration-[230ms] hover:opacity-75 dark:bg-[#EAF2F7] dark:text-[#181C1F]">
          <span className="sr-only">Fontlay</span>
          <Fontlay />
        </Anchor>

        <div className="md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-full shadow-sm hs-collapse hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
            aria-label="Toggle navigation">
            <svg
              className="w-4 h-4 hs-collapse-open:hidden"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            <svg
              className="hidden w-4 h-4 hs-collapse-open:block"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
      </div> */

/* <div
            className="flex items-center font-medium gap-x-2 dark:border-gray-700 sm:my-6 sm:border-l sm:border-gray-300 sm:pl-3"
            aria-label="border-left">
            <NavDarkMode />
          </div> */
