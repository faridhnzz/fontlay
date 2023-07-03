import { SiGithub, SiInstagram, SiTwitter } from 'react-icons/si';
import pkgJson from '../../../package.json';
import Anchor from '~components/other/Anchor';

const SNS = [
  {
    title: 'Github',
    link: 'https://go.fayln.com/github/fontlay',
    icon: <SiGithub />,
  },
  {
    title: 'Twitter',
    link: 'https://go.fayln.com/twitter',
    icon: <SiTwitter />,
  },
];

export default function Footer() {
  return (
    <footer className="footer footer-center pb-6">
      <div className="grid grid-flow-col gap-4">
        {SNS.map((i, index) => {
          return (
            <Anchor
              key={index}
              className=" transition hover:opacity-75"
              href={i.link}
              newWindow>
              <span className="sr-only">{i.title}</span>
              <span className="fill-current text-2xl md:text-3xl">
                {i.icon}
              </span>
            </Anchor>
          );
        })}
      </div>
      <div className="cursor-default text-xs md:text-sm">
        <p>this project not affiliated and associated with Google.</p>
        <p className="d-none d-lg-inline">
          &copy; {new Date().getFullYear()}
          <span
            className="tooltip cursor-pointer mx-1 font-bold hover:text-teal-400"
            data-tip={`V.${pkgJson.version}`}>
            Fontlay
          </span>
          - Made with ❤️ by
          <Anchor
            href="https://fayln.com"
            rel="me"
            className="link-hover hover:text-teal-400 ml-1"
            newWindow>
            Farid Nizam
          </Anchor>
        </p>
      </div>
    </footer>
  );
}
