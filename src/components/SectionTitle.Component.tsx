import React from 'react';

// Styles
import * as styles from './styles/SectionTitle.module.css';

type SectionTitleProps = {
  preText: string;
  text: string;
  noMargin?: boolean;
};

const SectionTitle = ({ preText, text, noMargin = false }: SectionTitleProps): JSX.Element => {
  // Reverse flex columns for better accessibility (screen readers ...) while keeping the same design
  return (
    <div className={`lg:ml-0 flex flex-col-reverse ${!noMargin && 'pb-2'}`}>
      <h2 className={`${styles.SectionTitle} font-bold text-white mt-1`}>{text}</h2>
      <pre className="font-mono text-accent">{preText}</pre>
    </div>
  );
};
export default SectionTitle;
