import Link from 'next/link';
import HSupport from './Support';
import HDarkMode from './DarkMode';

export default function Navbar() {
  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
      <nav
        className="max-w-7xl w-full mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto border-gray-700 backdrop-blur-md sticky"
        aria-label="Global">
        <div className="flex items-center justify-between">
          <h1
            className="flex-none text-xl font-semibold dark:text-white cursor-default"
            aria-label="Fontlay">
            Fontlay
          </h1>

          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation">
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
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
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
            <Link
              className="text-blue-600 md:py-6 dark:text-blue-500 font-semibold"
              href="/"
              aria-current="page">
              Home
            </Link>

            <Link
              className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
              href="#">
              Docs
            </Link>

            <Link
              className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
              href="#">
              Status
            </Link>

            <div className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-l sm:border-gray-300 sm:my-6 sm:pl-3 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500">
              <HDarkMode />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

// export default function Navbar() {
//   return (
//     <nav
//       aria-label="Navbar"
//       className="navbar backdrop-blur-md sticky top-0 z-50 shadow-md"
//     >
//       <div className="flex flex-auto items-center">
//         <div className="max-w-screen-xl container mx-auto flex items-center justify-between">
//           <div className="flex flex-row gap-1 items-center font-Saira">
//             <Link
//               role="button"
//               href="/"
//               className="font-Saira flex-0 btn btn-ghost px-2"
//             >
//               <div className="font-title inline-flex text-lg transition-all duration-200 md:text-3xl">
//                 <span className="lowercase tracking-tighter">fontlay</span>
//               </div>
//             </Link>
//           </div>
//           <div className="flex gap-2 justify-self-end">
//             <HDarkMode />
//             {/* <HSupport /> */}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
