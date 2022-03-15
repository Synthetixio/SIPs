import React from 'react'

import GithubIcon from '../icons/Github'
import TwitterIcon from '../icons/Twitter'
import SourceIcon from '../icons/Source'

const Main: React.FC = ({ children }) => {
  return (
    <main>
      {/* matomo */}
      <header className="site-header" role="banner">
        <div className="wrapper">
          <a className="site-title" rel="author" href="/">
            KIPs
          </a>
          <nav className="site-nav">
            <input type="checkbox" id="nav-trigger" className="nav-trigger" />
            <label htmlFor="nav-trigger">
              <span className="menu-icon">
                <svg viewBox="0 0 18 15" width="18px" height="15px">
                  <path d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.032C17.335,0,18,0.665,18,1.484L18,1.484z M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.032C17.335,6.031,18,6.696,18,7.516L18,7.516z M18,13.516C18,14.335,17.335,15,16.516,15H1.484 C0.665,15,0,14.335,0,13.516l0,0c0-0.82,0.665-1.483,1.484-1.483h15.032C17.335,12.031,18,12.695,18,13.516L18,13.516z"></path>
                </svg>
              </span>
            </label>

            <div className="trigger">
              <a className="page-link" href="/all-kip">
                KIPs
              </a>
              <a className="page-link" href="/all-ckip">
                CKIPs
              </a>
              <a className="page-link" href="/all-ktr">
                KTRs
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="page-content">
        <div className="wrapper">{children}</div>
      </main>

      <footer className="site-footer h-card">
        <div className="wrapper">
            <div className="footer-col">
              <ul className="social-media-list">
                <li>
                  <a href="https://github.com/Kwenta/KIPs">
                    <GithubIcon className="svg-icon" />
                    <span className="username">Kwenta/KIPs</span>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/kwenta_io">
                    <TwitterIcon className="svg-icon" />
                    <span className="username">kwenta_io</span>
                  </a>
                </li>
                <li>
                  <a href="https://kwenta.io">
                    <SourceIcon className="svg-icon" />
                    <span className="username">Kwenta</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col-4">
              <p>
                Kwenta Improvement Proposals (KIPs) describe standards for the
                Kwenta platform, including core protocol specifications, client
                APIs, and contract standards.
              </p>
            </div>
        </div>
      </footer>
      <script type="text/javascript" src="/mathjax-config.js" defer />
      <script
        type="text/javascript"
        id="MathJax-script"
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"
        defer
      />
    </main>
  )
}

export default Main
