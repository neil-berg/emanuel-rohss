require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Emanuel Röhss`,
    description: `Artist portfolio for Emanuel Röhss`,
    author: `Neil Berg @_neilberg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: "app4AeEFIvxVmE8jA",
            tableName: "Assets",
            mapping: { attachment: `fileNode` },
          },
          {
            baseId: "app4AeEFIvxVmE8jA",
            tableName: "Projects",
            tableLinks: ["Assets"],
            mapping: { cover_photo: `fileNode` },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
