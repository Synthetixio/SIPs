module.exports = {
  flags: {
    DEV_SSR: true
  },
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Infinex XIPs',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: './types/gql.ts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: './content',
      },
      __key: 'content',
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-emoji',
            options: {
              emojiConversion: 'shortnameToImage',
            },
          },
          `gatsby-remark-static-images`,
          `gatsby-remark-autolink-headers`,
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              ignoreFileExtensions: [],
            },
          },
        ],
      },
    },
  ],
}
