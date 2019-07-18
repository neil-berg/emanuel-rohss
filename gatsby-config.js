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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: "app4AeEFIvxVmE8jA",
            tableName: "Images",
            mapping: { attachment: `fileNode` },
          },
          {
            baseId: "app4AeEFIvxVmE8jA",
            tableName: "Videos",
            mapping: { attachment: `fileNode` },
          },
          {
            baseId: "app4AeEFIvxVmE8jA",
            tableName: "Projects",
            tableLinks: ["Images", "Videos"],
            mapping: { cover_photo: `fileNode` },
          },
          {
            baseId: "app4AeEFIvxVmE8jA",
            tableName: "CV",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
          {
            family: `Montserrat`,
            variants: [`400`, `700`, `900`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: "portal",
        id: "portal",
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/favicon.jpg",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
