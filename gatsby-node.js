const fs = require('fs')
const kebabCase = require('lodash/kebabCase')
const statuses = require('./ci/statuses')

const kebabStatuses = statuses.map(kebabCase)

const Frontmatter = `
  fragment Frontmatter on MarkdownRemarkFrontmatter {
    kip
    ckip
    ktr
    title
    author
    type
    proposal
    created
    updated
    status
  }
`
const allKipsQuery = `
  ${Frontmatter}
  query allKips {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/kips/" }
        frontmatter: { kip: { ne: null } }
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

const allCkipQuery = `
  ${Frontmatter}
  query allCkips {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/ckip/" }
        frontmatter: { ckip: { ne: null } }
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

const allKtrQuery = `
  ${Frontmatter}
  query allKtrs {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/ktrs/" }
        frontmatter: { ktr: { ne: null } }
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
  const allKips = await graphql(allKipsQuery)
  const allCkip = await graphql(allCkipQuery)
  const allKtrs = await graphql(allKtrQuery)

  const kipsPath = './public/api/kips'
  const ckipPath = './public/api/ckip'
  const ktrsPath = './public/api/ktrs'

  ;[
    { path: kipsPath, result: allKips },
    { path: ckipPath, result: allCkip },
    { path: ktrsPath, result: allKtrs },
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
      proposal: String
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
