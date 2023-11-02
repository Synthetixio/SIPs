import * as React from 'react'
import { Helmet } from 'react-helmet'

import Main from '../layout/Main'
import SvgDiscord from '../icons/Discord'

// markup
const IndexPage = () => (
  <Main>
    <Helmet title="Infinex Improvement Proposals" />
    <h1 className="page-heading">
      Infinex Improvement Proposals{' '}
      <a
        href="https://discord.com/channels/1128911960004644894/1147748302557827163"
        rel="nofollow"
      >
        <SvgDiscord />
      </a>
    </h1>
    <p>
      Infinex Improvement Proposals (XIPs) describe standards for the
      Infinex platform, including core protocol specifications, client APIs,
      and contract standards.
    </p>

    {/* <h2>Contributing</h2>
    <ol>
      <li>
        Review <a href="/xips/xip-1">XIP-1</a>.
      </li>
      <li>
        Fork the repository by visiting the XIPs{' '}
        <a href="https://github.com/infinex-io/XIPs">repo</a> and pressing
        "Fork" in the top right.
      </li>
      <li>
        Add your XIP to your fork of the repository. There is a{' '}
        <a href="https://github.com/infinex-io/XIPs/blob/master/xip-x.md">
          template XIP here.
        </a>
      </li>
      <li>
        Submit a Pull Request to Infinex's{' '}
        <a href="https://github.com/infinex-io/XIPs">XIPs repository</a>.
      </li>
    </ol>

    <p>
      Your first PR should be a first draft of the final XIP. It must meet the
      formatting criteria enforced by the build (largely, correct metadata in
      the header). An editor will manually review the first PR for a new XIP and
      assign it a number before merging it. Make sure you include a{' '}
      <code>discussions-to</code> header with the URL to a discussion forum or
      open GitHub issue where people can discuss the XIP as a whole.
    </p>
    <p>
      If your XIP requires images, the image files should be included in a
      subdirectory of the `assets` folder for that XIP as follow:{' '}
      <code>xips/assets/xip-X</code> (for xip <b>X</b>). When linking to an
      image in the XIP, use relative links such as{' '}
      <code>../assets/xip-X/image.png</code>.
    </p>
    <ol>
        <li><strong>Creation</strong></li>
        <p>Once submitted, every XIP will begin as a `Draft`. It must then meet specific formatting criteria (largely, correct metadata in the header which will be discussed later), and be manually approved by an editor for further community discussion and consideration.
          <br/> <br/> The author of the XIP proposal is responsible for building consensus within the community and documenting dissenting opinions. Authors must include a link to where people should continue discussing your XIP.</p>
        <li><strong>Voting</strong></li>
        <p>Once a Draft is believed to be mature enough and ready to progress, it must be Approved to be executed. Approval of an XIP will be granted through:
            <ul>
              <li>Consultation with at least one member of the Infinex council, found through the Infinex Discord. They will assess whether the proposal needs a ‘Feasibility study’.</li>
              <li>If it does need a ‘Feasibility Study’, the XIP will progress to the Feasibility stage. It will then be assigned a CC who will work with the author to conduct a ‘Feasibility study’. Once all parties are satisfied, the XIP is moved to IC Review Pending where it will be discussed and then voted upon.</li>
              <li>If it does not need a ‘Feasibility Study’, the XIP will progress straight to IC Review Pending where it will be discussed and then voted upon.</li>
              <li>The Infinex council can send it back to the Draft or Feasibility stage if they believe more edits are required, if not, it will enter the next stage</li>
            </ul>
        </p>
        <li><strong>Approval</strong></li>
        <p>XIPs will be voted on by the Infinex Council (IC Vote Pending) for 5 days, and proposals will be passed only under a majority decision. Approved XIPs are moved to Approved, and then Implemented by the Infinex Council, protocol CCs, or community members. Otherwise, it is Rejected.</p>
    </ol>

    <h2>XIP status terms</h2>
    <ul>
      <li>
        <strong>Draft</strong> - The initial state of a new XIP before the
        Spartan Council and core contributors have assessed it.
      </li>
      <li>
        <strong>Feasibility</strong> - a XIP that is being assessed for
        feasibility with an assigned Core Contributor
      </li>
      <li>
        <strong>SC Review Pending</strong> - a XIP that is awaiting a Spartan
        Council Review after the Author and Core Contributor are satisfied with
        feasibility
      </li>
      <li>
        <strong>Vote Pending</strong> - a XIP that is awaiting a vote.
      </li>
      <li>
        <strong>Approved</strong> - a XIP that has successfully reached a super
        majority Spartan Council vote in favour.
      </li>
      <li>
        <strong>Rejected</strong> - a XIP that has failed to reach a
        supermajority Spartan Council vote in favour.
      </li>
      <li>
        <strong>Implemented</strong> - a XIP that has been released to main-net.
      </li>
    </ul> */}
  </Main>
)

export default IndexPage
