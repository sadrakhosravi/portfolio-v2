import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Components
import Container from './Container.component';

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
    <Container className="lg:max-w-6xl mx-auto py-6 lg:py-14">
      <Container.Column width="full">
        <StaticImage
          className={`w-full lg:w-2/3 rounded-md ${elementsStyle.image}`}
          src="../../images/placeholder.jpg"
          alt="Sadra Khosravi Image"
        />
        <div
          className={`flex items-end w-full h-full lg:h-auto lg:w-1/2 absolute bottom-0 px-5 lg:px-10 py-4 lg:py-7 rounded-md lg:-mb-6 transition-all duration-200 bg-navy lg:bg-slate-blue bg-opacity-80 lg:bg-opacity-90 lg:backdrop-saturate-200 lg:backdrop-blur-lg  ${elementsStyle.description}`}
        >
          <div className="w-full">
            <h4 className="text-base font-medium text-white">Full Stack School Management App</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <ul className="flex">
              <li className="w-1/4 pb-0.5 text-accent font-mono">Test</li>
              <li className="w-1/4 pb-0.5 text-accent font-mono">Test</li>
              <li className="w-1/4 pb-0.5 text-accent font-mono">Test</li>
              <li className="w-1/4 pb-0.5 text-accent font-mono">Test</li>
            </ul>
          </div>
        </div>
      </Container.Column>
    </Container>
  );
};
export default FeaturedProjects;
