export default function Hero({children}) {
  return (
    <section className="hero mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8 py-8 md:py-20 space-y-8">
      <div className="hero-content mx-auto w-full">{children}</div>
    </section>
  );
}
