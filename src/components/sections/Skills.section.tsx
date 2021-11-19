import React from 'react';

// Components
import SectionTitle from 'components/SectionTitle.Component';
import Skills from 'components/Skills.component';

const SkillsSection = () => {
  return (
    <section>
      <SectionTitle preText="My Tools" text="Skills" />
      <div className="px-6">
        <Skills />
        <Skills />
        <Skills />
      </div>
    </section>
  );
};
export default SkillsSection;
