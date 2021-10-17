module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.sadrakhosravi.com',
    title: 'Sadra Khosravi',
  },
  plugins: [
    'gatsby-plugin-tsconfig-paths',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
