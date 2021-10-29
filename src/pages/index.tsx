import React from 'react';
import { Helmet } from 'react-helmet';

// Styles
import 'styles/styles.css';

// Components
import Layout from 'components/Layout.component';

// Sections
import HeroSection from 'components/sections/Hero.section';
import AboutSection from 'components/sections/About.section';

const IndexPage = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
      </Helmet>
      <Layout>
        <HeroSection />
        <AboutSection />
      </Layout>
    </>
  );
};

export default IndexPage;
