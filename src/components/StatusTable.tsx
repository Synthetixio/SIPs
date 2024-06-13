import { Link } from 'gatsby'
import React from 'react'
import { MarkdownRemark } from '../../types/gql'
import { AuthorList } from './AuthorList'

interface Props {
  rows: Partial<MarkdownRemark>[]
}

const BASE_URL = 'https://softdao.github.io/SEPs'

const StatusTable: React.FC<Props> = ({ rows }) => {
  return (
    <table className="siptable">
      <thead>
        <tr>
          <th className="sepnum">Number</th>
          <th className="title w-2/3">Title</th>
          <th className="author w-1/3">Author</th>
        </tr>
      </thead>

      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td className="sepnum">
              {row.frontmatter.sep ? (
                <a href={`${BASE_URL}/seps/sep-${row.frontmatter.sep}`}>
                  {row.frontmatter.sep}
                </a>
              ) : (
                <a href={`${BASE_URL}/sccp/sccp-${row.frontmatter.sccp}`}>
                  {row.frontmatter.sccp}
                </a>
              )}
            </td>
            <td className="title">
              {row.frontmatter.sep ? (
                <a href={`${BASE_URL}/seps/sep-${row.frontmatter.sep}`}>
                  SEP-{row.frontmatter.sep}
                </a>
              ) : (
                <a href={`${BASE_URL}/sccp/sccp-${row.frontmatter.sccp}`}>
                  SCCP-{row.frontmatter.sccp}
                </a>
              )}
            </td>
            <td className="author">
              <AuthorList author={row.frontmatter.author} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export { StatusTable }
