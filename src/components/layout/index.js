import Navbar from '../Navbar';
import Footer from '../footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container flex-grow">{children}</main>
      <Footer />
    </>
  );
}
