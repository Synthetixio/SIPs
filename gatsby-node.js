const fs = require('fs')
const kebabCase = require('lodash/kebabCase')

const Frontmatter = `
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
const allSipsQuery = `
  ${Frontmatter}
  query allSips {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/sips/" }
        frontmatter: { sip: { ne: null } }
      }
    ) {
      group(field: frontmatter___status) {
        fieldValue
        nodes {
          frontmatter {
            ...Frontmatter
          }
          md: rawMarkdownBody
          html
        }
      }
    }
  }
`

const allSccpQuery = `
  ${Frontmatter}
  query allSips {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/sccp/" }
        frontmatter: { sccp: { ne: null } }
      }
    ) {
      group(field: frontmatter___status) {
        fieldValue
        nodes {
          frontmatter {
            ...Frontmatter
          }
          md: rawMarkdownBody
          html
        }
      }
    }
  }
`

exports.onPostBuild = async ({ graphql }) => {
  const allSips = await graphql(allSipsQuery)
  const allSccp = await graphql(allSccpQuery)

  const sipsPath = './public/api/sips'
  const sccpPath = './public/api/sccp'

  ;[
    { path: sipsPath, result: allSips },
    { path: sccpPath, result: allSccp },
  ].forEach(({ path, result }) => {
    if (!fs.existsSync(path)) fs.mkdirSync(path, { recursive: true })
    result.data.allMarkdownRemark.group.forEach((group) => {
      const status = kebabCase(group.fieldValue)
      const data = group.nodes.map(({ frontmatter, ...node }) => ({
        ...frontmatter,
        ...node,
      }))
      fs.writeFileSync(`${path}/${status}.json`, JSON.stringify(data))
    })
  })
}
