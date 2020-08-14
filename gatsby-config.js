module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
  siteMetadata: {
    title: `Stone Slab By Stone Innovations Enterprise`,
    description: `Supply Quartz Stone, Granite & Marble Slab`,
    author: `@Anson Low Z.F (zhanfaye@gmail.com)`,
    siteUrl: `https://www.stoneinnovations.com.my`,
  },
}
