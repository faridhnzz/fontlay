import { SiGithub, SiInstagram, SiTwitter } from "react-icons/si";
import packageJson from "../../../package.json";

const snsLink = [
  {
    title: "Github",
    link: "https://go.fayln.com/github/fontlay",
    icon: <SiGithub />,
  },
  {
    title: "Instagram",
    link: "https://go.fayln.com/instagram",
    icon: <SiInstagram />,
  },
  {
    title: "Twitter",
    link: "https://go.fayln.com/twitter",
    icon: <SiTwitter />,
  },
];

export default function Footer() {
  return (
    <footer className="footer footer-center mt-20 pt-10 pb-4 text-base-content border-collapse border-t border-gray-300">
      {/* <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">Status Network</a>
        <a className="link link-hover">Faq</a>
      </div> */}

      <div className="grid grid-flow-col gap-4">
        {snsLink.map((item) => {
          return (
            <a
              key={item.link}
              href={item.link}
              target="_blank"
              className=" transition hover:opacity-75"
            >
              <span className="sr-only">{item.title}</span>
              <span className="fill-current text-3xl">{item.icon}</span>
            </a>
          );
        })}
      </div>
      <div className="cursor-default">
        <p>this project not affiliated and associated with Google.</p>
        <p className="d-none d-lg-inline">
          &copy; {new Date().getFullYear()}
          {"  "}
          <span
            className="tooltip cursor-pointer font-bold"
            data-tip={`V.${packageJson?.version}`}
          >
            Fontlay
          </span>{" "}
          - Made with ❤️ by{" "}
          <a
            href="https://fayln.com"
            rel="me"
            className="link hover:text-teal-600"
          >
            Fayln
          </a>
        </p>
      </div>
    </footer>
  );
}
