import Link from 'next/link';
import {IoIosHeart} from 'react-icons/io';

export default function HSupport() {
  return (
    <Link href="/support">
      {/* <span data-theme="light" className="flex cursor-pointer items-center justify-center rounded-xl border-0 bg-secondary px-2 py-2 font-Saira  no-underline shadow-lg bg-secondary/40 hover:bg-secondary-focus md:py-1">
        <span className="text-sm text-white sm:text-base">Support</span>
      </span> */}

      <button className="btn gap-2 btn-warning">
        <IoIosHeart className="h-6 w-6 text-red-500" />
        <span className="hidden md:inline">Support</span>
      </button>
    </Link>
  );
}
