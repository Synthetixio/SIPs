import * as React from 'react'
import { Helmet } from 'react-helmet'

import Main from '../layout/Main'

const BASE_URL = 'https://softdao.github.io/SEPs'

// markup
const IndexPage = () => (
  <Main>
    <Helmet title="Soft Improvement Proposals" />
    <h1 className="page-heading">Soft Enhancement Proposals</h1>
    <p>
      Soft Enahancement Proposals (SEPs) describe standards for the Soft
      platform, including core protocol specifications, client APIs, and
      contract standards.
    </p>

    <h2>Contributing</h2>
    <ol>
      <li>
        Review <a href={`${BASE_URL}/seps/sep-1`}>SEP-1</a>.
      </li>
      <li>
        Fork the repository by visiting the SEPs{' '}
        <a href="https://github.com/softdao/SEPs">repo</a> and pressing "Fork"
        in the top right.
      </li>
      <li>
        Add your SEP to your fork of the repository. There is a{' '}
        <a href="https://github.com/softdao/SEPs/blob/master/sep-x.md">
          template SEP here
        </a>
        .
      </li>
      <li>
        Submit a Pull Request to Soft's{' '}
        <a href="https://github.com/softdao/SEPs">SEPs repository</a>.
      </li>
    </ol>

    <p>
      Your first PR should be a first draft of the final SEP. It must meet the
      formatting criteria enforced by the build (largely, correct metadata in
      the header). An editor will manually review the first PR for a new SEP and
      assign it a number before merging it. Make sure you include a{' '}
      <code>discussions-to</code> header with the URL to a discussion forum or
      open GitHub issue where people can discuss the SEP as a whole.
    </p>
    <p>
      If your SEP requires images, the image files should be included in a
      subdirectory of the `assets` folder for that SEP as follow:{' '}
      <code>seps/assets/sep-X</code> (for sep <b>X</b>). When linking to an
      image in the SEP, use relative links such as{' '}
      <code>../assets/sep-X/image.png</code>.
    </p>
    <p>
      When you believe your SEP is mature and ready to progress past the{' '}
      <code>Draft</code> phase, you should reach out to a Soft Council member on
      discord by searching members with the "Soft Council" role or finding them
      within the #governance channel. The Soft Council will schedule in a call
      with the SEP author to go through the SEP in more detail.
    </p>

    <p>
      Once assessed, a SEP is moved into <code>Feasibility</code> and a Core
      Contributor is assigned. The Core Contributor will work with the author to
      conduct a feasibility study. Once the Author and the Core Contributor are
      satisfied, a SEP is moved to <code>SC Review Pending</code>. Once the Soft
      Council has formally reviewed the SEP during the SEP presentation they can
      either move it to a vote or send it back to <code>Feasability</code>. A
      vote is conducted within the <code>INSERT ENS NAME</code> snapshot space
      connected on the
      <a href="https://"> staking </a> dApp. If a vote by the Soft Council
      reaches a super majority, the SEP is moved to <code>Approved</code>,
      otherwise it is <code>Rejected</code>.
    </p>

    <p>
      Once the SEP has been implemented by either the protocol DAO or the SEP
      author and relevant parties, the SEP is assigned the{' '}
      <code>Implemented</code> status. Community members who successfully reach
      this stage are entitled to a reward from the Soft Protocol.
    </p>

    <h2>SEP status terms</h2>
    <ul>
      <li>
        <strong>Draft</strong> - The initial state of a new SEP before the Soft
        Council and core contributors have assessed it.
      </li>
      <li>
        <strong>Feasibility</strong> - a SEP that is being assessed for
        feasability with an assigned Core Contributor
      </li>
      <li>
        <strong>SC Review Pending</strong> - a SEP that is awaiting a Soft
        Council Review after the Author and Core Contributor are satisfied with
        feasibility
      </li>
      <li>
        <strong>Vote Pending</strong> - a SEP that is awaiting a vote.
      </li>
      <li>
        <strong>Approved</strong> - a SEP that has successfully reached a super
        majority Soft Council vote in favour.
      </li>
      <li>
        <strong>Rejected</strong> - a SEP that has failed to reach a
        supermajority Soft Council vote in favour.
      </li>
      <li>
        <strong>Implemented</strong> - a SEP that has been released to main-net.
      </li>
    </ul>
  </Main>
)

export default IndexPage
