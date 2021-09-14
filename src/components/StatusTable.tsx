import { Link } from 'gatsby'
import React from 'react'
import { MarkdownRemark } from '../../types/gql'
import { AuthorList } from './AuthorList'

interface Props {
  rows: Partial<MarkdownRemark>[]
}

const StatusTable: React.FC<Props> = ({ rows }) => {
  return (
    <table className="siptable">
      <thead>
        <tr>
          <th className="sipnum">Number</th>
          <th className="title w-2/3">Title</th>
          <th className="author w-1/3">Author</th>
        </tr>
      </thead>

      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td className="sipnum">
              {row.frontmatter.sip ? (
                <a href={`/sips/sip-${row.frontmatter.sip}`}>
                  {row.frontmatter.sip}
                </a>
              ) : (
                <a href={`/sccp/sccp-${row.frontmatter.sccp}`}>
                  {row.frontmatter.sccp}
                </a>
              )}
            </td>
            <td className="title">{row.frontmatter.title}</td>
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
