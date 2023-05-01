import {SiGithub, SiInstagram, SiTwitter} from 'react-icons/si';
import packageJson from '../../../package.json';

const snsLink = [
  {
    title: 'Github',
    link: 'https://go.fayln.com/github/fontlay',
    icon: <SiGithub />,
  },
  {
    title: 'Instagram',
    link: 'https://go.fayln.com/instagram',
    icon: <SiInstagram />,
  },
  {
    title: 'Twitter',
    link: 'https://go.fayln.com/twitter',
    icon: <SiTwitter />,
  },
];

export default function Footer() {
  return (
    <>
      <footer className="footer footer-center pb-6">
        <div className="grid grid-flow-col gap-4">
          {snsLink.map((item) => {
            return (
              <a
                key={item.link}
                href={item.link}
                target="_blank"
                className=" transition hover:opacity-75">
                <span className="sr-only">{item.title}</span>
                <span className="fill-current text-2xl md:text-3xl">
                  {item.icon}
                </span>
              </a>
            );
          })}
        </div>
        <div className="cursor-default text-xs md:text-sm">
          <p>this project not affiliated and associated with Google.</p>
          <p className="d-none d-lg-inline">
            &copy; {new Date().getFullYear()}
            {'  '}
            <span
              className="tooltip cursor-pointer font-bold hover:text-teal-400"
              data-tip={`V.${packageJson?.version}`}>
              Fontlay
            </span>{' '}
            - Made with ❤️ by{' '}
            <a
              href="https://fayln.com/?utc"
              rel="me"
              className="link-hover hover:text-teal-400">
              Farid Nizam
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
