import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Main from '../../layout/Main'
import FrontmatterTable from '../../components/FrontmatterTable'
import SourceIcon from '../../icons/Source'
import { SipPageQuery } from '../../../types/gql'

interface Props {
  frontmatter__sip: number
  data: SipPageQuery
}

const Template: React.FC<Props> = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Main>
      <Helmet title={`SIP-${frontmatter.sip}: ${frontmatter.title}`} />
      <h1 className="page-heading">
        SIP-{frontmatter.sip}: {frontmatter.title}{' '}
        <a href="#" className="inline-block">
          <SourceIcon />
        </a>
      </h1>
      <FrontmatterTable frontmatter={frontmatter} />
      <div
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Main>
  )
}

export default Template

export const pageQuery = graphql`
  query sipPage($frontmatter__sip: Int) {
    markdownRemark(frontmatter: { sip: { eq: $frontmatter__sip } }) {
      frontmatter {
        ...Frontmatter
      }
      html
    }
  }
`
