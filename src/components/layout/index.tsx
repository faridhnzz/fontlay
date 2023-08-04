import Navbar from '~components/navbar';
import Footer from '~components/footer';
import { LayoutProps } from '~types/components';
import cn from 'clsx';
import { NextSeo } from 'next-seo';

export default function Layout({
  children,
  title,
  className,
  navbar = true,
  footer = true,
  noindex = false,
}: LayoutProps) {
  return (
    <>
      <NextSeo title={title} noindex={noindex} />
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
