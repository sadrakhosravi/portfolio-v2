import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

// Components
import Container from 'components/Container.component';
import SectionTitle from '../SectionTitle.Component';
import StyledImage from '../StyledImage.component';

// Images

const AboutSection = () => {
  const recentTechnologies: string[] = [
    'Typescript',
    'NodeJS',
    'ElectronJS',
    'React',
    'Redux',
    'Gatsby',
    'GraphQL',
    'RestAPI',
  ];

  return (
    <section>
      <Container>
        <Container.Column center>
          <SectionTitle preText="Background" text="About" noMargin />
          <div>
            <p>
              Hello! My name is Sadra Khosravi and I am a full-stack developer based in Vancouver, B.C. I
              enjoy designing and developing digital experiences and applications using HTML, CSS, and
              JavaScript.
            </p>
            <p>
              I started designing websites with WordPress back in 2016. Working with different themes and page
              builders taught me valuable experience in how a website can be formed from an idea to a
              production ready state.
            </p>
            <p>
              I have worked on number of projects ranging from static, content-driven, and data-driven
              websites and applications. My current focus is on developing a full fledged data acquisition
              software for NIRS medical experiments at the International Collaboration on Research Discovery
              (ICORD).
            </p>
            <p>My current tech-stack:</p>
            <ol className="flex flex-wrap">
              {recentTechnologies.map((technology: string) => (
                <li className="w-1/4 mb-1 text-sm text-accent font-mono" key={technology}>
                  - {technology}
                </li>
              ))}
            </ol>
          </div>
        </Container.Column>
        <Container.Column center>
          <StyledImage>
            <StaticImage src="../../images/placeholder.jpg" alt="Sadra Khosravi Image" />
          </StyledImage>
        </Container.Column>
      </Container>
    </section>
  );
};
export default AboutSection;
