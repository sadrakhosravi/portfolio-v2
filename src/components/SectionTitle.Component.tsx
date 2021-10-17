import React from 'react';

// Styles
import * as styles from './styles/SectionTitle.module.css';

type SectionTitleProps = {
  preText: string;
  text: string;
};

const SectionTitle = ({ preText, text }: SectionTitleProps): JSX.Element => {
  // Reverse flex columns for better accessibility (screen readers ...) while keeping the same design
  return (
    <div className="flex flex-col-reverse">
      <h2 className={`${styles.SectionTitle} font-bold text-white`}>{text}</h2>
      <p className="font-mono text-accent">{preText}</p>
    </div>
  );
};
export default SectionTitle;
