import { SiGithub, SiInstagram, SiTwitter } from 'react-icons/si';
import pkgJson from '../../../package.json';
import Anchor from '~components/other/Anchor';

const SNS = [
  {
    label: 'Github',
    link: 'https://go.fayln.com/github/fontlay',
    icon: <SiGithub />,
  },
  {
    label: 'Twitter',
    link: 'https://go.fayln.com/twitter',
    icon: <SiTwitter />,
  },
];

const Linked = [
  {
    label: 'Docs',
    path: '#',
  },
  {
    label: 'Status',
    path: 'https://status.fontlay.com',
    newWindows: true,
  },
];

export default function Footer() {
  return (
    <footer className="footer footer-center mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid grid-flow-col gap-1 space-x-3">
        {SNS.map((i, index) => {
          return (
            <Anchor
              key={index}
              className="text-gray-800 hover:text-gray-600 transition dark:text-gray-500 dark:hover:text-gray-200"
              href={i.link}
              newWindow>
              <span className="sr-only">{i.label}</span>
              <span className="fill-current text-2xl md:text-3xl">
                {i.icon}
              </span>
            </Anchor>
          );
        })}
      </div>
      <div className="cursor-default text-xs md:text-sm">
        <p>this project not affiliated and associated with Google LLC.</p>
        {/* <div className="grid grid-flow-col gap-1 space-x-3">
          {Linked.map((i, index) => {
            return (
              <Anchor
                key={index}
                className="link-hover"
                href={i.path}
                newWindow>
                <p>{i.label}</p>
              </Anchor>
            );
          })}
        </div> */}
        <p className="d-none d-lg-inline">
          &copy; {new Date().getFullYear()}
          <span
            className="tooltip cursor-pointer mx-1 font-bold dark:hover:text-teal-400 hover:text-teal-600"
            data-tip={`V.${pkgJson.version}`}>
            Fontlay
          </span>
          - Made with ❤️ by
          <Anchor
            href="https://fayln.com"
            rel="me"
            className="link-hover dark:hover:text-teal-400 hover:text-teal-600 ml-1"
            newWindow>
            Farid Nizam
          </Anchor>
        </p>
      </div>
    </footer>
  );
}
