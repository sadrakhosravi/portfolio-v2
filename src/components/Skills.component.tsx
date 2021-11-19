import React from 'react';

// Skills
import { SkillsList } from 'config';

// Components
import Container from './Container.component';

const Skills = () => {
  return (
    <Container gap={false} className="gap-2 lg:gap-10 mt-8">
      <Container.Column width="1/3" center className="text-left lg:text-right">
        <h4 className="text-accent font-medium mb-0.25">Technologies</h4>
      </Container.Column>
      <Container.Column center width="full">
        <div className="flex flex-wrap">
          <ul className="flex flex-wrap">
            {SkillsList.technologies.map(technology => (
              <li className="w-1/2 lg:w-1/4">{technology}</li>
            ))}
          </ul>
        </div>
      </Container.Column>
    </Container>
  );
};
export default Skills;
