import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Main from '../../layout/Main'
import FrontmatterTable from '../../components/FrontmatterTable'
import SourceIcon from '../../icons/Source'
import { SccpPageQuery } from '../../../types/gql'
import { getGithubLink } from '../../components/utils'

interface Props {
  frontmatter__sip: number
  data: SccpPageQuery
}

const Template: React.FC<Props> = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html, fileAbsolutePath } = markdownRemark
  const githubLink = getGithubLink(fileAbsolutePath)
  return (
    <Main>
      <Helmet title={`SCCP-${frontmatter.sccp}: ${frontmatter.title}`} />
      <h1 className="page-heading">
        <a href={githubLink} className="inline-block">
          SCCP-{frontmatter.sccp}: {frontmatter.title} <SourceIcon />
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
  query sccpPage($frontmatter__sccp: Int) {
    markdownRemark(frontmatter: { sccp: { eq: $frontmatter__sccp } }) {
      fileAbsolutePath
      frontmatter {
        ...Frontmatter
      }
      html
    }
  }
`
