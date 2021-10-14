import React from 'react';
import { Helmet } from 'react-helmet';

// Styles
import '~/styles/styles.css';

// Components
import Layout from '@components/layout/Layout.component';

const IndexPage = () => {
  return (
    <>
      <div>
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
        </Helmet>
      </div>

      <Layout></Layout>
    </>
  );
};

export default IndexPage;
