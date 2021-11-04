import React from 'react';

// Components
import SectionTitle from 'components/SectionTitle.Component';
import FeaturedProjects from 'components/FeaturedProjects.component';
import SubSectionTitle from 'components/SubSectionTitle.component';
import OtherProject from 'components/OtherProject.component';
import Container from 'components/Container.component';

const ProjectsSection = (): JSX.Element => {
  return (
    <section>
      <SectionTitle preText="Recent Works" text="Featured Projects" />
      <FeaturedProjects side="left" />
      <FeaturedProjects side="right" />
      <div className="mt-20 mb-10">
        <SubSectionTitle text="Other Projects That I’ve Worked" />
      </div>
      <Container>
        <Container.Column className="border-separate" width="1/3">
          <OtherProject />
        </Container.Column>
      </Container>
    </section>
  );
};
export default ProjectsSection;
