import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

// Components
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
      <div className="flex gap-4">
        <div className="w-1/2">
          <SectionTitle preText="Background" text="About" />
          <div className="py-2">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi corrupti fugit nam,
              est architecto, error dolorem, soluta quibusdam illum excepturi veritatis minima. Voluptatem
              quod tempora doloribus amet quaerat necessitatibus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam corrupti sunt
              aperiam voluptas non laudantium, quam minima ullam recusandae quasi et repudiandae, a, corporis
              dolorum atque ratione iusto itaque.
            </p>
          </div>
          <ol className="flex flex-wrap">
            {recentTechnologies.map((technology: string) => (
              <li className="w-1/4 pb-0.5 text-accent font-mono">- {technology}</li>
            ))}
          </ol>
        </div>
        <div className="w-1/2">
          <StyledImage>
            <StaticImage src="../../images/placeholder.jpg" alt="Sadra Khosravi Image" />
          </StyledImage>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
