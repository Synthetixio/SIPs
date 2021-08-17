import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Main from '../../layout/Main'
import FrontmatterTable from '../../components/FrontmatterTable'
import SourceIcon from '../../icons/Source'
import { SccpPageQuery } from '../../../types/gql'

interface Props {
  frontmatter__sip: number
  data: SccpPageQuery
}

const Template: React.FC<Props> = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Main>
      <Helmet title={`SCCP-${frontmatter.sccp}: ${frontmatter.title}`} />
      <h1 className="page-heading">
        SCCP-{frontmatter.sccp}: {frontmatter.title}{' '}
        <a href="#" className="inline-block">
          <SourceIcon />
        </a>
      </h1>
      <FrontmatterTable frontmatter={frontmatter} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Main>
  )
}

export default Template

export const pageQuery = graphql`
  query sccpPage($frontmatter__sccp: Int) {
    markdownRemark(frontmatter: { sccp: { eq: $frontmatter__sccp } }) {
      frontmatter {
        ...Frontmatter
      }
      html
    }
  }
`
