import Navbar from '~components/navbar';
import Footer from '~components/footer';
import { LayoutProps } from '~types/components';
import cn from 'clsx';

export default function Layout({
  children,
  className,
  navbar = true,
  footer = true,
}: LayoutProps) {
  return (
    <>
      {navbar === true && <Navbar />}
      <main
        className={cn(
          'container relative flex-grow overflow-hidden',
          className
        )}>
        {children}
      </main>
      {footer === true && <Footer />}
    </>
  );
}

/**
 * bg-gradient-to-br from-slate-900/[.15] via-purple-900 to-slate-900
 * bg-gradient-to-b from-violet-600/[.15] via-transparent
 */
