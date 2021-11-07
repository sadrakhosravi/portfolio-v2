import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

// Styles
import 'styles/styles.css';

// // Loader
// import Loader from 'components/Loader.component';

// Components
import Layout from 'components/Layout.component';

// Sections
import HeroSection from 'components/sections/Hero.section';
import AboutSection from 'components/sections/About.section';
import ProjectsSection from 'components/sections/Projects.section';
import ExperienceSection from 'components/sections/Experience.section';
import SkillsSection from 'components/sections/Skills.section';
import ScrollingIcons from 'components/ScrollingIcons.component';

const IndexPage = (): JSX.Element => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
        />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
      </Helmet>
      <Layout style={{ visibility: `${isMounted ? 'visible' : 'hidden'}` }}>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ScrollingIcons />
      </Layout>
      {/* <Loader isMounted={isMounted}/> */}
    </>
  );
};

export default IndexPage;
