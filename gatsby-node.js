const fs = require('fs')
const kebabCase = require('lodash/kebabCase')
const statuses = require('./ci/statuses')

const kebabStatuses = statuses.map(kebabCase)

const Frontmatter = `
  fragment Frontmatter on MarkdownRemarkFrontmatter {
    sip
    sccp
    title
    author
    type
    proposal
    implementor
    release
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

    // Initialize all statuses with empty array
    kebabStatuses.forEach((status) =>
      fs.writeFileSync(`${path}/${status}.json`, JSON.stringify([])),
    )

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

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    `
    type MarkdownRemarkFrontmatter implements Node {
      title: String!
      type: String
      status: String!
      author: String!
      implementor: String
      proposal: String
      release: String
      created: Date
      updated: Date
    }
  `,
    // schema.buildObjectType({
    //   name: 'Frontmatter',
    //   fields: {
    //     tags: {
    //       type: 'String!',
    //       resolve(source, args, context, info) {
    //         const { tags } = source
    //         console.log(source)
    //         switch (source[info.fieldName]) {
    //           case 'type':
    //             return 'TBD'
    //           case 'implementor':
    //             return 'TBD'
    //           default:
    //             return tags
    //         }
    //       },
    //     },
    //   },
    // }),
  ]
  createTypes(typeDefs)
}
