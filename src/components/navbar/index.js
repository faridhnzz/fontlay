import Link from 'next/link';
import HSupport from './Support';
import HDarkMode from './DarkMode';

export default function Navbar() {
  return (
    <nav aria-label="Navbar" className="navbar backdrop-blur-md sticky top-0 z-40 shadow-md">
      <div className="flex flex-auto items-center">
        <div className="max-w-screen-xl container mx-auto flex items-center justify-between">
          <div className="flex flex-row gap-1 items-center font-Saira">
            <Link role="button" href="/" className="font-Saira flex-0 btn btn-ghost px-2">
              <div className="font-title inline-flex text-lg transition-all duration-200 md:text-3xl">
                <span className="lowercase">fontlay</span>
              </div>
            </Link>
          </div>
          <div className="flex gap-2 justify-self-end">
            <HDarkMode />
            {/* <HSupport /> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
