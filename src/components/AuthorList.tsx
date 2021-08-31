import React from 'react'
import { flow, trim, split, uniq, map } from 'lodash/fp'

interface Props {
  author: string
}

const AuthorList: React.FC<Props> = ({ author }) => {
  const authors = flow(split(','), map(trim), uniq)(author)

  return (
    <div>
      {authors.map((a, i) => {
        // Email
        if (a.indexOf('<') > -1) {
          const [name, value] = a.split('<')
          return (
            <a
              className="text-blue-500"
              key={i}
              href={`mailto:${value.substring(0, value.length - 1)}`}
            >
              {i + 1 !== authors.length ? `${trim(name)}, ` : trim(name)}
            </a>
          )
        } else if (a.indexOf('(@') > -1) {
          const [name, value] = a.split('(@')
          return (
            <a
              key={i}
              href={`https://github.com/${value.substring(
                0,
                value.length - 1,
              )}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {i + 1 !== authors.length ? `${trim(name)}, ` : trim(name)}
            </a>
          )
        }
        return (
          <span key={i}>
            {i + 1 !== authors.length ? `${trim(a)}, ` : trim(a)}
          </span>
        )
      })}
    </div>
  )
}

export { AuthorList }
