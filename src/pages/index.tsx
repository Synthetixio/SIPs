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
  </Main>
)

export default IndexPage
