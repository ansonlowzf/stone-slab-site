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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Stone Distributor Malaysia",
        short_name: "Stone Distributor",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "src/images/favicon.png",
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-5XQBZ2BDTP`,
        head: true,
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
