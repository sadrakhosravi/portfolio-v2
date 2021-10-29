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
    'Gatsby',
    'React',
    'GraphQL',
    'RestAPI',
  ];

  return (
    <section>
      <Container center>
        <Container.Column>
          <SectionTitle preText="Background" text="About" noMargin />
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi corrupti fugit nam,
              est architecto, error dolorem, soluta quibusdam illum excepturi veritatis minima. Voluptatem
              quod tempora dolorius amet quaerat necessitatibus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam corrupti sunt
              aperiam voluptas non laudantium, quam minima ullam recusandae quasi et repudiandae, a, corporis
              dolorum atque ratione iusto itaqu.
            </p>
          </div>
          <ol className="flex flex-wrap">
            {recentTechnologies.map((technology: string) => (
              <li className="w-1/4 mb-1 text-sm text-accent font-mono" key={technology}>
                - {technology}
              </li>
            ))}
          </ol>
        </Container.Column>
        <Container.Column>
          <StyledImage>
            <StaticImage src="../../images/placeholder.jpg" alt="Sadra Khosravi Image" />
          </StyledImage>
        </Container.Column>
      </Container>
    </section>
  );
};
export default AboutSection;
