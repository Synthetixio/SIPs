import { Link } from 'gatsby'
import React from 'react'
import { MarkdownRemark } from '../../types/gql'
import { AuthorList } from './AuthorList'

interface Props {
  rows: Partial<MarkdownRemark>[]
}

const StatusTable: React.FC<Props> = ({ rows }) => {
  return (
    <table className="kiptable">
      <thead>
        <tr>
          <th className="kipnum">Number</th>
          <th className="title w-2/3">Title</th>
          <th className="author w-1/3">Author</th>
        </tr>
      </thead>

      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td className="kipnum">
              {row.frontmatter.kip !== null ? (
                <a href={`/kips/kip-${row.frontmatter.kip}`}>
                  {row.frontmatter.kip}
                </a>
              ) : row.frontmatter.ckip !== null ? (
                <a href={`/ckip/ckip-${row.frontmatter.ckip}`}>
                  {row.frontmatter.ckip}
                </a>
              ) : (
                <a href={`/ktrs/ktr-${row.frontmatter.ktr}`}>
                  {row.frontmatter.ktr}
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
