import { HeroProps } from '~types/components';
import clsx from 'clsx';

export default function Hero({ children, className, id }: HeroProps) {
  return (
    <section id={id} className="hero">
      <div
        // px-4 py-14 mx-auto max-w-7xl sm:px-6 md:py-20
        className={clsx(
          'w-full max-w-7xl px-6 pt-14 lg:px-8 flex flex-col justify-center items-center',
          className
        )}>
        {children}
      </div>
    </section>
  );
}
