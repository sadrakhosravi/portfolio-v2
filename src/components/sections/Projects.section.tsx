import React from 'react';

// Components
import SectionTitle from 'components/SectionTitle.Component';
import FeaturedProjects from 'components/FeaturedProjects.component';

const ProjectsSection = (): JSX.Element => {
  return (
    <section>
      <SectionTitle preText="Recent Works" text="Featured Projects" />
      <FeaturedProjects side="left" />
      <FeaturedProjects side="right" />
    </section>
  );
};
export default ProjectsSection;
