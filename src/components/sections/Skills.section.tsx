import React from 'react';

// Components
import SectionTitle from 'components/SectionTitle.Component';
import Skills from 'components/Skills.component';

const SkillsSection = () => {
  return (
    <section>
      <SectionTitle preText="My Tools" text="Skills" />
      <Skills />
    </section>
  );
};
export default SkillsSection;
