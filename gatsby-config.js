module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.sadrakhosravi.com',
    title: 'Sadra Khosravi',
  },
  plugins: [
    'gatsby-plugin-tsconfig-paths',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
  ],
};
