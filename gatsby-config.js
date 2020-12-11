require("dotenv").config()

module.exports = {
  siteMetadata: {
    locale: "en",
    title: "Gain Inspiration",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'CMS',
            queryName: ''
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Tags',
            queryName: ''
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gain Inspiraton`,
        short_name: `Gain Inspiraton`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#4299e1`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
