import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Styles
import * as styles from './styles/OtherProjects.module.css';

const OtherProject = () => {
  return (
    <div className="h-80 px-2 relative flex items-end flex-wrap group">
      <StaticImage
        className="absolute top-0 left-0 w-full h-full z-0 border-collapse rounded-md"
        src="../../images/placeholder.jpg"
        alt="Sadra Khosravi Image"
      />
      <span className={`w-full h-full absolute top-0 left-0 ${styles.OtherProjects}`} />
      <div className=" relative m-6 duration-500 group-hover:pb-5">
        <h4 className="group-hover:text-white duration-500">School Management System</h4>
        <ul className="flex gap-4 flex-wrap text-accent text-opacity-80 group-hover:text-opacity-100 duration-500">
          <li className="text-sm font-mono">Technology</li>
          <li className="text-sm font-mono">Technology</li>
          <li className="text-sm font-mono">Technology</li>
        </ul>
      </div>
    </div>
  );
};
export default OtherProject;
