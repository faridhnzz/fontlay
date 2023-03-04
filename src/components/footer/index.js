import { SiGithub, SiInstagram, SiTwitter } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="footer footer-center mt-6 p-10 text-base-content border-collapse border-t border-gray-300">
      {/* <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">Status</a>
        <a className="link link-hover">Fonts</a>
      </div> */}
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://go.fayln.com/github" target="_blank" className=" transition hover:opacity-75">
            <span className="sr-only">GitHub</span>
            <SiGithub className="fill-current text-3xl" />
          </a>

          <a href="https://go.fayln.com/instagram" target="_blank" className="transition hover:opacity-75">
            <span className="sr-only">Instagram</span>
            <SiInstagram className="fill-current text-3xl" />
          </a>

          <a href="https://go.fayln.com/twitter" target="_blank" className="transition hover:opacity-75 ">
            <span className="sr-only">Twitter</span>
            <SiTwitter className="fill-current text-3xl" />
          </a>
        </div>
      </div>
      <div>
        <p>this project not affiliated and associated with Google.</p>
        <span className="d-none d-lg-inline">
          Copyright &copy; {new Date().getFullYear()} - Made with{' '}
          <label className="swap swap-flip mt-1">
            <input type="checkbox" />
            <div className="swap-off">❤️</div>
            <div className="swap-on">😇</div>
          </label>{' '}
          by{' '}
          <a href="https://fayln.com" rel="me" className="link">
            Fayln
          </a>
        </span>
      </div>
    </footer>
  );
}
