import React from 'react';

import * as styles from './styles/ButtonSecondary.module.css';

type PrimaryButtonProps = {
  text?: string;
  href: string;
  isSecondary?: boolean;
  children?: JSX.Element | JSX.Element[] | string;
};

const PrimaryButton = ({ text, href, isSecondary = false, children }: PrimaryButtonProps): JSX.Element => {
  const primaryStyles =
    'px-2 py-0.65 border-2 rounded-md border-accent hover:bg-light-blue hover:text-accent hover:bg-opacity-10 active:bg-opacity-20';

  return (
    <a
      href={href}
      className={`relative inline-block transition-colors duration-200 ${!isSecondary && primaryStyles} ${
        isSecondary && styles.ButtonSecondary
      }`}
    >
      {text || children}
    </a>
  );
};
export default PrimaryButton;
