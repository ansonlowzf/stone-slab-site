module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
  siteMetadata: {
    title: `Stone Slab By Stone Innovations Enterprise`,
    description: `Supply Quartz Stone, Granite & Marble Slab`,
    author: `@Anson Low Z.F (zhanfaye@gmail.com)`,
    siteUrl: ``,
  },
}
