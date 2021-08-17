import React from 'react'
import { format } from 'date-fns'
import { graphql } from 'gatsby'

import { FrontmatterFragment } from '../../types/gql'
import { AuthorList } from './AuthorList'

interface Props {
  frontmatter: FrontmatterFragment
}

const FrontmatterTable: React.FC<Props> = ({ frontmatter }) => {
  return (
    <table>
      <tr>
        <th>Author</th>
        <td>
          <AuthorList author={frontmatter.author} />
        </td>
      </tr>
      {frontmatter.discussions_to && (
        <tr>
          <th>Discussions-To</th>
          <td>
            <a href={frontmatter.discussions_to}>
              {frontmatter.discussions_to}
            </a>
          </td>
        </tr>
      )}
      <tr>
        <th>Status</th>
        <td>{frontmatter.status}</td>
      </tr>
      {frontmatter.created && (
        <tr>
          <th>Created</th>
          <td>{format(new Date(frontmatter.created), 'yyyy-MM-dd')}</td>
        </tr>
      )}
      {frontmatter.updated && (
        <tr>
          <th>Updated</th>
          <td>{format(new Date(frontmatter.created), 'yyyy-MM-dd')}</td>
        </tr>
      )}
    </table>
  )
}

export const query = graphql`
  fragment Frontmatter on MarkdownRemarkFrontmatter {
    sip
    sccp
    title
    author
    discussions_to
    created
    updated
    status
  }
`

export default FrontmatterTable
