module.exports = {
  siteMetadata: {
    title: `Helix Library`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `amps`,
        path: `${__dirname}/src/markdown/amps`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cabs`,
        path: `${__dirname}/src/markdown/cabs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `effects`,
        path: `${__dirname}/src/markdown/effects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mics`,
        path: `${__dirname}/src/markdown/mics`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/helix-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
