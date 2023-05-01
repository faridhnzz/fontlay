import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

export default function Layout({children, navbarHide, footerHide}) {
  return (
    <>
      <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
        {navbarHide ? '' : <Navbar />}
        <main className="container flex-grow relative overflow-hidden">
          {children}
        </main>
        {footerHide ? '' : <Footer />}
      </div>
    </>
  );
}
