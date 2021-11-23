import React from 'react';
import { motion } from 'framer-motion';

// Styles
import * as styles from './styles/SectionTitle.module.css';
import { FramerFadeUp } from 'config';

type SectionTitleProps = {
  preText: string;
  text: string;
  noMargin?: boolean;
};

const SectionTitle = ({ preText, text, noMargin = false }: SectionTitleProps): JSX.Element => {
  // Reverse flex columns for better accessibility (screen readers ...) while keeping the same design
  return (
    <div className={`lg:ml-0 flex flex-col-reverse ${!noMargin && 'pb-2'}`}>
      <motion.h2
        {...FramerFadeUp}
        transition={{ duration: 0.5, delay: 0.2 }}
        key={preText + text}
        className={`${styles.SectionTitle} font-bold text-white mt-1`}
      >
        {text}
      </motion.h2>
      <motion.pre
        {...FramerFadeUp}
        transition={{ duration: 0.5, delay: 0 }}
        key={preText}
        className="font-mono text-accent"
      >
        {preText}
      </motion.pre>
    </div>
  );
};
export default SectionTitle;
