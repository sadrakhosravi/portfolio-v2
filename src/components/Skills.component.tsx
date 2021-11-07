import React from 'react';

// Skills
import { SkillsList } from 'config';

// Components
import Container from './Container.component';

const Skills = () => {
  return (
    <Container>
      <Container.Column width="1/3" center className="text-right">
        <h4 className="text-accent font-medium mb-0.25">Technologies</h4>
      </Container.Column>
      <Container.Column center width="2/3">
        <div className="flex flex-wrap mr-10">
          <ul className="flex flex-wrap">
            {SkillsList.technologies.map(technology => (
              <li className="w-1/4">{technology}</li>
            ))}
          </ul>
        </div>
      </Container.Column>
    </Container>
  );
};
export default Skills;
