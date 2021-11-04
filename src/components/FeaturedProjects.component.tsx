import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Components
import Container from './Container.component';
import StyledImage from './StyledImage.component';

// Styles
import * as styles from './styles/FeaturedProjects.module.css';

type FeaturedProjectsProps = {
  side?: 'left' | 'right';
  data?: any;
};

type ElementsStyle = {
  image: string;
  framePosition: 'left' | 'right';
  description: string;
};

const FeaturedProjects = ({ side = 'left' }: FeaturedProjectsProps): JSX.Element => {
  const isLeft = side === 'left';

  const elementsStyle: ElementsStyle = {
    image: `${isLeft ? `self-start ${styles.ProjectImageLeft}` : `self-end ${styles.ProjectImageRight}`}`,
    framePosition: `${isLeft ? 'left' : 'right'}`,
    description: `${isLeft ? `right-0 ` : `left-0`}`,
  };

  return (
    <Container className="lg:max-w-6xl mx-auto py-8">
      <Container.Column className="w-full">
        <StyledImage
          className={`w-2/3 my-6 transition-all duration-300 ${elementsStyle.image}} ${
            isLeft ? styles.ProjectImageLeft : styles.ProjectImageRight
          }`}
          framePosition={elementsStyle.framePosition}
        >
          <StaticImage src="../../images/placeholder.jpg" alt="Sadra Khosravi Image" />
        </StyledImage>
        <div
          className={`flex flex-col gap-2 w-1/2 absolute bg-slate-blue bg-opacity-90 blur px-10 py-7 rounded-md bottom-0 transition-all duration-200 ${styles.ProjectDetails} ${elementsStyle.description}`}
        >
          <h4 className="font-medium">Full Stack School Management App</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil cupiditate vel voluptatum
            molestiae possimus id quia, labore harum, quasi amet aut quidem ipsam officiis repellat modi
            ratione et error quo!
          </p>
          <ul className="flex">
            <li className="w-1/4 pb-0.5 text-accent font-mono">Test</li>
            <li className="w-1/4 pb-0.5 text-accent font-mono">Test</li>
            <li className="w-1/4 pb-0.5 text-accent font-mono">Test</li>
            <li className="w-1/4 pb-0.5 text-accent font-mono">Test</li>
          </ul>
        </div>
      </Container.Column>
    </Container>
  );
};
export default FeaturedProjects;
