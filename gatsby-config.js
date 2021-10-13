module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.sadrakhosravi.com',
    title: 'Sadra Khosravi',
  },
  plugins: [
    'gatsby-plugin-tsconfig-paths',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
