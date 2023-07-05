import { HeroProps } from '~types/components';

export default function Hero({ children }: HeroProps) {
  return (
    <section className="hero">
      <div className="w-full px-4 py-14 mx-auto hero-content max-w-7xl sm:px-6 md:py-20">
        {children}
      </div>
    </section>
  );
}
