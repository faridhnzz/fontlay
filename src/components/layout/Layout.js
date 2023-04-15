import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
        {/* <Navbar /> */}
        <main className="container flex-grow relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
