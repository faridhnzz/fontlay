import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <main className="container flex-grow">{children}</main>
      <Footer />
    </>
  );
}
