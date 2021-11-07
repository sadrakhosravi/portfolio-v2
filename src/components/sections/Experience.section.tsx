import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

type ExperienceQuery = {
  allMarkdownRemark: {
    nodes: {
      id: string;
      frontmatter: {
        company: string;
        companyURL: string;
        date: string;
        id: number;
        title: string;
      };
      html: string;
    }[];
  };

  extensions: {};
};

// Components
import SectionTitle from 'components/SectionTitle.Component';
import Tabs from 'components/Tabs.component';

const ExperienceSection = () => {
  const data: ExperienceQuery = useStaticQuery(graphql`
    query ExperienceQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/experience/" } }
        sort: { order: ASC, fields: frontmatter___id }
      ) {
        nodes {
          frontmatter {
            company
            companyURL
            date
            id
            title
          }
          html
        }
      }
    }
  `);

  return (
    <section>
      <SectionTitle preText="Work Life" text="Experience" />
      <Tabs data={data.allMarkdownRemark.nodes} />
    </section>
  );
};
export default ExperienceSection;
