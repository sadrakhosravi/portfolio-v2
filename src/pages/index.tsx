import React from 'react';
import { Helmet } from 'react-helmet';

// Styles
import '~/styles/styles.css';

// Components
import Layout from '~/components/Layout.component';
import Hero from '~/components/sections/Hero.section';

const IndexPage = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
      </Helmet>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default IndexPage;
