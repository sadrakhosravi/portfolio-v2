import React from 'react';

// Styles
import * as styles from './styles/SectionTitle.module.css';

const SectionTitle = () => {
  return (
    <div className="flex flex-col-reverse">
      <h2 className={`${styles.SectionTitle} font-bold text-white`}>About</h2>
      <p className="font-mono text-accent">Background</p>
    </div>
  );
};
export default SectionTitle;
