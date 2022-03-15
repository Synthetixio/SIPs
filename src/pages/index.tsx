import * as React from 'react'
import { Helmet } from 'react-helmet'

import Main from '../layout/Main'

// markup
const IndexPage = () => (
  <Main>
    <Helmet title="Kwenta Improvement Proposals">
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alt" href="/favicon.ico" />
    </Helmet>
    <h1 className="page-heading">
      Kwenta Improvement Proposals{' '}
      {/* <a
        href="https://discordapp.com/channels/413890591840272394/"
        rel="nofollow"
      >
        <img
          className="max-w-full"
          src="https://camo.githubusercontent.com/294a3116521e16f9164255dd2d386b24767e2610/68747470733a2f2f696d672e736869656c64732e696f2f646973636f72642f3431333839303539313834303237323339342e7376673f636f6c6f723d373638414434266c6162656c3d646973636f7264266c6f676f3d6874747073253341253246253246646973636f72646170702e636f6d25324661737365747325324638633937303162393861643433373262353866313366643966363566393636652e737667"
          alt="Discord"
          data-canonical-src="https://img.shields.io/discord/413890591840272394.svg?color=768AD4&amp;label=discord&amp;logo=https%3A%2F%2Fdiscordapp.com%2Fassets%2F8c9701b98ad4372b58f13fd9f65f966e.svg"
        />
      </a> */}
    </h1>
    <p>
      Kwenta Improvement Proposals (KIPs) describe standards for the Kwenta
      platform, including core protocol specifications, client APIs, and
      contract standards.
    </p>

    <h2>Contributing</h2>
    <ol>
      <li>
        Review <a href="/kips/kip-1">KIP-1</a>.
      </li>
      <li>
        Fork the repository by visiting the KIPs{' '}
        <a href="https://github.com/Kwenta/KIPs">repo</a> and pressing "Fork" in
        the top right.
      </li>
      <li>
        Add your KIP to your fork of the repository. There are templates for the
        different proposal types:{' '}
        <ul>
          <li>
            <a href="https://github.com/Kwenta/KIPs/blob/master/kip-x.md">
              KIP template
            </a>
          </li>

          <li>
            <a href="https://github.com/Kwenta/KIPs/blob/master/ckip-x.md">
              CKIP template
            </a>
          </li>
          <li>
            <a href="https://github.com/Kwenta/KIPs/blob/master/ktr-x.md">
              KTR template
            </a>
          </li>
        </ul>
      </li>
      <li>
        Submit a Pull Request to Kwenta's{' '}
        <a href="https://github.com/Kwenta/KIPs">KIPs repository</a>.
      </li>
    </ol>

    <p>
      Your first PR should be a first draft of the final KIP. It must meet the
      formatting criteria enforced by the build (largely, correct metadata in
      the header). An editor will manually review the first PR for a new KIP and
      assign it a number before merging it.
    </p>
    <p>
      If your KIP requires images, the image files should be included in a
      subdirectory of the `assets` folder for that KIP as follow:{' '}
      <code>kips/assets/KIP-X</code> (for kip <b>X</b>). When linking to an
      image in the KIP, use relative links such as{' '}
      <code>../assets/kip-X/image.png</code>.
    </p>
    <p>
      When you believe your KIP is ready to progress past the <code>Draft</code>{' '}
      phase, you should reach out to a Kwenta Council member on Discord. The
      Kwenta Council will schedule in a call with the KIP author to go through
      the KIP in more detail.
    </p>

    <p>
      Once assessed, a KIP is moved into <code>Feasibility</code>. Once the Kwenta
      Council has formally reviewed the KIP during the KIP presentation they can
      either move it to a vote or send it back to <code>Draft</code>. A vote is
      conducted via Snapshot. If a vote by the Kwenta Council
      reaches a majority, the KIP is moved to <code>Approved</code>, otherwise
      it is <code>Rejected</code>.
    </p>

    <p>
      Once the KIP has been implemented the KIP is assigned the{' '}
      <code>Implemented</code> status.
    </p>

    <h2>KIP status terms</h2>
    <ul>
      <li>
        <strong>Draft</strong> - The initial state of a KIP while it is still
        being actively developed.
      </li>
      <li>
        <strong>Feasibility</strong> - The KIP is being discussed with the community.
      </li>
      <li>
        <strong>Voting</strong> - The KIP is awaiting a vote.
      </li>
      <li>
        <strong>Approved</strong> - The KIP has successfully reached a majority
        Kwenta Council vote in favour.
      </li>
      <li>
        <strong>Rejected</strong> - The KIP has failed to reach a majority
        Kwenta Council vote in favour.
      </li>
      <li>
        <strong>Implemented</strong> - The KIP has been released to mainnet.
      </li>
    </ul>

    <h2>Proposal Types</h2>
    <ul>
      <li>
        <strong>KIP</strong> - A Kwenta Improvement Proposal outlines a change
        to be made to the Kwenta protocol. These are submitted to the Elite
        Council for voting and require a majority to pass.
      </li>
      <li>
        <strong>CKIP</strong> - A Community Kwenta Improvement Proposal outlines
        a change to be made to the DAO which overrules the Elite Council. These
        proposals should only be used in the event that there's disagreement
        between the Elite Council and the Kwenta community. These are submitted
        to token holders for voting and require quorum (over 50% of the
        circulating supply) to pass.
      </li>
      <li>
        <strong>KTR</strong> - A Kwenta Treasury Request outlines a request for
        funds from the treasuryDAO. These are submitted to the treasuryDAO and
        require a majority to pass.
      </li>
    </ul>
  </Main>
)

export default IndexPage
